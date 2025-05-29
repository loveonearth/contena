module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("issues/0/images");

  return {
    pathPrefix: "/",
    dir: {
      input: "issues",
      output: "docs",
    }
  };
}