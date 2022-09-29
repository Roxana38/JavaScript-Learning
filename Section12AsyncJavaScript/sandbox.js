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

//91.Callback Function

/*const getTodos = (callback) => {

    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        callback(undefined, request.responseText);
      } else if (request.readyState === 4){
        callback('could not fetch the data', undefined);
      }
  
    });
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
  
  };
  
  console.log(1);
  console.log(2);
  
  getTodos((err, data) => {
    console.log('callback function fired');
    if(err){
      console.log(err);
    } else {
      console.log(data);
    }
  });
  
  console.log(3);
  console.log(4);*/


  //92.JSON Data

 /* const getTodos = (callback) => {

    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4){
        callback('could not fetch the data', undefined);
      }
  
    });
    
    request.open('GET', 'todos.json');
    request.send();
  
  };
  
  getTodos((err, data) => {
    console.log('callback function fired');
    if(err){
      console.log(err);
    } else {
      console.log(data);
    }
  });*/

