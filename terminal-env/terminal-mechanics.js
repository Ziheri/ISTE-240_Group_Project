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
  commentsDiv.innerHTML += "<div class='white'>unix</div>";
}

function helpFeauture() {
  let currentDirArray =
    currentlyIn === "root"
      ? [...Object.keys(rootCmds), ...mainCmds]
      : [...primeDir, ...mainCmds];
  commentsDiv.innerHTML += `<ul> ${currentDirArray
    .map((command) => {
      return `<li class="ls-item"> ${command}</li>`;
    })
    .join("")} </ul>`;
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

function clearingFunction() {
  commentsDiv.innerHTML = "";
}

function whoamiFunction() {
  commentsDiv.innerHTML += "<div class='white'>unix</div>";
}

function helpFeauture() {
  let currentDirArray =
    currentlyIn === "root"
      ? [...Object.keys(rootCmds), ...mainCmds]
      : [...themes, ...mainCmds];
  commentsDiv.innerHTML += `<ul> ${currentDirArray
    .map((command) => {
      return `<li class="ls-item"> ${command}</li>`;
    })
    .join("")} </ul>`;
}

function goingBackDir() {
  let directory = document.querySelector(".directory");
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
    currentlyIn === "themes"
  ) // make it get into different directories to show..
  {
    commentsDiv.innerHTML += `<div class="ls-cont"> ${[...themes, "root"]
      .map((theme) => {
        `<div class="ls-item">${theme}</div>`;
      })
      .join("")} </div>`;
  } else {
    commentsDiv.innerHTML += `<div class="ls-cont"> ${Object.keys(rootCmds)
      .map((command) => {
        return `<div class="ls-item">${command}</div>`;
      })
      .join("")} </div>`;
  }
}

function defaultDirsAccess() {
  //
}

export let commentsDiv = document.querySelector(".comments");

let themes = ["hacker", "default", "light", "cute"];
let rootCmds = {
  whoami: whoamiFunction,
  clear: clearingFunction,
  help: helpFeauture,
  "cd ..": goingBackDir,
  ls: listingDirs,
};
let mainCmds = ["clear", "ls", "cd ..", "help", "echo "]; //
let allCmds = [...mainCmds, ...Object.keys(rootCmds), ...themes];
let currentlyIn = "root";
let commandDict = {
  root: rootCmds,
  themes: themes, // where I got to put into the directory
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
  let directory = document.querySelector(".directory");
  if (userCommand === "") {
    commentsDiv.innerHTML += `<div>Please enter a command.</div>`;
    return;
  }
  pastCommands.push(userCommand);
  newComment.innerText = `> ${userCommand}`;
  commentsDiv.appendChild(newComment);

  if (allCmds.includes(userCommand)) {
    if (userCommand == "clear") {
      commentsDiv.innerHTML = "";
    } else if (userCommand == "help") {
      let currentDirArray =
        currentlyIn === "root"
          ? [...Object.keys(rootCmds), ...mainCmds]
          : [...themes, ...mainCmds];
      commentsDiv.innerHTML += `<ul> ${currentDirArray
        .map((command) => {
          return `<li class="ls-item">${command}</li>`;
        })
        .join("")} </ul>`;
    } else if (userCommand == "ls") {
      if (currentlyIn === "themes") {
        commentsDiv.innerHTML += `<div class="ls-cont"> ${[...themes, "root"]
          .map((theme) => {
            return `<div class="ls-item">${theme}</div>`;
          })
          .join("")} </div>`;
      } else {
        commentsDiv.innerHTML += `<div class="ls-cont"> ${Object.keys(rootCmds)
          .map((command) => {
            return `<div class="ls-item">${command}</div>`;
          })
          .join("")} </div>`;
      }
    } else if (userCommand == "cd ..") {
      if (currentlyIn == "root") {
        commentsDiv.innerHTML += `<div>Already in the root directory.</div>`;
        userCommandDiv.value = "";
        return;
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
    } else if (
      (currentlyIn === "root" && Object.keys(rootCmds).includes(userCommand)) ||
      themes.includes(userCommand)
    ) {
      if (userCommand.startsWith("get ")) {
        window.open(rootCmds[userCommand]);
        return;
      } else if (
        userCommand === "experience" ||
        userCommand === "certificates" ||
        userCommand === "education"
      ) {
        commentsDiv.innerHTML += `<ul>${rootCmds[userCommand]
          .map((x) => {
            return `<li>${x}</li>`;
          })
          .join("")}</ul>`;
        userCommandDiv.value = "";
        return;
      }
      if (userCommand === "cd themes") {
        currentlyIn = "themes";
        directory.innerHTML += "/themes";
        commentsDiv.innerHTML += `<ul>${themes
          .map((theme) => {
            return `<li>${theme}</li>`;
          })
          .join("")}</ul>`;
      } else if (currentlyIn === "themes" && themes.includes(userCommand)) {
        changeTheme(userCommand);
      } else {
        commentsDiv.innerHTML += rootCmds[userCommand];
      }
    } else if (
      currentlyIn === "themes" &&
      Object.keys(rootCmds).includes(userCommand)
    ) {
      handleInvalidCommand(userCommand);
    }
  } else {
    handleInvalidCommand(userCommand);
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
