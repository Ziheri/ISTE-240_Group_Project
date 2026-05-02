function modelabel() {
  console.log("in the mode label function");
  let content = document.querySelector("user-command-vi").value;
  console.log("content before: " + content);
  document.getElementById("modeLabel").innerHTML =
    `"${desiredUserCommand}" [New File]`;

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      document.getElementById("modeLabel").innerHTML += "";
    }
  }); // keep track of the esc key >.<

  if (content[0] === "i" || content !== "") {
    document.getElementById("modeLabel").innerHTML += "--INSERT--";
  }

  console.log("content after: " + content);

  // return the value to export into the fil....
}
