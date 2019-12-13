# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://sheltered-dawn-49797.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \

echo
