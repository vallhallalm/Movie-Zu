import React from 'react';

type AppProps = {titre : string
        realisateur : string
        affiche : string
    }
type AppState = {}
export class Preview extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);
    }
    
    render() {
        return(
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                    <img src={this.props.affiche} width="200" height="300"/>
                    <div className="caption">
                        <h3>Titre : {this.props.titre}</h3>
                        <p>Realisateur : {this.props.realisateur} </p>
                        <p>
                            <a href="#" className="btn btn-primary" role="button">Voir plus</a> 
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}