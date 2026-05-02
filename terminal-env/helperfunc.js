import {
  handleInvalidCommand,
  generalFileSystem,
} from "./terminal-mechanics.js";

export function getAllDirectories(filePath) {
  let keys = Object.keys(filePath);
  keys.forEach((key) => {
    if (typeof filePath[key] === "object" && filePath[key] !== null) {
      keys = keys.concat(getAllKeys(filePath[key]));
    }
  });
  return keys;
}

function listingDirs() {
  // ls (direcories)
  // ls -a (directories and files)
  // ls -la (lists all files, including hidden ones,)
  // currentFilePath
  let fileDirection = currentFilePath.split("/");
  console.log("this is the current listing: " + fileDirection);

  console.log("more than one file");
  let findingDir = false;
  let currentFile = 1;
  let level = generalFileSystem;
  let chosenDirectory = "";
  if (fileDirection.length == 1) {
    Object.keys(generalFileSystem).forEach((key) => {
      commentsDiv.innerHTML += `<div class='white'>${key}</div>`;
    });
  } else {
    while (findingDir === false) {
      let direction = fileDirection[currentFile];
      if (Object.keys(level).includes(direction)) {
        let temp = level;
        level = temp[direction];
        chosenDirectory = level;
        currentFile += 1;
      }
      if (currentFile > fileDirection.length - 1) {
        Object.keys(level).forEach((key) => {
          console.log("the file it ended up: " + level);
          commentsDiv.innerHTML += `<div class='white'>${key}</div>`;
        });
        findingDir = true;
      }
    }
  }
  return chosenDirectory;
}

export function fiilePathExisit(filePath) {
  const parts = filePath.split("/").filter((part) => part !== "");

  let starting = generalFileSystem;

  for (let i = 0; i < parts.length; i += 1) {
    let fileLoc = parts[i];
    if (starting[fileLoc] !== undefined) {
      starting = starting[fileLoc];
    } else {
      return false;
    }
  }

  return typeof starting === "object" && starting !== null;
}
