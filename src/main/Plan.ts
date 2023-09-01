import { Comida } from "./Comida";
import { Duracion } from "./Duracion";
import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { TipoComida } from "./TipoComida.enum";

export class Plan{
    private profesional: Profesional;
    private paciente: Paciente;
    private duracion: Duracion;
    private tamanioCinturaPaciente: number;
    private edadPaciente: number;
    private pesoPaciente: number;
    private comidas: Comida[];

    constructor(){
        this.comidas = [];
    }

    public setProfesional(profesional: Profesional){
        this.profesional = profesional;
    }

    public getProfesional():Profesional{
        return this.profesional;
    }

    public setPaciente(paciente: Paciente){
        this.paciente = paciente;
    }

    public getPaciente():Paciente{
        return this.paciente;
    }

    public setDuracion(duracion: Duracion){
        this.duracion = duracion;
    }

    public getDuracion():Duracion{
        return this.duracion;
    }

    public setTamanioCinturaPaciente(tamanio: number){
        this.tamanioCinturaPaciente = tamanio;
    }

    public getTamanioCinturaPaciente():number{
        return this.tamanioCinturaPaciente;
    }

    public setEdadPaciente(edad: number){
        this.edadPaciente = edad;
    }

    public getEdadPaciente(): number{
        return this.edadPaciente;
    }

    public setPesoPaciente(peso: number){
        this.pesoPaciente = peso;
    }

    public getPesoPaciente(): number{
        return this.pesoPaciente;
    }

    public getComidas():Comida[]{
        return this.comidas;
    }
    




}