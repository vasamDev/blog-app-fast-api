from fastapi import APIRouter, Depends
from dependencies import get_current_user
from models import addBlog, addComment
from database import blog_collections, comments_collections
from bson import ObjectId
router = APIRouter(
    prefix="/blogs",
    tags=["Blogs"]
)


@router.get("/")
def get_all_blog(current_user = Depends(get_current_user)):
    get_user_id = str(current_user["_id"])
    get_all_blogs = list(blog_collections.find({"user_id" : get_user_id}))
    for blog in get_all_blogs:
        blog["_id"] = str(blog["_id"])
    return get_all_blogs



@router.post("/add")
def create_blog(blog: addBlog, current_user = Depends(get_current_user)):
    data = blog.model_dump()
    id = current_user.get("_id")
    data["user_id"] = str(current_user["_id"])
    create_blog = blog_collections.insert_one(data)

    data["_id"] = str(create_blog.inserted_id)
    return data


@router.get('/{id}')
def get_blog(id:str , current_user = Depends(get_current_user)):
    get_blog = blog_collections.find_one({"_id" : ObjectId(id)})
    if not get_blog:
        return {"msg" : "no blogs available on this id"}

    get_blog["_id"] = str(get_blog["_id"])
    return get_blog



@router.put("/{id}/update")
def update_blog(id:str ,blog : addBlog, current_user = Depends(get_current_user)):
    data = blog.model_dump()
    update_blog = blog_collections.find_one_and_update({"_id" : ObjectId(id)}, {"$set" : data})
    data["_id"] = str(update_blog["_id"])
    return data

@router.delete("/{id}")
def delete_blog(id:str, current_user = Depends(get_current_user)):
    delete_blog = blog_collections.delete_one({"_id" : ObjectId(id)})

    return {
        "msg" : "Successfully Deleted Blog"
    }


@router.post("/{blog_id}/comments/add")
def creater_comments(blog_id:str, comments: addComment, current_user=Depends(get_current_user)):
    comments = comments.model_dump()
    get_blog = blog_collections.find({"_id" : str(blog_id)})
    print(get_blog)
    comments["blog_id"] = str(blog_id)
    comments["user_id"] = str(current_user["_id"])
    createComment = comments_collections.insert_one(comments)
    comments["_id"] = str(createComment.inserted_id)
    print(comments)
    return comments

@router.get("/{blog_id}/comments")
def get_comments(blog_id:str, current_user=Depends(get_current_user)):
    get_all_comments = list(comments_collections.find({"blog_id" : str(blog_id)}))
    for comment in get_all_comments:
        comment["_id"] = str(comment["_id"])
    return get_all_comments
