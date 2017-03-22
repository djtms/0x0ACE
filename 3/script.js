// ************************
//  Dependencies & setup
// ************************

const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");

const key = fs.readFileSync('../key.txt','utf8').slice(0,-1);
const primesArray = fs.readFileSync('primes.txt','utf8').split('\n');

const http = axios.create(
{
    headers: {'X-0x0ACE-Key': key}
});

// ************************
//  Main
// ************************

http.get("http://5.9.247.121/d34dc0d3")
.then(response => 
{
    // get response body
    const pageAsTextString = response.data;

    // parse page data, $ can be used as jquery now
    $ = cheerio.load(pageAsTextString);

    // extract range from the page
    const _rangeTextString = $(".challenge").text();

    // parse range
    const range =
    {
        "beg": parseInt(_rangeTextString.split(" ")[0].slice(2,-1)),
        "end": parseInt(_rangeTextString.split(" ")[2].slice(0,-1))
    };

    // extract validation info
    const _verificationCode = $('input[name="verification"]').val();

    // iterate over array to get trimm points
    let i = 0;

    while (primesArray[i] < range.beg+1)i++;
    const begPointer = i;

    while (primesArray[i] < range.end-1)i++;
    const endPointer = i;

    // build prime string
    const primeString = primesArray.slice(begPointer, endPointer).join();

    // build response string
    const solutionString = "verification=" + _verificationCode + '&solution=' + primeString;

    return solutionString;  
})
.then(solution => http.post("http://5.9.247.121/d34dc0d3",solution) )
// A preview of what they said about our solution ;)
.then(response => console.log(response.data) ) 

// universal error handler
.catch(err => console.log(err));
