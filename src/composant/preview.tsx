import React from 'react';


type AppProps = {
        titre:string
        affiche:any
    }
type AppState = {
    titre:any
    affiche:any
}
export class Preview extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);   
        this.state={
            titre: "",
            affiche: ""
        }   
    }

    componentDidMount(){
        if (this.props.titre===null){
            this.setState({titre:"",
                affiche:""
            })
        }else{
            this.setState({
                titre: this.props.titre,
                affiche: this.props.affiche
            })
        }
    }

    componentDidUpdate(prevProps: { titre: string; }){
        if (this.props.titre!==prevProps.titre){
            this.setState({
                titre: this.props.titre,
                affiche: this.props.affiche
            })
        }
    }

    render() {
        return(
            <div className="row">
                <div >
                    <div className="thumbnail">
                    <img src={this.state.affiche} width="200" height="300" alt="affiche du film"/>
                    <div className="caption">
                        <h3>Titre : {this.state.titre}</h3>
                        {/*<p>Realisateur : {this.props.realisateur} </p>*/}
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