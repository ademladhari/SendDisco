const initialState = {
    messages: [], // Initial state for messages
  };
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload], // Add new message
        };
      
      default:
        return state;
    }
  };
  
  export default messageReducer;
  