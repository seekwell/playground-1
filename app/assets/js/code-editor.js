var fs = require('fs')
var path = require('path')
var codeMirror = require('codemirror')

require('codemirror/keymap/emacs')
require('codemirror/keymap/sublime')
require('codemirror/keymap/vim')

require('codemirror/mode/sql/sql')

var someSql = fs.readFileSync(path.resolve(path.join(__dirname, '../example.sql')), 'utf8')

var editor = codeMirror(document.getElementById('editor'), {
  value: someSql,
  mode: 'text/x-mssql',
  theme: 'monokai',
  indentUnit: 4,
  smartIndent: true,
  tabSize: 4,
  indentWithTabs: false,
  keyMap: 'sublime',
  lineNumbers: true,
  showCursorWhenSelecting: true,
  styleActiveLine: true,
  matchBrackets: true
})

document.getElementById('theme-select').addEventListener('change', function (event) {
  var select = event.target
  var theme = select.options[select.selectedIndex].textContent
  editor.setOption('theme', theme)
})

document.getElementById('key-binding-select').addEventListener('change', function (event) {
  var select = event.target
  var keyBinding = select.options[select.selectedIndex].textContent
  editor.setOption('keyMap', keyBinding)
})
