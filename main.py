from fastapi import FastAPI
from routes.auth import router as auth_router
from routes.users import router as users_router
from routes.blogs import router as blog_router

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def get_home():
    return {"msg" : "Welcome to the Homepage"}


app.include_router(auth_router)
app.include_router(users_router)
app.include_router(blog_router)