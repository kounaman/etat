import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Kounaman SADIO",
        bio: "Je m'appeles Kounaman SADIO",
        profession: "Je suis Développeur Web ",
        imgSrc: "https://www.developpez.net/forums/attachments/p195622d1450420456/club-professionnels-informatique/taverne-club-humour-divers/humour-informatique/petite-image-sympa/boite-attrap-souris.jpg/",
        
        
      },
      shows: false,
      timer: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  basculer = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div>
        <button onClick={this.basculer}>Voir l’état d’affichage</button>
        {this.state.shows && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} alt="profile" />
            <p>{this.state.Person.profession}</p>
          </div>
        )}
        <p>Timer : {this.state.timer} seconds</p>
      </div>
    );
  }
}

export default App;
