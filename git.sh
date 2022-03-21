#!/bin/bash
 
echo "Commit info without spaces: "
read x
git add . && git commit -m ${x} && git push


# single line failed :>>
#read -p echo "Commit info without spaces: " x
#git add . && git commit -m ${x} && git push