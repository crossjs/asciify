import sublime, sublime_plugin, os, sys

class AsciifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        myFile = self.view.file_name()

        pkgDir = os.path.join(sublime.packages_path(), 'Asciify')

        # myFile = myFile.replace("\\", "\\\\")
        if sys.platform.startswith('win'):
            cmdStr = 'start "" "' + pkgDir + '\\node.exe" "' + pkgDir + '\\asciify.js" "' + myFile + '"'
        else:
            cmdStr = 'node "' + pkgDir + '/asciify.js" "' + myFile + '"'

        print (cmdStr)

        os.popen(cmdStr)


class DeasciifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        myFile = self.view.file_name()

        pkgDir = os.path.join(sublime.packages_path(), 'Asciify')

        # myFile = myFile.replace("\\", "\\\\")
        if sys.platform.startswith('win'):
            cmdStr = 'start "" "' + pkgDir + '\\node.exe" "' + pkgDir + '\\deasciify.js" "' + myFile + '"'
        else:
            cmdStr = 'node "' + pkgDir + '/deasciify.js" "' + myFile + '"'

        print (cmdStr)

        os.popen(cmdStr)