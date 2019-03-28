const initialState = {age :28};

const myReducer = (state = initialState,action)=>{
  const newState = {...state};
  if(action.type==='AGE_UP'){
       newState.age++;
  }
  if(action.type==='AGE_DOWN'){
       newState.age--;
  }
  return newState;
}
export default myReducer;