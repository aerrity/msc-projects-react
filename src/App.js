import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import data from './data';

class App extends Component {
  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

  render() {
    console.log(data);
    let projects = data.map( (p, i) => {
      return <Project key={i} image={p.Image} name={p.First + ' ' + p.Last} title={this.titleCase(p.Title)} abstract={p.Abstract} />
    });
    return (
      <section className="section">
        <div className="columns is-multiline">
          {projects}
        </div>
      </section>
    );
  }
}

class Project extends Component {

  render() {
    let abs = Array.isArray(this.props.abstract) ? this.props.abstract.map( (a, i) => {
      return <p key={i}>{a}</p>
    }) : <p>{this.props.abstract}</p>;
    return (
      <div className="column is-half">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={'/assets/' + this.props.image} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.title}</p>
                <p className="subtitle is-6">{this.props.name}</p>
              </div>
            </div>

            <div className="content">
              {abs}
            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default App;
