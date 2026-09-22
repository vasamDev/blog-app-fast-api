from fastapi import APIRouter, Depends
from dependencies import get_current_user
router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.get("/")
def get_user(current_user = Depends(get_current_user)):
    current_user["_id"] = str(current_user["_id"])
    return {"msg" : "users msg", 'user' : current_user}
