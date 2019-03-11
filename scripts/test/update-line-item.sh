source ${BASH_SOURCE%/*}/../config.sh

DATE="date_update_test"
TIME="time_update_test"
TASK="task_update_test"
DETAIL="detail_update_test"

INPUT="date=${DATE}&time=${TIME}&task=${TASK}&detail=${DETAIL}"

curl -X PUT -d $INPUT ${url_host}/${url_path}/$1 | jq