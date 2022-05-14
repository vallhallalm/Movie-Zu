import React from 'react';
import {Preview} from '../composant/preview';
import {api} from '../api';


type AppProps = {}
type AppState = {'result':any}
export class PageSortie extends React.Component <AppProps, AppState> {
    constructor(props: AppProps){
        super(props);
        let Api = new api();
        this.state={result:Api.requete_preview("now_playing")};
    }

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