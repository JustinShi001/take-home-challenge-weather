# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://sheltered-dawn-49797.herokuapp.com/change-password" \
    --include \
    --request PATCH \
    --header "Authorization: Token token=${TOKEN}" \
    --header "Content-Type: application/json" \
    --data '{
      "passwords": {
        "old": "'"${OLDPW}"'",
        "new": "'"${NEWPW}"'"
      }
    }'




echo
