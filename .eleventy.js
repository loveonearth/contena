module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("issues/0/images");
  eleventyConfig.addPassthroughCopy("public/CNAME");
};

  return {
    pathPrefix: "/",
    dir: {
      input: "issues",
      output: "docs",
    }
  };
}