import { signOut } from "next-auth/react";

export const baseURL = "http://localhost:8000";


function internalGet(url) {
    console.log(sessionStorage.getItem("token"))
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': sessionStorage.getItem("token")
        }
    };
    return fetch(baseURL + url, requestOptions)
}

function internalPost(url, body) {
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': sessionStorage.getItem("token")
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
            'Access-Control-Allow-Origin': '*',
            'Authorization': sessionStorage.getItem("token")
        },
        body: JSON.stringify(body)
    };

    return fetch(baseURL + url, requestOptions)
}

export async function put(url, body) {
    return internalPut(url, body)
        .then(res => {
            if (res.status == 401)
                signOut()
            return res.json()
        })
        .then(handleJsonResponse)
}

export async function get(url) {
    return internalGet(url)
        .then(res => {
            if (res.status == 401)
                signOut()
            return res.json()
        })
        .then(handleJsonResponse)
}

export async function post(url, body) {
    return internalPost(url, body, true)
        .then(res => {
            if (res.status == 401)
                signOut()
            return res.json()
        })
        .then(handleJsonResponse)
}


async function handleJsonResponse(response) {
    console.log(response)
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



