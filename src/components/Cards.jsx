import React, { Component } from "react";
import './Cards.css'
import ClusterLogo from '../assets/Imagenes/ref/spaces.jpg'

class Cards extends Component {
  state = {
    cards: [
      {
        title: "Moon Vally",
        content: "Es una desarrolladora indie fundada en Argentina por 4 amigos en el año 2022. Actualmente, nuestro equipo está conformado por diez personas que se especializan en animar, ilustrar, programar, modelar y más. Utilizamos exclusivamente el motor de Epic Games llamado \"Unreal Engine\" (V5).",
      },
      {
        title: "Keter Studio",
        content: "Es una desarrolladora indie fundada en Argentina por 2 amigos en el año 2021. Actualmente, nuestro equipo está conformado por cinco personas que se especializan en crear juegos de plataformas y aventuras.",
      },
      {
        title: "01 Games",
        content: "Es una desarrolladora indie fundada en Argentina por 3 amigos en el año 2020. Actualmente, nuestro equipo está conformado por ocho personas que se especializan en crear juegos de acción y disparos.",
      },
      {
        title: "N Games",
        content: "Es una desarrolladora indie fundada en Argentina por 1 amigo en el año 2019. Actualmente, nuestro equipo está conformado por cuatro personas que se especializan en crear juegos educativos.",
      },
    ],
    selectedCard: null,
  };

  handleCardClick = (card) => {
    this.setState({
      selectedCard: card,
    });
  };

  render() {
    const cards = this.state.cards.map((card) => (
      <div
        key={card.title}
        className="card"
        onClick={() => this.handleCardClick(card)}
      >
        <img src={ClusterLogo} alt="" />
        <h2 className={card === this.state.selectedCard ? "card-title selected" : "card-title"}>{card.title}</h2>
      </div>
    ));

    return (
      <div className="cards-container">
        <div className="cards">
        {cards}
        </div>
        
        {this.state.selectedCard && (
          <div className="modal">
            <h2>{this.state.selectedCard.title}</h2>
            <p>{this.state.selectedCard.content}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Cards;