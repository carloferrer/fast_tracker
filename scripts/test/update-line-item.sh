source ${BASH_SOURCE%/*}/../config.sh

tracker_date="date_update_test"
tracker_time="time_update_test"
tracker_task="task_update_test"
tracker_detail="detail_update_test"

tracker_input="date=${tracker_date}&time=${tracker_time}&task=${tracker_task}&detail=${tracker_detail}"

curl -X PUT -d $tracker_input $url_host/$url_path/$1 | jq