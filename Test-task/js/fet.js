let button = document.getElementById("button");
button.addEventListener("click", data);

function doSomething(respons) {
  console.log(respons);

  for (let i = 0; i < respons.length; i++) {
    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.innerHTML = respons[i].name;
    ul.appendChild(li1);

    let li2 = document.createElement("li");
    li2.innerHTML = respons[i].lastname;
    ul.appendChild(li2);

    let li3 = document.createElement("li");
    li3.innerHTML = respons[i].age;
    ul.appendChild(li3);

    document.body.appendChild(ul);
  }
}
// console.log(li1)

function data() {
  fetch("https://venbest-test.herokuapp.com/")
    .then((response) => {
      return response.json();
    })
    .then((json) => doSomething(json));
}
