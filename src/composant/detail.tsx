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
}
export class Detail extends React.Component <AppProps, AppState> {
    
    constructor(props: AppProps){
        super(props);   
        this.state={
            isOpen: this.props.isOpen,
            id:this.props.id,
            donnée:null
        }   
    }

    componentDidMount(){
        let Api = new api();
        let URL=Api.requete_url(this.state.id.toString());
        (async () => {
            let response = await fetch(URL);
            let data = await response.json();
            this.setState({donnée:data});
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
                            
                        </div>
                    </div>
                </div>
            );
        }
    }
}