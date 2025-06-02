import { ADD_TO_FAB, REMOVE_TO_FAB } from "./Constants";

export const addToFav=(item)=>{
    return{
    type: ADD_TO_FAB,
    data:item
}
}

export const removeFromFav=(item)=>{
    return{
        type: REMOVE_TO_FAB,
        data: item
    }
}
