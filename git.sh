#!/bin/bash
 
echo "Commit info: "
read x
git add . && git commit -m ${x} && git push


# single line failed :>>
#read -p "Commit info: " x
#git add . && git commit -m ${x} && git push