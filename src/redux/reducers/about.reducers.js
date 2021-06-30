import { REQUEST, FAILED, SUCCESS } from '../actions/about.actions'

const initialState = {
    data : [],
    isLoading : false,
    error: false,
};

const about = (state = initialState, action) => {
    switch (action.type){

        case REQUEST: 
            return {
                ...state,
                isLoading: true,
                editSuccess : false,
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };

        case SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            }

        default:
            return  state;
    }
}

export default about;