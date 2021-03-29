import {User} from "../models/Users"
import {User as UserInterface} from "../interfaces/User";
import {Rango} from '../interfaces/User'
interface loginInterface{
    user: String,
    password:String
}
export class UserController{
    /**
     * Crea un usuario
     */
    async createUser(UserInfo:UserInterface){
        let UserCreated = await User.create(UserInfo)
        return {
            "message": "User Create Succesfuly",
            "info": UserCreated
        }
    }
    /**
     * Busca al usuario en la base de datos retorna su id
     * @returns {consult} user
     */
    async CheckUser(id:string){
        let user = User.findById(id);
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
    async login(body:loginInterface){
        let controller = await User.findOne({email:body.user,password:body.password});
        if(!controller){
            return {
                state : false,
                message: "Contraseña o email no correctos"
            }
        }
        return {
            state : true,
            message: "Usuario encontrado",
            id: controller._id,
            email: controller.email
        }
    }
}
interface consult {
    state:boolean
    data: any
}