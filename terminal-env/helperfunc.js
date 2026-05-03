import {
  handleInvalidCommand,
  defaultJSONFileSys,
} from "./terminal-mechanics.js";

export function getAllDirectories(filePath) {
  let keys = Object.keys(filePath);
  keys.forEach((key) => {
    if (typeof filePath[key] === "object" && filePath[key] !== null) {
      keys = keys.concat(getAllDirectories(filePath[key]));
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
  let level = defaultJSONFileSys;
  let chosenDirectory = "";
  if (fileDirection.length == 1) {
    Object.keys(defaultJSONFileSys).forEach((key) => {
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

  let starting = defaultJSONFileSys;

  for (let i = 0; i < parts.length; i += 1) {
    let fileLoc = parts[i];
    if (starting[fileLoc] !== undefined) {
      starting = starting[fileLoc];
    } else {
      return false;
    }
  }

  return starting !== undefined;
}

// export function getAbsoluteFilePath(currentMap, filePath, path) {
//   // "/usr/unix";
//   let absolutePath = [];
//   let destination;
//   // defaultJSONFileSys = file system... would get get the length of top view
//   // if (filePath.includes("/")) {
//   //   let pathParts = filePath.split("/");
//   //   destination = pathParts[pathParts.length - 1];
//   // } else {
//   //   destination = filePath;
//   // }

//   for (let key in currentMap) {
//     let possiblePath = [...path, key];
//     if (key === destination) // if found on the first level
//     {
//       return possiblePath.join("/");
//     }

//     if (typeof currentMap[key] === "object" && currentMap[key] !== null) {
//       absolutePath = getAbsoluteFilePath(
//         defaultJSONFileSys[key],
//         filePath,
//         possiblePath,
//       );
//       if (absolutePath) {
//         return absolutePath;
//       }
//     }
//   }

//   return null;
// }

// export function getFileContent(absolutePath) {
//   let fileDirection = absolutePath.split("/");

//   let currentDirectory = defaultJSONFileSys[fileDirections[0]];
//   for (let i = 1; i < fileDirection.length; i += 1) {
//     let currentKey = fileDirection[i];
//     let temp = currentDirectory;
//     currentDirectory = temp[currentKey];
//   }
//   return currentDirectory[`${desiredUserCommand}`];
// }

export function getAbsoluteFilePath(currentMap, targetName, path = []) {
  for (let key in currentMap) {
    let currentPath = [...path, key];

    if (key === targetName) {
      return currentPath.join("/");
    }

    if (typeof currentMap[key] === "object" && currentMap[key] !== null) {
      let found = getAbsoluteFilePath(currentMap[key], targetName, currentPath);
      if (found) return found;
    }
  }
  return null;
}

export function getFileContent(absolutePath) {
  let parts = absolutePath.split("/");
  let current = defaultJSONFileSys;

  for (let part of parts) {
    if (current[part] !== undefined) {
      current = current[part];
    }
  }
  return current;
}

export function getFolderObject(pathString) {
  let parts = pathString.split("/").filter((p) => p !== "");
  let current = defaultJSONFileSys;
  for (let part of parts) {
    if (current[part]) {
      current = current[part];
    }
  }
  return current;
}
