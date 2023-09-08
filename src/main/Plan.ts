import { CalificacionObjetivos } from "./CalificacionObjetivos.enum";
import { Comida } from "./Comida";
import { Duracion } from "./Duracion";
import { Objetivo } from "./Objetivo";
import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { TipoAlimento } from "./TipoAlimento.enum";
import { TipoComida } from "./TipoComida.enum";

export class Plan{
    private profesional: Profesional;
    private paciente: Paciente;
    private duracion: Duracion;
    private tamanioCinturaPaciente: number;
    private edadPaciente: number;
    private pesoPaciente: number;
    private comidas: Comida[];
    private objetivos: Objetivo[];

    constructor(){
        this.comidas = [];
        this.objetivos = [];
    }
    

    public getObjetivos():Objetivo[]{
        return this.objetivos;
    }

    public agregarObjetivo(objetivo: Objetivo){
        this.objetivos.push(objetivo);
    }

    public agregarComida(comida: Comida){
        this.comidas.push(comida);
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
    
    public cantidadObjetivos():number{
        return this.objetivos.length;
    }

    public calcularResultadoDeObjetivos(): CalificacionObjetivos{
        const cantidadDeObjetivosCumplidos = this.objetivos.filter((objetivo) => objetivo.getCumplido()).length;
        let porcentajeDeObjetivosCumplidos = (100*cantidadDeObjetivosCumplidos/this.cantidadObjetivos());
        if(porcentajeDeObjetivosCumplidos >= 0 && porcentajeDeObjetivosCumplidos <= 49){
            return CalificacionObjetivos.REGULAR;
        }
        else if(porcentajeDeObjetivosCumplidos >= 50 && porcentajeDeObjetivosCumplidos <= 60){
            return CalificacionObjetivos.BUENA;
        }
        else if(porcentajeDeObjetivosCumplidos >= 60 && porcentajeDeObjetivosCumplidos < 100){
            return CalificacionObjetivos.MUY_BUENA;
        }
        else{
            return CalificacionObjetivos.EXELENTE;

        }
    }
    public calcularCantidadDeComidas(): number{
        return this.getComidas().length;
    }

    public calcularCantidadDeComidasPorTipo(tipo: TipoComida):number{
        return this.comidas.filter((comida) => comida.getTipoComida() === tipo).length;

    }

    public EsFuerteEnProteinas(): boolean{
        const almuerzosYcenas = this.comidas.filter((comida) => comida.getTipoComida() === TipoComida.AC);
        let cant = 0;
        let percent = 0;
        almuerzosYcenas.forEach(function (ac){
           percent += ac.porcentajeDeProteDeComidaConProteina()
           cant ++;

        });
        return (percent/cant) >= 50
    }

    public EsBienVerde(): boolean{
        const almuerzosYcenas = this.comidas.filter((comida) => comida.getTipoComida() === TipoComida.AC);
        let cant = 0;
        let percent = 0;
        almuerzosYcenas.forEach(function (ac){
           percent += ac.porcentajeDeVegeDeComidaConVegetales()
           cant ++;

        });
        return (percent/cant) >= 35
    }

    //public 


}