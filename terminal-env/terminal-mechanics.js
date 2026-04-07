// VARIABLES
let pastCommands = [];
let timesPressedUp = 0;

//helper functions....
function enterFunction()
{
    timesPressedUp = 0;
    addComment();
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
    // commandOption.keys().has(e.key)
    if (e.key in commandOption)
    {
        commandOption[e.key]();
    }
})

function clearingFunction()
{
    commentsDiv.innerHTML = "";
}

function helpFeauture()
{
    let currentDirArray = currentlyIn === "root" ? [...Object.keys(rootCmds), ...mainCmds] : [...themes, ...mainCmds];
        commentsDiv.innerHTML += `<ul> ${currentDirArray.map((command) => {
            return `<li class="ls-item"> ${command}</li>`;
        }).join("")} </ul>`;
}

function goingBackDir()
{
    let directory = document.querySelector(".directory");
    if (currentlyIn == "root")
    {
        commentsDiv.innerHTML += "";
        userCommandDiv.value = "";
    }
    currentlyIn = "root";
    let directories = directory.innerText.split("/");
    directories.pop();
    directory.innerHTML = "";
    directory.innerHTML = directories.map((x) => {
        if (x !== "") return `/${x}`;
    }).join('');
}

function listingDirs()
{
    if (currentlyIn === "themes") // make it get into different directories to show..
    {
        commentsDiv.innerHTML += `<div class="ls-cont"> ${[...themes, "root"].map((theme) => {
            `<div class="ls-item">${theme}</div>`;
        }).join("")} </div>`;
    }
    else
    {
        commentsDiv.innerHTML += `<div class="ls-cont"> ${Object.keys(rootCmds).map((command) => {
            return `<div class="ls-item">${command}</div>`;
        }).join("")} </div>`;
    }
}

export let commentsDiv = document.querySelector(".comments");

let themes = ["hacker", "default", "light", "cute"];
let rootCmds =
{
    "whoami": "beekurt",
    "clear": clearingFunction,
    "help": helpFeauture,
    "cd ..": goingBackDir,
    "ls": listingDirs,
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
    // let directory = document.querySelector(".directory");

    if (userCommand === "")
    {
        commentsDiv.innerHTML += `<label class="green"><span class="yellow">beekurt</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
    }
    pastCommands.push(userCommand);

    newComment.innerHTML = `<label class="green"><span class="yellow">beekurt</span>@user:~$ <span class="white">${userCommand}</span> </label>`;
    commentsDiv.appendChild(newComment);
    if (allCmds.includes(userCommand))
    {
        rootCmds[userCommand]();
    }
    else
    {
        if (allCmds.map(cmd => `${cmd.includes(userCommand.substring(0, 4))}`).includes("true"))
        {
            commentsDiv.innerHTML += `<div class="white"> ${userCommand.substring(4, userCommand.length)} </div>`;
        }
        else
        {
            handleInvalidCommand(userCommand);
        }
    }
    userCommandDiv.value = "";
}
function changeTheme(theme) { // used to change directories
    let domBody = document.querySelector("body");
    let pastTheme = domBody.className;
    theme == "light" ? commentsDiv.innerHTML += `<div>"${theme}" theme selected. Protect your eyes!</div>` : commentsDiv.innerHTML += `<div>"${theme}" theme selected.</div>`;
    domBody.classList.remove(pastTheme);
    domBody.classList.add(theme);
}

function handleInvalidCommand(cmmd)
{
    commentsDiv.innerHTML += `zsh: command not found: ${cmmd}`;
}