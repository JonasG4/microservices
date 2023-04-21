const csvToJson = require("csvtojson");

async function getData() {
  const csvFilepath = `${__dirname}/../../data/language-codes.csv`;

  const json = await csvToJson({
    headers: ["code", "languages"],
    colParser: {
      languages: function (item) {
        const languages = item.split("; ");
        return languages;
      },
    },
  }).fromFile(csvFilepath);

  return json;
}

module.exports = getData;
