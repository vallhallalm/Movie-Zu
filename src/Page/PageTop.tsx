import React from 'react';
import {Preview} from '../composant/preview'

export class PageTop extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="accpage">
                <Preview titre="Scary Movie" realisateur="Malcolm D. Lee" affiche="https://fr.web.img2.acsta.net/medias/04/97/17/049717_af.jpg"/>
            </div>
        );
    }
}