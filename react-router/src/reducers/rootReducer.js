
const initialState = {
  cards: [
    {id: '1', title: 'Anar', body: 'Hello Anar, how are you?'},
    {id: '2', title: 'Ugur', body: 'Hello Ugur, how are you?'},
    {id: '3', title: 'Sanan', body: 'Hello Sanan, how are you?'}
  ],
  users : []
}

const rootReducer = (state = initialState, action)=>{
 switch(action.type){
  case 'DELETE_CARD' :
    let newCards = state.cards.filter(card=>card.id !== action.id)
    return{
      ...state,
      cards : newCards
    }

    case 'FETCH_USER' :
      return{
        ...state,
        users : action.payload
      }

    default :
    return state;
 }
}

export default rootReducer;