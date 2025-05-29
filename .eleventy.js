module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("0/images");

  return {
    pathPrefix: "/contena/",
    dir: {
      input: "issues",
      output: "docs",
    }
  };
}