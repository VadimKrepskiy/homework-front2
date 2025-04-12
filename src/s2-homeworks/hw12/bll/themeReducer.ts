const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: Action): Theme => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
            return { themeId: action.id }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): Action => ({ type: 'SET_THEME_ID', id }) // fix any

type Action = {
    type: 'SET_THEME_ID',
    id: number
}

type Theme = {
    themeId: number
}