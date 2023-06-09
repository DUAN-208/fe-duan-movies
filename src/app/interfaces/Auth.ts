export interface ISignup {
        _id?:string|number,
        name:string,
        email:string,
        password:string,
        confirmPassword:string
}
export interface ISignin{
        _id?:string|number,
        email:string,
        password:string

}