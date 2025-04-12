type StateType = {
    themeId: string
}

const initState = {
    themeId: '1',
}

export const themeReducer = (state = initState, action: SetThemeActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
            return { ...state, themeId: action.id }
        }
        default:
            return state
    }
}

type SetThemeActionType = {
    type: 'SET_THEME_ID',
    id: string
}

export const changeThemeId = (id: string): SetThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
