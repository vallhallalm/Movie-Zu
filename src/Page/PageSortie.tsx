import React from 'react';
import {Preview} from '../composant/preview';
import {api} from '../api';
import { title } from 'process';


type AppProps = {}
type AppState = {
    donnée:any
}
export class PageSortie extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);
        this.state={donnée:null};
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
        let Api = new api();
        let URL=Api.requete_url("now_playing");
        (async () => {
            let response = await fetch(URL);
            let data = await response.json();
            data = await data.results;
            this.setState({donnée:data});
        })();
    }

    render() {  
        if (this.state.donnée==null){
            return <div className="container-fluid" id="accpage"></div> ;
        }else{
            return (
                
                <div className="container-fluid" id="accpage">
                    <div></div>                
                    <table>
                        <tbody>
                            <tr>
                                <td className="preview"><Preview titre={this.state.donnée[0].title} affiche="https://m.media-amazon.com/images/I/8129a7-9A7L._AC_SX679_.jpg"/></td>
                                <td className="preview"><Preview titre={this.state.donnée[1].title} affiche=""/></td>
                                <td className="preview"><Preview titre={this.state.donnée[2].title} affiche=""/></td>
                                <td className="preview"><Preview titre={this.state.donnée[3].title} affiche=""/></td>
                                
                            </tr>
                            <tr>
                                <td className="preview"><Preview titre={this.state.donnée[4].title} affiche=""/></td>
                                <td className="preview"><Preview titre={this.state.donnée[5].title} affiche=""/></td>
                                <td className="preview"><Preview titre={this.state.donnée[6].title} affiche=""/></td>
                            <td className="preview"><Preview titre={this.state.donnée[7].title} affiche=""/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}