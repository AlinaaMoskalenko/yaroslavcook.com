//action creators
export const openViewer = () => ({ type: 'OPEN_VIEWER' });
export const closeViewer = () =>({ type: 'CLOSE_VIEWER' });
export const setPhotosList = (payload) => ({ type: 'SET_PHOTOS_LIST', payload });
export const setCurrentPhoto = (payload) => ({ type: 'SET_CURRENT_PHOTO', payload });
export const setBackgroundImage = (payload) => ({ type: 'SET_BACKGROUND_IMAGE', payload });
export const setBreadcrumbs = (payload) => ({ type: 'SET_BREADCRUMBS', payload });
export const setBreadcrumbsHeight = (payload) => ({ type: 'SET_BREADCRUMBS_HEIGHT', payload });