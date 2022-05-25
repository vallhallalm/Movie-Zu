import React from 'react';
import { Link } from 'react-router-dom';

type AppProps = {recherche:any}
type AppState = {}
export class Navbar extends React.Component <AppProps, AppState> {
    
    


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Accueil</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li ><Link to="/Top">Top Film </Link></li>
                            <li ><Link to="/Sortie">Sortie Récente</Link></li>
                        </ul>
                        <form className="navbar-form navbar-left" >
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Rechercher" onSubmit={input=>this.props.recherche(input)}/>
                            </div>
                            <Link to="/Recherche"><button type="submit" className="btn btn-default" >Rechercher</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
            
        );
    }
}