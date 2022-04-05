import "./index.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimalCard from "./components/Card";
import { animals } from "./animals";

class App extends Component {
  state = { animals: animals, search: " " };
  likeAnimal = (like) => {
    const newArray = this.state.animals.map((animal) => {
      if (animal.name === like) {
        return { ...animals, likes: (animal.likes += 1) };
      } else return animal;
    });
    return this.setState(newArray);
  };

  remove = (name) => {
    const delArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: delArray });
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
    const filteredArr = this.state.animals.filter((animal) => {
      if (animal.name.includes(e.target.value)) {
        return animal;
      }
    });
    this.setState({ animals: filteredArr });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h3 className="numberOfAnimals">{this.state.animals.length} Animals</h3>
        <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="animalCard">
          {this.state.animals.map((animal) => (
            <AnimalCard
              key={animal.name}
              imageSource={`http://source.unsplash.com/170x270/?animal/${animal.name}`}
              name={animal.name}
              like={animal.likes}
              handleLike={() => this.likeAnimal(animal.name)}
              removeAnimal={() => this.remove(animal.name)}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
