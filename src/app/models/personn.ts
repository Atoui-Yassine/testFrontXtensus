import { Gouvernement } from "./gouvernement";

export interface Personn {
    id:number,
    nom:string,
    prenom:string,
    tel:string,
    mail:string,
    gouvernement:Gouvernement
}
