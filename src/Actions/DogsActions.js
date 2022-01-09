import { GET_DOG } from "./types";

export const getDogs = (data) => {
    return {
        type: GET_DOG,
        payload: data
    }
}