## VIM

* Set numbers of lines: :set number
* Set ruler (number of position on line): :set ruler
* File with user settings of Vim: ~/.vimrc
* Move: <h \j/ /k\ l>
* Move by words: <<b  w>>
* Move in the line: <<<^  $>>>
* Insert: i
* Delete: x
* Delete/cut word: d+w
* Delete/cut line: dd
* Copy line: yy
* Copy: y
* Paste: p
* Undo: u
* Find: / ttttt <Enter>
* Find next: n
* Find prev: N
* Find all and replace: :s /findwhat/replacetowhat/ig
* Write changes to file: :w
* Exit form file: q
* Exit without saving: :q!



Файл настройки: ~/.vimrc
Можно редактировать файлы через сеть, например
:e <scp|ftp|ftps>://user@host/path/to/the/file.txt
:Ex или :e ./ - файловый менеджер