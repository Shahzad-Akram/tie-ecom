const initialState = {
  show: false,
};
const showModal = (state = initialState, action) => {
  let payload = null;
  if (localStorage.getItem("auth-admin") !== null) {
    payload = JSON.parse(localStorage.getItem("auth-admin"));
    // const {token, user} = JSON.parse(payload);
  }

  switch (action.type) {
    case "SHOW_MODAL":
      return Object.assign({}, state, {
        show: action.payload,
      });

    default:
      return state;
  }
};
export default showModal;
