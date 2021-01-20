import {Response, Request} from 'express'
export class Controlador{
    constructor(){}
    index(req:Request,res:Response){
        res.render("index")
    }
}
export const index = new Controlador()