import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let compare = (a: UserType, b: UserType):number => a.name < b.name ? -1 : 1;
            if(action.payload === 'down')
                compare = (a: UserType, b: UserType):number => a.name > b.name ? -1 : 1;
            state.sort((a,b) => compare(a,b))
            return state // need to fix
        }
        case 'check': {
            state = state.filter((a:UserType) => a.age >= 18)
            return state // need to fix
        }
        default:
            return state
    }
}
