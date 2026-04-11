// VARIABLES
let pastCommands = [];
let timesPressedUp = 0;

/**
 * {
 *   command: string,
 *   result: string
 * }
 */
const userCommands = []; // array of commands (this is a state...)

let primeDir = [
  "bin/",
  "opt/",
  "boot/",
  "dev/",
  "sbin/",
  "etc/",
  "src/",
  "home/",
  "tmp/",
  "lib/",
  "usr/",
  "media/",
  "var/",
  "mnt/",
];

let primeSubMap = {
  "usr/": ["bin/", "include/", "lib/", "sbin/"],
  "var/": ["cache/", "log/", "spool/", "tmp/"],
};
let directory = document.querySelector(".directory");
var overallOutcome;

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

  //TODO if you press tab you can see the file options avaibilible!!

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
  return "";
}

function whoamiFunction() {
  // return instead of setting it
  return "<div class='white'>unix</div>";
}

function helpFeauture() {
  let currentDirArray =
    currentlyIn === "root"
      ? [...Object.keys(rootCmds), ...mainCmds]
      : [...primeDir, ...mainCmds];
  return `<ul> ${currentDirArray
    .map((command) => {
      return `<li class="ls-item"> ${command}</li>`;
    })
    .join("")} </ul>`;
}

function goingBackDir() {
  if (currentlyIn == "root") {
    commentsDiv.innerHTML += "";
    userCommandDiv.value = "";
  }
  currentlyIn = "root";
  let directories = directory.innerText.split("/");
  directories.pop();
  directory.innerHTML = "";
  directory.innerHTML = directories
    .map((x) => {
      if (x !== "") return `/${x}`;
    })
    .join("");
}

function listingDirs() {
  if (
    currentlyIn === "primeDir"
  ) // make it get into different directories to show..
  {
    return `<div class="ls-cont"> ${[...primeDir, "root"]
      .map((theme) => {
        `<div class="ls-item">${theme}</div>`;
      })
      .join("")} </div>`;
  } else {
    return `<div class="ls-cont"> ${primeDir
      .map((command) => {
        return `${command}<br>`;
      })
      .join("")} </div>`;
  }
}

function defaultDirsAccess() {
  console.log("the default directories hit!!");
  // overallOutcome
  /**
    TypeError: overallOutcome.substring is not a function. 
    (In 'overallOutcome.substring(3, overallOutcome.length)', 
    'overallOutcome.substring' is undefined)
    */
  let dirKey = overallOutcome[1];
  console.log("dirKey: " + dirKey + " --> " + primeDir.indexOf(dirKey));
  if (primeDir.indexOf(dirKey) != -1) {
    // primeDir = kl
    // primeSubDir = kol
    console.log(primeSubMap);
    if (
      Object.values(primeSubMap)
        .map((subDir) => subDir.includes(dirKey))
        .includes(true)
    ) {
      directory.innerHTML += `/${dirKey}`;
      console.log("top view");
      // get the sub directory
    } else {
      console.log("you are in deeper!!");
      directory.innerHTML += `/${dirKey}`;
      // get the directory
    }
  } else {
    console.log("tftgfgvhk");
    handleInvalidCommand(dirKey);
  }
  // f
  // just use hashmap..... nested hashmap...
}

export let commentsDiv = document.querySelector(".comments");

let rootCmds = {
  whoami: whoamiFunction,
  clear: clearingFunction,
  help: helpFeauture,
  ls: listingDirs,
  cd: defaultDirsAccess, //TODO you have to acccess various files through this using a tree...
};
let mainCmds = ["clear", "ls", "cd ..", "help", "echo ", "cd"]; //
let allCmds = [...mainCmds, ...Object.keys(rootCmds), ...primeDir];
let currentlyIn = "root";
let commandDict = {
  root: rootCmds,
  primeDir: primeDir, // where I got to put into the directory
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
  console.log("adding comment!");
  if (userCommand === "") {
    commentsDiv.innerHTML += `<label class="green"><span class="yellow">unix</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
  }
  pastCommands.push(userCommand);

  newComment.innerHTML = `<label class="green"><span class="yellow">unix</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
  commentsDiv.appendChild(newComment);
  let commandParts = userCommand.split(" ");
  //console.log(commandParts[0] + " --> status: " + mainCmds.includes(commandParts[0]));
  if (allCmds.includes(userCommand)) {
    commentsDiv.innerHTML += rootCmds[userCommand]();
    console.log("found in the command map!");
  } else if (mainCmds.includes(commandParts[0])) {
    overallOutcome = commandParts;
    rootCmds[commandParts[0]]();
  } else {
    // if (allCmds.map(cmd => `${cmd.includes(`cd `)}`).includes("true"))
    // {
    //     commentsDiv.innerHTML += `<div class="white"> ${userCommand.substring(4, userCommand.length)} </div>`;
    //     console.log("something is here I don't know what!" + userCommand.substring(4, userCommand.length));
    // }
    // else
    // {
    handleInvalidCommand(userCommand);
    console.log("what is this!!");
    // }
  }
  userCommandDiv.value = "";
}
function changeTheme(theme) {
  // used to change directories
  let domBody = document.querySelector("body");
  let pastTheme = domBody.className;
  theme == "light"
    ? (commentsDiv.innerHTML += `<div>"${theme}" theme selected. Protect your eyes!</div>`)
    : (commentsDiv.innerHTML += `<div>"${theme}" theme selected.</div>`);
  domBody.classList.remove(pastTheme);
  domBody.classList.add(theme);
}

function handleInvalidCommand(cmmd) {
  commentsDiv.innerHTML += `zsh: command not found: ${cmmd}`;
}
