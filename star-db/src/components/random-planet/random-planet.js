import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}, 
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    };

    updatePlanet() {
        //const id = Math.floor(Math.random()*25)+2;
        const id = 12;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet: { id, name, population,
            rotationPeriod, diameter } } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <Spinner />
            </div>
        );
    }
}
