export const baseURL = "http://localhost:8000";


function internalGet(url) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };
    return fetch(baseURL + url, requestOptions)
}

function internalPost(url, body) {
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
    };

    return fetch(baseURL + url, requestOptions)
}


function internalPut(url, body) {
    var requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
    };

    return fetch(baseURL + url, requestOptions)
}

export async function put(url, body) {
    return internalPut(url, body)
        .then(res => res.json())
        .then(handleJsonResponse)
}

export async function get(url) {
    return internalGet(url)
        .then(res => res.json())
        .then(handleJsonResponse)
}

export async function post(url, body) {
    return internalPost(url, body, true)
        .then(res => res.json())
        .then(handleJsonResponse)
}


async function handleJsonResponse(response) {
    isAuthenticate(response)
    if (response.code != 200) {
        throw Error(response.message);
    }
    return response.data;
}


function isAuthenticate(response) {
    if (response.code === 401 || response.code === 403) {
        window.location.assign("/");
    }
}



