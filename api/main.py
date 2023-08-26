from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import task

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def Hello():
    return {"Hello": "hello world!"}

app.include_router(task.router)
