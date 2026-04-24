export let generalCommnads = {
  whoami: `<h3>NAME</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;whoami – display effective user id</p>

            <h3>SYNOPSIS</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;whoami</p>

            <h3>DESCRIPTION</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;The whoami utility has been obsoleted by the id(1) utility, and is</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;equivalent to “id -un”.  The command “id -p” is suggested for normal</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;interactive use.</p>
              <br>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;The whoami utility displays your effective user ID as a name.</p>

            <h3>EXIT STATUS</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;The whoami utility exits 0 on success, and >0 if an error occurs.</p>

            <h3>SEE ALSO</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;id(1)</p>`,
  clear: `<h3>NAME</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;clear - clear the terminal screen</p>

            <h3>SYNOPSIS</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;clear</p>

            <h3>DESCRIPTION</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;clear clears your screen if this is possible, including its scrollback</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;buffer (if the extended "E3" capability is defined).  clear looks in</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;the environment for the terminal type and then in the terminfo database</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;to determine how to clear the screen.</p>

              <p>&nbsp;&nbsp;&nbsp;&nbsp;clear ignores any command-line parameters that may be present.</p>

            <h3>SEE ALSO</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;tput(1), terminfo(5)</p>

            <p>This describes ncurses version 5.7 (patch 20081102).</p>`,
  pwd: `<h3>NAME</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;pwd – return working directory name</p>

          <h3>SYNOPSIS</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;pwd [-L | -P]</p>

          <h3>DESCRIPTION</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;The pwd utility writes the absolute pathname of the current working</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;directory to the standard output.</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;Some shells may provide a builtin pwd command which is similar or</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;identical to this utility.  Consult the builtin(1) manual page.</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;The options are as follows:</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;-L      Display the logical current working directory.</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;-P      Display the physical current working directory (all symbolic</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;links resolved).</p>

            <p>If no options are specified, the -L option is assumed.</p>`, //
  echo: `<h3>NAME</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;echo – write arguments to the standard output</p>

            <h3>SYNOPSIS</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;echo [-n] [string ...]</p>

            <h3>DESCRIPTION</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;The echo utility writes any specified operands, separated by single blank</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;(‘ ’) characters and followed by a newline (‘\n’) character, to the</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;standard output.</p>

            <p>The following option is available:</p>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;Do not print the trailing newline character.  This may also be</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;achieved by appending ‘\c’ to the end of the string, as is done by</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iBCS2 compatible systems.  Note that this option as well as the</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;effect of ‘\c’ are implementation-defined in IEEE Std 1003.1-2001</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(“POSIX.1”) as amended by Cor. 1-2002.  Applications aiming for</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maximum portability are strongly encouraged to use printf(1) to</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;suppress the newline character.</p>`, //
  mkdir: `NAME
     mkdir – make directories

SYNOPSIS
     mkdir [-pv] [-m mode] directory_name ...

DESCRIPTION
     The mkdir utility creates the directories named as operands, in the order specified, using
     mode “rwxrwxrwx” (0777) as modified by the current umask(2).

     The options are as follows:

     -m mode        Set the file permission bits of the final created directory to the specified
                    mode.  The mode argument can be in any of the formats specified to the
                    chmod(1) command.  If a symbolic mode is specified, the operation characters
                    ‘+’ and ‘-’ are interpreted relative to an initial mode of “a=rwx”.

     -p             Create intermediate directories as required.  If this option is not specified,
                    the full path prefix of each operand must already exist.  On the other hand,
                    with this option specified, no error will be reported if a directory given as
                    an operand already exists.  Intermediate directories are created with
                    permission bits of “rwxrwxrwx” (0777) as modified by the current umask, plus
                    write and search permission for the owner.

     -v             Be verbose when creating directories, listing them as they are created.

     The user must have write permission in the parent directory.

EXIT STATUS
     The mkdir utility exits 0 on success, and >0 if an error occurs.

EXAMPLES
     Create a directory named foobar:

           $ mkdir foobar

     Create a directory named foobar and set its file mode to 700:

           $ mkdir -m 700 foobar

     Create a directory named cow/horse/monkey, creating any non-existent intermediate directories
     as necessary:

           $ mkdir -p cow/horse/monkey

COMPATIBILITY
     The -v option is non-standard and its use in scripts is not recommended.

SEE ALSO
     rmdir(1)

STANDARDS
     The mkdir utility is expected to be IEEE Std 1003.2 (“POSIX.2”) compatible.

HISTORY
     A mkdir command appeared in Version 1 AT&T UNIX.`,
  rmdir: `NAME
     rmdir – remove directories

SYNOPSIS
     rmdir [-pv] directory ...

DESCRIPTION
     The rmdir utility removes the directory entry specified by each directory argument, provided
     it is empty.

     Arguments are processed in the order given.  In order to remove both a parent directory and a
     subdirectory of that parent, the subdirectory must be specified first so the parent directory
     is empty when rmdir tries to remove it.

     The following option is available:

     -p      Each directory argument is treated as a pathname of which all components will be
             removed, if they are empty, starting with the last most component.  (See rm(1) for
             fully non-discriminant recursive removal.)

     -v      Be verbose, listing each directory as it is removed.

EXIT STATUS
     The rmdir utility exits with one of the following values:

     0       Each directory entry specified by a directory operand referred to an empty directory
             and was removed successfully.

     >0      An error occurred.

EXAMPLES
     Remove the directory foobar, if it is empty:

           $ rmdir foobar

     Remove all directories up to and including cow, stopping at the first non-empty directory (if
     any):

           $ rmdir -p cow/horse/monkey

SEE ALSO
     rm(1)

STANDARDS
     The rmdir utility is expected to be IEEE Std 1003.2 (“POSIX.2”) compatible.

HISTORY
     A rmdir command appeared in Version 1 AT&T UNIX.`,
  rm: `NAME
     rm, unlink – remove directory entries

SYNOPSIS
     rm [-f | -i] [-dIRrvWx] file ...
     unlink [--] file

DESCRIPTION
     The rm utility attempts to remove the non-directory type files specified on the command line.
     If the permissions of the file do not permit writing, and the standard input device is a
     terminal, the user is prompted (on the standard error output) for confirmation.

     The options are as follows:

     -d      Attempt to remove directories as well as other types of files.

     -f      Attempt to remove the files without prompting for confirmation, regardless of the
             file's permissions.  If the file does not exist, do not display a diagnostic message
             or modify the exit status to reflect an error.  The -f option overrides any previous
             -i options.

     -i      Request confirmation before attempting to remove each file, regardless of the file's
             permissions, or whether or not the standard input device is a terminal.  The -i
             option overrides any previous -f options.

     -I      Request confirmation once if more than three files are being removed or if a
             directory is being recursively removed.  This is a far less intrusive option than -i
             yet provides almost the same level of protection against mistakes.

     -P      This flag has no effect.  It is kept only for backwards compatibility with
             4.4BSD-Lite2.

     -R      Attempt to remove the file hierarchy rooted in each file argument.  The -R option
             implies the -d option.  If the -i option is specified, the user is prompted for
             confirmation before each directory's contents are processed (as well as before the
             attempt is made to remove the directory).  If the user does not respond
             affirmatively, the file hierarchy rooted in that directory is skipped.

     -r      Equivalent to -R.

     -v      Be verbose when deleting files, showing them as they are removed.

     -W      Attempt to undelete the named files.  Currently, this option can only be used to
             recover files covered by whiteouts in a union file system (see undelete(2)).

     -x      When removing a hierarchy, do not cross mount points.

     The rm utility removes symbolic links, not the files referenced by the links.

     It is an error to attempt to remove the files /, . or ...

     When the utility is called as unlink, only one argument, which must not be a directory, may
     be supplied.  No options may be supplied in this simple mode of operation, which performs an
     unlink(2) operation on the passed argument.  However, the usual option-end delimiter, --, may
     optionally precede the argument.
     EXIT STATUS
     The rm utility exits 0 if all of the named files or file hierarchies were removed, or if the
     -f option was specified and all of the existing files or file hierarchies were removed.  If
     an error occurs, rm exits with a value >0.

NOTES
     The rm command uses getopt(3) to parse its arguments, which allows it to accept the ‘--’
     option which will cause it to stop processing flag options at that point.  This will allow
     the removal of file names that begin with a dash (‘-’).  For example:

           rm -- -filename

     The same behavior can be obtained by using an absolute or relative path reference.  For
     example:

           rm /home/user/-filename
           rm ./-filename

EXAMPLES
     Recursively remove all files contained within the foobar directory hierarchy:

           $ rm -rf foobar

     Any of these commands will remove the file -f:

           $ rm -- -f
           $ rm ./-f
           $ unlink -f

COMPATIBILITY
     The rm utility differs from historical implementations in that the -f option only masks
     attempts to remove non-existent files instead of masking a large variety of errors.  The -v
     option is non-standard and its use in scripts is not recommended.

     Also, historical BSD implementations prompted on the standard output, not the standard error
     output.

     The -P option does not have any effect as of FreeBSD 13 and may be removed in the future.

SEE ALSO
     chflags(1), rmdir(1), undelete(2), unlink(2), fts(3), getopt(3), symlink(7)

STANDARDS
     The rm command conforms to.

     The simplified unlink command conforms to Version 2 of the Single UNIX Specification
     (“SUSv2”).

HISTORY
     A rm command appeared in Version 1 AT&T UNIX.

BUGS
     The -P option assumes that the underlying file system is a fixed-block file system.  In
     addition, only regular files are overwritten, other types of files are not.`,
  touch: `NAME
     touch – change file access and modification times

SYNOPSIS
     touch [-A [-][[hh]mm]SS] [-achm] [-r file] [-t [[CC]YY]MMDDhhmm[.SS]]
           [-d YYYY-MM-DDThh:mm:SS[.frac][tz]] file ...

DESCRIPTION
     The touch utility sets the modification and access times of files.  If any file does not
     exist, it is created with default permissions.

     By default, touch changes both modification and access times.  The -a and -m flags may be
     used to select the access time or the modification time individually.  Selecting both is
     equivalent to the default.  By default, the timestamps are set to the current time.  The -d
     and -t flags explicitly specify a different time, and the -r flag specifies to set the times
     those of the specified file.  The -A flag adjusts the values by a specified amount.

     The following options are available:

     -A      Adjust the access and modification time stamps for the file by the specified value.
             This flag is intended for use in modifying files with incorrectly set time stamps.

             The argument is of the form “[-][[hh]mm]SS” where each pair of letters represents the
             following:

                   -       Make the adjustment negative: the new time stamp is set to be before
                           the old one.
                   hh      The number of hours, from 00 to 99.
                   mm      The number of minutes, from 00 to 59.
                   SS      The number of seconds, from 00 to 59.

             The -A flag implies the -c flag: if any file specified does not exist, it will be
             silently ignored.

     -a      Change the access time of the file.  The modification time of the file is not changed
             unless the -m flag is also specified.

     -c      Do not create the file if it does not exist.  The touch utility does not treat this
             as an error.  No error messages are displayed and the exit value is not affected.

     -d      Change the access and modification times to the specified date time instead of the
             current time of day.  The argument is of the form “YYYY-MM-DDThh:mm:SS[.frac][tz]”
             where the letters represent the following:
                   YYYY    At least four decimal digits representing the year.
                   MM, DD, hh, mm, SS
                           As with -t time.
                   T       The letter T or a space is the time designator.
                   .frac   An optional fraction, consisting of a period or a comma followed by one
                           or more digits.  The number of significant digits depends on the kernel
                           configuration and the filesystem, and may be zero.
                   tz      An optional letter Z indicating the time is in UTC.  Otherwise, the
                           time is assumed to be in local time.  Local time is affected by the
                           value of the TZ environment variable.

     -h      If the file is a symbolic link, change the times of the link itself rather than the
             file that the link points to.  Note that -h implies -c and thus will not create any
             new files.
             
     -m      Change the modification time of the file.  The access time of the file is not changed
             unless the -a flag is also specified.

     -r      Use the access and modifications times from the specified file instead of the current
             time of day.

     -t      Change the access and modification times to the specified time instead of the current
             time of day.  The argument is of the form “[[CC]YY]MMDDhhmm[.SS]” where each pair of
             letters represents the following:

                   CC      The first two digits of the year (the century).
                   YY      The second two digits of the year.  If “YY” is specified, but “CC” is
                           not, a value for “YY” between 69 and 99 results in a “CC” value of 19.
                           Otherwise, a “CC” value of 20 is used.
                   MM      The month of the year, from 01 to 12.
                   DD      the day of the month, from 01 to 31.
                   hh      The hour of the day, from 00 to 23.
                   mm      The minute of the hour, from 00 to 59.
                   SS      The second of the minute, from 00 to 60.

             If the “CC” and “YY” letter pairs are not specified, the values default to the
             current year.  If the “SS” letter pair is not specified, the value defaults to 0.

EXIT STATUS
     The touch utility exits 0 on success, and >0 if an error occurs.

COMPATIBILITY
     The obsolescent form of touch, where a time format is specified as the first argument, is
     supported.  When no -r or -t option is specified, there are at least two arguments, and the
     first argument is a string of digits either eight or ten characters in length, the first
     argument is interpreted as a time specification of the form “MMDDhhmm[YY]”.

     The “MM”, “DD”, “hh” and “mm” letter pairs are treated as their counterparts specified to the
     -t option.  If the “YY” letter pair is in the range 39 to 99, the year is set to 1939 to
     1999, otherwise, the year is set in the 21st century.

SEE ALSO
     utimensat(2)

STANDARDS
     The touch utility is expected to be a superset of the IEEE Std 1003.2 (“POSIX.2”)
     specification.

HISTORY
     A touch utility appeared in Version 7 AT&T UNIX.`,
  ls: `NAME
     ls – list directory contents

SYNOPSIS
     ls [-@ABCFGHILOPRSTUWabcdefghiklmnopqrstuvwxy1%,] [--color=when] [-D format] [file ...]

DESCRIPTION
     For each operand that names a file of a type other than directory, ls displays its name as
     well as any requested, associated information.  For each operand that names a file of type
     directory, ls displays the names of files contained within that directory, as well as any
     requested, associated information.

     If no operands are given, the contents of the current directory are displayed.  If more than
     one operand is given, non-directory operands are displayed first; directory and non-directory
     operands are sorted separately and in lexicographical order.

     The following options are available:

     -@      Display extended attribute keys and sizes in long (-l) output.

     -A      Include directory entries whose names begin with a dot (‘.’) except for . and ...
             Automatically set for the super-user unless -I is specified.

     -B      Force printing of non-printable characters (as defined by ctype(3) and current locale
             settings) in file names as \XXX, where xxx is the numeric value of the character in
             octal.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -C      Force multi-column output; this is the default when output is to a terminal.

     -D format
             When printing in the long (-l) format, use format to format the date and time output.
             The argument format is a string used by strftime(3).  Depending on the choice of
             format string, this may result in a different number of columns in the output.  This
             option overrides the -T option.  This option is not defined in IEEE Std 1003.1-2008
             (“POSIX.1”).

     -F      Display a slash (‘/’) immediately after each pathname that is a directory, an
             asterisk (‘*’) after each that is executable, an at sign (‘@’) after each symbolic
             link, an equals sign (‘=’) after each socket, a percent sign (‘%’) after each
             whiteout, and a vertical bar (‘|’) after each that is a FIFO.

     -G      Enable colorized output.  This option is equivalent to defining CLICOLOR or COLORTERM
             in the environment and setting --color=auto.  (See below.)  This functionality can be
             compiled out by removing the definition of COLORLS.  This option is not defined in
             IEEE Std 1003.1-2008 (“POSIX.1”).

     -H      Symbolic links on the command line are followed.  This option is assumed if none of
             the -F, -d, or -l options are specified.

     -I      Prevent -A from being automatically set for the super-user.  This option is not
             defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -L      Follow all symbolic links to final target and list the file or directory the link
             references rather than the link itself.  This option cancels the -P option.

     -O      Include the file flags in a long (-l) output.  This option is incompatible with IEEE
             Std 1003.1-2008 (“POSIX.1”).  See chflags(1) for a list of file flags and their
             meanings.
             
    -P      If argument is a symbolic link, list the link itself rather than the object the link
             references.  This option cancels the -H and -L options.

     -R      Recursively list subdirectories encountered.

     -S      Sort by size (largest file first) before sorting the operands in lexicographical
             order.

     -T      When printing in the long (-l) format, display complete time information for the
             file, including month, day, hour, minute, second, and year.  The -D option gives even
             more control over the output format.  This option is not defined in IEEE Std
             1003.1-2008 (“POSIX.1”).

     -U      Use time when file was created for sorting or printing.  This option is not defined
             in IEEE Std 1003.1-2008 (“POSIX.1”).

     -W      Display whiteouts when scanning directories.  This option is not defined in IEEE Std
             1003.1-2008 (“POSIX.1”).

     -X      When listing recursively, do not descend into directories that would cross file
             system boundaries.  More specifically, this option will prevent descending into
             directories that have a different device number.

     -a      Include directory entries whose names begin with a dot (‘.’).

     -b      As -B, but use C escape codes whenever possible.  This option is not defined in IEEE
             Std 1003.1-2008 (“POSIX.1”).

     -c      Use time when file status was last changed for sorting or printing.

     --color=when
             Output colored escape sequences based on when, which may be set to either always,
             auto, or never.

             always will make ls always output color.  If TERM is unset or set to an invalid
             terminal, then ls will fall back to explicit ANSI escape sequences without the help
             of termcap(5).  always is the default if --color is specified without an argument.

             auto will make ls output escape sequences based on termcap(5), but only if stdout is
             a tty and either the -G flag is specified or the COLORTERM environment variable is
             set and not empty.

             never will disable color regardless of environment variables.  never is the default
             when neither --color nor -G is specified.

             For compatibility with GNU coreutils, ls supports yes or force as equivalent to
             always, no or none as equivalent to never, and tty or if-tty as equivalent to auto.

     -d      Directories are listed as plain files (not searched recursively).

     -e      Print the Access Control List (ACL) associated with the file, if present, in long
             (-l) output.

     -f      Output is not sorted.  This option turns on -a.  It also negates the effect of the
             -r, -S and -t options.  As allowed by IEEE Std 1003.1-2008 (“POSIX.1”), this option
             has no effect on the -d, -l, -R and -s options.

     -g      This option has no effect.  It is only available for compatibility with 4.3BSD, where
             it was used to display the group name in the long (-l) format output.  This option is
             incompatible with IEEE Std 1003.1-2008 (“POSIX.1”).

     -h      When used with the -l option, use unit suffixes: Byte, Kilobyte, Megabyte, Gigabyte,
             Terabyte and Petabyte in order to reduce the number of digits to four or fewer using
             base 2 for sizes.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -i      For each file, print the file's file serial number (inode number).

     -k      This has the same effect as setting environment variable BLOCKSIZE to 1024, except
             that it also nullifies any -h options to its left.

     -l      (The lowercase letter “ell”.) List files in the long format, as described in the The
             Long Format subsection below.

     -m      Stream output format; list files across the page, separated by commas.

     -n      Display user and group IDs numerically rather than converting to a user or group name
             in a long (-l) output.  This option turns on the -l option.

     -o      List in long format, but omit the group id.

     -p      Write a slash (‘/’) after each filename if that file is a directory.

     -q      Force printing of non-graphic characters in file names as the character ‘?’; this is
             the default when output is to a terminal.

     -r      Reverse the order of the sort.

     -s      Display the number of blocks used in the file system by each file.  Block sizes and
             directory totals are handled as described in The Long Format subsection below, except
             (if the long format is not also requested) the directory totals are not output when
             the output is in a single column, even if multi-column output is requested.  (-l)
             format, display complete time information for the file, including month, day, hour,
             minute, second, and year.  The -D option gives even more control over the output
             format.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -t      Sort by descending time modified (most recently modified first).  If two files have
             the same modification timestamp, sort their names in ascending lexicographical order.
             The -r option reverses both of these sort orders.

             Note that these sort orders are contradictory: the time sequence is in descending
             order, the lexicographical sort is in ascending order.  This behavior is mandated by
             IEEE Std 1003.2 (“POSIX.2”).  This feature can cause problems listing files stored
             with sequential names on FAT file systems, such as from digital cameras, where it is
             possible to have more than one image with the same timestamp.  In such a case, the
             photos cannot be listed in the sequence in which they were taken.  To ensure the same
             sort order for time and for lexicographical sorting, set the environment variable
             LS_SAMESORT or use the -y option.  This causes ls to reverse the lexicographical sort
             order when sorting files with the same modification timestamp.

     -u      Use time of last access, instead of time of last modification of the file for sorting
             (-t) or long printing (-l).

     -v      Force unedited printing of non-graphic characters; this is the default when output is
             not to a terminal.

     -w      Force raw printing of non-printable characters.  This is the default when output is
             not to a terminal.  This option is not defined in IEEE Std 1003.1-2001 (“POSIX.1”).
             
             -x      The same as -C, except that the multi-column output is produced with entries sorted
             across, rather than down, the columns.

     -y      When the -t option is set, sort the alphabetical output in the same order as the time
             output.  This has the same effect as setting LS_SAMESORT.  See the description of the
             -t option for more details.  This option is not defined in IEEE Std 1003.1-2001
             (“POSIX.1”).

     -%      Distinguish dataless files and directories with a '%' character in long (-l) output,
             and don't materialize dataless directories when listing them.

     -1      (The numeric digit “one”.) Force output to be one entry per line.  This is the
             default when output is not to a terminal.

     -,      (Comma) When the -l option is set, print file sizes grouped and separated by
             thousands using the non-monetary separator returned by localeconv(3), typically a
             comma or period.  If no locale is set, or the locale does not have a non-monetary
             separator, this option has no effect.  This option is not defined in IEEE Std
             1003.1-2001 (“POSIX.1”).

     The -1, -C, -x, and -l options all override each other; the last one specified determines the
     format used.

     The -c, -u, and -U options all override each other; the last one specified determines the
     file time used.

     The -S and -t options override each other; the last one specified determines the sort order
     used.

     The -B, -b, -w, and -q options all override each other; the last one specified determines the
     format used for non-printable characters.

     The -H, -L and -P options all override each other (either partially or fully); they are
     applied in the order specified.

     By default, ls lists one entry per line to standard output; the exceptions are to terminals
     or when the -C or -x options are specified.

     File information is displayed with one or more ⟨blank⟩s separating the information associated
     with the -i, -s, and -l options.

   The Long Format
     If the -l option is given, the following information is displayed for each file: file mode,
     number of links, owner name, group name, number of bytes in the file, abbreviated month, day-
     of-month file was last modified, hour file last modified, minute file last modified, and the
     pathname.  If the file or directory has extended attributes, the permissions field printed by
     the -l option is followed by a '@' character.  Otherwise, if the file or directory has
     extended security information (such as an access control list), the permissions field printed
     by the -l option is followed by a '+' character.  If the -% option is given, a '%' character
     follows the permissions field for dataless files and directories, possibly replacing the '@'
     or '+' character.

     If the modification time of the file is more than 6 months in the past or future, and the -D
     or -T are not specified, then the year of the last modification is displayed in place of the
     hour and minute fields.

     If the owner or group names are not a known user or group name, or the -n option is given,
      the numeric ID's are displayed.

     If the file is a character special or block special file, the device number for the file is
     displayed in the size field.  If the file is a symbolic link the pathname of the linked-to
     file is preceded by “->”.

     The listing of a directory's contents is preceded by a labeled total number of blocks used in
     the file system by the files which are listed as the directory's contents (which may or may
     not include . and .. and other files which start with a dot, depending on other options).

     The default block size is 512 bytes.  The block size may be set with option -k or environment
     variable BLOCKSIZE.  Numbers of blocks in the output will have been rounded up so the numbers
     of bytes is at least as many as used by the corresponding file system blocks (which might
     have a different size).

     The file mode printed under the -l option consists of the entry type and the permissions.
     The entry type character describes the type of file, as follows:

           -     Regular file.
           b     Block special file.
           c     Character special file.
           d     Directory.
           l     Symbolic link.
           p     FIFO.
           s     Socket.
           w     Whiteout.

     The next three fields are three characters each: owner permissions, group permissions, and
     other permissions.  Each field has three character positions:

           1.   If r, the file is readable; if -, it is not readable.

           2.   If w, the file is writable; if -, it is not writable.

           3.   The first of the following that applies:

                      S     If in the owner permissions, the file is not executable and set-user-
                            ID mode is set.  If in the group permissions, the file is not
                            executable and set-group-ID mode is set.

                      s     If in the owner permissions, the file is executable and set-user-ID
                            mode is set.  If in the group permissions, the file is executable and
                            setgroup-ID mode is set.

                      x     The file is executable or the directory is searchable.

                      -     The file is neither readable, writable, executable, nor set-user-ID
                            nor set-group-ID mode, nor sticky.  (See below.)

                These next two apply only to the third character in the last group (other
                permissions).

                      T     The sticky bit is set (mode 1000), but not execute or search
                            permission.  (See chmod(1) or sticky(7).)

                      t     The sticky bit is set (mode 1000), and is searchable or executable.
                            (See chmod(1) or sticky(7).)

     The next field contains a plus (‘+’) character if the file has an ACL, or a space (‘ ’) if it
     does not.  The ls utility does not show the actual ACL unless the -e option is used in
     conjunction with the -l option.

ENVIRONMENT
     The following environment variables affect the execution of ls:

     BLOCKSIZE           If this is set, its value, rounded up to 512 or down to a multiple of
                         512, will be used as the block size in bytes by the -l and -s options.
                         See The Long Format subsection for more information.

     CLICOLOR            Use ANSI color sequences to distinguish file types.  See LSCOLORS below.
                         In addition to the file types mentioned in the -F option some extra
                         attributes (setuid bit set, etc.) are also displayed.  The colorization
                         is dependent on a terminal type with the proper termcap(5) capabilities.
                         The default “cons25” console has the proper capabilities, but to display
                         the colors in an xterm(1), for example, the TERM variable must be set to
                         “xterm-color”.  Other terminal types may require similar adjustments.
                         Colorization is silently disabled if the output is not directed to a
                         terminal unless the CLICOLOR_FORCE variable is defined or --color is set
                         to “always”.

     CLICOLOR_FORCE      Color sequences are normally disabled if the output is not directed to a
                         terminal.  This can be overridden by setting this variable.  The TERM
                         variable still needs to reference a color capable terminal however
                         otherwise it is not possible to determine which color sequences to use.

     COLORTERM           See description for CLICOLOR above.

     COLUMNS             If this variable contains a string representing a decimal integer, it is
                         used as the column position width for displaying multiple-text-column
                         output.  The ls utility calculates how many pathname text columns to
                         display based on the width provided.  (See -C and -x.)

     LANG                The locale to use when determining the order of day and month in the long
                         -l format output.  See environ(7) for more information.

     LSCOLORS            The value of this variable describes what color to use for which
                         attribute when colors are enabled with CLICOLOR or COLORTERM.  This
                         string is a concatenation of pairs of the format fb, where f is the
                         foreground color and b is the background color.

                         The color designators are as follows:

                               a     black
                               b     red
                               c     green
                               d     brown
                               e     blue
                               f     magenta
                               g     cyan
                               h     light grey
                               A     bold black, usually shows up as dark grey
                               B     bold red
                               C     bold green
                               D     bold brown, usually shows up as yellow
                               E     bold blue
                               F     bold magenta
                               G     bold cyan
                               H     bold light grey; looks like bright white
                               x     default foreground or background
                          Note that the above are standard ANSI colors.  The actual display may
                         differ depending on the color capabilities of the terminal in use.

                         The order of the attributes are as follows:

                               1.   directory
                               2.   symbolic link
                               3.   socket
                               4.   pipe
                               5.   executable
                               6.   block special
                               7.   character special
                               8.   executable with setuid bit set
                               9.   executable with setgid bit set
                               10.  directory writable to others, with sticky bit
                               11.  directory writable to others, without sticky bit
                               12.  dataless file
                               
                         The default is "exfxcxdxbxegedabagacadah", i.e., blue foreground and
                         default background for regular directories, black foreground and red
                         background for setuid executables, etc.

     LS_COLWIDTHS        If this variable is set, it is considered to be a colon-delimited list of
                         minimum column widths.  Unreasonable and insufficient widths are ignored
                         (thus zero signifies a dynamically sized column).  Not all columns have
                         changeable widths.  The fields are, in order: inode, block count, number
                         of links, user name, group name, flags, file size, file name.

     LS_SAMESORT         If this variable is set, the -t option sorts the names of files with the
                         same modification timestamp in the same sense as the time sort.  See the
                         description of the -t option for more details.

     TERM                The CLICOLOR and COLORTERM functionality depends on a terminal type with
                         color capabilities.

     TZ                  The timezone to use when displaying dates.  See environ(7) for more
                         information.

EXIT STATUS
     The ls utility exits 0 on success, and >0 if an error occurs.

EXAMPLES
     List the contents of the current working directory in long format:

           $ ls -l

     In addition to listing the contents of the current working directory in long format, show
     inode numbers, file flags (see chflags(1)), and suffix each filename with a symbol
     representing its file type:

           $ ls -lioF

     List the files in /var/log, sorting the output such that the most recently modified entries
     are printed first:

           $ ls -lt /var/log
           
COMPATIBILITY
     The group field is now automatically included in the long listing for files in order to be
     compatible with the IEEE Std 1003.2 (“POSIX.2”) specification.

LEGACY DESCRIPTION
     In legacy mode, the -f option does not turn on the -a option and the -g, -n, and -o options
     do not turn on the -l option.

     Also, the -o option causes the file flags to be included in a long (-l) output; there is no
     -O option.

     When -H is specified (and not overridden by -L or -P) and a file argument is a symlink that
     resolves to a non-directory file, the output will reflect the nature of the link, rather than
     that of the file.  In legacy operation, the output will describe the file.

     For more information about legacy mode, see compat(5).

SEE ALSO
     chflags(1), chmod(1), sort(1), xterm(1), localeconv(3), strftime(3), strmode(3), compat(5),
     termcap(5), sticky(7), symlink(7)

STANDARDS
     With the exception of options -g, -n and -o, the ls utility conforms to IEEE Std 1003.1-2001
     (“POSIX.1”) and IEEE Std 1003.1-2008 (“POSIX.1”).  The options -B, -D, -G, -I, -T, -U, -W,
     -Z, -b, -h, -w, -y and -, are non-standard extensions.

     The ACL support is compatible with IEEE Std 1003.2c (“POSIX.2c”) Draft 17 (withdrawn).

HISTORY
     An ls command appeared in Version 1 AT&T UNIX.

BUGS
     To maintain backward compatibility, the relationships between the many options are quite
     complex.

     The exception mentioned in the -s option description might be a feature that was based on the
     fact that single-column output usually goes to something other than a terminal.  It is
     debatable whether this is a design bug.

     IEEE Std 1003.2 (“POSIX.2”) mandates opposite sort orders for files with the same timestamp
     when sorting with the -t option.`,
  cp: `NAME
     cp – copy files

SYNOPSIS
     cp [-R [-H | -L | -P]] [-f | -i | -n] [-aclNpSsvXx] source_file target_file
     cp [-R [-H | -L | -P]] [-f | -i | -n] [-aclNpSsvXx] source_file ... target_directory
     cp [-f | -i | -n] [-aclNPpSsvXx] source_file target_file
     cp [-f | -i | -n] [-aclNPpSsvXx] source_file ... target_directory

DESCRIPTION
     In the first synopsis form, the cp utility copies the contents of the source_file to the
     target_file.  In the second synopsis form, the contents of each named source_file is copied
     to the destination target_directory.  The names of the files themselves are not changed.  If
     cp detects an attempt to copy a file to itself, the copy will fail.

     The following options are available:

     -H    If the -R option is specified, symbolic links on the command line are followed.
           (Symbolic links encountered in the tree traversal are not followed.)

     -L    If the -R option is specified, all symbolic links are followed.

     -P    No symbolic links are followed.  This is the default if the -R option is specified.

     -R    If source_file designates a directory, cp copies the directory and the entire subtree
           connected at that point.  If the source_file ends in a /, the contents of the directory
           are copied rather than the directory itself.  This option also causes symbolic links to
           be copied, rather than indirected through, and for cp to create special files rather
           than copying them as normal files.  Created directories have the same mode as the
           corresponding source directory, unmodified by the process' umask.

           In -R mode, cp will continue copying even if errors are detected.

           Note that cp copies hard linked files as separate files.  If you need to preserve hard
           links, consider using tar(1), cpio(1), or pax(1) instead.

     -a    Archive mode.  Same as -RpP.  Preserves structure and attributes of files but not
           directory structure.

     -c    copy files using clonefile(2).  Note that if clonefile(2) is not supported for the
           target filesystem, then cp will fallback to using copyfile(2) instead to ensure the
           copy still succeeds.

     -f    For each existing destination pathname, remove it and create a new file, without
           prompting for confirmation regardless of its permissions.  (The -f option overrides any
           previous -i or -n options.)

           The target file is not unlinked before the copy.  Thus, any existing access rights will
           be retained.

     -i    Cause cp to write a prompt to the standard error output before copying a file that
           would overwrite an existing file.  If the response from the standard input begins with
           the character ‘y’ or ‘Y’, the file copy is attempted.  (The -i option overrides any
           previous -f or -n options.)

     -l    Create hard links to regular files in a hierarchy instead of copying.

     -N    When used with -p, suppress copying file flags.
     
     -n    Do not overwrite an existing file.  (The -n option overrides any previous -f or -i
           options.)

     -p    Cause cp to preserve the following attributes of each source file in the copy:
           modification time, access time, file flags, file mode, user ID, and group ID, as
           allowed by permissions.  Access Control Lists (ACLs) and Extended Attributes (EAs),
           including resource forks, will also be preserved.

           If the user ID and group ID cannot be preserved, no error message is displayed and the
           exit value is not altered.

           If the source file has its set-user-ID bit on and the user ID cannot be preserved, the
           set-user-ID bit is not preserved in the copy's permissions.  If the source file has its
           set-group-ID bit on and the group ID cannot be preserved, the set-group-ID bit is not
           preserved in the copy's permissions.  If the source file has both its set-user-ID and
           set-group-ID bits on, and either the user ID or group ID cannot be preserved, neither
           the set-user-ID nor set-group-ID bits are preserved in the copy's permissions.

     -S    Do not attempt to preserve holes in sparse files.

     -s    Create symbolic links to regular files in a hierarchy instead of copying.

     -v    Cause cp to be verbose, showing files as they are copied.

     -X    Do not copy Extended Attributes (EAs) or resource forks.

     -x    File system mount points are not traversed.

     For each destination file that already exists, its contents are overwritten if permissions
     allow.  Its mode, user ID, and group ID are unchanged unless the -p option was specified.

     In the second synopsis form, target_directory must exist unless there is only one named
     source_file which is a directory and the -R flag is specified.

     If the destination file does not exist, the mode of the source file is used as modified by
     the file mode creation mask (umask, see csh(1)).  If the source file has its set-user-ID bit
     on, that bit is removed unless both the source file and the destination file are owned by the
     same user.  If the source file has its set-group-ID bit on, that bit is removed unless both
     the source file and the destination file are in the same group and the user is a member of
     that group.  If both the set-user-ID and set-group-ID bits are set, all of the above
     conditions must be fulfilled or both bits are removed.

     Appropriate permissions are required for file creation or overwriting.

     Symbolic links are always followed unless the -R flag is set, in which case symbolic links
     are not followed, by default.  The -H or -L flags (in conjunction with the -R flag) cause
     symbolic links to be followed as described above.  The -H, -L and -P options are ignored
     unless the -R option is specified.  In addition, these options override each other and the
     command's actions are determined by the last one specified.

     If cp receives a SIGINFO (see the status argument for stty(1)) signal, the current input and
     output file and the percentage complete will be written to the standard output.

     If cp encounters an I/O error during the copy, then cp may leave a partially copied
     target_file in place.  cp specifically avoids cleaning up the output file in error cases to
     avoid further data loss in cases where the source may not be recoverable.  Alternatives, like
     install(1), may be preferred if stronger guarantees about the target_file are required.
     
     -n    Do not overwrite an existing file.  (The -n option overrides any previous -f or -i
           options.)

     -p    Cause cp to preserve the following attributes of each source file in the copy:
           modification time, access time, file flags, file mode, user ID, and group ID, as
           allowed by permissions.  Access Control Lists (ACLs) and Extended Attributes (EAs),
           including resource forks, will also be preserved.

           If the user ID and group ID cannot be preserved, no error message is displayed and the
           exit value is not altered.

           If the source file has its set-user-ID bit on and the user ID cannot be preserved, the
           set-user-ID bit is not preserved in the copy's permissions.  If the source file has its
           set-group-ID bit on and the group ID cannot be preserved, the set-group-ID bit is not
           preserved in the copy's permissions.  If the source file has both its set-user-ID and
           set-group-ID bits on, and either the user ID or group ID cannot be preserved, neither
           the set-user-ID nor set-group-ID bits are preserved in the copy's permissions.

     -S    Do not attempt to preserve holes in sparse files.

     -s    Create symbolic links to regular files in a hierarchy instead of copying.

     -v    Cause cp to be verbose, showing files as they are copied.

     -X    Do not copy Extended Attributes (EAs) or resource forks.

     -x    File system mount points are not traversed.

     For each destination file that already exists, its contents are overwritten if permissions
     allow.  Its mode, user ID, and group ID are unchanged unless the -p option was specified.

     In the second synopsis form, target_directory must exist unless there is only one named
     source_file which is a directory and the -R flag is specified.

     If the destination file does not exist, the mode of the source file is used as modified by
     the file mode creation mask (umask, see csh(1)).  If the source file has its set-user-ID bit
     on, that bit is removed unless both the source file and the destination file are owned by the
     same user.  If the source file has its set-group-ID bit on, that bit is removed unless both
     the source file and the destination file are in the same group and the user is a member of
     that group.  If both the set-user-ID and set-group-ID bits are set, all of the above
     conditions must be fulfilled or both bits are removed.

     Appropriate permissions are required for file creation or overwriting.

     Symbolic links are always followed unless the -R flag is set, in which case symbolic links
     are not followed, by default.  The -H or -L flags (in conjunction with the -R flag) cause
     symbolic links to be followed as described above.  The -H, -L and -P options are ignored
     unless the -R option is specified.  In addition, these options override each other and the
     command's actions are determined by the last one specified.

     If cp receives a SIGINFO (see the status argument for stty(1)) signal, the current input and
     output file and the percentage complete will be written to the standard output.

     If cp encounters an I/O error during the copy, then cp may leave a partially copied
     target_file in place.  cp specifically avoids cleaning up the output file in error cases to
     avoid further data loss in cases where the source may not be recoverable.  Alternatives, like
     install(1), may be preferred if stronger guarantees about the target_file are required.`,
  mv: `NAME
     mv – move files

SYNOPSIS
     mv [-f | -i | -n] [-hv] source target
     mv [-f | -i | -n] [-v] source ... directory

DESCRIPTION
     In its first form, the mv utility renames the file named by the source operand to the
     destination path named by the target operand.  This form is assumed when the last operand
     does not name an already existing directory.

     In its second form, mv moves each file named by a source operand to a destination file in the
     existing directory named by the directory operand.  The destination path for each operand is
     the pathname produced by the concatenation of the last operand, a slash, and the final
     pathname component of the named file.

     The following options are available:

     -f      Do not prompt for confirmation before overwriting the destination path.  (The -f
             option overrides any previous -i or -n options.)

     -h      If the target operand is a symbolic link to a directory, do not follow it.  This
             causes the mv utility to rename the file source to the destination path target rather
             than moving source into the directory referenced by target.

     -i      Cause mv to write a prompt to standard error before moving a file that would
             overwrite an existing file.  If the response from the standard input begins with the
             character ‘y’ or ‘Y’, the move is attempted.  (The -i option overrides any previous
             -f or -n options.)

     -n      Do not overwrite an existing file.  (The -n option overrides any previous -f or -i
             options.)

     -v      Cause mv to be verbose, showing files after they are moved.

     It is an error for the source operand to specify a directory if the target exists and is not
     a directory.

     If the destination path does not have a mode which permits writing, mv prompts the user for
     confirmation as specified for the -i option.

     As the rename(2) call does not work across file systems, mv uses cp(1) and rm(1) to
     accomplish the move.  The effect is equivalent to:

           rm -f destination_path && \
           cp -pRP source_file destination && \
           rm -rf source_file

EXIT STATUS
     The mv utility exits 0 on success, and >0 if an error occurs.

     The command "mv dir/afile dir" will abort with an error message.
     
LEGACY DIAGNOSTICS
     In legacy mode, the command "mv dir/afile dir" will fail silently, returning an exit code of
     0.

     For more information about legacy mode, see compat(5).

EXAMPLES
     Rename file foo to bar, overwriting bar if it already exists:

           $ mv -f foo bar

COMPATIBILITY
     The -h, -n, and -v options are non-standard and their use in scripts is not recommended.

     The mv utility now supports HFS+ Finder and Extended Attributes and resource forks.  The mv
     utility will no longer strip resource forks off of HFS files.  For an alternative method,
     refer to cp(1).

SEE ALSO
     cp(1), rm(1), symlink(7)

STANDARDS
     The mv utility is expected to be IEEE Std 1003.2 (“POSIX.2”) compatible.

HISTORY
     A mv command appeared in Version 1 AT&T UNIX.`,
  history: `NAME
     builtin, !, %, ., :, @, [, {, }, alias, alloc, bg, bind, bindkey, break, breaksw, builtins,
     case, cd, chdir, command, complete, continue, default, dirs, do, done, echo, echotc, elif,
     else, end, endif, endsw, esac, eval, exec, exit, export, false, fc, fg, filetest, fi, for,
     foreach, getopts, glob, goto, hash, hashstat, history, hup, if, jobid, jobs, kill, limit,
     local, log, login, logout, ls-F, nice, nohup, notify, onintr, popd, printenv, printf, pushd,
     pwd, read, readonly, rehash, repeat, return, sched, set, setenv, settc, setty, setvar, shift,
     source, stop, suspend, switch, telltc, test, then, time, times, trap, true, type, ulimit,
     umask, unalias, uncomplete, unhash, unlimit, unset, unsetenv, until, wait, where, which,
     while – shell built-in commands

SYNOPSIS
     See the built-in command description in the appropriate shell manual page.

DESCRIPTION
     Shell builtin commands are commands that can be executed within the running shell's process.
     Note that, in the case of csh(1) builtin commands, the command is executed in a subshell if
     it occurs as any component of a pipeline except the last.

     If a command specified to the shell contains a slash ‘/’, the shell will not execute a
     builtin command, even if the last component of the specified command matches the name of a
     builtin command.  Thus, while specifying “echo” causes a builtin command to be executed under
     shells that support the echo builtin command, specifying “/bin/echo” or “./echo” does not.

     While some builtin commands may exist in more than one shell, their operation may be
     different under each shell which supports them.  Below is a table which lists shell builtin
     commands, the standard shells that support them and whether they exist as standalone
     utilities.

     Only builtin commands for the csh(1) and sh(1) shells are listed here.  Consult a shell's
     manual page for details on the operation of its builtin commands.  Beware that the sh(1)
     manual page, at least, calls some of these commands “built-in commands” and some of them
     “reserved words”.  Users of other shells may need to consult an info(1) page or other sources
     of documentation.

     Commands marked “No**” under External do exist externally, but are implemented as scripts
     using a builtin command of the same name.

           Command           External        csh(1)       sh(1)
           !                 No              No           Yes
           %                 No              Yes          No
           .                 No              No           Yes
           :                 No              Yes          Yes
           @                 No              Yes          Yes
           [                 Yes             No           Yes
           {                 No              No           Yes
           }                 No              No           Yes
           alias             No**            Yes          Yes
           alloc             No              Yes          No
           bg                No**            Yes          Yes
           bind              No              No           Yes
           bindkey           No              Yes          No
           break             No              Yes          Yes
           breaksw           No              Yes          No
           builtin           No              No           Yes
           builtins          No              Yes          No
           case              No              Yes          Yes
           cd                No**            Yes          Yes
           chdir             No              Yes          Yes
           command           No**            No           Yes
           complete          No              Yes          No
           continue          No              Yes          Yes
           default           No              Yes          No
           dirs              No              Yes          No
           do                No              No           Yes
           done              No              No           Yes
           echo              Yes             Yes          Yes
           echotc            No              Yes          No
           elif              No              No           Yes
           else              No              Yes          Yes
           end               No              Yes          No
           endif             No              Yes          No
           endsw             No              Yes          No
           esac              No              No           Yes
           eval              No              Yes          Yes
           exec              No              Yes          Yes
           exit              No              Yes          Yes
           export            No              No           Yes
           false             Yes             No           Yes
           fc                No**            No           Yes
           fg                No**            Yes          Yes
           filetest          No              Yes          No
           fi                No              No           Yes
           for               No              No           Yes
           foreach           No              Yes          No
           getopts           No**            No           Yes
           glob              No              Yes          No
           goto              No              Yes          No
           hash              No**            No           Yes
           hashstat          No              Yes          No
           history           No              Yes          No
           hup               No              Yes          No
           if                No              Yes          Yes
           jobid             No              No           Yes
           jobs              No**            Yes          Yes
           kill              Yes             Yes          Yes
           limit             No              Yes          No
           local             No              No           Yes
           log               No              Yes          No
           login             Yes             Yes          No
           logout            No              Yes          No
           ls-F              No              Yes          No
           nice              Yes             Yes          No
           nohup             Yes             Yes          No
           notify            No              Yes          No
           onintr            No              Yes          No
           popd              No              Yes          No
           printenv          Yes             Yes          No
           printf            Yes             No           Yes
           pushd             No              Yes          No
           pwd               Yes             No           Yes
           read              No**            No           Yes
           readonly          No              No           Yes
           rehash            No              Yes          No
           repeat            No              Yes          No
           return            No              No           Yes
           set               No              Yes          Yes
           setenv            No              Yes          No
           settc             No              Yes          No
           setty             No              Yes          No
           setvar            No              No           Yes
           shift             No              Yes          Yes
           source            No              Yes          No
           stop              No              Yes          No
           suspend           No              Yes          No
           switch            No              Yes          No
           telltc            No              Yes          No
           test              Yes             No           Yes
           then              No              No           Yes
           time              Yes             Yes          No
           times             No              No           Yes
           trap              No              No           Yes
           true              Yes             No           Yes
           type              No**            No           Yes
           ulimit            No**            No           Yes
           umask             No**            Yes          Yes
           unalias           No**            Yes          Yes
           uncomplete        No              Yes          No
           unhash            No              Yes          No
           unlimit           No              Yes          No
           unset             No              Yes          Yes
           unsetenv          No              Yes          No
           until             No              No           Yes
           wait              No**            Yes          Yes
           where             No              Yes          No
           which             Yes             Yes          No
           while             No              Yes          Yes
SEE ALSO
     csh(1), dash(1), echo(1), false(1), info(1), kill(1), login(1), nice(1), nohup(1),
     printenv(1), printf(1), pwd(1), sh(1), test(1), time(1), true(1), which(1), zsh(1)

HISTORY
     The builtin manual page first appeared in FreeBSD 3.4.

AUTHORS
     This manual page was written by Sheldon Hearn <sheldonh@FreeBSD.org>.`,
  cat: `NAME
     cat – concatenate and print files

SYNOPSIS
     cat [-belnstuv] [file ...]

DESCRIPTION
     The cat utility reads files sequentially, writing them to the standard output.  The file
     operands are processed in command-line order.  If file is a single dash (‘-’) or absent, cat
     reads from the standard input.  If file is a UNIX domain socket, cat connects to it and then
     reads it until EOF.  This complements the UNIX domain binding capability available in
     inetd(8).

     The options are as follows:

     -b      Number the non-blank output lines, starting at 1.

     -e      Display non-printing characters (see the -v option), and display a dollar sign (‘$’)
             at the end of each line.

     -l      Set an exclusive advisory lock on the standard output file descriptor.  This lock is
             set using fcntl(2) with the F_SETLKW command.  If the output file is already locked,
             cat will block until the lock is acquired.

     -n      Number the output lines, starting at 1.

     -s      Squeeze multiple adjacent empty lines, causing the output to be single spaced.

     -t      Display non-printing characters (see the -v option), and display tab characters as
             ‘^I’.

     -u      Disable output buffering.

     -v      Display non-printing characters so they are visible.  Control characters print as
             ‘^X’ for control-X; the delete character (octal 0177) prints as ‘^?’.  Non-ASCII
             characters (with the high bit set) are printed as ‘M-’ (for meta) followed by the
             character for the low 7 bits.

EXIT STATUS
     The cat utility exits 0 on success, and >0 if an error occurs.

EXAMPLES
     The command:

           cat file1

     will print the contents of file1 to the standard output.

     The command:

           cat file1 file2 > file3

     will sequentially print the contents of file1 and file2 to the file file3, truncating file3
     if it already exists.  See the manual page for your shell (e.g., sh(1)) for more information
     on redirection.
     
     The command:

           cat file1 - file2 - file3

     will print the contents of file1, print data it receives from the standard input until it
     receives an EOF (‘^D’) character, print the contents of file2, read and output contents of
     the standard input again, then finally output the contents of file3.  Note that if the
     standard input refers to a file, the second dash on the command-line would have no effect,
     since the entire contents of the file would have already been read and printed by cat when it
     encountered the first ‘-’ operand.

SEE ALSO
     head(1), more(1), pr(1), sh(1), tail(1), vis(1), zcat(1), fcntl(2), setbuf(3)

     Rob Pike, “UNIX Style, or cat -v Considered Harmful”, USENIX Summer Conference Proceedings,
     1983.

STANDARDS
     The cat utility is compliant with the IEEE Std 1003.2-1992 (“POSIX.2”) specification.

     The flags [-belnstv] are extensions to the specification.

HISTORY
     A cat utility appeared in Version 1 AT&T UNIX.  Dennis Ritchie designed and wrote the first
     man page.  It appears to have been for cat.

BUGS
     Because of the shell language mechanism used to perform output redirection, the command “cat
     file1 file2 > file1” will cause the original data in file1 to be destroyed!

     The cat utility does not recognize multibyte characters when the -t or -v option is in
     effect.`,
  grep: `NAME
     grep, egrep, fgrep, rgrep, bzgrep, bzegrep, bzfgrep, zgrep, zegrep, zfgrep – file pattern
     searcher

SYNOPSIS
     grep [-abcdDEFGHhIiJLlMmnOopqRSsUVvwXxZz] [-A num] [-B num] [-C num] [-e pattern] [-f file]
          [--binary-files=value] [--color[=when]] [--colour[=when]] [--context=num] [--label]
          [--line-buffered] [--null] [pattern] [file ...]

DESCRIPTION
     The grep utility searches any given input files, selecting lines that match one or more
     patterns.  By default, a pattern matches an input line if the regular expression (RE) in the
     pattern matches the input line without its trailing newline.  An empty expression matches
     every line.  Each input line that matches at least one of the patterns is written to the
     standard output.

     grep is used for simple patterns and basic regular expressions (BREs); egrep can handle
     extended regular expressions (EREs).  See re_format(7) for more information on regular
     expressions.  fgrep is quicker than both grep and egrep, but can only handle fixed patterns
     (i.e., it does not interpret regular expressions).  Patterns may consist of one or more
     lines, allowing any of the pattern lines to match a portion of the input.

     zgrep, zegrep, and zfgrep act like grep, egrep, and fgrep, respectively, but accept input
     files compressed with the compress(1) or gzip(1) compression utilities.  bzgrep, bzegrep, and
     bzfgrep act like grep, egrep, and fgrep, respectively, but accept input files compressed with
     the bzip2(1) compression utility.

     The following options are available:

     -A num, --after-context=num
             Print num lines of trailing context after each match.  See also the -B and -C
             options.

     -a, --text
             Treat all files as ASCII text.  Normally grep will simply print “Binary file ...
             matches” if files contain binary characters.  Use of this option forces grep to
             output lines matching the specified pattern.

     -B num, --before-context=num
             Print num lines of leading context before each match.  See also the -A and -C
             options.

     -b, --byte-offset
             The offset in bytes of a matched pattern is displayed in front of the respective
             matched line.

     -C num, --context=num
             Print num lines of leading and trailing context surrounding each match.  See also the
             -A and -B options.

     -c, --count
             Only a count of selected lines is written to standard output.

     --colour=[when], --color=[when]
             Mark up the matching text with the expression stored in the GREP_COLOR environment
             variable.  The possible values of when are “never”, “always” and “auto”.

     -D action, --devices=action
             Specify the demanded action for devices, FIFOs and sockets.  The default action is
             “read”, which means, that they are read as if they were normal files.  If the action
             is set to “skip”, devices are silently skipped.

     -d action, --directories=action
             Specify the demanded action for directories.  It is “read” by default, which means
             that the directories are read in the same manner as normal files.  Other possible
             values are “skip” to silently ignore the directories, and “recurse” to read them
             recursively, which has the same effect as the -R and -r option.

     -E, --extended-regexp
             Interpret pattern as an extended regular expression (i.e., force grep to behave as
             egrep).

     -e pattern, --regexp=pattern
             Specify a pattern used during the search of the input: an input line is selected if
             it matches any of the specified patterns.  This option is most useful when multiple
             -e options are used to specify multiple patterns, or when a pattern begins with a
             dash (‘-’).

     --exclude pattern
             If specified, it excludes files matching the given filename pattern from the search.
             Note that --exclude and --include patterns are processed in the order given.  If a
             name matches multiple patterns, the latest matching rule wins.  If no --include
             pattern is specified, all files are searched that are not excluded.  Patterns are
             matched to the full path specified, not only to the filename component.

     --exclude-dir pattern
             If -R is specified, it excludes directories matching the given filename pattern from
             the search.  Note that --exclude-dir and --include-dir patterns are processed in the
             order given.  If a name matches multiple patterns, the latest matching rule wins.  If
             no --include-dir pattern is specified, all directories are searched that are not
             excluded.

     -F, --fixed-strings
             Interpret pattern as a set of fixed strings (i.e., force grep to behave as fgrep).

     -f file, --file=file
             Read one or more newline separated patterns from file.  Empty pattern lines match
             every input line.  Newlines are not considered part of a pattern.  If file is empty,
             nothing is matched.

     -G, --basic-regexp
             Interpret pattern as a basic regular expression (i.e., force grep to behave as
             traditional grep).

     -H      Always print filename headers with output lines.

     -h, --no-filename
             Never print filename headers (i.e., filenames) with output lines.

     --help  Print a brief help message.

     -I      Ignore binary files.  This option is equivalent to the “--binary-files=without-match”
             option.

     -i, --ignore-case
            Perform case insensitive matching.  By default, grep is case sensitive.

     --include pattern
             If specified, only files matching the given filename pattern are searched.  Note that
             --include and --exclude patterns are processed in the order given.  If a name matches
             multiple patterns, the latest matching rule wins.  Patterns are matched to the full
             path specified, not only to the filename component.

     --include-dir pattern
             If -R is specified, only directories matching the given filename pattern are
             searched.  Note that --include-dir and --exclude-dir patterns are processed in the
             order given.  If a name matches multiple patterns, the latest matching rule wins.

     -J, --bz2decompress
             Decompress the bzip2(1) compressed file before looking for the text.

     -L, --files-without-match
             Only the names of files not containing selected lines are written to standard output.
             Pathnames are listed once per file searched.  If the standard input is searched, the
             string “(standard input)” is written unless a --label is specified.

     -l, --files-with-matches
             Only the names of files containing selected lines are written to standard output.
             grep will only search a file until a match has been found, making searches
             potentially less expensive.  Pathnames are listed once per file searched.  If the
             standard input is searched, the string “(standard input)” is written unless a --label
             is specified.

     --label
             Label to use in place of “(standard input)” for a file name where a file name would
             normally be printed.  This option applies to -H, -L, and -l.

     --mmap  Use mmap(2) instead of read(2) to read input, which can result in better performance
             under some circumstances but can cause undefined behaviour.

     -M, --lzma
             Decompress the LZMA compressed file before looking for the text.

     -m num, --max-count=num
             Stop reading the file after num matches.

     -n, --line-number
             Each output line is preceded by its relative line number in the file, starting at
             line 1.  The line number counter is reset for each file processed.  This option is
             ignored if -c, -L, -l, or -q is specified.

     --null  Prints a zero-byte after the file name.

     -O      If -R is specified, follow symbolic links only if they were explicitly listed on the
             command line.  The default is not to follow symbolic links.

     -o, --only-matching
             Prints only the matching part of the lines.
     -p      If -R is specified, no symbolic links are followed.  This is the default.

     -q, --quiet, --silent
             Quiet mode: suppress normal output.  grep will only search a file until a match has
             been found, making searches potentially less expensive.

     -R, -r, --recursive
             Recursively search subdirectories listed.  (i.e., force grep to behave as rgrep).

     -S      If -R is specified, all symbolic links are followed.  The default is not to follow
             symbolic links.

     -s, --no-messages
             Silent mode.  Nonexistent and unreadable files are ignored (i.e., their error
             messages are suppressed).

     -U, --binary
             Search binary files, but do not attempt to print them.

     -u      This option has no effect and is provided only for compatibility with GNU grep.

     -V, --version
             Display version information and exit.

     -v, --invert-match
             Selected lines are those not matching any of the specified patterns.

     -w, --word-regexp
             The expression is searched for as a word (as if surrounded by ‘[[:<:]]’ and
             ‘[[:>:]]’; see re_format(7)).  This option has no effect if -x is also specified.

     -x, --line-regexp
             Only input lines selected against an entire fixed string or regular expression are
             considered to be matching lines.

     -y      Equivalent to -i.  Obsoleted.

     -z, --null-data
             Treat input and output data as sequences of lines terminated by a zero-byte instead
             of a newline.

     -X, --xz
             Decompress the xz(1) compressed file before looking for the text.

     -Z, --decompress
             Force grep to behave as zgrep.

     --binary-files=value
             Controls searching and printing of binary files.  Options are:
             binary (default)  Search binary files but do not print them.
             without-match     Do not search binary files.
             text              Treat all files as text.
    --line-buffered
             Force output to be line buffered.  By default, output is line buffered when standard
             output is a terminal and block buffered otherwise.

     If no file arguments are specified, the standard input is used.  Additionally, “-” may be
     used in place of a file name, anywhere that a file name is accepted, to read from standard
     input.  This includes both -f and file arguments.

ENVIRONMENT
     GREP_OPTIONS  May be used to specify default options that will be placed at the beginning of
                   the argument list.  Backslash-escaping is not supported, unlike the behavior in
                   GNU grep.

EXIT STATUS
     The grep utility exits with one of the following values:

     0     One or more lines were selected.
     1     No lines were selected.
     >1    An error occurred.

EXAMPLES
     -   Find all occurrences of the pattern ‘patricia’ in a file:

               $ grep 'patricia' myfile

     -   Same as above but looking only for complete words:

               $ grep -w 'patricia' myfile

     -   Count occurrences of the exact pattern ‘FOO’ :

               $ grep -c FOO myfile

     -   Same as above but ignoring case:

               $ grep -c -i FOO myfile

     -   Find all occurrences of the pattern ‘.Pp’ at the beginning of a line:

               $ grep '^\.Pp' myfile

         The apostrophes ensure the entire expression is evaluated by grep instead of by the
         user's shell.  The caret ‘^’ matches the null string at the beginning of a line, and the
         ‘\’ escapes the ‘.’, which would otherwise match any character.

     -   Find all lines in a file which do not contain the words ‘foo’ or ‘bar’:

               $ grep -v -e 'foo' -e 'bar' myfile

     -   Peruse the file ‘calendar’ looking for either 19, 20, or 25 using extended regular
         expressions:

               $ egrep '19|20|25' calendar

     -   Show matching lines and the name of the ‘*.h’ files which contain the pattern ‘FIXME’.
         Do the search recursively from the /usr/src/sys/arm directory
         $ grep -H -R FIXME --include="*.h" /usr/src/sys/arm/

     -   Same as above but show only the name of the matching file:

               $ grep -l -R FIXME --include="*.h" /usr/src/sys/arm/

     -   Show lines containing the text ‘foo’.  The matching part of the output is colored and
         every line is prefixed with the line number and the offset in the file for those lines
         that matched.

               $ grep -b --colour -n foo myfile

     -   Show lines that match the extended regular expression patterns read from the standard
         input:

               $ echo -e 'Free\nBSD\nAll.*reserved' | grep -E -f - myfile

     -   Show lines from the output of the pciconf(8) command matching the specified extended
         regular expression along with three lines of leading context and one line of trailing
         context:

               $ pciconf -lv | grep -B3 -A1 -E 'class.*=.*storage'

     -   Suppress any output and use the exit status to show an appropriate message:

               $ grep -q foo myfile && echo File matches

SEE ALSO
     bzip2(1), compress(1), ed(1), ex(1), gzip(1), sed(1), xz(1), zgrep(1), re_format(7)

STANDARDS
     The grep utility is compliant with the IEEE Std 1003.1-2008 (“POSIX.1”) specification.

     The flags [-AaBbCDdGHhILmopRSUVw] are extensions to that specification, and the behaviour of
     the -f flag when used with an empty pattern file is left undefined.

     All long options are provided for compatibility with GNU versions of this utility.

     Historic versions of the grep utility also supported the flags [-ruy].  This implementation
     supports those options; however, their use is strongly discouraged.

HISTORY
     The grep command first appeared in Version 6 AT&T UNIX.

BUGS
     The grep utility does not normalize Unicode input, so a pattern containing composed
     characters will not match decomposed input, and vice versa.
`,
  man: `NAME
     man, apropos, whatis – display online manual documentation pages

SYNOPSIS
     man [-adho] [-t | -w] [-M manpath] [-P pager] [-S mansect] [-m arch[:machine]] [-p [eprtv]]
         [mansect] page ...

     man -f [-d] [-M manpath] [-P pager] [-S mansect] keyword ...
     whatis [-d] [-s mansect] keyword ...

     man -k [-d] [-M manpath] [-P pager] [-S mansect] keyword ...
     apropos [-d] [-s mansect] keyword ...

DESCRIPTION
     The man utility finds and displays online manual documentation pages.  If mansect is
     provided, man restricts the search to the specific section of the manual.

     The sections of the manual are:
           1.   General Commands Manual
           2.   System Calls Manual
           3.   Library Functions Manual
           4.   Kernel Interfaces Manual
           5.   File Formats Manual
           6.   Games Manual
           7.   Miscellaneous Information Manual
           8.   System Manager's Manual
           9.   Kernel Developer's Manual

     Options that man understands:

     -M manpath
             Forces a specific colon separated manual path instead of the default search path.
             See manpath(1).  Overrides the MANPATH environment variable.

     -P pager
             Use specified pager.  Defaults to “less -sR” if color support is enabled, or “less
             -s”.  Overrides the MANPAGER environment variable, which in turn overrides the PAGER
             environment variable.

     -S mansect
             Restricts manual sections searched to the specified colon delimited list.  Defaults
             to “1:8:2:3:3lua:n:4:5:6:7:9:l”.  Overrides the MANSECT environment variable.

     -a      Display all manual pages instead of just the first found for each page argument.

     -d      Print extra debugging information.  Repeat for increased verbosity.  Does not display
             the manual page.

     -f      Emulate whatis(1).  Note that only a subset of options will have any effect when man
             is invoked in this mode.  See the below description of whatis options for details.

     -h      Display short help message and exit.

     -k      Emulate apropos(1).  Note that only a subset of options will have any effect when man
             is invoked in this mode.  See the below description of apropos options for details.

     -m arch[:machine]
             Override the default architecture and machine settings allowing lookup of other
             platform specific manual pages.  This option is accepted, but not implemented, on
             Unix.

     -o      Force use of non-localized manual pages.  See IMPLEMENTATION NOTES for how locale
             specific searches work.  Overrides the LC_ALL, LC_CTYPE, and LANG environment
             variables.

     -p [eprtv]
             Use the list of given preprocessors before running nroff(1) or troff(1).  Valid
             preprocessors arguments:

             e       eqn(1)
             p       pic(1)
             r       refer(1)
             t       tbl(1)
             v       vgrind(1)

             Overrides the MANROFFSEQ environment variable.

     -t      Send manual page source through troff(1) allowing transformation of the manual pages
             to other formats.

     -w      Display the location of the manual page instead of the contents of the manual page.

     Options that apropos and whatis understand:

     -d      Same as the -d option for man.

     -s      Same as the -S option for man.

     When man is operated in apropos or whatis emulation mode, only a subset of its options will
     be honored.  Specifically, -d, -M, -P, and -S have equivalent functionality in the apropos
     and whatis implementation provided.  The MANPATH, MANSECT, and MANPAGER environment variables
     will similarly be honored.

IMPLEMENTATION NOTES
   Locale Specific Searches
     The man utility supports manual pages in different locales.  The search behavior is dictated
     by the first of three environment variables with a nonempty string: LC_ALL, LC_CTYPE, or
     LANG.  If set, man will search for locale specific manual pages using the following logic:

           lang_country.charset
           lang.charset
           en.charset

     For example, if LC_ALL is set to “ja_JP.eucJP”, man will search the following paths when
     considering section 1 manual pages in /usr/share/man:

           /usr/share/man/ja_JP.eucJP/man1
           /usr/share/man/ja.eucJP/man1
           /usr/share/man/en.eucJP/man1
           /usr/share/man/man1

   Displaying Specific Manual Files
     The man utility also supports displaying a specific manual page if passed a path to the file
     as long as it contains a ‘/’ character.

ENVIRONMENT
The following environment variables affect the execution of man:

     LC_ALL, LC_CTYPE, LANG
                     Used to find locale specific manual pages.  Valid values can be found by
                     running the locale(1) command.  See IMPLEMENTATION NOTES for details.
                     Influenced by the -o option.

     MACHINE_ARCH, MACHINE
                     Used to find platform specific manual pages.  If unset, the output of “sysctl
                     hw.machine_arch” and “sysctl hw.machine” is used respectively.  See
                     IMPLEMENTATION NOTES for details.  Corresponds to the -m option.

     MANPATH         The standard search path used by man(1) may be changed by specifying a path
                     in the MANPATH environment variable.  Invalid paths, or paths without manual
                     databases, are ignored.  Overridden by -M.  If MANPATH begins with a colon,
                     it is appended to the default list; if it ends with a colon, it is prepended
                     to the default list; or if it contains two adjacent colons, the standard
                     search path is inserted between the colons.  If none of these conditions are
                     met, it overrides the standard search path.

     MANROFFSEQ      Used to determine the preprocessors for the manual source before running
                     nroff(1) or troff(1).  If unset, defaults to tbl(1).  Corresponds to the -p
                     option.

     MANSECT         Restricts manual sections searched to the specified colon delimited list.
                     Corresponds to the -S option.

     MANWIDTH        If set to a numeric value, used as the width manpages should be displayed.
                     Otherwise, if set to a special value “tty”, and output is to a terminal, the
                     pages may be displayed over the whole width of the screen.

     MANCOLOR        If set, enables color support.

     MANPAGER        Program used to display files.

                     If unset, and color support is enabled, “less -sR” is used.

                     If unset, and color support is disabled, then PAGER is used.  If that has no
                     value either, “less -s” is used.

FILES
     /etc/man.conf
             System configuration file.
     /usr/local/etc/man.d/*.conf
             Local configuration files.

EXIT STATUS
     The man utility exits 0 on success, and >0 if an error occurs.

EXAMPLES
     Show the manual page for stat(2):
           $ man 2 stat

     Show all manual pages for ‘stat’.

           $ man -a stat

     List manual pages which match the regular expression either in the title or in the body:

           $ man -k '\<copy\>.*archive'

     Show the manual page for ls(1) and use cat(1) as pager:

           $ man -P cat ls

     Show the location of the ls(1) manual page:

           $ man -w ls

SEE ALSO
     apropos(1), intro(1), mandoc(1), manpath(1), whatis(1), intro(2), intro(3), intro(3lua),
     intro(4), intro(5), man.conf(5), intro(6), intro(7), mdoc(7), intro(8), intro(9)`,
  vi: `NAME
       vim - Vi IMproved, a programmer's text editor

SYNOPSIS
       vim [options] [file ..]
       vim [options] -
       vim [options] -t tag
       vim [options] -q [errorfile]

       ex
       view
       gvim gview evim eview
       rvim rview rgvim rgview

DESCRIPTION
       Vim is a text editor that is upwards compatible to Vi.  It can be used to edit all kinds of
       plain text.  It is especially useful for editing programs.

       There are a lot of enhancements above Vi: multi level undo, multi windows and buffers,
       syntax highlighting, command line editing, filename completion, on-line help, visual
       selection, etc..  See ":help vi_diff.txt" for a summary of the differences between Vim and
       Vi.

       While running Vim a lot of help can be obtained from the on-line help system, with the
       ":help" command.  See the ON-LINE HELP section below.

       Most often Vim is started to edit a single file with the command

            vim file

       More generally Vim is started with:

            vim [options] [filelist]

       If the filelist is missing, the editor will start with an empty buffer.  Otherwise exactly
       one out of the following four may be used to choose one or more files to be edited.

       file ..     A list of filenames.  The first one will be the current file and read into the
                   buffer.  The cursor will be positioned on the first line of the buffer.  You
                   can get to the other files with the ":next" command.  To edit a file that
                   starts with a dash, precede the filelist with "--".

       -           The file to edit is read from stdin.  Commands are read from stderr, which
                   should be a tty.

       -t {tag}    The file to edit and the initial cursor position depends on a "tag", a sort of
                   goto label.  {tag} is looked up in the tags file, the associated file becomes
                   the current file and the associated command is executed.  Mostly this is used
                   for C programs, in which case {tag} could be a function name.  The effect is
                   that the file containing that function becomes the current file and the cursor
                   is positioned on the start of the function.  See ":help tag-commands".

       -q [errorfile]
                   Start in quickFix mode.  The file [errorfile] is read and the first error is
                   displayed.  If [errorfile] is omitted, the filename is obtained from the
                   'errorfile' option (defaults to "AztecC.Err" for the Amiga, "errors.err" on
                   other systems).  Further errors can be jumped to with the ":cn" command.  See
                   ":help quickfix".
                   
                   
       Vim behaves differently, depending on the name of the command (the executable may still be
       the same file).

       vim       The "normal" way, everything is default.

       ex        Start in Ex mode.  Go to Normal mode with the ":vi" command.  Can also be done
                 with the "-e" argument.

       view      Start in read-only mode.  You will be protected from writing the files.  Can also
                 be done with the "-R" argument.

       gvim gview
                 The GUI version.  Starts a new window.  Can also be done with the "-g" argument.

       evim eview
                 The GUI version in easy mode.  Starts a new window.  Can also be done with the
                 "-y" argument.

       rvim rview rgvim rgview
                 Like the above, but with restrictions.  It will not be possible to start shell
                 commands, or suspend Vim.  Can also be done with the "-Z" argument.

OPTIONS
       The options may be given in any order, before or after filenames.  Options without an
       argument can be combined after a single dash.

       +[num]      For the first file the cursor will be positioned on line "num".  If "num" is
                   missing, the cursor will be positioned on the last line.

       +/{pat}     For the first file the cursor will be positioned in the line with the first
                   occurrence of {pat}.  See ":help search-pattern" for the available search
                   patterns.

       +{command}

       -c {command}
                   {command} will be executed after the first file has been read.  {command} is
                   interpreted as an Ex command.  If the {command} contains spaces it must be
                   enclosed in double quotes (this depends on the shell that is used).  Example:
                   vim "+set si" main.c
                   Note: You can use up to 10 "+" or "-c" commands.

       -A          If Vim has been compiled with ARABIC support for editing right-to-left oriented
                   files and Arabic keyboard mapping, this option starts Vim in Arabic mode, i.e.
                   'arabic' is set.  Otherwise an error message is given and Vim aborts.

       -b          Binary mode.  A few options will be set that makes it possible to edit a binary
                   or executable file.

       -C          Compatible.  Set the 'compatible' option.  This will make Vim behave mostly
                   like Vi, even though a .vimrc file exists.

       -d          Start in diff mode.  There should between two to eight file name arguments.
                   Vim will open all the files and show differences between them.  Works like
                   vimdiff(1).
-d {device}, -dev {device}
                   Open {device} for use as a terminal.  Only on the Amiga.  Example: "-d
                   con:20/30/600/150".

       -D          Debugging.  Go to debugging mode when executing the first command from a
                   script.

       -e          Start Vim in Ex mode, just like the executable was called "ex".

       -E          Start Vim in improved Ex mode, just like the executable was called "exim".

       -f          Foreground.  For the GUI version, Vim will not fork and detach from the shell
                   it was started in.  On the Amiga, Vim is not restarted to open a new window.
                   This option should be used when Vim is executed by a program that will wait for
                   the edit session to finish (e.g. mail).  On the Amiga the ":sh" and ":!"
                   commands will not work.

       -F          If Vim has been compiled with FKMAP support for editing right-to-left oriented
                   files and Farsi keyboard mapping, this option starts Vim in Farsi mode, i.e.
                   'fkmap' and 'rightleft' are set.  Otherwise an error message is given and Vim
                   aborts.
                   Note: Farsi support has been removed in patch 8.1.0932.

       -g          If Vim has been compiled with GUI support, this option enables the GUI.  If no
                   GUI support was compiled in, an error message is given and Vim aborts.

       -H          If Vim has been compiled with RIGHTLEFT support for editing right-to-left
                   oriented files and Hebrew keyboard mapping, this option starts Vim in Hebrew
                   mode, i.e. 'hkmap' and 'rightleft' are set.  Otherwise an error message is
                   given and Vim aborts.

       -i {viminfo}
                   Specifies the filename to use when reading or writing the viminfo file, instead
                   of the default "~/.viminfo".  This can also be used to skip the use of the
                   .viminfo file, by giving the name "NONE".

       -l          Lisp mode.  Sets the 'lisp' and 'showmatch' options on.

       -L          Same as -r.

       -m          Modifying files is disabled.  Resets the 'write' option.  You can still modify
                   the buffer, but writing a file is not possible.

       -M          Modifications not allowed.  The 'modifiable' and 'write' options will be unset,
                   so that changes are not allowed and files can not be written.  Note that these
                   options can be set to enable making modifications.

       -n          No swap file will be used.  Recovery after a crash will be impossible.  Handy
                   if you want to edit a file on a very slow medium (e.g. floppy).  Can also be
                   done with ":set uc=0".  Can be undone with ":set uc=200".

       -N          No-compatible mode.  Resets the 'compatible' option.  This will make Vim behave
                   a bit better, but less Vi compatible, even though a .vimrc file does not exist.

       -nb         Become an editor server for NetBeans.  See the docs for details.

       -o[N]       Open N windows stacked.  When N is omitted, open one window for each file.
       
       -O[N]       Open N windows side by side.  When N is omitted, open one window for each file.

       -p[N]       Open N tab pages.  When N is omitted, open one tab page for each file.

       -P {parent-title}
                   Win32 GUI only: Specify the title of the parent application.  When possible,
                   Vim will run in an MDI window inside the application. {parent-title} must
                   appear in the window title of the parent application.  Make sure that it is
                   specific enough. Note that the implementation is still primitive.  It won't
                   work with all applications and the menu doesn't work.

       -r          List swap files, with information about using them for recovery.

       -r {file}   Recovery mode.  The swap file is used to recover a crashed editing session.
                   The swap file is a file with the same filename as the text file with ".swp"
                   appended.  See ":help recovery".

       -R          Read-only mode.  The 'readonly' option will be set.  You can still edit the
                   buffer, but will be prevented from accidentally overwriting a file.  If you do
                   want to overwrite a file, add an exclamation mark to the Ex command, as in
                   ":w!".  The -R option also implies the -n option (see above).  The 'readonly'
                   option can be reset with ":set noro".  See ":help 'readonly'".

       -s          Silent mode.  Only when started as "Ex" or when the "-e" option was given
                   before the "-s" option.

       -s {scriptin}
                   The script file {scriptin} is read.  The characters in the file are interpreted
                   as if you had typed them.  The same can be done with the command ":source!
                   {scriptin}".  If the end of the file is reached before the editor exits,
                   further characters are read from the keyboard.

       -S {file}   {file} will be sourced after the first file has been read.  This is equivalent
                   to -c "source {file}".  {file} cannot start with '-'.  If {file} is omitted
                   "Session.vim" is used (only works when -S is the last argument).

       -T {terminal}
                   Tells Vim the name of the terminal you are using.  Only required when the
                   automatic way doesn't work.  Should be a terminal known to Vim (builtin) or
                   defined in the termcap or terminfo file.

       -u {vimrc}  Use the commands in the file {vimrc} for initializations.  All the other
                   initializations are skipped.  Use this to edit a special kind of files.  It can
                   also be used to skip all initializations by giving the name "NONE".  See ":help
                   initialization" within vim for more details.

       -U {gvimrc} Use the commands in the file {gvimrc} for GUI initializations.  All the other
                   GUI initializations are skipped.  It can also be used to skip all GUI
                   initializations by giving the name "NONE".  See ":help gui-init" within vim for
                   more details.

       -v          Start Vim in Vi mode, just like the executable was called "vi".  This only has
                   effect when the executable is called "ex".

       -V[N]       Verbose.  Give messages about which files are sourced and for reading and
                   writing a viminfo file.  The optional number N is the value for 'verbose'.
                   Default is 10.
                   
       -V[N]{filename}
                   Like -V and set 'verbosefile' to {filename}.  The result is that messages are
                   not displayed but written to the file {filename}.  {filename} must not start
                   with a digit.

       -w{number}  Set the 'window' option to {number}.

       -w {scriptout}
                   All the characters that you type are recorded in the file {scriptout}, until
                   you exit Vim.  This is useful if you want to create a script file to be used
                   with "vim -s" or ":source!".  If the {scriptout} file exists, characters are
                   appended.

       -W {scriptout}
                   Like -w, but an existing file is overwritten.

       -x          If Vim has been compiled with encryption support, use encryption when writing
                   files.  Will prompt for a crypt key.

       -X          Don't connect to the X server.  Shortens startup time in a terminal, but the
                   window title and clipboard will not be used.

       -y          Start Vim in easy mode, just like the executable was called "evim" or "eview".
                   Makes Vim behave like a click-and-type editor.

       -Z          Restricted mode.  Works like the executable starts with "r".

       --          Denotes the end of the options.  Arguments after this will be handled as a file
                   name.  This can be used to edit a filename that starts with a '-'.

       --clean     Do not use any personal configuration (vimrc, plugins, etc.).  Useful to see if
                   a problem reproduces with a clean Vim setup.

       --cmd {command}
                   Like using "-c", but the command is executed just before processing any vimrc
                   file.  You can use up to 10 of these commands, independently from "-c"
                   commands.

       --echo-wid  GTK GUI only: Echo the Window ID on stdout.

       --gui-dialog-file {name}
                   When using the GUI, instead of showing a dialog, write the title and message of
                   the dialog to file {name}.  The file is created or appended to.  Only useful
                   for testing, to avoid that the test gets stuck on a dialog that can't be seen.
                   Without the GUI the argument is ignored.

       --help, -h, -?
                   Give a bit of help about the command line arguments and options.  After this
                   Vim exits.

       --literal   Take file name arguments literally, do not expand wildcards.  This has no
                   effect on Unix where the shell expands wildcards.

       --log {filename}
                   If Vim has been compiled with eval and channel feature, start logging and write
                   entries to {filename}. This works like calling ch_logfile({filename}, 'ao')
                   very early during startup.

       --nofork    Foreground.  For the GUI version, Vim will not fork and detach from the shell
                   it was started in.
       
--noplugin  Skip loading plugins.  Implied by -u NONE.

       --not-a-term
                   Tells Vim that the user knows that the input and/or output is not connected to
                   a terminal.  This will avoid the warning and the two second delay that would
                   happen.

       --remote    Connect to a Vim server and make it edit the files given in the rest of the
                   arguments.  If no server is found a warning is given and the files are edited
                   in the current Vim.

       --remote-expr {expr}
                   Connect to a Vim server, evaluate {expr} in it and print the result on stdout.

       --remote-send {keys}
                   Connect to a Vim server and send {keys} to it.

       --remote-silent
                   As --remote, but without the warning when no server is found.

       --remote-wait
                   As --remote, but Vim does not exit until the files have been edited.

       --remote-wait-silent
                   As --remote-wait, but without the warning when no server is found.

       --serverlist
                   List the names of all Vim servers that can be found.

       --servername {name}
                   Use {name} as the server name.  Used for the current Vim, unless used with a
                   --remote argument, then it's the name of the server to connect to.

       --socketid {id}
                   GTK GUI only: Use the GtkPlug mechanism to run gVim in another window.

       --startuptime {file}
                   During startup write timing messages to the file {fname}.

       --ttyfail   When stdin or stdout is not a a terminal (tty) then exit right away.

       --version   Print version information and exit.

       --windowid {id}
                   Win32 GUI only: Make gVim try to use the window {id} as a parent, so that it
                   runs inside that window.

ON-LINE HELP
       Type ":help" in Vim to get started.  Type ":help subject" to get help on a specific
       subject.  For example: ":help ZZ" to get help for the "ZZ" command.  Use <Tab> and CTRL-D
       to complete subjects (":help cmdline-completion").  Tags are present to jump from one place
       to another (sort of hypertext links, see ":help").  All documentation files can be viewed
       in this way, for example ":help syntax.txt".
       
FILES
       /usr/local/share/vim/vim??/doc/*.txt
                      The Vim documentation files.  Use ":help doc-file-list" to get the complete
                      list.
                      vim??  is short version number, like vim91 for Vim 9.1

       /usr/local/share/vim/vim??/doc/tags
                      The tags file used for finding information in the documentation files.

       /usr/local/share/vim/vim??/syntax/syntax.vim
                      System wide syntax initializations.

       /usr/local/share/vim/vim??/syntax/*.vim
                      Syntax files for various languages.

       /usr/local/share/vim/vimrc
                      System wide Vim initializations.

       ~/.vimrc, ~/.vim/vimrc, $XDG_CONFIG_HOME/vim/vimrc
                      Your personal Vim initializations (first one found is used).

       /usr/local/share/vim/gvimrc
                      System wide gvim initializations.

       ~/.gvimrc, ~/.vim/gvimrc, $XDG_CONFIG_HOME/vim/gvimrc
                      Your personal gVim initializations (first one found is used).

       /usr/local/share/vim/vim??/optwin.vim
                      Script used for the ":options" command, a nice way to view and set options.

       /usr/local/share/vim/vim??/menu.vim
                      System wide menu initializations for gVim.

       /usr/local/share/vim/vim??/bugreport.vim
                      Script to generate a bug report.  See ":help bugs".

       /usr/local/share/vim/vim??/filetype.vim
                      Script to detect the type of a file by its name.  See ":help 'filetype'".

       /usr/local/share/vim/vim??/scripts.vim
                      Script to detect the type of a file by its contents.  See ":help
                      'filetype'".

       /usr/local/share/vim/vim??/print/*.ps
                      Files used for PostScript printing.

       For recent info read the VIM home page:
       <URL:http://www.vim.org/>

SEE ALSO
       vimtutor(1)

AUTHOR
       Most of Vim was made by Bram Moolenaar, with a lot of help from others.  See ":help
       credits" in Vim.
       Vim is based on Stevie, worked on by: Tim Thompson, Tony Andrews and G.R. (Fred) Walter.
       Although hardly any of the original code remains.

BUGS
       Probably.  See ":help todo" for a list of known problems.

       Note that a number of things that may be regarded as bugs by some, are in fact caused by a
       too-faithful reproduction of Vi's behaviour.  And if you think other things are bugs
       "because Vi does it differently", you should take a closer look at the vi_diff.txt file (or
       type :help vi_diff.txt when in Vim).  Also have a look at the 'compatible' and 'cpoptions'
       options.`,
  ls: `NAME
     ls – list directory contents

SYNOPSIS
     ls [-@ABCFGHILOPRSTUWabcdefghiklmnopqrstuvwxy1%,] [--color=when] [-D format] [file ...]

DESCRIPTION
     For each operand that names a file of a type other than directory, ls displays its name as
     well as any requested, associated information.  For each operand that names a file of type
     directory, ls displays the names of files contained within that directory, as well as any
     requested, associated information.

     If no operands are given, the contents of the current directory are displayed.  If more than
     one operand is given, non-directory operands are displayed first; directory and non-directory
     operands are sorted separately and in lexicographical order.

     The following options are available:

     -@      Display extended attribute keys and sizes in long (-l) output.

     -A      Include directory entries whose names begin with a dot (‘.’) except for . and ...
             Automatically set for the super-user unless -I is specified.

     -B      Force printing of non-printable characters (as defined by ctype(3) and current locale
             settings) in file names as \XXX, where xxx is the numeric value of the character in
             octal.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -C      Force multi-column output; this is the default when output is to a terminal.

     -D format
             When printing in the long (-l) format, use format to format the date and time output.
             The argument format is a string used by strftime(3).  Depending on the choice of
             format string, this may result in a different number of columns in the output.  This
             option overrides the -T option.  This option is not defined in IEEE Std 1003.1-2008
             (“POSIX.1”).

     -F      Display a slash (‘/’) immediately after each pathname that is a directory, an
             asterisk (‘*’) after each that is executable, an at sign (‘@’) after each symbolic
             link, an equals sign (‘=’) after each socket, a percent sign (‘%’) after each
             whiteout, and a vertical bar (‘|’) after each that is a FIFO.

     -G      Enable colorized output.  This option is equivalent to defining CLICOLOR or COLORTERM
             in the environment and setting --color=auto.  (See below.)  This functionality can be
             compiled out by removing the definition of COLORLS.  This option is not defined in
             IEEE Std 1003.1-2008 (“POSIX.1”).

     -H      Symbolic links on the command line are followed.  This option is assumed if none of
             the -F, -d, or -l options are specified.

     -I      Prevent -A from being automatically set for the super-user.  This option is not
             defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -L      Follow all symbolic links to final target and list the file or directory the link
             references rather than the link itself.  This option cancels the -P option.

     -O      Include the file flags in a long (-l) output.  This option is incompatible with IEEE
             Std 1003.1-2008 (“POSIX.1”).  See chflags(1) for a list of file flags and their
             meanings.
             
    -P      If argument is a symbolic link, list the link itself rather than the object the link
             references.  This option cancels the -H and -L options.

     -R      Recursively list subdirectories encountered.

     -S      Sort by size (largest file first) before sorting the operands in lexicographical
             order.

     -T      When printing in the long (-l) format, display complete time information for the
             file, including month, day, hour, minute, second, and year.  The -D option gives even
             more control over the output format.  This option is not defined in IEEE Std
             1003.1-2008 (“POSIX.1”).

     -U      Use time when file was created for sorting or printing.  This option is not defined
             in IEEE Std 1003.1-2008 (“POSIX.1”).

     -W      Display whiteouts when scanning directories.  This option is not defined in IEEE Std
             1003.1-2008 (“POSIX.1”).

     -X      When listing recursively, do not descend into directories that would cross file
             system boundaries.  More specifically, this option will prevent descending into
             directories that have a different device number.

     -a      Include directory entries whose names begin with a dot (‘.’).

     -b      As -B, but use C escape codes whenever possible.  This option is not defined in IEEE
             Std 1003.1-2008 (“POSIX.1”).

     -c      Use time when file status was last changed for sorting or printing.

     --color=when
             Output colored escape sequences based on when, which may be set to either always,
             auto, or never.

             always will make ls always output color.  If TERM is unset or set to an invalid
             terminal, then ls will fall back to explicit ANSI escape sequences without the help
             of termcap(5).  always is the default if --color is specified without an argument.

             auto will make ls output escape sequences based on termcap(5), but only if stdout is
             a tty and either the -G flag is specified or the COLORTERM environment variable is
             set and not empty.

             never will disable color regardless of environment variables.  never is the default
             when neither --color nor -G is specified.

             For compatibility with GNU coreutils, ls supports yes or force as equivalent to
             always, no or none as equivalent to never, and tty or if-tty as equivalent to auto.

     -d      Directories are listed as plain files (not searched recursively).

     -e      Print the Access Control List (ACL) associated with the file, if present, in long
             (-l) output.

     -f      Output is not sorted.  This option turns on -a.  It also negates the effect of the
             -r, -S and -t options.  As allowed by IEEE Std 1003.1-2008 (“POSIX.1”), this option
             has no effect on the -d, -l, -R and -s options.
    
    -g      This option has no effect.  It is only available for compatibility with 4.3BSD, where
             it was used to display the group name in the long (-l) format output.  This option is
             incompatible with IEEE Std 1003.1-2008 (“POSIX.1”).

     -h      When used with the -l option, use unit suffixes: Byte, Kilobyte, Megabyte, Gigabyte,
             Terabyte and Petabyte in order to reduce the number of digits to four or fewer using
             base 2 for sizes.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -i      For each file, print the file's file serial number (inode number).

     -k      This has the same effect as setting environment variable BLOCKSIZE to 1024, except
             that it also nullifies any -h options to its left.

     -l      (The lowercase letter “ell”.) List files in the long format, as described in the The
             Long Format subsection below.

     -m      Stream output format; list files across the page, separated by commas.

     -n      Display user and group IDs numerically rather than converting to a user or group name
             in a long (-l) output.  This option turns on the -l option.

     -o      List in long format, but omit the group id.

     -p      Write a slash (‘/’) after each filename if that file is a directory.

     -q      Force printing of non-graphic characters in file names as the character ‘?’; this is
             the default when output is to a terminal.

     -r      Reverse the order of the sort.

     -s      Display the number of blocks used in the file system by each file.  Block sizes and
             directory totals are handled as described in The Long Format subsection below, except
             (if the long format is not also requested) the directory totals are not output when
             the output is in a single column, even if multi-column output is requested.  (-l)
             format, display complete time information for the file, including month, day, hour,
             minute, second, and year.  The -D option gives even more control over the output
             format.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

     -t      Sort by descending time modified (most recently modified first).  If two files have
             the same modification timestamp, sort their names in ascending lexicographical order.
             The -r option reverses both of these sort orders.

             Note that these sort orders are contradictory: the time sequence is in descending
             order, the lexicographical sort is in ascending order.  This behavior is mandated by
             IEEE Std 1003.2 (“POSIX.2”).  This feature can cause problems listing files stored
             with sequential names on FAT file systems, such as from digital cameras, where it is
             possible to have more than one image with the same timestamp.  In such a case, the
             photos cannot be listed in the sequence in which they were taken.  To ensure the same
             sort order for time and for lexicographical sorting, set the environment variable
             LS_SAMESORT or use the -y option.  This causes ls to reverse the lexicographical sort
             order when sorting files with the same modification timestamp.

     -u      Use time of last access, instead of time of last modification of the file for sorting
             (-t) or long printing (-l).
             
     -v      Force unedited printing of non-graphic characters; this is the default when output is
             not to a terminal.

     -w      Force raw printing of non-printable characters.  This is the default when output is
             not to a terminal.  This option is not defined in IEEE Std 1003.1-2001 (“POSIX.1”).

     -x      The same as -C, except that the multi-column output is produced with entries sorted
             across, rather than down, the columns.

     -y      When the -t option is set, sort the alphabetical output in the same order as the time
             output.  This has the same effect as setting LS_SAMESORT.  See the description of the
             -t option for more details.  This option is not defined in IEEE Std 1003.1-2001
             (“POSIX.1”).

     -%      Distinguish dataless files and directories with a '%' character in long (-l) output,
             and don't materialize dataless directories when listing them.

     -1      (The numeric digit “one”.) Force output to be one entry per line.  This is the
             default when output is not to a terminal.

     -,      (Comma) When the -l option is set, print file sizes grouped and separated by
             thousands using the non-monetary separator returned by localeconv(3), typically a
             comma or period.  If no locale is set, or the locale does not have a non-monetary
             separator, this option has no effect.  This option is not defined in IEEE Std
             1003.1-2001 (“POSIX.1”).

     The -1, -C, -x, and -l options all override each other; the last one specified determines the
     format used.

     The -c, -u, and -U options all override each other; the last one specified determines the
     file time used.

     The -S and -t options override each other; the last one specified determines the sort order
     used.

     The -B, -b, -w, and -q options all override each other; the last one specified determines the
     format used for non-printable characters.

     The -H, -L and -P options all override each other (either partially or fully); they are
     applied in the order specified.

     By default, ls lists one entry per line to standard output; the exceptions are to terminals
     or when the -C or -x options are specified.

     File information is displayed with one or more ⟨blank⟩s separating the information associated
     with the -i, -s, and -l options.
     
    The Long Format
     If the -l option is given, the following information is displayed for each file: file mode,
     number of links, owner name, group name, number of bytes in the file, abbreviated month, day-
     of-month file was last modified, hour file last modified, minute file last modified, and the
     pathname.  If the file or directory has extended attributes, the permissions field printed by
     the -l option is followed by a '@' character.  Otherwise, if the file or directory has
     extended security information (such as an access control list), the permissions field printed
     by the -l option is followed by a '+' character.  If the -% option is given, a '%' character
     follows the permissions field for dataless files and directories, possibly replacing the '@'
     or '+' character.

     If the modification time of the file is more than 6 months in the past or future, and the -D
     or -T are not specified, then the year of the last modification is displayed in place of the
     hour and minute fields.

     If the owner or group names are not a known user or group name, or the -n option is given,
     the numeric ID's are displayed.

     If the file is a character special or block special file, the device number for the file is
     displayed in the size field.  If the file is a symbolic link the pathname of the linked-to
     file is preceded by “->”.

     The listing of a directory's contents is preceded by a labeled total number of blocks used in
     the file system by the files which are listed as the directory's contents (which may or may
     not include . and .. and other files which start with a dot, depending on other options).

     The default block size is 512 bytes.  The block size may be set with option -k or environment
     variable BLOCKSIZE.  Numbers of blocks in the output will have been rounded up so the numbers
     of bytes is at least as many as used by the corresponding file system blocks (which might
     have a different size).

     The file mode printed under the -l option consists of the entry type and the permissions.
     The entry type character describes the type of file, as follows:

           -     Regular file.
           b     Block special file.
           c     Character special file.
           d     Directory.
           l     Symbolic link.
           p     FIFO.
           s     Socket.
           w     Whiteout.

     The next three fields are three characters each: owner permissions, group permissions, and
     other permissions.  Each field has three character positions:
     1.   If r, the file is readable; if -, it is not readable.

           2.   If w, the file is writable; if -, it is not writable.

           3.   The first of the following that applies:

                      S     If in the owner permissions, the file is not executable and set-user-
                            ID mode is set.  If in the group permissions, the file is not
                            executable and set-group-ID mode is set.

                      s     If in the owner permissions, the file is executable and set-user-ID
                            mode is set.  If in the group permissions, the file is executable and
                            setgroup-ID mode is set.

                      x     The file is executable or the directory is searchable.

                      -     The file is neither readable, writable, executable, nor set-user-ID
                            nor set-group-ID mode, nor sticky.  (See below.)

                These next two apply only to the third character in the last group (other
                permissions).

                      T     The sticky bit is set (mode 1000), but not execute or search
                            permission.  (See chmod(1) or sticky(7).)

                      t     The sticky bit is set (mode 1000), and is searchable or executable.
                            (See chmod(1) or sticky(7).)

     The next field contains a plus (‘+’) character if the file has an ACL, or a space (‘ ’) if it
     does not.  The ls utility does not show the actual ACL unless the -e option is used in
     conjunction with the -l option.

ENVIRONMENT
     The following environment variables affect the execution of ls:

     BLOCKSIZE           If this is set, its value, rounded up to 512 or down to a multiple of
                         512, will be used as the block size in bytes by the -l and -s options.
                         See The Long Format subsection for more information.

     CLICOLOR            Use ANSI color sequences to distinguish file types.  See LSCOLORS below.
                         In addition to the file types mentioned in the -F option some extra
                         attributes (setuid bit set, etc.) are also displayed.  The colorization
                         is dependent on a terminal type with the proper termcap(5) capabilities.
                         The default “cons25” console has the proper capabilities, but to display
                         the colors in an xterm(1), for example, the TERM variable must be set to
                         “xterm-color”.  Other terminal types may require similar adjustments.
                         Colorization is silently disabled if the output is not directed to a
                         terminal unless the CLICOLOR_FORCE variable is defined or --color is set
                         to “always”.

     CLICOLOR_FORCE      Color sequences are normally disabled if the output is not directed to a
                         terminal.  This can be overridden by setting this variable.  The TERM
                         variable still needs to reference a color capable terminal however
                         otherwise it is not possible to determine which color sequences to use.

     COLORTERM           See description for CLICOLOR above.
     
     COLUMNS             If this variable contains a string representing a decimal integer, it is
                         used as the column position width for displaying multiple-text-column
                         output.  The ls utility calculates how many pathname text columns to
                         display based on the width provided.  (See -C and -x.)

     LANG                The locale to use when determining the order of day and month in the long
                         -l format output.  See environ(7) for more information.

     LSCOLORS            The value of this variable describes what color to use for which
                         attribute when colors are enabled with CLICOLOR or COLORTERM.  This
                         string is a concatenation of pairs of the format fb, where f is the
                         foreground color and b is the background color.

                         The color designators are as follows:

                               a     black
                               b     red
                               c     green
                               d     brown
                               e     blue
                               f     magenta
                               g     cyan
                               h     light grey
                               A     bold black, usually shows up as dark grey
                               B     bold red
                               C     bold green
                               D     bold brown, usually shows up as yellow
                               E     bold blue
                               F     bold magenta
                               G     bold cyan
                               H     bold light grey; looks like bright white
                               x     default foreground or background

                         Note that the above are standard ANSI colors.  The actual display may
                         differ depending on the color capabilities of the terminal in use.

                         The order of the attributes are as follows:

                               1.   directory
                               2.   symbolic link
                               3.   socket
                               4.   pipe
                               5.   executable
                               6.   block special
                               7.   character special
                               8.   executable with setuid bit set
                               9.   executable with setgid bit set
                               10.  directory writable to others, with sticky bit
                               11.  directory writable to others, without sticky bit
                               12.  dataless file

                         The default is "exfxcxdxbxegedabagacadah", i.e., blue foreground and
                         default background for regular directories, black foreground and red
                         background for setuid executables, etc.
                         
                LS_COLWIDTHS        If this variable is set, it is considered to be a colon-delimited list of
                         minimum column widths.  Unreasonable and insufficient widths are ignored
                         (thus zero signifies a dynamically sized column).  Not all columns have
                         changeable widths.  The fields are, in order: inode, block count, number
                         of links, user name, group name, flags, file size, file name.

     LS_SAMESORT         If this variable is set, the -t option sorts the names of files with the
                         same modification timestamp in the same sense as the time sort.  See the
                         description of the -t option for more details.

     TERM                The CLICOLOR and COLORTERM functionality depends on a terminal type with
                         color capabilities.

     TZ                  The timezone to use when displaying dates.  See environ(7) for more
                         information.

EXIT STATUS
     The ls utility exits 0 on success, and >0 if an error occurs.

EXAMPLES
     List the contents of the current working directory in long format:

           $ ls -l

     In addition to listing the contents of the current working directory in long format, show
     inode numbers, file flags (see chflags(1)), and suffix each filename with a symbol
     representing its file type:

           $ ls -lioF

     List the files in /var/log, sorting the output such that the most recently modified entries
     are printed first:

           $ ls -lt /var/log

COMPATIBILITY
     The group field is now automatically included in the long listing for files in order to be
     compatible with the IEEE Std 1003.2 (“POSIX.2”) specification.

LEGACY DESCRIPTION
     In legacy mode, the -f option does not turn on the -a option and the -g, -n, and -o options
     do not turn on the -l option.

     Also, the -o option causes the file flags to be included in a long (-l) output; there is no
     -O option.

     When -H is specified (and not overridden by -L or -P) and a file argument is a symlink that
     resolves to a non-directory file, the output will reflect the nature of the link, rather than
     that of the file.  In legacy operation, the output will describe the file.

     For more information about legacy mode, see compat(5).

SEE ALSO
     chflags(1), chmod(1), sort(1), xterm(1), localeconv(3), strftime(3), strmode(3), compat(5),
     termcap(5), sticky(7), symlink(7)
     
STANDARDS
     With the exception of options -g, -n and -o, the ls utility conforms to IEEE Std 1003.1-2001
     (“POSIX.1”) and IEEE Std 1003.1-2008 (“POSIX.1”).  The options -B, -D, -G, -I, -T, -U, -W,
     -Z, -b, -h, -w, -y and -, are non-standard extensions.

     The ACL support is compatible with IEEE Std 1003.2c (“POSIX.2c”) Draft 17 (withdrawn).

HISTORY
     An ls command appeared in Version 1 AT&T UNIX.

BUGS
     To maintain backward compatibility, the relationships between the many options are quite
     complex.

     The exception mentioned in the -s option description might be a feature that was based on the
     fact that single-column output usually goes to something other than a terminal.  It is
     debatable whether this is a design bug.

     IEEE Std 1003.2 (“POSIX.2”) mandates opposite sort orders for files with the same timestamp
     when sorting with the -t option.`,
  cd: `NAME
     builtin, !, %, ., :, @, [, {, }, alias, alloc, bg, bind, bindkey, break, breaksw, builtins,
     case, cd, chdir, command, complete, continue, default, dirs, do, done, echo, echotc, elif,
     else, end, endif, endsw, esac, eval, exec, exit, export, false, fc, fg, filetest, fi, for,
     foreach, getopts, glob, goto, hash, hashstat, history, hup, if, jobid, jobs, kill, limit,
     local, log, login, logout, ls-F, nice, nohup, notify, onintr, popd, printenv, printf, pushd,
     pwd, read, readonly, rehash, repeat, return, sched, set, setenv, settc, setty, setvar, shift,
     source, stop, suspend, switch, telltc, test, then, time, times, trap, true, type, ulimit,
     umask, unalias, uncomplete, unhash, unlimit, unset, unsetenv, until, wait, where, which,
     while – shell built-in commands

SYNOPSIS
     See the built-in command description in the appropriate shell manual page.

DESCRIPTION
     Shell builtin commands are commands that can be executed within the running shell's process.
     Note that, in the case of csh(1) builtin commands, the command is executed in a subshell if
     it occurs as any component of a pipeline except the last.

     If a command specified to the shell contains a slash ‘/’, the shell will not execute a
     builtin command, even if the last component of the specified command matches the name of a
     builtin command.  Thus, while specifying “echo” causes a builtin command to be executed under
     shells that support the echo builtin command, specifying “/bin/echo” or “./echo” does not.

     While some builtin commands may exist in more than one shell, their operation may be
     different under each shell which supports them.  Below is a table which lists shell builtin
     commands, the standard shells that support them and whether they exist as standalone
     utilities.

     Only builtin commands for the csh(1) and sh(1) shells are listed here.  Consult a shell's
     manual page for details on the operation of its builtin commands.  Beware that the sh(1)
     manual page, at least, calls some of these commands “built-in commands” and some of them
     “reserved words”.  Users of other shells may need to consult an info(1) page or other sources
     of documentation.

     Commands marked “No**” under External do exist externally, but are implemented as scripts
     using a builtin command of the same name.

           Command           External        csh(1)       sh(1)
           !                 No              No           Yes
           %                 No              Yes          No
           .                 No              No           Yes
           :                 No              Yes          Yes
           @                 No              Yes          Yes
           [                 Yes             No           Yes
           {                 No              No           Yes
           }                 No              No           Yes
           alias             No**            Yes          Yes
           alloc             No              Yes          No
           bg                No**            Yes          Yes
           bind              No              No           Yes
           bindkey           No              Yes          No
           break             No              Yes          Yes
           breaksw           No              Yes          No
           builtin           No              No           Yes
           builtins          No              Yes          No
           case              No              Yes          Yes
           cd                No**            Yes          Yes
           chdir             No              Yes          Yes
           command           No**            No           Yes
           complete          No              Yes          No
           continue          No              Yes          Yes
           default           No              Yes          No
           dirs              No              Yes          No
           do                No              No           Yes
           done              No              No           Yes
           echo              Yes             Yes          Yes
           echotc            No              Yes          No
           elif              No              No           Yes
           else              No              Yes          Yes
           end               No              Yes          No
           endif             No              Yes          No
           endsw             No              Yes          No
           esac              No              No           Yes
           eval              No              Yes          Yes
           exec              No              Yes          Yes
           exit              No              Yes          Yes
           export            No              No           Yes
           false             Yes             No           Yes
           fc                No**            No           Yes
           fg                No**            Yes          Yes
           filetest          No              Yes          No
           fi                No              No           Yes
           for               No              No           Yes
           foreach           No              Yes          No
           getopts           No**            No           Yes
           glob              No              Yes          No
           goto              No              Yes          No
           hash              No**            No           Yes
           hashstat          No              Yes          No
           history           No              Yes          No
           hup               No              Yes          No
           if                No              Yes          Yes
           jobid             No              No           Yes
           jobs              No**            Yes          Yes
           kill              Yes             Yes          Yes
           limit             No              Yes          No
           local             No              No           Yes
           log               No              Yes          No
           login             Yes             Yes          No
           logout            No              Yes          No
           ls-F              No              Yes          No
           nice              Yes             Yes          No
           nohup             Yes             Yes          No
           notify            No              Yes          No
           onintr            No              Yes          No
           popd              No              Yes          No
           printenv          Yes             Yes          No
           printf            Yes             No           Yes
           pushd             No              Yes          No
           pwd               Yes             No           Yes
           read              No**            No           Yes
           readonly          No              No           Yes
           rehash            No              Yes          No
           repeat            No              Yes          No
           return            No              No           Yes
           sched             No              Yes          No
           set               No              Yes          Yes
           setenv            No              Yes          No
           settc             No              Yes          No
           setty             No              Yes          No
           setvar            No              No           Yes
           shift             No              Yes          Yes
           source            No              Yes          No
           stop              No              Yes          No
           suspend           No              Yes          No
           switch            No              Yes          No
           telltc            No              Yes          No
           test              Yes             No           Yes
           then              No              No           Yes
           time              Yes             Yes          No
           times             No              No           Yes
           trap              No              No           Yes
           true              Yes             No           Yes
           type              No**            No           Yes
           ulimit            No**            No           Yes
           umask             No**            Yes          Yes
           unalias           No**            Yes          Yes
           uncomplete        No              Yes          No
           unhash            No              Yes          No
           unlimit           No              Yes          No
           unset             No              Yes          Yes
           unsetenv          No              Yes          No
           until             No              No           Yes
           wait              No**            Yes          Yes
           where             No              Yes          No
           which             Yes             Yes          No
           while             No              Yes          Yes

SEE ALSO
     csh(1), dash(1), echo(1), false(1), info(1), kill(1), login(1), nice(1), nohup(1),
     printenv(1), printf(1), pwd(1), sh(1), test(1), time(1), true(1), which(1), zsh(1)

HISTORY
     The builtin manual page first appeared in FreeBSD 3.4.
     
AUTHORS
     This manual page was written by Sheldon Hearn <sheldonh@FreeBSD.org>.`,
};
