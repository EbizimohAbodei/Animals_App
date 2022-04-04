import "./index.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimalCard from "./components/Card";
import { animals } from "./animals";

class App extends Component {
  state = { animals };
  likeAnimal = (like) => {
    const updatedArr = this.state.animals.map((animal) => {
      if (animal.name === like) {
        animal.likes += 1;
      } else return animal;
    });
    return this.setState(updatedArr);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {animals.map((animal) => (
            <AnimalCard
              key={animal.name}
              imageSource={`http://source.unsplash.com/170x270/?animal/${animal.name}`}
              name={animal.name}
              like={animal.likes}
              handleLike={() => this.likeAnimal(animal.name)}
            />
          ))}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
