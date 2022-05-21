import React from 'react';
import {Preview} from '../composant/preview';
import {api} from '../api';


type AppProps = {}
type AppState = {
    donnée:any
}
export class PageSortie extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);
        this.state={donnée:null}
    }

    componentDidUpdate(){
        if (this.state.donnée===null){
            let Api = new api();
            let URL=Api.requete_url("now_playing");
            fetch(URL)
            .then(res=>res.json())
            .then((data)=>{
                data=data.results;
                console.log(data);
                this.setState({donnée:data});
                console.log("state",this.state.donnée[1].title)
            })
        }
    }  
    
    componentDidMount(){
        let Api = new api();
        let URL=Api.requete_url("now_playing");
        fetch(URL)
        .then(res=>res.json())
        .then((data)=>{
            data=data.results;
            console.log(data);
            this.setState({donnée:data});
            console.log("state",this.state.donnée[1].title)
            this.render()
        })
    }

    render() {  
        return (
            <div className="container-fluid" id="accpage">
                <div></div>                
                <table>
                    <tbody>
                        <tr>
                            
                            <td className="preview"><Preview titre={this.state.donnée[1].title} affiche="https://m.media-amazon.com/images/I/8129a7-9A7L._AC_SX679_.jpg"/></td>
                            {/*<td className="preview"><Preview numero={2} request = "now_playing"/></td>
                            <td className="preview"><Preview numero={3} request = "now_playing"/></td>
                            <td className="preview"><Preview numero={4} request = "now_playing"/></td>
                            
                        </tr>
                        <tr>
                            <td className="preview"><Preview numero={5} request = "now_playing"/></td>
                            <td className="preview"><Preview numero={6} request = "now_playing"/></td>
                            <td className="preview"><Preview numero={7} request = "now_playing"/></td>
            <td className="preview"><Preview numero={8} request = "now_playing"/></td>*/}
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}