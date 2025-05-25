module.exports = function (eleventyConfig) {
  // Copy everything from src/img to public/img
  eleventyConfig.addPassthroughCopy("src/img");

  // Optional: Copy other static folders too
  eleventyConfig.addPassthroughCopy("src/workflows");

  return {
    dir: {
      input: "src",
      output: "public", // 👈 This is the key change
    },
  };
};
