# Ex: TOKEN=tokengoeshere ID=idgoeshere TEXT=textgoeshere sh curl-scripts/examples/update.sh

curl "http://localhost:4741/appointments/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "appointment": {
      "date": "'"${DATE}"'",
      "dealer_id": "'"${DID}"'",
      "user_id": "'"${USERID}"'"
    }
  }'

  echo
