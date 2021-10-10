#!/bin/zsh
dir_name=./public

function exitWithError() {
  echo "Error: $1"
  exit 1
}

function testIfPresent(){
    case "${checkMode}" in
        "isPresent") [[  -n $(find public -maxdepth 1 -name "$testDir" -type d) ]];;
        "isAbsent") [[  ! -n $(find public -maxdepth 1 -name "$testDir" -type d) ]];;
        *) exitWithError "Invalid check mode. Allowed value is (isPresent or isAbsent)";;
    esac
    #dirCount=$(find ${dir_name} -maxdepth 1 -name "$1" -type d | wc -l)
    #[[  ! -n $(find ${dir_name} -maxdepth 1 -name "$1" -type d) ]] 
}
function hi(){
    echo $checkMode
}
function getParams(){
    while getopts d:m: flag
    do
        case "$flag" in 
        m) checkMode=${OPTARG};;
        d) testDir=${OPTARG};;
        esac
    done
    # [[ -z $checkMode ]] && exitWithError "No checkmode passed"
    # [[  $checkMode != "isPresent" && $checkMode != "isAbsent" ]] && exitWithError "Invalid mode"
    [[ -z $testDir ]] && exitWithError "No directory name given"
}
 function test2(){

    find ./public -maxdepth 1 -name "$testDir" -type d && exitWithError "Error: '$testDir' should not be built" || {echo "Success"; exit 0;} 
 }
#testIfPresent "$testDir"
#-o $checkMode != "isAbsent"
getParams "$@"
testIfPresent

function getParams(){
    while getopts d:m: flag
    do
        case "$flag" in
            m) checkMode=${OPTARG};;
            d) testDir=${OPTARG};;
        esac
    done
    # exit if no directory is passed
    [[ -z $testDir2 ]] && exitWithError "No directory name passed"
}
