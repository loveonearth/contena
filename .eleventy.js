module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "issues",
      output: "_site"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: "issues",
      output: "_site"
    }
  };
};