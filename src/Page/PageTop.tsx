import React from 'react';
import {Preview} from '../composant/preview'

export class PageTop extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="accpage">
                <Preview titre="Titre du film" realisateur="Luc Besson" affiche=""/>
            </div>
        );
    }
}