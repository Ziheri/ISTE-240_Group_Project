function modelabel() {
  console.log("in the mode label function");
  let content = document.querySelector("user-command-vi").value;
  console.log("content before: " + content);
  document.getElementById("modeLabel").innerHTML =
    `"${desiredUserCommand}" [New File]`;

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

  if (content.startWith("i") || content.startWith("I") || content !== "") {
    document.getElementById("modeLabel").innerHTML += "--INSERT--";
  }

  console.log("content after: " + content);

  // return the value to export into the fil....
}
