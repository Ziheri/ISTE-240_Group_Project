import { generalCommnads } from "./allManInfo.js";
import {
  getAllDirectories,
  fiilePathExisit,
  getFileContent,
  getAbsoluteFilePath,
  getFolderObject,
} from "./helperfunc.js";
import { updatedContented } from "./viEditor.js";

// VARIABLES
//let pastCommands = [];
export let pastCommands =
  JSON.parse(sessionStorage.getItem("terminalHistory")) || [];
let timesPressedUp = 0;
let desiredUserCommand = "";
let currentFilePath = "/usr/unix";

//helper functions....
function enterFunction() {
  timesPressedUp = 0;
  addComment();
  document.querySelector(".comment-div").scrollIntoView();
  console.log("pressed enter");
}

function arrowUpFunction() {
  if (pastCommands.length > timesPressedUp) timesPressedUp++;
  let lastCommand = pastCommands[pastCommands.length - timesPressedUp];
  document.querySelector(".user-command").value = lastCommand;
  if (document.querySelector(".user-command").value == "undefined") {
    document.querySelector(".user-command").value = "";
  }
  console.log("pressed arrow up");
}

function arrowDownFunction() {
  if (timesPressedUp == 0) {
    document.querySelector(".user-command").value = "";
    if (document.querySelector(".user-command").value == "undefined") {
      document.querySelector(".user-command").value = "";
    }
  }
  console.log("pressed down");
}

function tabFunction() {
  e.preventDefault();
  let ongoingInput = document.querySelector(".user-command").value;
  let dict =
    typeof commandDict[currentlyIn] == "object"
      ? Object.keys(commandDict[currentlyIn])
      : commandDict[currentlyIn];
  ongoingInput === ""
    ? (document.querySelector(".user-command").value = "")
    : dict.map((cmd) => {
        if (cmd.startsWith(ongoingInput))
          document.querySelector(".user-command").value = cmd;
      });
  console.log("pressed tab");
}

let commandOption = {
  Enter: enterFunction,
  ArrowUp: arrowUpFunction,
  ArrowDown: arrowDownFunction,
  Tab: tabFunction,
};

// Event listeners
document.addEventListener("keydown", (e) => {
  // commandOption.keys().has(e.key)
  if (e.key in commandOption) {
    commandOption[e.key]();
  }
});

function clearingFunction() {
  commentsDiv.innerHTML = "";
}

function goingBackDir() {
  commentsDiv.innerHTML +=
    "<div class='white'>this is going back a directory</div>";
}

function listingDirs() {
  // ls (direcories)
  // ls -a (directories and files)
  // ls -la (lists all files, including hidden ones,)
  // currentFilePath
  let fileDirection = currentFilePath.split("/").filter((part) => part !== "");
  let findingDir = false;
  let currentFile = 0;
  let level = defaultJSONFileSys;
  let chosenDirectory = "";
  // console.log("we are in the ls!!");
  if (fileDirection.length == 1) {
    Object.keys(defaultJSONFileSys).forEach((key) => {
      commentsDiv.innerHTML += `<div class='white'>${key}</div>`;
    });

    console.log("there is stuff in here!!!!");
  } else {
    if (desiredUserCommand.includes("-a")) // hidden files
    {
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
    if (desiredUserCommand.includes("-l")) {
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
            let item = level[key];
            if (typeof item === "string") // file
            {
              commentsDiv.innerHTML += `<div class='white'>-rw-r--r-- ${key} unix</div>`;
            }
            if (typeof item === "object" && item !== null) // directory
            {
              commentsDiv.innerHTML += `<div class='white'>drwxr-xr-x ${key} unix</div>`;
            }
          });
          findingDir = true;
        }
      }
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
            //console.log("the file it ended up: " + level);

            let item = level[key];
            if (item && item.hidden === false) {
              commentsDiv.innerHTML += `<div class='white'>${key}</div>`;
            }
          });
          findingDir = true;
        }
      }
    }
  }
  return chosenDirectory;
}

function whoAmIFunct() {
  commentsDiv.innerHTML += "<div class='white'>unix</div>";
}

