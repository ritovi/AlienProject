import { Router } from "express";
import {AlienControllers} from "./controllers";



export class AlienRoutes{
    static get routes(){

        const route = Router();
        const alienController = new AlienControllers
    
        route.post("/sightings", alienController.createSighting);
        route.get("/sightings", alienController.readSightings);
        route.get("/sightings/:id", alienController.readSpecificSighting);
        route.patch("/sightings/:id", alienController.updateSighting);
        


        return route;
    }
}