source ${BASH_SOURCE%/*}/../config.sh

curl -X DELETE $url_host/$url_path/$1 | jq
