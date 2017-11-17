/*eslint-env node, es6*/

/* Module Description */
/* Discovers and replaces references to Adobe Connect with Zoom */

/* Put dependencies here */
const asyncLib = require('asyncLib');

module.exports = (course, stepCallback) => {
    course.addModuleReport('cmAdobeZoom');

    asyncLib.filter(course.content, file => {

        var entries = file.dom('*:contains("Adobe")').get();

        return entries.length > 0;

    }, (err, resultFiles) => {
        if (err) course.throwErr('cmAdobeZoom', err);
        else {

            resultFiles.forEach(file => {
                console.log(file.name);
            });

        }
        stepCallback(null, course);
    });

};
