#!/bin/bash

curl "http://localhost:4741/appointments" \
  --include \
  --request POST \
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
