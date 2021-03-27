import Users from "../models/Users"
import {User} from "../interfaces/User";
import {Rango} from '../interfaces/User'
export class UserController{
    id?:String
    constructor(id?:String){
        this.id = id
    }
    async createUser(UserInfo:User){
        let UserCreator = await new Users();
        let UserCreated = await Users.create(UserInfo);
        return {
            "message": "User Create Succesfuly",
            "info": UserCreated
        }
    }
    CheckUser(id:string){
        let Controller = new Users();
        let user:Array<User> = Controller.findById(id);
        if(user.length = 0){
            return {
                state:false
            }
        }
        return {
            state:true,
            userId: user.id;
        }
    }
}