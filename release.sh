#!/bin/bash

set -euo pipefail

if [[ $# != 1 ]]; then
  echo "$0 [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]"
  exit 1
fi

npm version "$1" -m "typeless release %s"

echo "Please check your changes with 'git log' and finally execute 'git push --follow-tags'"

