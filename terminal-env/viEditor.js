// import { desiredUserCommand } from "./terminal-mechanics.js";

let viTypeArea = document.getElementsByClassName("user-command-vi")[0];
// document.getElementById("modeLabel").innerHTML =
//   `"${desiredUserCommand}" [New File]`;

function modelabel() {
  let content = viTypeArea.value;
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      document.getElementById("modeLabel").innerHTML += "";
      if (
        document.getElementById("mode-change").value === ":x" ||
        document.getElementById("mode-change").value === ":X"
      ) {
        // save into the file....
        window.location.replace("terminal-mechanics.js");
      } else {
        document.getElementById("modeLabel").innerHTML += "";
      }
    }
  }); // keep track of the esc key >.<

  if (content.startsWith("i") || content.startsWith("I") || content !== "") {
    document.getElementById("modeLabel").innerHTML += "--INSERT--";
  }
  // return the value to export into the fil....
}

viTypeArea.addEventListener("input", modelabel);
