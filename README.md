# colored-fancy-log

fancy-log but with colors!

Uses [fancy-log](https://www.npmjs.com/package/fancy-log) and [colors](https://www.npmjs.com/package/colors) to create time-stamped, colored, and (optionally) named loggers.

## Installation

Using `npm`:
```sh
npm i --save @fizzygalacticus/colored-fancy-log
```

Using `yarn`:
```sh
yarn add --save @fizzygalacticus/colored-fancy-log
```

## Usage

By default, colored-fancy-log exports a logger with no name to be used immediately:

```js
const logger = require('@fizzygalacticus/colored-fancy-log');

logger.success('Hello, world!');
```

Output:

![output-1](https://i.imgur.com/yOknIn2.png)

To name a logger:
```js
const { getLogger } = require('@fizzygalacticus/colored-fancy-log');
const logger = getLogger({ name: 'test-logger' });

logger.success('Hello, world!');
```

Output:

![output-2](https://i.imgur.com/jrQu7TO.png)

Don't like the default name <-> message separator? You can change that too!

```js
const { getLogger } = require('@fizzygalacticus/colored-fancy-log');
const logger = getLogger({ name: 'test-logger', separator: '=>' });

logger.success('Hello, world!');
```

Output:

![output-3](https://i.imgur.com/H98YhYp.png)

## Available Functions

| Name          | Output                                              |
| ------------- | --------------------------------------------------- |
| `log`         | ![log-example](https://i.imgur.com/eJqUO5X.png)     |
| `info`        | ![info-example](https://i.imgur.com/Nv7MmvD.png)    |
| `lame`        | ![lame-example](https://i.imgur.com/xJKeHVU.png)    |
| `success`     | ![success-example](https://i.imgur.com/lnFZCIb.png) |
| `warn`        | ![warn-example](https://i.imgur.com/vBV0XXj.png)    |
| `error`       | ![error-example](https://i.imgur.com/yUyrbws.png)   |
| `evil`        | ![evil-example](https://i.imgur.com/B8bjqKn.png)    |
| enable        | Sets logger to enabled                              |
| disable       | Sets logger to disabled (won't print anything)      |
| toggleEnabled | Toggles loggers `enabled` variable                  |
| setEnabled    | Sets loggers `enabled` variable                     |
