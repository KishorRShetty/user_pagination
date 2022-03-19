#!/bin/bash
 
read -p "Commit info: " x

git add . && git commit -m ${x} && git push
