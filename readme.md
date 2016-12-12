## Stylelint-mocha-formatter

Create json compatible with mocha reports format.

### Installation

```javascript
    npm install --save-dev stylelint-mocha-formatter
```

### Usage

In your stylelint config:

```javascript
    var stylelintFormatter = require('stylelint-mocha-formatter');

    var stylelintConfig = {        
        reporters: [
            {
                formatter: stylelintFormatter,            
            },
        ]
    }
```

### Output example:

```json
{
    "stats": {
        "suites": 119,
        "tests": 119,
        "passes": 117,
        "pending": 0,
        "failures": 2,
        "start": "2016-11-25T17:22:38.866Z",
        "end": "2016-11-25T17:22:38.866Z",
        "duration": 0
    },
    "failures": [
        {
            "title": "path/to/app/global/mainPage-styles.less",
            "fullTitle": "path/to/app/global/mainPage-styles.less",
            "duration": 0,
            "error": "Expected no more than 1 empty line(s) (max-empty-lines) 35:1"
        }
        {
            "title": "path/to/app/global/mainPage-styles.less",
            "fullTitle": "path/to/app/global/mainPage-styles.less",
            "duration": 0,
            "error": "Expected no more than 1 empty line(s) (max-empty-lines) 43:1"
        }
    ],
    "passes": [
        {
            "title": "path/to/app/global/app-styles.less",
            "fullTitle": "path/to/app/global/app-styles.less",
            "duration": 0
        },
    ...
```
