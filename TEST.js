git filter-branch -f --env-filter '
OLD_EMAIL="962475158@qq.com"
CORRECT_NAME="EvilMoOd"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
fi
' --tag-name-filter cat -- --branches --tags