export type initStateType = {
    loading: boolean
}
type loadingACType = ReturnType<typeof loadingAC>
type ActionType = loadingACType

const initState: initStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.payload.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (value: boolean) => {
    return {
        type: 'LOADING',
        payload: {
            loading: value
        }
    } as const
}