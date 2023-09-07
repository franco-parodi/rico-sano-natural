export class Objetivo{
    private descripcion: string;
    private cumplido: boolean;

    /*public setProfesional(profesional: Profesional){
        this.profesional = profesional;
    }

    public getProfesional():Profesional{
        return this.profesional;
    }*/

    public setDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }

    public getDescripcion():string{
        return this.descripcion;
    }

    public setCumplido(cumplido: boolean){
        this.cumplido = cumplido;
    }

    public getCumplido():boolean{
        return this.cumplido;
    }


}