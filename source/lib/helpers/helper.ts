/**
 * @TODO PREPARAR SUBIDA DE ARCHIVOS :)
 */
import {compare, hash} from "bcrypt"
let salts = 10;
export const encryptPassword = async (pwd:String) => {
    return await hash(pwd,salts)
}
export const comparePassword = async (pwd:String,hashed:string) => {
    return await compare(pwd,hashed)
}