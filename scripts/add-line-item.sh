TASK="task_test"
DETAIL="detail_test"

INPUT="task=${TASK}&detail=${DETAIL}"

curl --data $INPUT localhost:8080/api/item | jq