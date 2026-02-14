import { Band } from "../domain/Band.js";

export function initBandForm(service, onSuccess) {
  const form = document.getElementById("bandForm");
  const bandId = document.getElementById("bandId");

  const nameInput = document.getElementById("name");
  const genreInput = document.getElementById("genre");
  const cityInput = document.getElementById("city");
  const contactInput = document.getElementById("contact");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const file = imageInput.files[0];

    // Se não tiver imagem
    if (!file) {
      saveBand(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      saveBand(reader.result); // base64
    };

    reader.readAsDataURL(file);
  });

  function saveBand(imageBase64) {
    try {
      const band = new Band(
        nameInput.value.trim(),
        genreInput.value.trim(),
        cityInput.value.trim(),
        contactInput.value.trim(),
        descriptionInput.value.trim(),
        imageBase64
      );

      service.save(band, bandId.value ? Number(bandId.value) : null);

      form.reset();
      bandId.value = "";

      onSuccess?.();

    } catch (error) {
      alert(error.message);
    }
  }
}
