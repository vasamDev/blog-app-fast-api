from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException, status
from authentication import verify_access_token
from database import users_collection
psw_Oauth=OAuth2PasswordBearer(
    tokenUrl="/auth/login",
)


def get_current_user(token = Depends(psw_Oauth)):
    token_verify = verify_access_token(token)
    email = token_verify.get("email")
    get_user = users_collection.find_one({"email" : email})
    if not get_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Not Found user"
        )
    del get_user["password"]
    get_user["_id"] = str(get_user["_id"])
    return get_user
