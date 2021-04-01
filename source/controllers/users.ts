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
            message: true,
            info: UserCreated
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
    async login(body:String){
        let controller = await User.findOne({email:body});
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
            email: controller.email,
            pwd: controller.password
        }
    }
}
interface consult {
    state:boolean
    data: any
}