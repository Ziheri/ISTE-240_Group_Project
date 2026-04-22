// VARIABLES
let pastCommands = [];
let timesPressedUp = 0;
let desiredUserCommand;

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
    pastCommands.pop();
  } else {
    let directories = directory.innerText.split("/");
    directories.pop();
    directory.innerHTML = "";
    console.log("what it had before: " + directory.innerHTML);
    directory.innerHTML = directories
      .map((x) => {
        if (x !== "") return `/${x}`;
      })
      .join("");
    console.log("what it had after: " + directory.innerHTML);
  }
  // currentlyIn = "root";

  pastCommands.pop();
}

function listingDirs() {
  //TODO work on ls
  if (currentlyIn == "root") {
    commentsDiv.innerHTML += `<div class="ls-cont"> ${themes
      .map((theme) => {
        return `<div class="ls-item">${theme}</div>`;
      })
      .join("")} </div>`;
  }
  if (
    currentlyIn === "themes"
  ) // make it get into different directories to show.. currentlyIn == "root"
  {
    commentsDiv.innerHTML += `<div class="ls-cont"> ${[...themes, "root"]
      .map((theme) => {
        `<div class="ls-item">${theme}</div>`;
      })
      .join("")} </div>`;
  }
  // else
  // {
  //   commentsDiv.innerHTML += `<div class="ls-cont"> ${themes
  //     .map((theme) => {
  //       return `<div class="ls-item">${theme}</div>`;
  //     })
  //     .join("")} </div>`;
  //   // commentsDiv.innerHTML += `<div class="ls-cont"> ${Object.keys(rootCmds)
  //   //   .map((command) => {
  //   //     return `<div class="ls-item">${command}</div>`;
  //   //   })
  //   //   .join("")} </div>`;
  // }
}

function whoAmIFunct() {
  commentsDiv.innerHTML += "<div class='white'>unix</div>";
}

function changeDir() {
  // 3 = /
  let directory = document.querySelector(".directory");
  let pathFound = desiredUserCommand.substring(
    3,
    desiredUserCommand.length - 1,
  );
  currentlyIn = pathFound;
  if (pastCommands.includes(`${currentlyIn}/`) == false) {
    console.log("what am i looking at: " + currentlyIn);
    directory.innerHTML += `${currentlyIn}/`;
    pastCommands.push(`${currentlyIn}/`);
  }
  userCommandDiv.value = "";
  console.log("change directory");
  // currentlyIn = `${userCommand.substring(3, userCommand.length)}`;
  // directory.innerHTML += `/${userCommand.substring(3, userCommand.length)}`;
}

function pwdFunct() {
  /**
  pastCommands.add(`${currentlyIn.substring(3, )}`)
  */
  // pastCommands = remove(pastCommands, "cd");
  if (pastCommands[pastCommands.length - 1] === undefined) {
    commentsDiv.innerHTML += `<div class='white'>/</div>`;
  } else {
    commentsDiv.innerHTML += `<div class='white'>${pastCommands[pastCommands.length - 1]}</div>`;
  }
  console.log("why is this: " + pastCommands.pop());
}

function homeFunct() {
  let directory = document.querySelector(".directory");
  document.getElementsByClassName("directory red").innerHTML += "";
}

function echoFunct() {
  let echoMsg = desiredUserCommand.substring(4, desiredUserCommand.length);
  commentsDiv.innerHTML += `<div class='white'>${echoMsg}</div>`;
}

export let commentsDiv = document.querySelector(".comments");

let themes = [
  "bin/",
  "opt/",
  "boot/",
  "dev/",
  "sbin/",
  "etc/",
  "srv/",
  "home/",
  "tmp/",
  "lib/",
  "usr/",
  "media/",
  "var/",
  "mnt/",
];
let rootCmds = {
  whoami: whoAmIFunct,
  clear: clearingFunction,
  help: helpFeauture,
  "cd ..": goingBackDir,
  "cd ../": goingBackDir,
  ls: listingDirs,
  "cd ": changeDir,
  pwd: pwdFunct,
  "cd ~": homeFunct,
  echo: echoFunct,
  "mkdir ": 0,
  "rmdir ": 0,
  "rm ": 0,
  "touch ": 0,
  "ls -a ": 0,
  "cp ": 0,
  "mv ": 0,
  history: 0,
  "cat ": 0,
  "grep ": 0,
  " | ": 0,
  "man ": 0,
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
  // let directory = document.querySelector(".directory");

  if (userCommand === "") {
    commentsDiv.innerHTML += `<label class="green"><span class="yellow">unix</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
  }
  pastCommands.push(userCommand);

  newComment.innerHTML = `<label class="green"><span class="yellow">unix</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
  commentsDiv.appendChild(newComment);
  if (allCmds.includes(userCommand)) {
    rootCmds[userCommand]();
  } else {
    console.log("what is is this user commnad: " + userCommand.substring(0, 4));
    if (themes.includes(userCommand.substring(4, userCommand.length))) {
      console.log("please hit here");
      commentsDiv.innerHTML += `<div class="white"> ${userCommand.substring(4, userCommand.length)} </div>`;
    } else if (themes.includes(userCommand.substring(3, userCommand.length))) {
      console.log("What is this: " + userCommand.substring(0, 2));
      desiredUserCommand = userCommand;
      rootCmds["cd "]();
    } else if (userCommand.substring(0, 4) === "echo") {
      // this is good!!
      desiredUserCommand = userCommand;
      console.log("this condition hit for echo!");
      rootCmds[userCommand.substring(0, 4)]();
    } else if (userCommand === "") {
      commentsDiv.innerHTML += `<label class="green"><span class="yellow">unix</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
    } else {
      console.log(
        "please don't hit here: " + "`" + userCommand.substring(0, 4) + "`",
      );
      handleInvalidCommand(userCommand);
    }
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
