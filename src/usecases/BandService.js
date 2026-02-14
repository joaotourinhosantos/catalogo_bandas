export class BandService {
  constructor(repository) {
    this.repository = repository;
  }

  getAll() {
    return this.repository.getAll();
  }

  save(band, id = null) {
  if (!band.name?.trim() || !band.genre?.trim()) {
    throw new Error("Nome e gênero são obrigatórios");
  }

  if (id === null) {
    this.repository.add(band);
  } else {
    this.repository.update(id, band);
  }
}


  delete(id) {
    this.repository.delete(id);
  }
}
