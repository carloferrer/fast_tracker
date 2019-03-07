BLUE="\033[0;34m"
RED="\033[0;31m"
DEFAULT="\033[0m"
DB_NAME=".mongo_database/"

# Check for existence of database directory.
if [ -d ${DB_NAME} ]; then
  printf "\n${BLUE}*** ${DB_NAME} found ***${DEFAULT}\n\n"
else
  # Ensure database directory isn't committed.
  if ! grep -q ${DB_NAME} .gitignore; then
    echo "${DB_NAME}" >> .gitignore
  fi
  mkdir ${DB_NAME}
  printf "\n${RED}*** initialising ${DB_NAME} ***${DEFAULT}\n\n"
fi

# (Initialise and) start database server.
sudo mongod --dbpath ${DB_NAME}
