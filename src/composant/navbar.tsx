import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

type AppProps = {}
type AppState = {}
export class Navbar extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);
        this.state= {page: "Accueil"};
        this.clickHandlerAccueil=this.clickHandlerAccueil.bind(this);
        this.clickHandlerTop=this.clickHandlerTop.bind(this);
        this.clickHandlerSortie=this.clickHandlerSortie.bind(this);
    }

    //Fonction permettant de gérer les click sur le bouton accueil de la navbar. Cette fonction attribuera la valeur "Accueil" à l'Etat du composant pour changer de page.
    clickHandlerAccueil(){
        if(this.state !=={page:"Accueil"}){
            this.setState({page:"Accueil"});
        }
    }
    
    //Fonction permettant de gérer les click sur le bouton Top Film de la navbar. Cette fonction attribuera la valeur "Top" à l'Etat du composant pour changer de page.
    clickHandlerTop(){
        if(this.state !=={page:"Top"}){
            this.setState({page:"Top"});
        }
    }

    //Fonction permettant de gérer les click sur le bouton Sortie Récente de la navbar. Cette fonction attribuera la valeur "Sortie" à l'Etat du composant pour changer de page.
    clickHandlerSortie(){
        if(this.state !=={page:"Sortie"}){
            this.setState({page:"Sortie"});
        }
    }

    //Fonction permettant de gérer les click sur le bouton Rechercher de la navbar. Cette fonction attribuera la valeur "Recherche" à l'Etat du composant pour changer de page. On créera aussi une props contenant la valeur entrer dans le form pour réaliser notre requête à la bdd
    clickHandlerRecherche(){
        if(this.state !=={page:"Recherche"}){
            this.setState({page:"Recherche"});
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" onClick={this.clickHandlerAccueil} to="/">Accueil</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li ><Link onClick={this.clickHandlerTop} to="/Top">Top Film </Link></li>
                            <li ><Link onClick={this.clickHandlerSortie} to="/Sortie">Sortie Récente</Link></li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Rechercher"/>
                            </div>
                            <button type="submit" onClick={this.clickHandlerRecherche} className="btn btn-default">Rechercher</button>
                        </form>
                    </div>
                </div>
            </nav>
            
        );
    }
}