const request = (url, options={}) =>
    fetch(url, options)
        .then(response => response.json())
        .catch(error => throw new Error(error));
        
export default request;