from jose import jwt, JWTError
from fastapi import HTTPException, status
from datetime import timezone, timedelta, datetime
from dotenv import load_dotenv
import os


secret_key = os.getenv("SECRET_KEY")
Algorithem = os.getenv("ALGORITHEM")



def create_access_token(data:dict):
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(minutes=5)
    token_gen = jwt.encode(payload, secret_key, algorithm=Algorithem)

    return token_gen


def verify_access_token(token:str):
    try:
        verify = jwt.decode(token, secret_key, algorithms=Algorithem)
        return verify
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Not verified"
        )