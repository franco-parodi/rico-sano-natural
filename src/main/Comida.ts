import { ComposicionComida } from "./ComposicionComida";
import { TipoAlimento } from "./TipoAlimento.enum";
import { TipoComida } from "./TipoComida.enum";

export class Comida{
    private tipoComida: TipoComida;
    private descripcion: string;
    private composicion: ComposicionComida[];
    //private comidaConProteina: ComposicionComida[];

    constructor(){
        this.composicion = [];
        //this.comidaConProteina = [];
    }
    
    public agregarComposicion(composicion: ComposicionComida){
        this.composicion.push(composicion);
    }

    public setTipoComida(tipo: TipoComida){
        this.tipoComida = tipo;
    }

    public getTipoComida():TipoComida{
        return this.tipoComida;
    }

    public setDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }

    public getDescripcion():string{
        return this.descripcion;
    }

   /* public setComposicion(composicion :ComposicionComida){
        this.composicion = composicion;
    }*/

    public getComposicion():ComposicionComida[]{
        return this.composicion;
    }

    public porcentajeDeProteDeComidaConProteina():number{
        
        const comidaConProte = this.composicion.filter((tieneProte) => tieneProte.getTipoAlimento() === TipoAlimento.PROTEINAS);
        /*const porcentajesDeProtes = comidaConProte.filter((porcentaje) => por)*/
        let totalDeProte = 0;
        comidaConProte.forEach(function (percent){

            totalDeProte = totalDeProte + percent.getPorcentaje();
        });
        return totalDeProte;
    }

    public porcentajeDeVegeDeComidaConVegetales():number{
        
        const comidaConVege = this.composicion.filter((tieneVege) => tieneVege.getTipoAlimento() === TipoAlimento.VEGETALES);
        /*const porcentajesDeProtes = comidaConProte.filter((porcentaje) => por)*/
        let totalDeVege = 0;
        comidaConVege.forEach(function (percent){

            totalDeVege = totalDeVege + percent.getPorcentaje();
        });
        return totalDeVege;
    }
    
}