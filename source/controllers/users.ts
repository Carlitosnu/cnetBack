import Users from "../models/Users"
import {User} from "../interfaces/User";
import {Rango} from '../interfaces/User'
export class UserController{
    /**
     * Crea un usuario
     */
    async createUser(UserInfo:User){
        let UserCreator = await new Users();
        let UserCreated = await Users.create(UserInfo);
        return {
            "message": "User Create Succesfuly",
            "info": UserCreated
        }
    }
    /**
     * Busca al usuario en la base de datos retorna su id
     * @returns {consult} user
     */
    CheckUser(id:string){
        let Controller = new Users();
        let user = Controller.findById(id);
        if(user.length = 0){
            return {
                state:false
            }
        }
        return {
            state:true,
            userId: user.id
        }
    }
}
interface consult {
    state:boolean
    data: any
}