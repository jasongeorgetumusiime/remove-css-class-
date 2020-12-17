const { removeCssClass } = require('./remove-css-class');

export function main(args) {
  const options = {
    inputFile: args.input,
    outputFile: args.output,
    className: args.classname
  } 
  removeCssClass(
    options.inputFile,
    options.outputFile,
    options.className
  )
  console.log("Finished happily! :)")
} 