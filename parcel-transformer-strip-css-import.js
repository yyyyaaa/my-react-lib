const { Optimizer } = require("@parcel/plugin");
const { blobToString } = require("@parcel/utils");

module.exports = new Optimizer({
  async optimize({ contents, map }) {
    const codeStr = await blobToString(contents);
    return {
      contents: unlinkStylesheets(codeStr),
      map,
    };
  },
});

function unlinkStylesheets(code) {
  const cssImports = getCssImports();
  let finalCode = code;

  cssImports.forEach((importStatementRegex) => {
    finalCode = finalCode.replace(importStatementRegex, "");
  });
  return finalCode.trim();
}

function getCssImports() {
  return [
    /require\(".\/my-react-lib(.*).cjs.css"\);/g,
    /import(\s*)".\/my-react-lib(.*).cjs.css";/g,
  ];
}
