const container = document.getElementById("games");

async function loadGames() {
  const res = await fetch("games.json");
  const games = await res.json();

  render(games);
}

function render(games) {
  container.innerHTML = "";

  games.forEach(game => {
    const div = document.createElement("div");
    div.className = "game";

    div.innerHTML = `
      <img src="${game.icon}" loading="lazy" />
    `;

    div.onclick = () => {
      window.location.href = `games/${game.slug}.html`;
    };

    container.appendChild(div);
  });
}

loadGames();
