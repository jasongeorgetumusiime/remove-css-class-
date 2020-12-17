var fs = require('fs');
const cheerio = require('cheerio')

export function removeCssClass(inputFile, outputFile, className) {
  fs.readFile(inputFile, (err, inData) => {
    if (err) throw err;

    const $ = cheerio.load(inData.toString())
    $(`.${className}`).removeClass(className)
    
    fs.writeFile(outputFile, $.html(), (err) => {
      if (err) throw err;
    });
  });
}