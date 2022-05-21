import { json } from "stream/consumers";
import {Buffer} from 'buffer';

export class api {
    apikey_url: string;
    api_url: string;
    resultat:any;
    
    constructor(){
        let buff=Buffer.from("OGNjMTQ1ZGExYWU0MTgwN2NmMGIyZmRkZGRlODljZGE=",'base64');
        let data=buff.toString('utf-8');
        this.apikey_url="?api_key=".concat(data);
        this.api_url="https://api.themoviedb.org/3/movie/";
        this.requete_url=this.requete_url.bind(this);
    }
    
    requete_url(option:string){       
        let URL=this.api_url.concat(option.concat(this.apikey_url));
        return URL;
    }
}