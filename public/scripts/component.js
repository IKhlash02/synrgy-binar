class Component {
  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    if (this.constructor === Component) {
      throw new Error("cannot instantiate from Abstract class");
    }
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="cars-search-result d-flex flex-column align-items-start">
        <div class="cars-search-frame"">
          <img src="${this.image}" alt="" />
          <div class="d-flex flex-column align-self-stretch"  style="gap: 8px">
            <p>${this.type}</p>
            <h4>Rp ${this.rentPerDay} / hari</h4>
            <p>${this.description}</p>
          </div>
          <div class="block-search d-flex">
            <img src="images/user_search.svg" alt="" />
            <p>${this.capacity} orang</p>
          </div>
          <div class="block-search d-flex">
            <img src="images/setting_seach.svg" alt="" />
            <p>${this.transmission}</p>
          </div>
          <div class="block-search d-flex">
            <img src="images/calender_search.svg" alt="" />
            <p>Tahun ${this.year}</p>
          </div>
        </div>
        <button type="button" class="btn btn-success w-100 mt-auto">Pilih Mobil</button>
      </div>
      
    `;
  }
}

class Car extends Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor(cars) {
    super(cars);
  }
}
