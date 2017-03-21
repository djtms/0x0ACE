## Etap 3

---

### Kejs

![](3/img/intro.png)

---

### Analiza

- Liczby pierwsze w danym zakresie
- Górna granica nie przekracza 1.5kk
- 5 sekund na odpowiedź

---

### Lista liczb pierwszych

![](3/img/prime_search.png)

 
> https://primes.utm.edu/lists/small/millions/


![](3/img/initial_file.png)

--

![](3/img/primes_before.png)

--

![](3/img/primes_cutoff.png)


```sh
    $ cat primes1.txt | tr ' ' '\n' | sed '/^[[:space:]]*$/d' >> primes.txt
```

--

![](3/img/primes_processed.png)

---

### Kod

#### Czemu JS?

- Parsowanie htmla
- Brak obliczeń po stronie skryptu
- ```.split()``` ```.join()``` ```.slice()```

--

#### Parsowanie htmla

```js
    const cheerio = require("cheerio");

    $ = cheerio.load(pageAsTextString);

```

#### Zarządzanie headerami

```js
    const axios = require("axios");

    const http = axios.create(
    {
        headers: {'X-0x0ACE-Key': key}
    }); 
```

--

[Kod tutaj](3/script.js)

---

### Rozwiązanie

> good job. let's see @ http://80.233.134.207/0x00000ACE.html