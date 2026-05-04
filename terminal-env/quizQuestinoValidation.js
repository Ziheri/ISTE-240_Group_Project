import { pastCommands } from "./terminal-mechanics";

function q1() {
  // List all files in your current directory, including hidden ones.
  if (pastCommands.include("ls -a")) {
    return true;
  }
  return false;
}
function q2() {
  // Create a new directory called practice, then navigate into it.
  if (pastCommands.include("mkdir practice")) {
    return true;
  }
  return false;
}
function q3() {
  // Create an empty file called notes.txt inside your practice directory.
  if (pastCommands.include("touch notes.txt")) {
    return true;
  }
  return false;
}
function q4() {
  // Create an empty file called notes.txt inside your practice directory.
  if (pastCommands.include("cd ..")) {
    return true;
  }
  return false;
}
function q5() {
  // Copy notes.txt to a new file called notes_backup.txt in the same directory.
  if (pastCommands.include("cp notes.txt notes_backup.txt")) {
    return true;
  }
  return false;
  //
}
function q6() {
  // Rename notes_backup.txt to archive.txt.
  if (pastCommands.include("mv hello.txt")) {
    return true;
  }
  return false;
}
function q7() {
  // Write the text Hello terminal into a file called hello.txt using a single command.
  if (pastCommands.include("vi hello.txt")) {
    return true;
  }
  return false;
}
function q8() {
  // Append the line Second line to hello.txt without overwriting what's already there.
  if (pastCommands.include("echo Second line >> hello.txt")) {
    return true;
  }
  return false;
}
function q9() {
  // Search for the word terminal inside hello.txt.
  if (pastCommands.include("grep terminal hello.txt")) {
    return true;
  }
  return false;
}
function q10() {
  if (pastCommands.include("whoami")) {
    return true;
  }
  return false;
}
function q11() {
  //
}
function q12() {
  if (pastCommands.include("cd ~")) {
    return true;
  }
  return false;
}
function q13() {
  if (pastCommands.include("clear")) {
    return true;
  }
  return false;
}
function q14() {
  if (pastCommands.include("touch hello.sh")) {
    if (pastCommands.include("touch hello.sh")) {
      return true;
    }
  }
  return false;
}
