const initialState = {
  photosList: [],
  currentPhoto: {},
  photoViewer: false,
  backgroundImage: null,
  breadcrumbsLinks: [],
  breadcrumbsHeight: null
};

//reducer
const reducer = (state = initialState, action) => {
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

    case 'SET_BACKGROUND_IMAGE':
      return {
        ...state,
        backgroundImage: payload
      };

    case 'SET_BREADCRUMBS':
      return {
        ...state,
        breadcrumbsLinks: payload
      };

    case 'SET_BREADCRUMBS_HEIGHT':
      return {
        ...state,
        breadcrumbsHeight: payload
      };

    default:
      return state;
  }
};

export default reducer;