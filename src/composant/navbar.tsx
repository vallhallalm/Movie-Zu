import React from 'react';
import { Link } from 'react-router-dom';

type AppProps = {recherche:any}
type AppState = {rech:any}
export class Navbar extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps | Readonly<AppProps>){
        super(props);
        this.state={rech:""};
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(){
        this.props.recherche(this.state.rech);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>){
        var value = event.target.value;
        this.setState({rech:value});
    }

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
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Rechercher" value={this.state.rech} onChange={event=>this.handleChange(event)}/>
                            </div>
                            <Link to="/Recherche"><input type="submit" className="btn btn-default" value="Rechercher" onClick={this.handleSubmit}/></Link>
                        </form>
                    </div>
                </div>
            </nav>
            
        );
    }
}