import { ADD_TO_FAB, REMOVE_TO_FAB } from "./Constants"

const initial = []
export const FavorateReducer = (state=initial,action)=>{
    switch(action.type){
        case ADD_TO_FAB:{
            return[
                ...state,
                action.data
            ]
        }
        case REMOVE_TO_FAB:{
           return state.filter(item => item.id !== action.data.id);
        }
        default:
            return state
    }

}