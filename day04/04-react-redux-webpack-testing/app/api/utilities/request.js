import checkStatus from './checkStatus';

const request = (url, options = {}) =>
  fetch(url, options)
    .then(checkStatus)
    .then(response => response.json())
    .catch((error) => { throw new Error(error); });

export default request;
