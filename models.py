from pydantic import BaseModel, EmailStr

class UserRegister(BaseModel):
    name : str
    email : EmailStr
    password : str
    profileImg  : str
    bio : str


class UserLogin(BaseModel):
    email : EmailStr
    password : str


class addBlog(BaseModel):
    title : str
    content : str
    category : str
    image : str
    likes : int
    dislikes : int
    blogImg : str


class addComment(BaseModel):
    comment : str
