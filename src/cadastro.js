import { BandRepository } from "./infrastructure/BandRepository.js";
import { BandService } from "./usecases/BandService.js";
import { initBandForm } from "./ui/bandForm.js";
import { renderBandList } from "./ui/bandList.js";

const repository = new BandRepository();
const service = new BandService(repository);

function render() {
  renderBandList(service, { admin: true });
}

initBandForm(service, render);
render();
