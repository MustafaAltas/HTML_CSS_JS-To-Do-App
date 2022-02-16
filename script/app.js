const input = document.getElementById("input");
const btn = document.getElementById("btn");
const liste_ul = document.querySelector(".liste_ul");

btn.addEventListener("click", () => {
  let img = document.createElement("img");
  img.setAttribute("src", "./img/red.png");
  img.style.width = "20px";

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(input.value));

  let li = document.createElement("li");
  li.setAttribute("class", "liste_ul_li");

  li.appendChild(img);
  li.appendChild(p);
  liste_ul.appendChild(li);
});

