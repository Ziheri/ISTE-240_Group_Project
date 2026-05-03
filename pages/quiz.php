<?php
    session_start();
    include "../assets/files/nav.php";
?>

    <div id="quiz_container">
        <h1>UNIX Quiz</h1>

        <form id="quiz_form" method='POST' action='ISTE-240_Group_Project/pages/quiz_score_submit.php'>

           
            <div id="q1_block">
                <p>1. What organization was UNIX originally developed from?</p>
                <p><label><input type="radio" name="q1" value="A"> A.) Microsoft</label></p>
                <p><label><input type="radio" name="q1" value="B"> B.) Bell Labs</label></p>
                <p><label><input type="radio" name="q1" value="C"> C.) IBM</label></p>
                <p><label><input type="radio" name="q1" value="D"> D.) Apple</label></p>
            </div>

            
            <div id="q2_block">
                <p>2. Who developed the Linux operating system?</p>
                <p><label><input type="radio" name="q2" value="A"> A.) Linus Torvalds</label></p>
                <p><label><input type="radio" name="q2" value="B"> B.) Richard Stallman</label></p>
                <p><label><input type="radio" name="q2" value="C"> C.) Steve Jobs</label></p>
                <p><label><input type="radio" name="q2" value="D"> D.) Bill Gates</label></p>
            </div>

          
            <div id="q3_block">
                <p>3. Which command lists the files and directories in the current folder?</p>
                <p><label><input type="radio" name="q3" value="A"> A.) pwd</label></p>
                <p><label><input type="radio" name="q3" value="B"> B.) ls</label></p>
                <p><label><input type="radio" name="q3" value="C"> C.) cd</label></p>
                <p><label><input type="radio" name="q3" value="D"> D.) cp</label></p>
            </div>

        
            <div id="q4_block">
                <p>4. Which command changes the current directory?</p>
                <p><label><input type="radio" name="q4" value="A"> A.) cd</label></p>
                <p><label><input type="radio" name="q4" value="B"> B.) ls</label></p>
                <p><label><input type="radio" name="q4" value="C"> C.) mv</label></p>
                <p><label><input type="radio" name="q4" value="D"> D.) pwd</label></p>
            </div>

           
            <div id="q5_block">
                <p>5. Which command prints the current working directory?</p>
                <p><label><input type="radio" name="q5" value="A"> A.) dir</label></p>
                <p><label><input type="radio" name="q5" value="B"> B.) ls</label></p>
                <p><label><input type="radio" name="q5" value="C"> C.) pwd</label></p>
                <p><label><input type="radio" name="q5" value="D"> D.) cd</label></p>
            </div>

         
            <div id="q6_block">
                <p>6. Which command is used to copy files from one location to another?</p>
                <p><label><input type="radio" name="q6" value="A"> A.) mv</label></p>
                <p><label><input type="radio" name="q6" value="B"> B.) cp</label></p>
                <p><label><input type="radio" name="q6" value="C"> C.) ls</label></p>
                <p><label><input type="radio" name="q6" value="D"> D.) rm</label></p>
            </div>

          
            <div id="q7_block">
                <p>7. Which command deletes a file?</p>
                <p><label><input type="radio" name="q7" value="A"> A.) rm</label></p>
                <p><label><input type="radio" name="q7" value="B"> B.) cp</label></p>
                <p><label><input type="radio" name="q7" value="C"> C.) mkdir</label></p>
                <p><label><input type="radio" name="q7" value="D"> D.) ls</label></p>
            </div>

          
            <div id="q8_block">
                <p>8. Which project started by Richard Stallman aimed to build a free Unix-like operating system?</p>
                <p><label><input type="radio" name="q8" value="A"> A.) BSD</label></p>
                <p><label><input type="radio" name="q8" value="B"> B.) GNU</label></p>
                <p><label><input type="radio" name="q8" value="C"> C.) Solaris</label></p>
                <p><label><input type="radio" name="q8" value="D"> D.) DOS</label></p>
            </div>

         
            <div id="q9_block">
                <p>9. In what year was UNIX first developed?</p>
                <p><label><input type="radio" name="q9" value="A"> A.) 1969</label></p>
                <p><label><input type="radio" name="q9" value="B"> B.) 1975</label></p>
                <p><label><input type="radio" name="q9" value="C"> C.) 1985</label></p>
                <p><label><input type="radio" name="q9" value="D"> D.) 1991</label></p>
            </div>

        
            <div id="q10_block">
                <p>10. Which programming language was UNIX largely rewritten in during the early 1970s, making it more portable?</p>
                <p><label><input type="radio" name="q10" value="A"> A.) Assembly</label></p>
                <p><label><input type="radio" name="q10" value="B"> B.) C</label></p>
                <p><label><input type="radio" name="q10" value="C"> C.) C++</label></p>
                <p><label><input type="radio" name="q10" value="D"> D.) Python</label></p>
            </div>

            <button type="button" id="quiz_submit">Submit Quiz</button>
        </form>

        <p id="quiz_result"></p>
    </div>

    <script>
        const isLoggedIn = <?php echo isset($_SESSION['username']) ? 'true' : 'false'; ?>;
        const loggedInUser = <?php echo isset($_SESSION['username']) ? json_encode($_SESSION['username']) : 'null'; ?>;
    </script>
    <script src="../assets/js/quiz.js"></script>
</body>
</html>
