class App {
  constructor() {
    this.inputSearch = document.getElementById("inputSearch");
  }

  async init() {
    await this.load();

    this.inputSearch.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("sss");
      const selectTipeDriver = document.getElementById("selectTipeDriver").value;
      const inputDate = document.getElementById("inputDate").value;
      const inputJemput = document.getElementById("inputJemput").value;
      const inputJumlahPenumpang = document.getElementById("inputJumlahPenumpang").value;
      const carContainerElement = document.getElementById("cars-container");

      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        carContainerElement.appendChild(node);
      });
    });
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    console.log(Car.list);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
