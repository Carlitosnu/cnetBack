import { sign, verify } from "jsonwebtoken";
import {UserController} from "./users";
interface token{
    id:String,
}
export class JsonWebToken {
  private Key = "d780042543b5df978df33c6ab77e9d6f18d299c3";
  expires: number | string;
  constructor(private expiration?: number | string) {
    this.expires = expiration || 86400000 ;
  }
  async encode(input:string | String | Object) {
      let encoded = await sign(input,this.Key,{expiresIn:this.expires});
      return { encoded };
  }
  async decode(input:string) {
      let tokenDecoded:any = await verify(input,this.Key);
      let UsersController = new UserController()
      let exist = UsersController.CheckUser(tokenDecoded.id);
      return exist
  }
}