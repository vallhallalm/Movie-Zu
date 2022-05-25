import React from 'react';
import {Preview} from '../composant/preview'
import {api} from '../api';



type AppProps = {recherche:any}
type AppState = {
    donnée:any
}
export class PageRecherche extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);
        this.state={donnée:null};
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
        let Api = new api();
        let URL=Api.requete_url("top_rated");
        (async () => {
            let response = await fetch(URL);
            let data = await response.json();
            data = await data.results;
            this.setState({donnée:data});
        })();
        console.log("test",this.props.recherche)
    }

    render() {  
        if (this.state.donnée==null){
            return <div className="container-fluid" id="accpage"> Erreur au niveau API </div> ;
        }else{
            return (
                
                <div className="container-fluid" id="accpage">
                    <div></div>                
                    <table>
                        <tbody>
                            <tr>
                                <td className="preview"><Preview id={this.state.donnée[0].id} titre={this.state.donnée[0].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[0].poster_path)}/></td>
                                <td className="preview"><Preview id={this.state.donnée[1].id} titre={this.state.donnée[1].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[1].poster_path)}/></td>
                                <td className="preview"><Preview id={this.state.donnée[2].id} titre={this.state.donnée[2].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[2].poster_path)}/></td>
                                <td className="preview"><Preview id={this.state.donnée[3].id} titre={this.state.donnée[3].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[3].poster_path)}/></td>
                                
                            </tr>
                            <tr>
                                <td className="preview"><Preview id={this.state.donnée[4].id} titre={this.state.donnée[4].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[4].poster_path)}/></td>
                                <td className="preview"><Preview id={this.state.donnée[5].id} titre={this.state.donnée[5].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[5].poster_path)}/></td>
                                <td className="preview"><Preview id={this.state.donnée[6].id} titre={this.state.donnée[6].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[6].poster_path)}/></td>
                                <td className="preview"><Preview id={this.state.donnée[7].id} titre={this.state.donnée[7].title} affiche={"https://image.tmdb.org/t/p/w500/".concat(this.state.donnée[7].poster_path)}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}