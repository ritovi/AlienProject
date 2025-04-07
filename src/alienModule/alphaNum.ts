export const alphaNum = (str:string) : boolean=>{
    if(!str)  return false;
    let aux:number ;
    for(let i:number =0; i<str.length; i++){
        // aux = +str[i]; this does not work with characters;
        aux = str.charCodeAt(i); 
        if(!(aux>=48 && aux<=57)) return false;
    }
    return true;
}


