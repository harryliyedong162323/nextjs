const postcss = require("postcss");

module.exports = postcss.plugin("postcss-px-to-vw", () => {
  return function (css) {
    css.walkRules((rule) => {
      let base = 1600 * 1.2; // Set default base

      // mobile
      if (
        rule.parent &&
        rule.parent.type === "atrule" &&
        rule.parent.params.includes("(max-width: 768px)")
      ) {
        base = 375;
      }

      // pad
      if (
        rule.parent &&
        rule.parent.type === "atrule" &&
        rule.parent.params.includes(
          "(min-width: 769px) and (max-width: 1536px)"
        )
      ) {
        base = 1600;
      }

      rule.walkDecls((decl) => {
        if (decl.prop === "background-image") {
          if (decl.value.includes("url")) {
            decl.prop = "background";
            decl.value = `${decl.value} no-repeat center/contain`;
          }
        }

        let pxValue = /(-?\d*\.?\d+)px/.exec(decl.value);
        if (!pxValue) return;

        if (Math.abs(Number(pxValue[1])) === 1) return;

        let vwValue = (Number(pxValue[1]) / base) * 100;

        if (decl.prop === "min-height" && pxValue[1] === "700") {
          return;
        }

        let minValue = 16;
        let maxValue = pxValue[1] * 2;
        if (decl.prop === "font-size") {
          return;
        } else {
          decl.value = decl.value.replace(pxValue[0], `${vwValue}vw`);
        }
      });
    });
  };
});
