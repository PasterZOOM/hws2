type InitialThemeType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitialThemeType = initState, action: ChangeThemeType): InitialThemeType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
type ChangeThemeType = { type: 'SET_THEME_ID', id: number }

export const changeThemeId = (id: number): ChangeThemeType => ({type: 'SET_THEME_ID', id}) // fix any
