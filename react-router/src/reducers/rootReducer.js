
const initialState = {
  cards: [
    {id: '1', title: 'Anar', body: 'Hello Anar, how are you?'},
    {id: '2', title: 'Ugur', body: 'Hello Ugur, how are you?'},
    {id: '3', title: 'Sanan', body: 'Hello Sanan, how are you?'}
  ]
}

const rootReducer = (state = initialState, action)=>{
  return state;
}

export default rootReducer;