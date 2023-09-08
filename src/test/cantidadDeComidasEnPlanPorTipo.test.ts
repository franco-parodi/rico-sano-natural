import { Comida } from "../main/Comida";
import { Plan } from "../main/Plan";
import { TipoComida } from "../main/TipoComida.enum";

test("Req 3) la cantidad de comidas AC del plan 1 es de 3 ", () =>{
    const plan1 = new Plan();
    const comida1 = new Comida();
    const comida2 = new Comida();
    const comida3 = new Comida();
    const comida4 = new Comida();
    

    plan1.agregarComida(comida1);
    plan1.agregarComida(comida2);
    plan1.agregarComida(comida3);
    plan1.agregarComida(comida4);

    comida1.setTipoComida(TipoComida.AC);
    comida2.setTipoComida(TipoComida.AC);
    comida3.setTipoComida(TipoComida.DM);
    comida4.setTipoComida(TipoComida.AC);



    

    expect(plan1.calcularCantidadDeComidasPorTipo(TipoComida.AC)).toBe(3);
}); 