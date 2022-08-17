console.log(data);

let p = document.querySelector("p");

let randInt = Math.floor(Math.random() * data.length);

p.innerHTML = data[randInt].fact;