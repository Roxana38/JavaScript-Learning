//87.Async code in action

/*console.log(1);
console.log(2);

setTimeout(() => {
  console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);*/

//88.What are HTTP Requests?

//89.Making HTTP Requests(XHR).

/*const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  if(request.readyState === 4){
    // console.log(request);
    console.log(request.responseText);
  } 
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();*/

//90.Response status

/*const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request);
  if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText);
  } else if (request.readyState === 4){
    console.log('could not fetch the data');
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();*/