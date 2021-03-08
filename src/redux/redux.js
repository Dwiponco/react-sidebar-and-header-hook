// import {} from "redux"
const redux = require("redux")
const createStore = redux.createStore

const initialState = {
    value : 0,
    age  : 17
}

// reducer
const rootReducer = (state = initialState, action) => {
    // if(action.type === "ADD_AGE"){
    //     return {
    //         ...state,
    //         age :  state.age + 3
    //     }
    // }
    // if(action.type === "CHANGE_VALUE"){
    //     return {
    //         ...state,
    //         value : state.value + action.newValue
    //     }
    // }
    switch(action.type){
        case "ADD_AGE" :
            return {
                ...state,
                age :  state.age + 3
            }
        case "CHANGE_VALUE" : 
            return {
                ...state,
                value : state.value + action.newValue
            }
        default :
            return state
    }
}

// store
const store = createStore(rootReducer)
console.log(store.getState())


// subscription
store.subscribe(() => {
    console.log("change : ", store.getState())
})

// dispatching action
store.dispatch({
    type: "ADD_AGE"
})
store.dispatch({
    type: "CHANGE_VALUE",
    newValue : 12
})
console.log(store.getState())