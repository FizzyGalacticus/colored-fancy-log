'use strict';

const log = require('fancy-log');
const colors = require('colors/safe');

const colorMap = {
    info: 'blue',
    dir: 'yellow',
    warn: 'yellow',
    error: 'red',
    success: 'green',
    lame: 'grey',
    evil: 'zalgo',
};

const getLogger = ({ name = '', separator = '-' } = {}) => {
    let enabled = true;

    const decorate = (fn, level) => (...params) => {
        if (enabled) {
            let logParams = [];

            if (name.length) {
                logParams.push(name);

                if (separator.length) {
                    logParams.push(separator);
                }
            }

            logParams.push(...params);

            if (colorMap[level]) {
                const color = colorMap[level];

                logParams = logParams.map(param => (typeof param === 'string' ? colors[color](param) : param));
            }

            return fn(...logParams);
        }

        return null;
    };

    return {
        log: decorate(log),
        success: decorate(log, 'success'),
        evil: decorate(log, 'evil'),
        lame: decorate(log, 'lame'),
        ...['info', 'dir', 'warn', 'error'].reduce(
            (acc, level) => ({ ...acc, [level]: decorate(log[level], level) }),
            {}
        ),
        enable: () => (enabled = true),
        disable: () => (enabled = false),
        toggleEnabled: () => (enabled = !enabled),
        setEnabled: e => (enabled = e),
    };
};

module.exports = getLogger();
module.exports.getLogger = getLogger;
