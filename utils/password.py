from passlib.context import CryptContext

psw_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(psw:str):
    hash_psw = psw_context.hash(psw)
    return hash_psw


def verify_password(plain:str, hashed:str):
    verify = psw_context.verify(plain, hashed)
    return verify