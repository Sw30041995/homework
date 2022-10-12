import {UserType} from "../HW8";

type sortUpACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type removeMinorsACType = ReturnType<typeof removeMinorsAC>

type ActionType = sortUpACType | sortDownACType | removeMinorsACType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
        }
        case 'SORT-DOWN': {
            return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
        }
        case 'REMOVE-MINORS': {
            return state.filter(u => u.age > action.payload)
        }
        default: return state
    }
}

export const sortUpAC = () => {
        return {type: 'SORT-UP'} as const
}
export const sortDownAC = () => {
    return {type: 'SORT-DOWN'} as const
}
export const removeMinorsAC = () => {
    return {type: 'REMOVE-MINORS', payload: 18} as const
}