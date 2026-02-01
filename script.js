const container = document.getElementById("games");

function render() {
  container.innerHTML = "";

  GAMES.forEach(game => {
    const div = document.createElement("div");
    div.className = "game";

    div.innerHTML = `
      <img src="${game.icon}" loading="lazy">
    `;

    div.onclick = () => {
      window.location.href = `games/${game.slug}.html`;
    };

    container.appendChild(div);
  });
}

render();
