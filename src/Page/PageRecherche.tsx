import React from 'react';
import {Preview} from '../composant/preview'
import {api} from '../api';



type AppProps = {recherche:any}
type AppState = {
    donnée:any,
}
export class PageRecherche extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);
        this.state={donnée:null};
        this.componentDidMount=this.componentDidMount.bind(this);
        this.tableCreation=this.tableCreation.bind(this);
    }

    componentDidMount(){
        let Api = new api();
        let URL=Api.requete_recherche(this.props.recherche);
        (async () => {
            let response = await fetch(URL);
            let data = await response.json();
            data = await data.results;
            //console.log(this.state.donnée)            
            this.setState({donnée:data});
        })();
    }

    tableCreation (){
        //console.log('création du tableau');
        let stop : number = 0;
        if (this.state.donnée.length < 8){
            stop=this.state.donnée.length;
        }else{
            stop=8;
        }
        const buffer: (JSX.Element | undefined)[] = [];
        var jsx= [];
        for (let i = 0; i < stop; i++) {
            jsx.push(<td className="preview" key={this.state.donnée[i].id}><Preview id={this.state.donnée[i].id} titre={this.state.donnée[i].title} affiche={'https://image.tmdb.org/t/p/w500/'.concat(this.state.donnée[i].poster_path)} key={this.state.donnée[i].id}/> </td>);
            if (i===3 || i===stop-1) {
                buffer.push(<tr key={i}>{jsx}</tr>);
                jsx=[];
            }
        }
        const table: (JSX.Element | undefined)[] = [];
        table.push(<table key="table"><tbody key ="tbody">{buffer}</tbody></table>)
        return table;
    }

    render() {  
        if (this.state.donnée===null ){ //|| this.state.donnée.length<8
            return <div className="container-fluid" id="accpage"> Erreur au niveau API </div> ;
        }else{
            const tbl = this.tableCreation()
            return (
                <div className="container-fluid" id="accpage">    
                    {tbl}          
                </div>
            );
            
        }
    }
}