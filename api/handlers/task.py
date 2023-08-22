from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Tuple, Optional

from sqlalchemy import select
from sqlalchemy.orm import joinedload
from sqlalchemy.engine import Result

import models.task as task_model
import schemas.task as task_schema


async def create_task(
        db: AsyncSession, task_create: task_schema.TaskCreate
) -> task_model.Task:
    task = task_model.Task(**task_create.dict())
    db.add(task)
    await db.commit()
    await db.refresh(task)
    return task


async def get_tasks(db: AsyncSession) -> List[Tuple[int, str, bool]]:
    result: Result = await (
        db.execute(
            select(
                task_model.Task.id,
                task_model.Task.title,
            ).outerjoin(task_model.Done)
        )
    )
    return result.all()


async def get_task(db: AsyncSession, task_id: int) -> Optional[task_model.Task]:
    result: Result = await db.execute(
        select(task_model.Task).where(task_model.Task.id == task_id)
    )
    return task.scalar()

async def update_task(
        db: AsyncSession, task_create: task_schema.TaskCreate, original: task_model.Task
) -> task_model.Task:
    original.title = task_create.title
    db.add(original)
    await db.commit()
    await db.refresh(original)
    return original

async def delete_task(db: AsyncSession, original: task_model.Task) -> None:
    await db.delete(original)
    await db.commit()
