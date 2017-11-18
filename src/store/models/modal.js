// Initial state
const initialState = {
  isOpen: false,
  type: null,
  data: {}
};

// Actions
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';

// Reducer
const ModalReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case MODAL_OPEN:
      return {
        isOpen: true,
        ...payload
      };
    case MODAL_CLOSE:
      return {
        isOpen: false
      };
    default:
      return state;
  }
};

// Action creators

export function open({ type, data }) {
  return {
    type: MODAL_OPEN,
    payload: {
      type,
      data
    }
  };
}

export function close() {
  return {
    type: MODAL_CLOSE,
    payload: {}
  };
}

export default ModalReducer;