function changeDir() {
  let directory = document.querySelector(".directory");
  // directory.innerHTML += "/themes";

  // cd
  // "cd ..": goingBackDir,
  //"cd ../": goingBackDir,
  // "cd ~": homeFunct,
  //"cd /": cdSlashFunction,

  let previousPath = currentFilePath;

  if (desiredUserCommand.includes("..") === true) {
    let fileDirection = previousPath.split("/");
    console.log("WHAT IST THE FILE DIRECTION: " + fileDirection);
    fileDirection = fileDirection.filter((part) => part !== "");
    fileDirection.pop();
    previousPath = "/" + fileDirection.join("/");
  } else if (
    desiredUserCommand.includes("~") === true ||
    desiredUserCommand === ""
  ) {
    previousPath = "/usr/unix";
    // directory.innerHTML += "~";
  } else if (String(desiredUserCommand).startsWith("/") === true) {
    // previousPath
    previousPath = desiredUserCommand;
  } else if (desiredUserCommand === "/") {
    previousPath = "/";
    directory.innerHTML = "/";
  } else {
    // previousPath = "/usr/unix";
    // directory.innerHTML += "~";
    let slash = previousPath.endsWith("/") ? "" : "/";
    console.log("what is in slash: " + slash);
    previousPath = previousPath + slash + desiredUserCommand;
    console.log("waht is in the previousPath: " + previousPath);
  }

  if (fiilePathExisit(previousPath)) {
    currentFilePath = previousPath;

    let displayParts = currentFilePath.split("/").filter((p) => p !== "");
    let lastDir =
      displayParts.length > 0 ? displayParts[displayParts.length - 1] : "/";
    // directory.innerHTML = lastDir;
    directory.innerHTML = lastDir === "unix" ? "~" : lastDir;
  } else {
    commentsDiv.innerHTML += `<div class='white'>cd: no such file or directory: ${desiredUserCommand}</div>`;
    //handleInvalidCommand(currentFilePath);
  }
}

function pwdFunct() {
  // unix@user:~$
  commentsDiv.innerHTML += `<div class='white'>${currentFilePath}</div>`;

  // unix@user:/$
  // commentsDiv.innerHTML += `<div class='white'>/</div>`;
}

function homeFunct() {
  commentsDiv.innerHTML +=
    "<div class='white'>going back to the root directory</div>";
}

function echoFunct() {
  // desiredUserCommand
  console.log("what is the list message: " + desiredUserCommand);
  let echoMsg = desiredUserCommand;
  commentsDiv.innerHTML += `<div class='white'>${echoMsg}</div>`;
}

function mkDirFunct() {
  // defaultJSONFileSys {{},{},{}} key: value..
  // currentFilePath.. = "/usr/unix";
  let fileDirections = currentFilePath.split("/").filter((part) => part !== "");

  let currentDirectory = defaultJSONFileSys[fileDirections[0]];
  console.log("current directory???: " + currentDirectory);
  for (let i = 1; i < fileDirections.length; i += 1) {
    let currentKey = fileDirections[i];
    let temp = currentDirectory;
    currentDirectory = temp[currentKey];
  }
  currentDirectory[`${desiredUserCommand}`] = {};
  setingFileSys();
}

function rmDirFunct() {
  let fileDirections = currentFilePath.split("/").filter((part) => part !== "");

  let currentDirectory = defaultJSONFileSys[fileDirections[0]];
  console.log("current directory???: " + currentDirectory);
  for (let i = 1; i < fileDirections.length; i += 1) {
    let currentKey = fileDirections[i];
    let temp = currentDirectory;
    currentDirectory = temp[currentKey];
  }
  delete currentDirectory[`${desiredUserCommand}`];
  setingFileSys();
}

function rmFunction() {
  let fileDirections = currentFilePath.split("/").filter((part) => part !== "");

  let currentDirectory = defaultJSONFileSys[fileDirections[0]];
  console.log("current file???: " + currentDirectory);
  for (let i = 1; i < fileDirections.length; i += 1) {
    let currentKey = fileDirections[i];
    let temp = currentDirectory;
    currentDirectory = temp[currentKey];
  }
  delete currentDirectory[`${desiredUserCommand}`];
  setingFileSys();
}

function touchFunction() {
  let fileDirections = currentFilePath.split("/").filter((part) => part !== "");

  let currentDirectory = defaultJSONFileSys[fileDirections[0]];
  console.log("current directory???: " + currentDirectory);
  for (let i = 1; i < fileDirections.length; i += 1) {
    let currentKey = fileDirections[i];
    let temp = currentDirectory;
    currentDirectory = temp[currentKey];
  }
  currentDirectory[`${desiredUserCommand}`] = "";
  setingFileSys();
}

