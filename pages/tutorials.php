<?php
    session_start();
    include "../assets/files/nav.php";
?>
    <h1>Tutorial</h1>
    
    <div id="tutorials_layout">
    <?php 
        include "../assets/files/sidebar.php"; 
    ?>
        <div id="tutorials_content">

            <div id="requirements" class="tutorial_section">
            <h2>Requirements & Setup</h2>
            <h3>Operating System</h3>
            <ul>
                <li>Windows</li>
                <li>Mac OS</li>
                <li>Linux</li>
            </ul>
            <h3>Setup</h3>
            <ul>
                <li>Windows</li>
                <ul>
                    <li>Windows Subsystem for linux (WSL) to make a unix like environment</li>
                    <li>For the full unix environment you would need a vm (virtual machine)</li>
                </ul>
                <li>MacOS</li>
                <ul>
                    <li>Using terminal to install the code  line tools xcode-select --install and /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com)" **this is installing homebrew**</li>
                    <li>UTM (VM to run a separate unix operating system..)</li>
                </ul>
                <li>Unix</li>
                <ul>
                    <li>Install the NixOS and get the GNOME of Plasma ISO</li>
                    <li>Install nix package manager (on existing linux)</li>
                </ul>
            </ul>
        </div>
        <div id="file-system" class="tutorial_section">
            <h2>File System Hierarchy</h2>

            <h3>Opening up the Command Line Interface</h3>
            <p>
                The CLI (Command Line Interface) lets you interact directly with your operating system through typed commands.
                On Linux and macOS, open the Terminal application.
                On Windows with WSL, open Windows Terminal and select your Linux distribution.
            </p>

            <h3>Navigation and Listing Commands</h3>
            <ul>
                <li>
                    <b>ls</b> - Lists files and directories in your current location.
                </li>
                <li>
                    <b>man</b> - Opens the manual page for any command. Example: man ls. Press q to exit.
                </li>
                <li>
                    <b>cd</b> - Change Directory. Move into a folder. Example: cd Documents
                </li>
                <li>
                    <b>ls -a</b> - Lists all files including hidden files (files that start with a dot).
                </li>
                <li>
                    <b>mkdir</b> - Make a new directory (folder). Example: mkdir myfolder
                </li>
                <li>
                    <b>rmdir</b> - Remove an empty directory.
                </li>
                <li>
                    <b>rm</b> - Remove (delete) a file. Use rm -r to remove a directory and everything inside it.
                </li>
                <li>
                    <b>pwd</b> - Print Working Directory. Shows the full path of where you currently are.
                </li>
                <li>
                    <b>cd ..</b> - Move up one directory level to the parent folder.
                </li>
                <li>
                    <b>touch filename</b> - Create a new empty file. Example: touch notes.txt
                </li>
                <li>
                    <b>cd ~</b> - Jump directly to your home directory from anywhere.
                </li>
                <li>
                    <b>cp</b> - Copy a file from one location to another. Example: cp file.txt backup.txt
                </li>
                <li>
                    <b>mv</b> - Move or rename a file or directory. Example: mv old.txt new.txt
                </li>
                <li>
                    <b>clear</b> - Clears the terminal screen. Your previous output is still accessible by scrolling up.
                </li>
                <li>
                    <b>history</b> - Shows a numbered list of previously run commands.
                    You can also use the up and down arrow keys on your keyboard to cycle through previous commands directly in the terminal without needing to type history.
                </li>
                <li>
                    <b>cat</b> - Print the contents of a file to the terminal. Example: cat notes.txt
                </li>
                <li>
                    <b>echo</b> - Print text to the terminal. Example: echo "Hello World"
                </li>
                <li>
                    <b>grep</b> - Search for a pattern inside a file. Example: grep "root" /etc/passwd
                </li>
                <li>
                    <b>the greater than symbol ( redirects output )</b> - Redirects the output of a command into a file, overwriting it.
                    Example: echo "hello" followed by the greater than symbol followed by file.txt
                </li>
                <li>
                    <b>whoami</b> - Prints the name of the currently logged in user.
                </li>
                <li>
                    <b>pipe ( | )</b> - Takes the output of one command and sends it as input to another.
                    Example: ls -l | grep ".txt"
                </li>
                <li>
                    <b>who</b> - Shows all users currently logged into the system.
                </li>
                <li>
                    <b>the less than symbol ( redirects input )</b> - Redirects input from a file into a command.
                    Example: cat followed by the less than symbol followed by file.txt
                </li>
                <li>
                    <b>two greater than symbols ( append )</b> - Appends output to a file without overwriting it.
                    Example: echo "new line" followed by two greater than symbols followed by log.txt
                </li>
                <li>
                    <b>asterisk ( * ) wildcard</b> - Matches any number of characters in filenames.
                    Example: rm *.log deletes all files ending in .log
                </li>
            </ul>
        </div>
        <div id="security" class="tutorial_section">
            <h2>Security and Permissions</h2>

            <h3>Read, Write and Execute</h3>
            <p>
                Every file and directory in UNIX has three permission types, each assigned to three different identity groups:
                the owner, the group, and everyone else (others).
            </p>
            <ul>
                <li><b>r - Read:</b> On a file, view its contents. On a directory, list what is inside it.</li>
                <li><b>w - Write:</b> On a file, edit or delete it. On a directory, create or delete files inside it.</li>
                <li><b>x - Execute:</b> On a file, run it as a program. On a directory, enter it using cd.</li>
            </ul>

            <h3>The Three Numbers That Tell You File Permissions (Octal)</h3>
            <p>
                Each permission type has a numeric value: r = 4, w = 2, x = 1.
                You add the values together to get a single digit for each group (Owner, Group, Others).
            </p>
            <ul>
                <li><b>7</b> - rwx - full permissions ( 4 + 2 + 1 )</li>
                <li><b>6</b> - rw- - read and write only ( 4 + 2 )</li>
                <li><b>5</b> - r-x - read and execute ( 4 + 1 )</li>
                <li><b>4</b> - r-- - read only</li>
                <li><b>0</b> - --- - no permissions at all</li>
            </ul>
            <p>
                The three digits together represent Owner, Group, and Others in that order.
                For example: chmod 755 means the owner has full permissions (7), and both the group and others can read and execute (5).
            </p>

            <h3>Understanding the Output of ls -la</h3>
            <p>Running ls -la shows a detailed list. Each line looks something like this:</p>
            <p>-rwxr-xr-- 1 alice staff 4096 Apr 10 12:00 script.sh</p>
            <ul>
                <li>The first character is the file type. A dash means a regular file, d means a directory, l means a symbolic link.</li>
                <li>Characters 2 through 4 are the owner permissions (rwx in the example above).</li>
                <li>Characters 5 through 7 are the group permissions (r-x).</li>
                <li>Characters 8 through 10 are the permissions for everyone else (r--).</li>
                <li>After that comes the link count, owner name, group name, file size, last modified date, and the file name.</li>
            </ul>

            <h3>Using chmod</h3>
            <ul>
                <li><b>chmod 755 filename</b> - Set permissions using octal notation.</li>
                <li><b>chmod u+x filename</b> - Add execute permission for the file owner using symbolic notation.</li>
                <li><b>chmod go-w filename</b> - Remove write permission from the group and others.</li>
            </ul>

            <h3>ls -l</h3>
            <p>
                Running ls -l lists files with their permissions, owner name, group name, file size, and last modification date.
                Use ls -la to also include hidden files in the output.
            </p>
        </div>

        <!-- Shell and Sub Support -->
        <div id="shell" class="tutorial_section">
            <h2>Shell and Sub Support</h2>

            <h3>Operating System Structure: Hardware to Kernel and Beyond</h3>
            <p>
                Understanding where the shell fits in the operating system helps you understand what it can do.
                The structure from the bottom up is as follows (reference: GeeksForGeeks - Layers of Operating System):
            </p>
            <ul>
                <li>
                    <b>Hardware</b> - The physical components: CPU, RAM, storage drives, network cards, and other devices attached to the machine.
                </li>
                <li>
                    <b>Kernel</b> - The core of the operating system. It manages hardware resources, memory, running processes, and handles system calls.
                    Linux uses the Linux kernel. macOS uses the XNU kernel.
                </li>
                <li>
                    <b>System Calls</b> - The interface between user programs and the kernel.
                    When a program wants to read a file or allocate memory it makes a request to the kernel through a system call.
                </li>
                <li>
                    <b>Shell</b> - A command interpreter that sits on top of the OS.
                    It reads your typed commands and passes them to the kernel to be executed.
                    Common shells include bash, zsh, sh, and fish.
                </li>
                <li>
                    <b>User Space</b> - Everything you interact with as a regular user lives here: applications, scripts, utilities, and your terminal sessions.
                </li>
            </ul>
        </div>
        <div id="scripting" class="tutorial_section">
            <h2>Scripting</h2>

            <h3>How to Program in the Terminal</h3>
            <p>
                Shell scripts let you automate tasks by writing a sequence of commands into a file and running it all at once.
                A script file typically ends in .sh and must be made executable before you can run it.
            </p>
            <ul>
                <li><b>touch script.sh</b> - Create a new script file.</li>
                <li><b>chmod +x script.sh</b> - Give the script execute permission so it can be run.</li>
                <li><b>./script.sh</b> - Run the script from the current directory.</li>
            </ul>

            <h3>Using Vi, Vim or Neovim</h3>
            <p>
                Vi is a terminal-based text editor that comes installed on nearly every UNIX system.
                Vim (Vi Improved) and Neovim are modern versions with additional features.
                They work in different modes: Normal mode for navigating, and Insert mode for typing and editing.
            </p>
            <ul>
                <li><b>vi filename</b> - Open a file in Vi.</li>
                <li><b>vim filename</b> - Open a file in Vim.</li>
                <li><b>nvim filename</b> - Open a file in Neovim (if installed).</li>
                <li><b>i</b> - Enter Insert mode so you can type and edit text.</li>
                <li><b>Esc</b> - Return to Normal mode from Insert mode.</li>
                <li><b>:w</b> - Save (write) the file.</li>
                <li><b>:q</b> - Quit the editor.</li>
                <li><b>:wq</b> - Save and quit at the same time.</li>
                <li><b>:q!</b> - Force quit without saving any changes.</li>
            </ul>

            <h3>Updating the OS Through the Terminal (Optional)</h3>
            <p>You can update your entire Linux or macOS system from the terminal using your package manager.</p>
            <ul>
                <li><b>sudo apt update</b> - Fetch the latest package list on Debian or Ubuntu based systems.</li>
                <li><b>sudo apt upgrade</b> - Install all available updates on Debian or Ubuntu.</li>
                <li><b>sudo pacman -Syu</b> - Update all packages on Arch Linux.</li>
                <li><b>brew update</b> then <b>brew upgrade</b> - Update Homebrew and all installed packages on macOS.</li>
            </ul>
            </div>
        </div>
    </div>                
</body>
</html>