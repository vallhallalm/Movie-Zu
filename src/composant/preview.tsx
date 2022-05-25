import React from 'react';
import {Detail} from './detail';

type AppProps = {
        titre:string
        affiche:any
        id:any
    }
type AppState = {
    titre:any
    affiche:any
    modal: boolean
}
export class Preview extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);   
        this.state={
            titre: "",
            affiche: "",
            modal: false
        }
        this.montre=this.montre.bind(this)
        this.cache=this.cache.bind(this)
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
                affiche: this.props.affiche,
                modal: false
            })
        }
    }

    montre (){
        this.setState({modal: true})
    }

    cache (){
        this.setState({modal: false})
    }

    render() {
        
            if(this.state.modal===true){
                return(
                    <div className="row">
                        <div className="thumbnail">
                            <img src={this.state.affiche} width="200" height="300" alt="affiche du film"/>
                            <div className="caption">
                                <h3>Titre : {this.state.titre}</h3>
                                <p>
                                    <button className="btn btn-primary" onClick={this.montre}>Voir plus</button> 
                                </p>
                            </div>
                        </div>
                        <Detail cache={this.cache} isOpen={this.state.modal} id={this.props.id}/>
                    </div> 
                )
            }else{
                return(
                    <div className="row">
                        <div className="thumbnail">
                            <img src={this.state.affiche} width="200" height="300" alt="affiche du film"/>
                            <div className="caption">
                                <h3>Titre : {this.state.titre}</h3>
                                <p>
                                    <button className="btn btn-primary" onClick={this.montre}>Voir plus</button> 
                                </p>
                            </div>
                        </div>
                    </div> 
                )
            }
            
        
    }
}