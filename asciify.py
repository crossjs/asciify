import sublime, sublime_plugin, os

class AsciifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        myFile = self.view.file_name()

        pkgDir = os.path.join(sublime.packages_path(), 'Asciify')

        # myFile = myFile.replace("\\", "\\\\")

        cmdStr = 'node "' + pkgDir + '\\asciify.js" "' + myFile + '"'

        print (cmdStr)

        os.system(cmdStr)


class DeasciifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        myFile = self.view.file_name()

        pkgDir = os.path.join(sublime.packages_path(), 'Asciify')

        # myFile = myFile.replace("\\", "\\\\")

        cmdStr = 'node "' + pkgDir + '\\deasciify.js" "' + myFile + '"'

        print (cmdStr)

        os.system(cmdStr)