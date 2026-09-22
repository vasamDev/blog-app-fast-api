from fastapi import APIRouter, HTTPException, status
from models import UserRegister, UserLogin
from database import users_collection
from utils.password import hash_password, verify_password
from authentication import create_access_token
router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.post("/register")
def create_user(register : UserRegister):
    data = register.model_dump()
    find_user = users_collection.find_one({"email" : register.email})

    if find_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="This email is already exists please try with another"
        )
    data["password"] = hash_password(register.password)
    create_usr = users_collection.insert_one(data)
    data["_id"] = str(create_usr.inserted_id)
    return data


@router.post("/login")
def login_user(login:UserLogin):
    data = login.model_dump()
    find_user = users_collection.find_one({"email" : login.email})
    if not find_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User Not Found"
        )
    verified = verify_password(login.password, find_user["password"])
    if verified:
        token = create_access_token({"email" : login.email, "name" : find_user["name"]})

    return {
        "token_type" : "Bearer",
        "token" : token
    }