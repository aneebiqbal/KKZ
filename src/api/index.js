import axios from 'axios';

export function postFunctionWithAuthToken(url, body, authToken) {
  return axios
    .post(url, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
export function patchFunctionWithAuthToken(url, body, authToken) {
  return axios
    .patch(url, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function postFunction(url, body) {
  return axios
    .post(url, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
export function postFunctionWithFormData(url, body) {
  return axios
    .post(url, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
export function getFunctionWithAuthToken(url, params = {}, authToken) {
  return axios
    .get(url, {
      params,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function getFunctionWithoutAuthToken(url, params = {}) {
  return axios
    .get(url, {
      params,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function deleteFunctionWithAuthToken(url, params = {}, authToken) {
  return axios
    .delete(url, {
      params,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
