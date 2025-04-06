import {Request, Response} from "express";

interface Sighting{
    location:string;
    date :string;
    alienShpType:string;
    description:string;
    credibilityScore : number;
}

let sightings: Sighting[] =[];

export const alienSighting =(req:Request, res:Response)=>{
    const {location, date, alienShpType, description, credibilityScore} =  req.body;
    let newSighting : Sighting={
        location : location,
        date :date,
        alienShpType : alienShpType,
        description : description,
        credibilityScore : credibilityScore
    }
    sightings.push(newSighting);
    //las validciones son lo mas importante !!!!
    res.status(200).json({"message":"sighting succesfully created!!", newSighting})
}