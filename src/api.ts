

export class api {
    apikey_url: string;
    api_url: string;
    
    constructor(){
        this.apikey_url="?api_key=8cc145da1ae41807cf0b2fdddde89cda";
        this.api_url="https://api.themoviedb.org/3/movie/";
        this.requete_preview=this.requete_preview.bind(this);
    }
    
    requete_preview(option:string){
        let URL=this.api_url.concat(option.concat(this.apikey_url));
        fetch(URL)
        .then(function(reponse) {
            return reponse.json();
        })
        .then(data=>{
            console.log(data);
            return data;})
    }
}