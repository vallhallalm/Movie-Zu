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
                avancement:Number(data.vote_average)
            });
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
                            <button onClick={this.props.cache}>X</button>
                        </div>
                        <div className="panel-body">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{<img alt="affiche du film" src={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée.poster_path)}/>}</td>
                                        <td>
                                            <ul>
                                                <li> Résumé du film : {this.state.donnée.overview}</li>
                                                <li> Genre : {this.state.donnée.genres[0].name}</li>
                                                <li> Sortie le : {this.state.donnée.release_date}</li>
                                                <li> Production : {this.state.donnée.production_companies[0].name}</li>
                                                <li>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={Number(this.state.donnée.vote_average)} aria-valuemin={0} aria-valuemax={10} style={{width:this.state.avancement*70}} >
                                                            <span >{this.state.donnée.vote_average}/10 popularity</span>
                                                        </div>
                                                    </div>
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