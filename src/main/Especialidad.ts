export class Especialidad{
    private nombreEspecialidad: string;

    public setNombreEspecialidad(nombre:string){
        this.nombreEspecialidad = nombre;
    }

    public getNombreEspecialidad():string{
        return this.nombreEspecialidad;
    }
}