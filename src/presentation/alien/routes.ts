import { Router } from "express";
import {alienSighting} from "./controllers";

export class AlienRoutes{
    static get routes(){
        const route = Router();
        route.post("/sightings", alienSighting)

        return route;
    }
}