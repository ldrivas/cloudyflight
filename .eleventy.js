module.exports = function (eleventyConfig) {
  // Copy everything that isn't processed by Eleventy (e.g. images, CSS, JS)
  eleventyConfig.addPassthroughCopy({ "src": "." });

  return {
    dir: {
      input: "src",     // Where your source files live
      output: "public", // Where Eleventy puts the built site
    },
  };
};
