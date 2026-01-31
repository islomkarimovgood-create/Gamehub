const games = [
  { name: "Moto Racing", url: "#" },
  { name: "Zombie Shooter", url: "#" },
  { name: "Stickman Fight", url: "#" },
  { name: "Car Drift", url: "#" },
  { name: "Tower Defense", url: "#" },
  { name: "Puzzle Blocks", url: "#" },
  { name: "Sniper Elite", url: "#" },
  { name: "Basketball Pro", url: "#" }
];

// потом можно добавить до 100+

const container = document.getElementById("games");
const search = document.getElementById("search");

function render(list) {
  container.innerHTML = "";

  list.forEach(game => {
    const div = document.createElement("div");
    div.className = "game";
    div.innerHTML = `<h3>${game.name}</h3>`;
    div.onclick = () => window.open(game.url, "_blank");
    container.appendChild(div);
  });
}

render(games);

search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  render(games.filter(g => g.name.toLowerCase().includes(value)));
});
