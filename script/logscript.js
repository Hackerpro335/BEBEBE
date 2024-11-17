let user = {
    name: james,
    surname: bond 
};

let loginForm = await fetch('', {
    method: 'Post',
    headers: {
        'Content-Type': ' application/json; charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await loginForm.json();
alert(result.message);