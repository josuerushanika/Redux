// console.log('From index.js')
const BUY_CAKE = 'BUY_CAKE'

//-Action is an obect with type property
//Action creator is a f(x) that return an action 
function buyCake() {
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
//

const reducer =(state = initialState,action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}