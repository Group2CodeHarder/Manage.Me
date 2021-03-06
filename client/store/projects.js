import axios from 'axios';

// ACTION TYPES

const GET_PROJECTS = 'GET_PROJECTS';
const CREATE_PROJECT = 'CREATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';
const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';

// ACTION CREATORS

const _getProjects = (projects) => ({ type: GET_PROJECTS, projects });
const _createProject = (project) => ({ type: CREATE_PROJECT, project });
const _deleteProject = (project) => ({ type: DELETE_PROJECT, project });
const _updateProject = (project) => ({ type: UPDATE_PROJECT, project });
const _getProjectById = (project) => ({ type: GET_PROJECT_BY_ID, project });

// THUNK CREATORS

export const getProjects = (userId) => {
    return async (dispatch) => {
        const { data: projects } = await axios.get('/api/projects', { params: { userId} });
        dispatch(_getProjects(projects));
    };
};

export const getProjectById = (projectId) => {
    return async (dispatch) => {
        const { data: project } = await axios.get(`/api/projects/${projectId}`);
        dispatch(_getProjectById(project));
    };
};

export const createProject = (project, history) => {
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/projects', project);
        dispatch(_createProject(created));
        history.push('/projects');
    };
};


export const deleteProject = (project, history) => {
    return async (dispatch) => {
        await axios.delete(`/api/projects/${project.id}`);
        dispatch(_deleteProject(project));
        history.push('/projects');
    };
};


export const updateProject = (project, history) => {
    return async (dispatch) => {
        const { data: updated } = await axios.put(`/api/projects/${project.id}`, project);
        dispatch(_updateProject(updated));
        history.push(`/projects/${project.id}`)
    };
};


// REDUCER

export default function (state = [], action) {
    switch (action.type) {
        case GET_PROJECTS:
            return action.projects;
        case CREATE_PROJECT:
            return [...state, action.project];
        case DELETE_PROJECT:
            return state.filter((project) => project.id !== action.project.id);
        case UPDATE_PROJECT:
            return state.map((project) => project.id === action.project.id ? 
            action.project : project);
        case GET_PROJECT_BY_ID:
            return action.project;
        default:
            return state;
    }
  }