module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("toJSON", function(input) {
        return JSON.stringify(input);
    });
}