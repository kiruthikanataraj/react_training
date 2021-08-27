import { ACTIONS } from "./types";

export const fetchListing = (baseUrl) => (dispatch) => {
  dispatch({ type: ACTIONS.LOADER, payload: true });
  return fetch(baseUrl)
    .then((response) => {
      dispatch({ type: ACTIONS.LOADER, payload: false });
      return response.json();
    })
    .then((response) => {
      dispatch({ type: ACTIONS.FETCH_LISTING_SUCESS, payload: response });
    })
    .catch((error) => {
      dispatch({ type: ACTIONS.LOADER, payload: false });
      dispatch({ type: ACTIONS.FETCH_LISTING_ERROR, payload: error });
    });
};

export const deleteUser = (user) => (dispatch) => {
    dispatch({ type: ACTIONS.LOADER, payload: true });
    return  fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`, {
        method: 'DELETE',
      }).then((response) => {
        dispatch({ type: ACTIONS.LOADER, payload: false });
        return response.json();
      })
      .then((response) => {
         dispatch(fetchListing("https://jsonplaceholder.typicode.com/posts"));
         alert('Successfully deleted');
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.LOADER, payload: false });
        dispatch({ type: ACTIONS.DELETE_ERROR, payload: error });
      });
}
