import { TipoAlimento } from "./TipoAlimento.enum"

export class ComposicionComida{
    private tipoAlimento: TipoAlimento;                        //(prote, carb, vege)
    private nombre: string;                                //(LECHUGA)
    private porcentaje: number;                              //(cuanto de cada)



    public setTipoAlimento(tipoAlimento: TipoAlimento){
        this.tipoAlimento = tipoAlimento;
    }

    public getTipoAlimento():TipoAlimento{
        return this.tipoAlimento;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setPorcentaje(porcentaje: number){
        this.porcentaje = porcentaje;
    }

    public getPorcentaje():number{
        return this.porcentaje;
    }

}