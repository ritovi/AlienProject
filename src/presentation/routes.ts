import {Router} from "express"
import {AlienRoutes} from "./alien/routes"
export class AppRoutes{
    static get routes(){
        const route:Router = Router();
        route.use("/api",AlienRoutes.routes);
        return route;
    }
}