const initialState = {
    messages: []
  };
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload]
        };
      case 'RECEIVE_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload]
        };
      case 'LOAD_MESSAGES':
        
        return state;
      default:
        return state;
    }
  };
  
  export default messageReducer;
  