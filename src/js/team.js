let team__names = ["a","b"];
let team__text = ["testing","test"];
let cards = 2
let card = 1
let select = document.getElementById("team__select")
let img = document.getElementById("team__img");
let r = document.getElementById("team__right")
let l = document.getElementById("team__left")
let name = document.getElementById("team__name")
let dots = document.getElementById("team__dots")
name.innerHTML = team__names[card - 1]
let text = document.getElementById("team__text")
text.innerHTML = team__text[card - 1]
l.style.opacity = 0
function update(){
  document.querySelectorAll(".team__dot").forEach(dot => dot.className = "team__dot")
  let dot = dots.children[card - 1]
  dot.className = "team__dot team__dot--active"
  img.src = ".././img/card" + card + ".jpg"
  text.innerHTML = team__text[card - 1]
  name.innerHTML = team__names[card - 1]
}

function change(add){

  l.style.opacity = 1
  card += add;

  l.style.display = "block"
  r.style.display = "block"
  select.style.marginLeft = 0
  select.style.marginRight = 0
  if (card === 1) {
    l.style.display = "none"
    select.style.marginLeft = 390 + "px"
  }
  if (card === cards) {
    r.style.display = "none"
    select.style.marginRight = 390 + "px"
  }
  update()
}
l.addEventListener("click", () => change(-1))
r.addEventListener("click", () => change(1))
