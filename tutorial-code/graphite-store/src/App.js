import React, { Component } from 'react';
import logo from './squarelogo.jpg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    axios.get('https://gaia-gateway.com/jehunter5811.id/localhost%3A3000//sheets/1539027499068.json')
      .then((res) => {
        console.log(res.data.content[1]);
        const object1 = {};
        let array = [];
        object1.product = res.data.content[1][0];
        object1.inventory = res.data.content[1][1];
        object1.price = res.data.content[1][2];
        object1.img = res.data.content[1][3];
        array.push(object1);
        const object2 = {};
        object2.product = res.data.content[2][0];
        object2.inventory = res.data.content[2][1];
        object2.price = res.data.content[2][2];
        object2.img = res.data.content[2][3];
        array.push(object2);
        const object3 = {};
        object3.product = res.data.content[3][0];
        object3.inventory = res.data.content[3][1];
        object3.price = res.data.content[3][2];
        object3.img = res.data.content[3][3];
        array.push(object3);
        const object4 = {};
        object4.product = res.data.content[4][0];
        object4.inventory = res.data.content[4][1];
        object4.price = res.data.content[4][2];
        object4.img = res.data.content[4][3];
        array.push(object4);
        const object5 = {};
        object5.product = res.data.content[5][0];
        object5.inventory = res.data.content[5][1];
        object5.price = res.data.content[5][2];
        object5.img = res.data.content[5][3];
        array.push(object5);
        this.setState({ products: array });
      })
      .then(() => {
        console.log(this.state.products);
      })
  }


  render() {
    return (
      <div className="App">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="black-text brand-logo"><img className="logo" src={logo} alt="graphite logo" /></a>
          <ul id="nav-mobile" className="right">
            <li><a href="https://medium.com/the-lead/hacking-graphite-create-your-own-personal-api-af93ac074855">Tutorial</a></li>
            <li><a href="https://github.com/Graphite-Docs/Hacking-Graphite/tree/master/tutorial-code/graphite-store">Source Code</a></li>
            <li><a href="https://www.graphitedocs.com/about">About Graphite</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="center-align">
          <h3>Welcome to the Graphite Store</h3>
          <p>Products not actually available</p>
        </div>
        <div className="row">
        <h5 className="center-align">Available now</h5>

        {
          this.state.products.map(a => {
            return(
              <div key={a.product} className="col s12 m4">
                <div className="card small">
                  <div className="card-image">
                    <img src={a.img} alt={a.product} />
                  </div>
                  <div className="card-content">
                    <p className="black-text">{a.product} ({a.inventory} left)</p>
                  </div>
                  <div className="card-action">
                    <a className="black-text" href="/">${a.price}</a>
                  </div>
                </div>
              </div>
            )

          })
        }



        </div>
      </div>
      </div>
    );
  }
}

export default App;
