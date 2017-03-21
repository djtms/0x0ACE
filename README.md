# 0x0ACE

## Language

- Code comments (and this file): **English**
- Presentation: **Polish**

## Overview

<!-- Shall insert some overview here -->

## Prerequirements

+ [Node.js](https://nodejs.org/en/)
+ npm (comes with Node.js)
+ Bower
```
	$ npm i -g bower
```

### Key

At some point an 0x0ACE-Key **will be required** for scripts to run and pages to load		
Obtaining such a key is covered in Stage 2

## Scripts

### Building

- Stages 0, 1, 2 do not require any build
- Stage 3:
```sh
	$ npm i
```

### Running:
- Stages 0, 1, 2 do not contain any executable code
- Stage 3:

```sh
	$ node script.js
```

## Presentation

### Building

```sh
	$ bower install
```

### Running

Just server ```.```

### I'm a noob, can't serve for shit :c

That's ok, dawng, just:

1. Install live-server globally

    ```sh
        $ npm i -g live-server
    ```

2. Start the server

    ```sh
        $ live-server
    ```