type StateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: SetThemeActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
            state.themeId = action.id
            return state
        }
        default:
            return state
    }
}

type SetThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): SetThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
