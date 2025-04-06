import express from "express";
import { Router } from "express"; "express";

interface Options{
    port:number;
    routes:Router;
}

export class Server{
    //attributes
    private  readonly app = express();
    private port: number;
    private routes: Router;

    constructor(options:Options){
        this.port = options.port;
        this.routes = options.routes;
    }

    async start(){
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended:true}));
       this.app.use(this.routes);

       this.app.listen("3000", ()=>{
        console.log("server is running on port 3000 🫩  🫩");
        console.log("http://localhost:3000");
       })

    }

}