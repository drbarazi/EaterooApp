

export default function(state={}, action){
    switch(action.type){
        case "FOODS_FETCH":
            return {
                ...state,
                foodsList:action.payload
            }
        default:
            return state
    }
}