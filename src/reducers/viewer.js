const initialState = {
  photosList: [],
  currentPhoto: {},
  photoViewer: false
};

//reducer
const viewerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'OPEN_VIEWER':
      return {
        ...state,
        photoViewer: true
      };

    case 'CLOSE_VIEWER':
      return {
        ...state,
        photoViewer: false
      };

    case 'SET_PHOTOS_LIST':
      return {
        ...state,
        photosList: payload
      };
    
    case 'SET_CURRENT_PHOTO':
      return {
        ...state,
        currentPhoto: payload
      };

    default:
      return state;
  }
};

export default viewerReducer;