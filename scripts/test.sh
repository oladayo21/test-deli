#!/bin/zsh
dir_name=./public

function countDirectories(){
    echo $(find ${dir_name} -name 'test*' -type d | wc -l)
    
}
function test(){
    dir_count=$(countDirectories)
[[ dir_count -gt 0 ]] && echo "Test page built" && exit 1 || echo "No test Pages built" && exit 0
}
test
