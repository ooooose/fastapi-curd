import React, { useEffect, useReducer } from "react";
import { fetchTasks } from "../../lib/api/task";

import {
  initialState,
  tasksActionTypes,
  tasksReducer,
} from '../../reducers/tasks';

import { REQUEST_STATE } from "../../constants";

const Task = () => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    dispatch({ type: tasksActionTypes.FETCHING });
    fetchTasks()
    .then((data) => dispatch({
      type: tasksActionTypes.FETCH_SUCCESS,
      payload: {
        tasks: data,
      }
    }))
  }, [])
  return (
    <>
      {
        state.fetchState === REQUEST_STATE.LOADING ?
          <>
            <p>loading...</p>
          </>
        :
          state.tasksList.map((item, index) =>
            <p key={index}>{item.title}</p>
          )
      }
    </>
  )
}

export default Task;