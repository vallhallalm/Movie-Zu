import React from 'react';
import {api} from '../api';

type AppProps = {
    cache:any,
    isOpen:boolean,
    id: string
}
type AppState = {
    isOpen:boolean,
    id:string,
    donnée:any
    avancement:any
}
export class Detail extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);   
        this.state={
            isOpen: this.props.isOpen,
            id:this.props.id,
            donnée:null,
            avancement:0
        }   
    }

    componentDidMount(){
        let Api = new api();
        let URL=Api.requete_url(this.state.id.toString());
        (async () => {
            let response = await fetch(URL);
            let data = await response.json();
            this.setState({donnée:data,
                avancement:data.vote_average
            });
            console.log(this.state.donnée)
        })();
    }

    handleClose(){
        this.setState({isOpen:false});
    }

    render() {
        if (this.state.donnée==null){
            return( 
                <div className='Modal'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            
                            <button onClick={this.props.cache}>X</button>
                        </div>
                        <div className="panel-body">
                            Problème au niveau de l'API
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className='Modal'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.state.donnée.title}
                            <button className='fermeture'onClick={this.props.cache}>X</button>
                        </div>
                        <div className="panel-body">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{<img alt="affiche du film" src={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée.poster_path)}/>}</td>
                                        <td>
                                            <ul>
                                                <li> <b>Résumé du film :</b> {this.state.donnée.overview}</li>
                                                <li> <b>Genre :</b> {this.state.donnée.genres[0].name}</li>
                                                <li> <b>Sortie le :</b> {this.state.donnée.release_date}</li>
                                                <li> <b>Production :</b> {this.state.donnée.production_companies[0].name}</li>
                                                <li> <b>Pays de production :</b> {this.state.donnée.production_countries[0].name}</li>
                                                <li> <b>Budget :</b> {this.state.donnée.budget}$</li>
                                                <li> <b>Site officiel :</b> <a href={this.state.donnée.homepage}>{this.state.donnée.homepage}</a></li>
                                                <li>
                                                    Popularity : {this.state.avancement}/10
                                                    <br/>
                                                    <progress max="10" value={this.state.avancement}></progress>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="panel-footer">
                            Films similaires : 
                        </div>
                    </div>
                </div>
            );
        }
    }
}