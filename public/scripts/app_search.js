class App {
  constructor() {
    this.inputSearch = document.getElementById("inputSearch");
  }

  async init() {
    await this.load();

    this.inputSearch.addEventListener("submit", function (event) {
      event.preventDefault();

      const selectTipeDriver = document.getElementById("selectTipeDriver").value;
      const inputDate = document.getElementById("inputDate").value;
      const inputJemput = document.getElementById("inputJemput").value;

      const inputJumlahPenumpang = document.getElementById("inputJumlahPenumpang").value;
      const jumlahPenumpang = inputJumlahPenumpang !== "" ? parseInt(inputJumlahPenumpang) : 0;

      const waktuSewa = new Date(inputDate + "T" + inputJemput);

      console.log({
        selectTipeDriver,
        inputDate,
        inputJemput,
        jumlahPenumpang,
      });

      const carContainerElement = document.getElementById("cars-container");
      carContainerElement.innerHTML = "";
      Car.list.forEach((car) => {
        const waktuTersedia = new Date(car.availableAt);
        console.log({ waktuTersedia, waktuSewa });
        console.log(waktuTersedia > waktuSewa);

        if (waktuTersedia > waktuSewa && jumlahPenumpang <= car.capacity) {
          const node = document.createElement("div");
          node.innerHTML = car.render();
          carContainerElement.appendChild(node);
        }
      });
    });
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    console.log(Car.list);
  }
}
