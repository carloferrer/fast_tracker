DATE="date_update_test"
TIME="time_update_test"
TASK="task_update_test"
DETAIL="detail_update_test"

INPUT="date=${DATE}&time=${TIME}&task=${TASK}&detail=${DETAIL}"

curl -X PUT -d $INPUT localhost:8080/api/item/$1 | jq