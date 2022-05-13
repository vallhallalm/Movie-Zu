import React from 'react';
import {Preview} from '../composant/preview'

export class PageSortie extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="accpage">
                <table>
                    <tr>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        
                    </tr>
                    <tr>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        <td className="preview"><Preview titre="Doctor strange in the multiverse of madness" realisateur="Sam Raimi" affiche="https://fr.web.img5.acsta.net/pictures/22/04/08/10/30/1779137.jpg"/></td>
                        
                    </tr>
                </table>
            </div>
        );
    }
}