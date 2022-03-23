class Binar {
  static async listCars(filterer) {
    const response = await fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );
    const body = await response.json();

    if (filterer instanceof Function) return body.filter(filterer);

    return body;
  }
}
