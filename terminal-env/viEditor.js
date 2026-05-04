import { setingFileSys, defaultJSONFileSys } from "./terminal-mechanics.js";

export let updatedContented = "";

function updateContent(update) {
  let savedPath = sessionStorage.getItem("currentFilePath");
  let savedFile = sessionStorage.getItem("editingFile");

  let fileDirections = savedPath.split("/").filter((part) => part !== "");

  let currentDirectory = defaultJSONFileSys[fileDirections[0]];
  console.log("current directory???: " + currentDirectory);
  for (let i = 1; i < fileDirections.length; i += 1) {
    let currentKey = fileDirections[i];
    currentDirectory = currentDirectory[currentKey];
  }
  currentDirectory[`${savedFile}`] = update;
  setingFileSys();
}

if (window.location.pathname.endsWith("viEditor.php")) {
  let viTypeArea = document.getElementsByClassName("user-command-vi")[0];

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      document.getElementById("modeLabel").innerHTML += "";
      document.getElementById("modeLabel").style.display = "none";
      document.getElementById("mode-change").style.display = "inline";
      viTypeArea.readOnly = true;
    }
    if (e.key === "i") {
      if (viTypeArea.readOnly) {
        e.preventDefault();
        document.getElementById("modeLabel").style.display = "inline";
        document.getElementById("mode-change").style.display = "none";
        document.getElementById("modeLabel").innerHTML = "--INSERT--";
        viTypeArea.readOnly = false;
        viTypeArea.focus();
      }
    }
    if (
      (document.getElementById("mode-change").value === ":x" ||
        document.getElementById("mode-change").value === ":X") &&
      e.key === "Enter"
    ) {
      // save into the file....
      e.preventDefault();
      console.log("this is saved");
      updatedContented = viTypeArea.value;
      updateContent(updatedContented);
      window.location.replace("terminalHome.php");
    }
  }); // keep track of the esc key >.<

  function modelabel() {
    let content = viTypeArea.value;

    if (content.startsWith("i") || content.startsWith("I") || content !== "") {
      document.getElementById("modeLabel").innerHTML = "--INSERT--";
      viTypeArea.readOnly = false;
    }
    // return the value to export into the fil....
  }

  viTypeArea.addEventListener("input", modelabel);
}
