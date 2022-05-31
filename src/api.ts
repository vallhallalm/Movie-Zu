import {Buffer} from 'buffer';

export class api {
    apikey_url: string;
    api_url: string;
    api_url_rech: string;
    resultat:any;
    
    constructor(){
        let buff=Buffer.from("OGNjMTQ1ZGExYWU0MTgwN2NmMGIyZmRkZGRlODljZGE=",'base64');
        let data=buff.toString('utf-8');
        this.apikey_url="?api_key=".concat(data);
        this.api_url="https://api.themoviedb.org/3/movie/";
        this.api_url_rech="https://api.themoviedb.org/3/search/movie";
        this.requete_url=this.requete_url.bind(this);
    }
    
    requete_url(option:string){       
        let URL=this.api_url.concat(option.concat(this.apikey_url));
        return URL;
    }

    requete_recherche(option:string){
        let query="&query=".concat(option);
        let URL=this.api_url_rech.concat(this.apikey_url.concat(query));
        return URL;
    }

    requete_recomm(option:string){
        let query=option.concat("/recommendations");
        let URL=this.api_url.concat(query.concat(this.apikey_url));
        return URL;
    }
}