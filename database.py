from dotenv import load_dotenv
from pymongo import MongoClient
import os
load_dotenv()

URI=os.getenv("MONGO_URL")
BLOG_DB=os.getenv("MONGO_DB")
USERS_COLL=os.getenv("MONGO_COLLECTION")
BLOG_COLL=os.getenv("BLOG_COLLECTION")
COMMENTS_COLL=os.getenv("COMMENTS_COLLECTION")


client = MongoClient(URI)
db = client[BLOG_DB]
users_collection = db[USERS_COLL]
blog_collections = db[BLOG_COLL]
comments_collections = db[COMMENTS_COLL]