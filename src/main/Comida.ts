import { ComposicionComida } from "./ComposicionComida";
import { TipoComida } from "./TipoComida.enum";

export class Comida{
    private tipoComida: TipoComida;
    private descripcion: string;
    private composicion: ComposicionComida[];

    constructor(){
        this.composicion = [];
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
}