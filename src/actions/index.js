import axios from "axios";

// authentication actions
function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export const loginUser = (dispatch, data) => {
  setAuthorizationToken(data.token);
  localStorage.setItem("auth-admin", JSON.stringify(data));
  console.log(localStorage);
  dispatch({
    type: "USER_LOGIN",
    payload: data,
  });
};

export const isLoggedIn = (dispatch) => {
  console.log(localStorage);
  dispatch({
    type: "IS_USER_LOGIN",
  });
};

export const logOut = (dispatch) => {
  localStorage.clear();

  dispatch({
    type: "LOGOUT",
  });
};

//products functions

export const getProductstype = (key) => {
  console.log("working", key.queryKey[1], key.queryKey[2], key.queryKey[3]);
  const type = key.queryKey[1];
  const brand = key.queryKey[2];
  const price = key.queryKey[3];
  const params = {};

  if (brand === null && price === null) {
    params.category = type;
  } else if (price === null) {
    params.category = type;
    params.brand = brand;
  } else if (brand === null) {
    params.category = type;
    params.gt = 0;
    params.lt = price;
  } else {
    params.category = type;
    params.brand = brand;
    params.gt = 0;
    params.lt = price;
  }

  return axios
    .get(`https://tie-ecommerce.herokuapp.com/product`, {
      params: params,
    })
    .then((res) => {
      return res.data.products;
    })
    .catch((err) => {
      // handle error
      console.log(err);
    });
};

export const getProducts = () => {
  return axios
    .get("https://tie-ecommerce.herokuapp.com/product")
    .then((res) => {
      return res.data.products;
    })
    .catch((err) => console.log(err));
};

export const showLoginModal = (dispatch, show) => {
  dispatch({
    type: "SHOW_MODAL",
    payload: show,
  });
};