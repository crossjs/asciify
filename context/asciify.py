import sublime, sublime_plugin, os

class AsciifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        myFile = self.view.file_name()

        print ("Asciifying: " + myFile)

        os.system("node asciify.js " + myFile)


class DeasciifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        myFile = self.view.file_name()

        print ("Asciifying: " + myFile)

        os.system("node deasciify.js " + myFile)