import { REGISTER,LOGIN,LOGOUT,DELETE } from "./ActionsType"

 const initialState = { user:[] ,login:null}

  const   Reducer=  (state = initialState, action) => {
  switch (action.type) {

  case REGISTER:
    return { ...state, user:[action.payload,...state.user] }
  case LOGIN:
    return { ...state,login:action.payload}
  case LOGOUT:
    return { ...state, user:[],login:false}
  case DELETE:
    
    return{...state,user:state.user.filter(user=>{return user.email !==action.payload})}
  default:
    return state
  }
}
export default Reducer