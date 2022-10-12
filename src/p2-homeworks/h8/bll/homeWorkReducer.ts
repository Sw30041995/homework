import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}