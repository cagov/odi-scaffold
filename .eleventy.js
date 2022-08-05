const cagovBuildSystem = require("@cagov/11ty-build-system");

module.exports = function (eleventyConfig) {
  eleventyConfig.htmlTemplateEngine = "njk";

  eleventyConfig.addPlugin(cagovBuildSystem, {
    processors: {
      sass: {
        watch: ["src/css/**/*"],
        output: "_site_dist/index.css",
        minify: true,
        options: {
          file: "src/css/index.scss",
          includePaths: ["./src/css/sass"],
        },
      },
      esbuild: [
        {
          watch: ["src/js/**/*"],
          options: {
            entryPoints: ["src/js/index.js"],
            bundle: true,
            minify: true,
            outfile: "_site_dist/built.js",
          },
        },
      ],
    },
  });

  eleventyConfig.addFilter('includes', (items, value) => {
    return (items || []).includes(value);
  });

  eleventyConfig.addCollection("wordpressposts", function (collection) {
    let output = [];
    collection.getAll().forEach((item) => {
      if(!item.data.layout) {
        item.data.layout = 'single-column.njk';
      }
      console.log(item.data.layout)
    })
    return output;
  })

  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/pdf": "pdf" });
  eleventyConfig.addPassthroughCopy({ "src/css/fonts": "fonts" });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "md",
    templateFormats: ["html", "njk", "11ty.js", "md"],
    dir: {
      input: "pages",
      output: "_site",
    },
  };
};

