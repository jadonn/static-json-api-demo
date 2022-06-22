const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("toJSON", function(input) {
        return JSON.stringify(input);
    });
    eleventyConfig.addFilter("objectKeys", function(input) {
        return Object.keys(input);
    });
    eleventyConfig.addFilter("postJSON", function(input) {
        return JSON.stringify(
            {
                title: input.data.title,
                description: input.data.description,
                content: input.templateContent
            }
        );
    });
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
}