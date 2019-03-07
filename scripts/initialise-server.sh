BLUE="\033[0;34m"
RED="\033[0;31m"
DEFAULT="\033[0m"

if [ -d .mongo_database ]; then
  printf "\n${BLUE}*** .mongo_database/ found ***${DEFAULT}\n\n"
else
  mkdir .mongo_database
  printf "\n${RED}*** initialising .mongo_database/ ***${DEFAULT}\n\n"
fi

sudo mongod --dbpath ./.mongo_database
