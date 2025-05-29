module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("0/images");

  return {
    dir: {
      input: "issues",
      output: "_site"
    }
  };
};