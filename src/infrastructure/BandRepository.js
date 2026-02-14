export class BandRepository {
  constructor() {
    this.key = "bands";
  }

  getAll() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }

  saveAll(bands) {
    localStorage.setItem(this.key, JSON.stringify(bands));
  }

  add(band) {
    const bands = this.getAll();
    bands.push(band);
    this.saveAll(bands);
  }

  update(index, band) {
    const bands = this.getAll();
    bands[index] = band;
    this.saveAll(bands);
  }

  delete(index) {
    const bands = this.getAll();
    bands.splice(index, 1);
    this.saveAll(bands);
  }
}
