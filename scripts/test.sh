#!/bin/zsh
dir_name=./public
function exitWithError() {
  echo "Error: $1"
  exit 1
}
function countDirectories(){
    echo $(find ${dir_name} -name 'test*' -type d | wc -l)
    
}
function test(){
    dir_count=$(countDirectories)
[[ dir_count -gt 0 ]] && exitWithError "Test page should not be built" ||  exit 0
}
test
