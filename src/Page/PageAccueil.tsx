import React from 'react';
import {Jumbotron} from '../composant/jumbotron'

export class PageAccueil extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="accpage">
                <Jumbotron/>
            </div>
        );
    }
}