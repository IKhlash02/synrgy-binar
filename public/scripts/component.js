// Membuat kelas abstrak Component
class Component {
  constructor(name) {
    if (new.target === Component) {
      throw new TypeError("Cannot construct abstract instances directly");
    }
    this.name = name;
  }

  // Metode abstrak yang harus diimplementasikan oleh kelas turunan
  render() {
    throw new Error("Method 'render()' must be implemented.");
  }

  // Metode biasa yang dapat diwarisi oleh kelas turunan
  getName() {
    return this.name;
  }
}

// Contoh penggunaan kelas turunan dari Component
class car extends Component {
  constructor(name, description) {
    super(name);
    this.description = description;
  }

  render() {
    return `<div><h2>${this.name}</h2><p>${this.description}</p></div>`;
  }
}

// Contoh penggunaan kelas CustomComponent
const customComponent = new CustomComponent("Custom Component", "This is a custom component.");
console.log(customComponent.getName());
console.log(customComponent.render());
