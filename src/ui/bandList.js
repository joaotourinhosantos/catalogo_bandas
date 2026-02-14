export function renderBandList(service, options = {}) {
  const container = document.getElementById("bandList");
  if (!container) return;

  container.innerHTML = "";

  const bands = service.getAll();

  if (bands.length === 0) {
    container.innerHTML = "<p>Nenhuma banda cadastrada.</p>";
    return;
  }

  bands.forEach((band, index) => {
    const card = document.createElement("div");
    card.className = "band-card";

    card.innerHTML = `
      <div class="band-image">
        ${
          band.image
            ? `<img src="${band.image}">`
            : "Imagem da banda"
        }
      </div>

      <div class="band-content">
        <h3>${band.name}</h3>
        <div class="band-genre">${band.genre}</div>
        <div class="band-city">${band.city || ""}</div>

        <div class="band-description">
          ${band.description || ""}
        </div>

        <div class="band-contact">
          Contato: ${band.contact || ""}
        </div>

        ${
          options.admin
            ? `
              <div style="margin-top:10px; text-align:right;">
                <button data-delete="${index}" class="delete-btn">
                  Excluir
                </button>
              </div>
            `
            : ""
        }
      </div>
    `;

    container.appendChild(card);
  });

  if (options.admin) {
    container.querySelectorAll("[data-delete]").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = Number(e.target.dataset.delete);

        if (confirm("Deseja realmente excluir esta banda?")) {
          service.delete(index);
          renderBandList(service, options);
        }
      });
    });
  }
}
