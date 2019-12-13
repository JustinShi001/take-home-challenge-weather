# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://sheltered-dawn-49797.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PW}"'"
    }
  }'

echo
