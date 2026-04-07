// VARIABLES
let pastCommands = [];
let timesPressedUp = 0;

//helper functions....
function enterFunction()
{
    timesPressedUp = 0;
    addComment();
    document.getElementById('comment-div').style.color = 'pink';
    // userCommand
    // Makes the input field always appear on screen. Important
    document.querySelector(".comment-div").scrollIntoView();
    console.log("pressed enter");
}

function arrowUpFunction()
{
    if (pastCommands.length > timesPressedUp) (timesPressedUp++);
        let lastCommand = pastCommands[pastCommands.length - timesPressedUp];
        document.querySelector(".user-command").value = lastCommand;
    if (document.querySelector(".user-command").value == "undefined") {
        document.querySelector(".user-command").value = "";
    }
    console.log("pressed arrow up");
}

function arrowDownFunction()
{
    if (timesPressedUp == 0) {
        document.querySelector(".user-command").value = "";
        if (document.querySelector(".user-command").value == "undefined") {
            document.querySelector(".user-command").value = "";
        }
    }
    console.log("pressed down");
}

function tabFunction()
{
    e.preventDefault();
    let ongoingInput = document.querySelector(".user-command").value;
    let dict = typeof commandDict[currentlyIn] == "object" ? Object.keys(commandDict[currentlyIn]) : commandDict[currentlyIn];
    ongoingInput === "" ? document.querySelector(".user-command").value = "" : dict.map((cmd) => {
        if (cmd.startsWith(ongoingInput)) document.querySelector(".user-command").value = cmd;
    })
    console.log("pressed tab");
}

let commandOption =
{
    "Enter": enterFunction,
    "ArrowUp": arrowUpFunction,
    "ArrowDown": arrowDownFunction,
    "Tab": tabFunction,
};

// Event listeners
document.addEventListener("keydown", (e) =>
{
    commandOption[e.key]();
})

export let commentsDiv = document.querySelector(".comments");

let themes = ["hacker", "default", "light", "cute"];
let rootCmds =
{
    "get medium": "https://github.com/beekurt98",
    "get github": "https://medium.com/@beekurt",
    "cd themes": "Here are some themes you can change into: ",
    "whoami": "beekurt",
};
let mainCmds = ["clear", "ls", "cd ..", "help", "echo "]; // 
let allCmds = [...mainCmds, ...Object.keys(rootCmds), ...themes];
let currentlyIn = "root";
let commandDict = {
    "root": rootCmds,
    "themes": themes, // where I got to put into the directory
};


let userCommandDiv = document.querySelector(".user-command");
userCommandDiv.addEventListener("focus", (e) => {
  e.preventDefault();
})

function addComment()
{
    let newComment = document.createElement("div");
    newComment.classList.add(".user-comment");

    // Get user comment + add it to the chat screen
    let userCommandDiv = document.querySelector(".user-command");
    let userCommand = document.querySelector(".user-command").value.trim();
    let directory = document.querySelector(".directory");
    if (userCommand === "") {
        commentsDiv.innerHTML += `<label class="green"><span class="yellow">beekurt</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
        return;
    }
    pastCommands.push(userCommand);

    newComment.innerHTML = `<label class="green"><span class="yellow">beekurt</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
    commentsDiv.appendChild(newComment);

    if (allCmds.includes(userCommand)) {
        if (userCommand == "clear") {
            commentsDiv.innerHTML = "";
        } else if (userCommand == "help") {
            let currentDirArray = currentlyIn === "root" ? [...Object.keys(rootCmds), ...mainCmds] : [...themes, ...mainCmds];
            /**
            newComment.innerHTML = `<label class="green"><span class="yellow">beekurt</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
            */
            commentsDiv.innerHTML += `<ul> ${currentDirArray.map((command) => {
                return `<li class="ls-item"> ${command}</li>`;
            }).join("")} </ul>`;
        }
        else if (userCommand == "ls") {
            if (currentlyIn === "themes") {
                commentsDiv.innerHTML += `<div class="ls-cont"> ${[...themes, "root"].map((theme) => {
                    return `<div class="ls-item">${theme}</div>`;
                }).join("")} </div>`;
            } else {
                commentsDiv.innerHTML += `<div class="ls-cont"> ${Object.keys(rootCmds).map((command) => {
                    return `<div class="ls-item">${command}</div>`;
                }).join("")} </div>`;
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
            directory.innerHTML = directories.map((x) => {
                if (x !== "") return `/${x}`;
            }).join('');
        } else if (currentlyIn === "root" && Object.keys(rootCmds).includes(userCommand) || themes.includes(userCommand)) {
            if (userCommand.startsWith("get ")) {
                window.open(rootCmds[userCommand]);
                return;
            } else if (userCommand === "experience" || userCommand === "certificates" || userCommand === "education") {
                commentsDiv.innerHTML += `<ul>${rootCmds[userCommand].map((x) => {
                    return `<li>${x}</li>`;
                }).join("")}</ul>`;
                userCommandDiv.value = "";
                return;
            } if (userCommand === "cd themes") {
                currentlyIn = "themes";
                directory.innerHTML += "/themes";
                commentsDiv.innerHTML += `<ul>${themes.map((theme) => {
                    return `<li>${theme}</li>`;
                }).join("")}</ul>`;
            } else if (currentlyIn === "themes" && themes.includes(userCommand)) {
                changeTheme(userCommand);
            } else {
                commentsDiv.innerHTML += rootCmds[userCommand];
            }
        } else if (currentlyIn === "themes" && Object.keys(rootCmds).includes(userCommand)) {
            handleInvalidCommand(userCommand);
        }
    }
    else
    {
        if (allCmds.map(cmd => `${cmd.includes(userCommand.substring(0, 4))}`).includes("true"))
        {
            // console.log("this hit!");
            // commentsDiv.innerHTML += `<div class="ls-cont"> ${[...mainCmds, "root"].map((mainCmd) => {
            //     return `<div class="ls-item">+++ ${mainCmd}</div>`;
            // }).join("")} </div>`;
            commentsDiv.innerHTML += `<div class="white"> ${userCommand.substring(4, userCommand.length)} </div>`;
        }
        else
        {
            handleInvalidCommand(userCommand);
        }
    }
    userCommandDiv.value = "";
}
function changeTheme(theme) {
    let domBody = document.querySelector("body");
    let pastTheme = domBody.className;
    theme == "light" ? commentsDiv.innerHTML += `<div>"${theme}" theme selected. Protect your eyes!</div>` : commentsDiv.innerHTML += `<div>"${theme}" theme selected.</div>`;
    domBody.classList.remove(pastTheme);
    domBody.classList.add(theme);
}

function handleInvalidCommand(cmmd) {
    commentsDiv.innerHTML += `zsh: command not found: ${cmmd}`;
}