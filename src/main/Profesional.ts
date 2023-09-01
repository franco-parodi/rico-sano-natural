import { Especialidad } from "./Especialidad";

export class Profesional{
    private nombre: string;
    private apellido: string;
    private especialidad: Especialidad;
    private matricula: string;

    public setEspecialidad(especialdiad: Especialidad) {
        this.especialidad = especialdiad;
    }

    public getEspecialidad():Especialidad{
        return this.especialidad;
    }

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

    public getMatricula():string{
        return this.matricula;
    }

    public setMatricula(matricula: string){
        this.matricula = matricula;
    }

    

}