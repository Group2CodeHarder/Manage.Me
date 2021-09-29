import axios from 'axios';

// ACTION TYPES

const GET_PROJECTS = 'GET_PROJECTS';
const CREATE_PROJECT = 'CREATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';

// ACTION CREATORS

const _getProjects = (projects) => ({ type: GET_PROJECTS, projects });
const _createProject = (project) => ({ type: CREATE_PROJECT, project });
const _deleteProject = (project) => ({ type: DELETE_PROJECT, project });
const _updateProject = (project) => ({ type: UPDATE_PROJECT, project });


// THUNK CREATORS

export const getProjects = (userId) => {
    return async (dispatch) => {
        const { data: projects } = await axios.get('/api/projects', { params: { userId} });
        dispatch(_getProjects(projects));
    };
};

export const createProject = (project, history) => {
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/projects', project);
        dispatch(_createProject(created));
        history.push('/projects');
    };
};


export const deleteProject = (project) => {
    return async (dispatch) => {
        await axios.delete(`/api/projects/${project.id}`);
        dispatch(_deleteProject(project));
    };
};


export const updateProject = (project) => {
    return async (dispatch) => {
        const { data: updated } = await axios.put(`/api/projects/${project.id}`, project);
        dispatch(_updateProject(updated));
    };
};


// REDUCER

export default function (state = {}, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return action.projects;
        case CREATE_PROJECT:
            return [...state, action.project]
        default:
            return state;
    }
  }