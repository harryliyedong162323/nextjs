const postcss = require("postcss");

module.exports = postcss.plugin("postcss-px-to-vw", () => {
  return function (css) {
    css.walkDecls((decl) => {
      if (decl.prop === "background-image") {
        if (decl.value.includes("url")) {
          decl.prop = "background";
          decl.value = `${decl.value} no-repeat center/contain`;
        }
        // decl.prop;
      }

      let pxValue = /(-?\d*\.?\d+)px/.exec(decl.value);
      if (!pxValue) return;

      let vwValue = Number(pxValue[1]) / (1920 / 100);

      if (decl.prop === "min-height" && pxValue[1] === "700") {
        console.log(pxValue)
        return;
      }

      let minValue = 16;
      let maxValue = pxValue[1] * 2;
      if (decl.prop === "font-size") {
        // decl.value = decl.value.replace(
        //   pxValue[0],
        //   `clamp(${minValue}px,${vwValue}vw,${maxValue}px)`
        // );
        return;
      } else {
        decl.value = decl.value.replace(pxValue[0], `${vwValue}vw`);
      }
    });
  };
});
