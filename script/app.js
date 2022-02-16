const input = document.getElementById("input");
const btn = document.getElementById("btn");
const liste_ul = document.querySelector(".liste_ul");

window.addEventListener("load", () => {
  btn.addEventListener("click", eklemeÇıkarma);
});

function eklemeÇıkarma(event) {
  let img = document.createElement("img");
  img.setAttribute("src", "./img/red.png");
  img.setAttribute("class", "img");
  img.style.width = "20px";

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(input.value));

  let li = document.createElement("li");
  li.setAttribute("class", "liste_ul_li");

  li.appendChild(img);
  li.appendChild(p);
  liste_ul.appendChild(li);
  input.value = "";

  let lil = document.querySelectorAll(".liste_ul_li");


  lil.forEach((e) => {
    e.addEventListener("click",(a) => {
      a.target.remove();
    })
  })

};
