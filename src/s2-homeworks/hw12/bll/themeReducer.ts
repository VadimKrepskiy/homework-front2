type State = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeAction): State => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeAction = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeAction => ({ type: 'SET_THEME_ID', id }) // fix any