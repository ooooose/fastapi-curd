from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession

import schemas.done as done_schema
import handlers.done as done_handler
from db import get_db

router = APIRouter()


@router.put("/tasks/{task_id}/done", response_model=done_schema.DoneResponse)
async def mark_task_as_done(task_id: int, db: AsyncSession = Depends(get_db)):
    done = await done_handler.get_done(db, task_id=task_id)
    if done is not None:
        raise HTTPException(status=400, detail="Done already exists")
    return await done_handler.create_done(db, task_id)


@router.delete("/tasks/{task_id}/done", response_model=None)
async def unmark_task_as_done(task_id: int, db: AsyncSession = Depends(get_db)):
    done = await done_handler.get_done(db, task_id=task_id)
    if done is None:
        raise HTTPException(status=404, detail="Done not found")

    return await done_handler.delete_done(db, original=done)
