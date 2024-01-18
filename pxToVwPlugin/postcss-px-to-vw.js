const postcss = require("postcss");

module.exports = postcss.plugin("postcss-px-to-vw", () => {
  return function (css) {
    css.walkRules((rule) => {
      let base = 1600 * 1.2;

      if (rule.parent && rule.parent.type === "atrule") {
        if (rule.parent.params.includes("(max-width: 768px)")) {
          base = 375;
        }
        if (
          rule.parent.params.includes(
            "(min-width: 769px) and (max-width: 1536px)"
          )
        ) {
          base = 1600;
        }
      }

      rule.walkDecls((decl) => {
        if (decl.prop === "background-image" && decl.value.includes("url")) {
          decl.prop = "background";
          decl.value = `${decl.value} no-repeat center/contain`;
        }

        if (decl.prop === "font-size") {
          return;
        }

        let pxRegExp = /(-?\d*\.?\d+)px(!ignore)?/g;
        let declValue = decl.value;
        let matches = Array.from(decl.value.matchAll(pxRegExp));

        matches.forEach((match) => {
          let pxNumber = parseFloat(match[1]);
          if (Math.abs(pxNumber) === 1) {
            return;
          }

          if (match[2] === "!ignore") {
            declValue = declValue.replace(
              match[0],
              match[0].replace("!ignore", "")
            );
            return;
          }

          let vwValue = (pxNumber / base) * 100;
          declValue = declValue.replace(match[0], `${vwValue}vw`);
        });

        decl.value = declValue;
      });
    });
  };
});
