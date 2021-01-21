let serverUri = 'http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/';

export async function createToken(username, password){
    const response = await fetch(serverUri + '/api-token-auth/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    });
    return await response.json();
}

export async function createUser(username, email, password, last_name, first_name){
    const response = await fetch(serverUri + '/user/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            last_name: last_name,
            first_name: first_name
        }),
    });
    return await response.json();
}