import { BandRepository } from "./infrastructure/BandRepository.js";
import { BandService } from "./usecases/BandService.js";
import { initBandForm } from "./ui/bandForm.js";
import { renderBandList } from "./ui/bandList.js";

const repository = new BandRepository();
const service = new BandService(repository);

function render() {
  renderBandList(service);
}

window.editBand = index => {
  const band = service.getAll()[index];

  bandId.value = index;
  name.value = band.name;
  genre.value = band.genre;
  city.value = band.city;
  contact.value = band.contact;
  description.value = band.description;
};

window.deleteBand = index => {
  service.delete(index);
  render();
};

document.addEventListener("DOMContentLoaded", () => {
  renderBandList(service);
});

initBandForm(service, render);
render();
