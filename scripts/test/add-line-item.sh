source ${BASH_SOURCE%/*}/../config.sh

tracker_task="task_test"
tracker_detail="detail_test"

tracker_input="task=${tracker_task}&detail=${tracker_detail}"

curl --data $tracker_input ${url_host}/${url_path} | jq