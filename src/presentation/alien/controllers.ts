import {Request, Response} from "express";
import {alphaNum} from "../../alienModule/alphaNum";

interface Sighting{
    id:number,
    location:string;
    date :string;
    alienShipType:string;
    description:string;
    credibilityScore : number;
}

let sightings: Sighting[] =[];
let id: number = 0;

export class AlienControllers{
    //atributes
    //contructor
    constructor(){}

    createSighting = async (req:Request, res:Response)=>{
        const {location, date, alienShipType, description, credibilityScore} =  req.body;
        
        if(!location || location.length<=0) return res.status(404).json({"message": "location can not bet empty!"});

        if(!date || date.length<=0) return res.status(404).json({"message": "date can not bet empty!"});

        if(!alienShipType || alienShipType.length<=0) return res.status(404).json({"message": "alienShipType can not bet empty!"});

        if(!description || description.length<=0) return res.status(404).json({"message": "description can not be empty!"});
        
        if(credibilityScore < 0) return res.status(404).json({"message": "the Score creditibility can not be negative"});

        let newSighting : Sighting={
            id : ++id,
            location : location,
            date :date,
            alienShipType : alienShipType,
            description : description,
            credibilityScore : credibilityScore
        }
        


        sightings.push(newSighting);
        //las validciones son lo mas importante !!!!
        res.status(200).json({"message":"sighting succesfully created!!", newSighting})
    }

    readSightings = async (req:Request, res:Response)=>{
          return res.status(200).json({"sightins":"list of sightings", sightings});
    }
 
    readSpecificSighting = async (req:Request, res:Response)=>{
        const {id} = req.params;
        if(!alphaNum(id)) return res.status(404).json({"message": "Id must be a number"});

        let alienId:number = +id;

        const sightFind:Sighting | undefined = sightings.find(a=>a.id===alienId);

        if(!sightFind) return res.status(404).json({"message": "sighting doesn't exit"});

        return res.status(200).json({sightFind});
    }

    updateSighting = async(req:Request, res:Response)=>{
        const {id} = req.params;
        if(!alphaNum(id)) return res.status(404).json({"message": "Id must be a number"});
        const alienId :number = +id;

        const {location, date, alienShipType, description, credibilityScore} =  req.body;

        if(!location && !date && !alienShipType && !description && (!credibilityScore || credibilityScore<0) ) return res.status(304);
        
        let auxIndex:number=0;
        const target : Sighting | undefined = sightings.find((a,index)=>{
            auxIndex = index;
            return a.id===alienId;
        });

        if(!target) return res.status(404).json({"message" : `it does not exist a sight with the id ${id}`});

        if(location) target.location = location;
        if(date) target.date =  date;
        if(alienShipType) target.alienShipType = alienShipType;
        if(description) target.description = description;
        if(credibilityScore && credibilityScore>0) target.credibilityScore = credibilityScore;
        
        sightings[auxIndex] = target;

        return res.status(200).json({"message ": "sighting succesfully updated!!", target});

    }

    //delete 


}

