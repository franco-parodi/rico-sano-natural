import { Sexo } from "./Sexo.enum";

export class Paciente{
    private nombre: string;
    private apellido: string;
    private sexo: Sexo;
    private disiplina:string;

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setApellido(apellido: string){
        this.apellido = apellido;
    }

    public getApellido():string{
        return this.apellido;
    }

    public setSexo(sexo: Sexo){
        this.sexo = sexo;
    }

    public getSexo():Sexo{
        return this.sexo;
    }
}