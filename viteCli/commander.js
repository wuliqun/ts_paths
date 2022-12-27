const program = require("commander");
const colors = require("colors");


// bp for build params
program
  .version("1.0.0")
  .option("-bp, --bp <string>", "Add build params")
  .option("-m, --mode <string>", "Add development mode")
  .option("-e, --env <string>", "Add enviroment")
  .parse(process.argv);


const mode = program.getOptionValue("mode");
const env = program.getOptionValue("env");
let bp = program.getOptionValue("bp");

function checkBuildParams(bp) {
  if (!bp) {
    console.log(
      colors.red("current project: (COMMON:)xxx | (ACT:)year:xxx \n")
    );
    process.exit(1);
  }
  const buildType = /^(act:)?\d{4}:[^:]+$/i.test(bp)
    ? 1
    : /^(common:)?[^:]+$/i.test(bp)
    ? 2
    : 0;
  if (buildType === 0) {
    console.log(colors.red(`build params: ${bp} illegal \n`));
    console.log(
      colors.green(
        `Example, yarn dev 2022:demo1`
      )
    );
    process.exit(1);
  }
  //add (act common) prefix
  if (buildType === 1 && !/^act/i.test(bp)) {
    bp = "act:" + bp;
  } else if (buildType === 2 && !/^common/i.test(bp)) {
    bp = "common:" + bp;
  }
  console.log(
    colors.green(
      `current project ${bp}`
    )
  );
  console.log(
    colors.green(
      `current env: ${
        mode
      } \n`
    )
  );
  const arr = bp.split(":");
  return {
    folder: buildType === 1 ? arr[2] : arr[1],
    year: buildType === 1 ? arr[1] : "",
    entryPath: bp
      .replace(/^(common|act):/i, (m) => m.toUpperCase())
      .replace(/:/g, "/"),
    buildType,
  };
}

const { entryPath, buildType, folder, year } = checkBuildParams(bp);

module.exports = {
  mode,
  entryPath,
  buildType, // ACT - 1, COMMON - 2
  folder,
  year,
  env,
};
