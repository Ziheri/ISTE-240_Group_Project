import { generalCommnads } from "./allManInfo.js";
// VARIABLES
let pastCommands = [];
let timesPressedUp = 0;
let desiredUserCommand;
let currentFilePath = "/Users/unix";

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
  commentsDiv.innerHTML += "<div class='white'>listing the directory</div>";
}

function whoAmIFunct() {
  commentsDiv.innerHTML += "<div class='white'>unix</div>";
}

function changeDir() {
  // cd
  // "cd ..": goingBackDir,
  //"cd ../": goingBackDir,
  // "cd ~": homeFunct,
  //"cd /": cdSlashFunction,
  commentsDiv.innerHTML += "<div class='white'>change the directory</div>";
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
  console.log("what is the list message: " + desiredUserCommand);
  let echoMsg = desiredUserCommand.join(" ");
  commentsDiv.innerHTML += `<div class='white'>${echoMsg}</div>`;
}

function mkDirFunct() {
  commentsDiv.innerHTML += "<div class='white'>make a new directory</div>";
}

function rmDirFunct() {
  commentsDiv.innerHTML +=
    "<div class='white'>get rid of a new directory</div>";
}

function rmFunction() {
  commentsDiv.innerHTML += `remove the file`;
}

function touchFunction() {
  commentsDiv.innerHTML += `touch/make an empty`;
}

function lsAFunction() {
  // ls
  // ls -a
  commentsDiv.innerHTML += `show all direcotries in the current layer`;
}

function cpFunction() {
  commentsDiv.innerHTML += `copy a file and directories`;
}

function mvFunction() {
  commentsDiv.innerHTML += `move a file and directories`;
}

function historyFunction() {
  console.log("history: " + pastCommands);
  pastCommands.forEach((command) => {
    commentsDiv.innerHTML += `<div class='white'>${command}</div>`;
  });
}

function catFunction() {
  commentsDiv.innerHTML += `content of the file`;
}

function grepFunction() {
  commentsDiv.innerHTML += `using grep`;
}

function pipeFunction() {
  commentsDiv.innerHTML += `using pipe `;
}

function manFunction() {
  console.log("man hit");
  let currentCommand = desiredUserCommand[0];
  console.log("man hit: " + currentCommand);
  commentsDiv.innerHTML += `<div class='white'>${generalCommnads[currentCommand]}</div>`;
}

function cdSlashFunction() {
  commentsDiv.innerHTML += `cd / stufff`;
}

function viFunction() {
  commentsDiv.innerHTML += `vi a file`;
}

export let commentsDiv = document.querySelector(".comments");

let generalFileSystem = {
  "bin/": {}, // stores key: {}
  "opt/": {},
  "boot/": {},
  "dev/": {},
  "sbin/": {},
  "etc/": {},
  "srv/": {},
  "home/": {},
  "tmp/": {},
  "lib/": {},

  "usr/": {
    "bin/": {},
    "include/": {},
    "lib/": {},
    "sbin/": {},
  }, //

  "media/": {},

  "var/": {
    cache: {},
    log: {},
    spool: {},
    tmp: {},
  }, //

  "mnt/": {},
};
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
  ls: lsAFunction,
  cp: cpFunction,
  mv: mvFunction,
  history: historyFunction,
  cat: catFunction,
  grep: grepFunction,
  "|": pipeFunction,
  man: manFunction,
  vi: viFunction,
  /*
    different foms of comemon ones
    asdfasdfasdf
  */
};
let allCmds = [...Object.keys(rootCmds)];
let currentlyIn = "root";
let commandDict = {
  root: rootCmds,
};

let userCommandDiv = document.querySelector(".user-command");
userCommandDiv.addEventListener("focus", (e) => {
  e.preventDefault();
});

function addComment() {
  let newComment = document.createElement("div");
  newComment.classList.add(".user-comment");

  // Get user comment + add it to the chat screen
  let userCommandDiv = document.querySelector(".user-command");
  let userCommand = document.querySelector(".user-command").value.trim();
  // let directory = document.querySelector(".directory");

  if (userCommand === "") {
    commentsDiv.innerHTML += `<label class="green"><span class="yellow">unix</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
  }
  newComment.innerHTML = `<label class="green"><span class="yellow">unix</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
  commentsDiv.appendChild(newComment);
  // Output 232: whoami,clear,cd ..,cd ../,ls,cd ,pwd,cd ~,echo,mkdir ,rmdir ,rm ,touch ,ls -a ,cp ,mv ,history,cat ,grep , | ,man ,cd /,vi
  console.log("What is in here: " + allCmds);
  if (allCmds.includes(userCommand)) {
    rootCmds[userCommand]();
  } else {
    let commandComponent = userCommand.split(" ");
    if (allCmds.includes(commandComponent[0])) {
      desiredUserCommand = commandComponent.slice(1, commandComponent.length);
      rootCmds[commandComponent[0]]();
    } else {
      handleInvalidCommand(userCommand);
    }
  }
  pastCommands.push(userCommand);
  userCommandDiv.value = "";
}

function handleInvalidCommand(cmmd) {
  commentsDiv.innerHTML += `zsh: command not found: ${cmmd}`;
}