function cpFunction() {
  let paths = desiredUserCommand.split(" ");
  if (paths.length < 2) return;

  let sourceFile = paths[0];
  let destinationFile = paths[1];

  let sourcePath = getAbsoluteFilePath(defaultJSONFileSys, sourceFile, []);
  if (!sourcePath) {
    commentsDiv.innerHTML += `<div class='white'>cp: ${sourceFile}: No such file</div>`;
    return;
  }
  let content = getFileContent(sourcePath);

  let destParts = destinationFile.split("/").filter((p) => p !== "");
  let targetFileName = destParts.pop();

  let currentDirectory = destinationFile.startsWith("/")
    ? defaultJSONFileSys
    : getFolderObject(currentFilePath);

  for (let part of destParts) {
    if (currentDirectory[part] && typeof currentDirectory[part] === "object") {
      currentDirectory = currentDirectory[part];
    } else {
      commentsDiv.innerHTML += `<div class='white'>cp: directory not found: ${part}</div>`;
      return;
    }
  }

  currentDirectory[targetFileName] = content;
  setingFileSys();
}

function mvFunction() {
  let paths = desiredUserCommand.split(" ");
  if (paths.length < 2) return;

  let sourceFile = paths[0];
  let destinationFile = paths[1];

  let sourcePath = getAbsoluteFilePath(defaultJSONFileSys, sourceFile);
  if (!sourcePath) return;

  let content = getFileContent(sourcePath);

  let directionDestination = destinationFile.split("/").filter((p) => p !== "");
  let targetFileName = directionDestination.pop();

  let currentDirectory = destinationFile.startsWith("/")
    ? defaultJSONFileSys
    : getFolderObject(currentFilePath);

  //let currentDirectory = defaultJSONFileSys;
  for (let part of directionDestination) {
    // FIX: Reference 'part' and 'currentDirectory', not 'currentKey' or 'temp'
    if (currentDirectory[part] && typeof currentDirectory[part] === "object") {
      currentDirectory = currentDirectory[part];
    } else {
      return;
    }
  }

  // Set the new file
  currentDirectory[targetFileName] = content;

  // Delete the old file
  let sourceParts = sourcePath.split("/");
  let sourceName = sourceParts.pop();
  let sourceParent = defaultJSONFileSys;
  for (let part of sourceParts) {
    sourceParent = sourceParent[part];
  }
  delete sourceParent[sourceName];

  commentsDiv.innerHTML += `<div class='white'>moved ${sourceFile} to ${destinationFile}</div>`;
  setingFileSys();
}

function historyFunction() {
  console.log("history: " + pastCommands);
  pastCommands.forEach((command) => {
    commentsDiv.innerHTML += `<div class='white'>${command}</div>`;
  });
}

function catFunction() {
  let fileDirections = currentFilePath.split("/").filter((part) => part !== "");

  let currentDirectory = defaultJSONFileSys[fileDirections[0]];
  console.log("current directory???: " + currentDirectory);
  for (let i = 1; i < fileDirections.length; i += 1) {
    let currentKey = fileDirections[i];
    let temp = currentDirectory;
    currentDirectory = temp[currentKey];
  }

  commentsDiv.innerHTML += `${currentDirectory[`${desiredUserCommand}`]}`;
}

