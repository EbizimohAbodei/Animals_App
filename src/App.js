import "./index.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimalCard from "./components/Card";
import { animals } from "./animals";

class App extends Component {
  state = { animals: animals };
  likeAnimal = (like) => {
    const newArray = this.state.animals.map((animal) => {
      if (animal.name === like) {
        return { ...animals, likes: (animal.likes += 1) };
      } else return animal;
    });
    return this.setState(newArray);
  };

  remove = (name) => {
    console.log(name);
    const delArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    console.log(delArray);
    this.setState({ animals: delArray });
  };

  render() {
    return (
      <div className="App">
        <Header />
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
