import { GET_DOG } from "../Actions/types";

const DogsReducer = (state, action) => {
    switch (action.type) {
        case GET_DOG:
            return {
                ...state,
                dogs: [action.payload]
            }
    default:
    }
}

export default DogsReducer;