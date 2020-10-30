import React, { useReducer, createContext } from 'react';

const SetModalContext = createContext({
  setModal: false,

});

function setModalReducer(state, action) {
  switch (action.type) {
    case 'TOOGLE_MODAL':
      return {
        ...state,
        setModal: action.payload
      };
    
    default:
      return state;
  }
}

function ModalProvider(props) {
  const [state, dispatch] = useReducer(setModalReducer, {setModal : false});

  function toggleModal(boolean){
    dispatch({ type: 'TOOGLE_MODAL',payload : boolean });

  }
  return (
    <SetModalContext.Provider
      value={{setModal : state.setModal,toggleModal}}
      {...props}
    />
  );
}

export { SetModalContext, ModalProvider };