function serializeDate(date) {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T${date.getHours()}:` +
    `${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}Z`;
}

module.exports = function(tests) {
    var date = serializeDate(new Date());
    var result = {
        stats: {
            suites: tests.length,
            tests: 0,
            passes: 0,
            pending: 0,
            failures: 0,
            start: date,
            end: date,
            duration: 0,
        },
        failures: [],
        passes: [],
        skipped: [],
    };

    tests.forEach((item) => {
        if (item.errored) {
            item.warnings.forEach(warning => {
                result.stats.failures++;
                result.stats.tests++;

                result.failures.push({
                    title: item.source,
                    fullTitle: item.source,
                    duration: 0,
                    error: `${warning.text} at ${warning.line}:${warning.column}`,
                });
            });
        } else {
            result.stats.tests++;
            result.stats.passes++;
            result.passes.push({
                title: item.source,
                fullTitle: item.source,
                duration: 0,
            });
        }
    });
    return JSON.stringify(result, null, 4);
};
