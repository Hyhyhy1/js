


const newPost = [{
    "title": "Матрицы",
    "complexity": 0,
    "count": 1
}]


document.forms.publish.onsubmit = function() {
    const url = 'https://math-generator-7450.onrender.com/task';
    console.log(JSON.stringify(newPost))
    sendRequest(url).then(data => console.log(data));
    return false
};

function sendRequest(url){
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {'content-type': 'application/json; charset=UTF-8'}
    }).then(responce => {return responce.json()})
}