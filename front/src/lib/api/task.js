import axios from 'axios';
import { tasksIndex } from '../../urls';

export const fetchTasks = () => {
    return axios.get(tasksIndex)
    .then(res => {
        return res.data
    })
    .catch((e) => console.error(e))
}

export const createTask = (data) => {
    return axios.post(tasksIndex, data)
}