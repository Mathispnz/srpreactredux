import { GET_JEWELS, UPDATE_JEWELS } from './types';

export const getJewels = () => {
    return {
        type: GET_JEWELS
    }
}

export const updateJewels = id => {
    return {
        type: UPDATE_JEWELS,
        payload: id
    }
}