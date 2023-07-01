from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

import schemas.task as task_schema

import handlers.task as task_handler
from db import get_db

router = APIRouter()

@router.get("/tasks", response_model=List[task_schema.Task])
async def list_tasks(db: AsyncSession = Depends(get_db)):
    return await task_handler.get_tasks_with_done(db)


@router.post("/tasks", response_model=task_schema.TaskCreateResponse)
async def create_task(
        task_body: task_schema.TaskCreate, db: AsyncSession = Depends(get_db)
    ):
    return await task_handler.create_task(db, task_body)


@router.put("/tasks/{task_id}", response_model=task_schema.TaskCreateResponse)
async def update_task(task_id: int, task_body: task_schema.TaskCreate, db: AsyncSession = Depends(get_db)):
    task = await task_handler.get_task(db, task_id = task_id)
    if task is None:
        raise HTTPException(status_code=404, detail='Task not found')

    return await task_handler.update_task(db, task_body, original=task)


@router.delete("/tasks/{task_id}", response_model=None)
async def delete_task(task_id: int):
    return
