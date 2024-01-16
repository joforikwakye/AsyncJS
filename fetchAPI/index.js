// fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('rejected', err);
// });

const getTodos = async() => {
    const response = await fetch("https://jonplaceholder.typicode.com/todos");

    if(response.status !== 200) {
        throw new Error('could not fetch');
    }
    const data = await response.json();
    return data;
};



getTodos()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected: ', err.message));
