#!/bin/bash
 
echo "Commit info: "
read x
git add . && git commit -m ${x} && git push