function grepFunction() {
  let paths = desiredUserCommand.split(" ");
  if (paths.length < 2) return;

  let regexPattern = paths[0].replace(/['"]+/g, "");
  let fileName = paths[1].replace(/['"]+/g, "");

  let currentDir = getFolderObject(currentFilePath);

  let contentStuff = currentDir[fileName];

  if (!contentStuff) {
    let altLookUp = getFolderObject(fileName);
    contentStuff = altLookUp ? altLookUp[fileName] : null;
  }

  if (!contentStuff) {
    commentsDiv.innerHTML += `<div class='white'>grep: ${fileName}: No such file</div>`;
    return;
  }

  let textToSearch =
    typeof contentStuff === "string" ? contentStuff : contentStuff.content;

  if (typeof textToSearch !== "string") {
    commentsDiv.innerHTML += `<div class='white'>grep: ${fileName}: Is a directory</div>`;
    return;
  }

  let regex = new RegExp(`^.*${regexPattern}.*$`, "gm");
  let matchedStuff = textToSearch.match(regex);

  if (matchedStuff) {
    commentsDiv.innerHTML += `<div class="white">${matchedStuff.join("<br>")}</div>`;
  }

  setingFileSys();
}

function manFunction() {
  console.log("man hit");
  let currentCommand = desiredUserCommand;
  if (currentCommand.indexOf(" ") !== -1) {
    let allParts = currentCommand.split(" ");
    currentCommand = allParts[0];
  }
  console.log("man hit: " + currentCommand);
  commentsDiv.innerHTML += `<div class='white'>${generalCommnads[currentCommand]}</div>`;
}

function viFunction() {
  ///
  commentsDiv.innerHTML += `vi a file`;
  touchFunction();
  sessionStorage.setItem("currentFilePath", currentFilePath);
  sessionStorage.setItem("editingFile", desiredUserCommand);
  setingFileSys();
  window.location.replace("viEditor.php");
  // updatedContented
  commentsDiv.innerHTML += `vi a file ${updatedContented}`;
}

export let commentsDiv = document.querySelector(".comments");

let generalFileSystem = {
  bin: { hidden: false }, // stores key: {}
  opt: { hidden: false },
  boot: { hidden: false },
  dev: { hidden: false },
  sbin: { hidden: false },
  etc: { hidden: false },
  srv: { hidden: false },
  home: { hidden: false },
  tmp: { hidden: false },
  lib: { hidden: false },

  usr: {
    bin: { hidden: false },
    include: { hidden: false },
    lib: { hidden: false },
    sbin: { hidden: false },
    unix: { hidden: false },
    hidden: false,
  }, //

  media: { hidden: false },

  var: {
    cache: { hidden: false },
    log: { hidden: false },
    spool: { hidden: false },
    tmp: { hidden: false },
    hidden: false,
  }, //

  mnt: { hidden: false },
};

export let defaultJSONFileSys =
  JSON.parse(localStorage.getItem("terminalFS")) || generalFileSystem;

export function setingFileSys() {
  localStorage.setItem("terminalFS", JSON.stringify(defaultJSONFileSys));
}

let rootCmds = {
  whoami: whoAmIFunct,
  clear: clearingFunction,
  ls: listingDirs,
  cd: changeDir,
  pwd: pwdFunct,
  echo: echoFunct,
  mkdir: mkDirFunct,
  rmdir: rmDirFunct,
  rm: rmFunction,
  touch: touchFunction,
  cp: cpFunction,
  mv: mvFunction,
  history: historyFunction,
  cat: catFunction,
  grep: grepFunction,
  man: manFunction,
  vi: viFunction,
};
let allCmds = [...Object.keys(rootCmds)];
let currentlyIn = "root";
let commandDict = {
  root: rootCmds,
};

let userCommandDiv = document.querySelector(".user-command");

if (userCommandDiv) {
  userCommandDiv.addEventListener("focus", (e) => {
    e.preventDefault();
  });
}

function addComment() {
  let newComment = document.createElement("div");
  newComment.classList.add(".user-comment");

  // Get user comment + add it to the chat screen
  let userCommandDiv = document.querySelector(".user-command");
  let userCommand = document.querySelector(".user-command").value.trim();
  let directory = document.querySelector(".directory");
  directory.innerHTML = "~";

  if (userCommand === "") {
    commentsDiv.innerHTML += `<label class="green"><span class="yellow">unix</span>@user:<span
                        class="directory red"></span>$ <span class="white">${userCommand}</span> </label>`;
  }
  newComment.innerHTML = `<label class="green"><span class="yellow">unix</span>@user:<span
                        class="directory red"></span>$ <span class="white">${userCommand}</span> </label>`;
  commentsDiv.appendChild(newComment);
  // Output 232: whoami,clear,cd ..,cd ../,ls,cd ,pwd,cd ~,echo,mkdir ,rmdir ,rm ,touch ,ls -a ,cp ,mv ,history,cat ,grep , | ,man ,cd /,vi
  console.log("What is in here: " + allCmds);
  if (allCmds.includes(userCommand)) {
    rootCmds[userCommand]();
  } else {
    let commandComponent = userCommand.split(" ");
    if (allCmds.includes(commandComponent[0])) {
      desiredUserCommand = commandComponent.slice(1).join(" ");
      // console.log("what is this??: " + desiredUserCommand);
      rootCmds[commandComponent[0]]();
    } else {
      handleInvalidCommand(userCommand);
    }
  }
  pastCommands.push(userCommand);
  sessionStorage.setItem("terminalHistory", JSON.stringify(pastCommands));
  userCommandDiv.value = "";
}

export function handleInvalidCommand(cmmd) {
  commentsDiv.innerHTML += `zsh: command not found: ${cmmd}`;
}
