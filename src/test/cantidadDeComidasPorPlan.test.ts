import { Comida } from "../main/Comida";
import { Plan } from "../main/Plan";

test("Req 2) la cantidad de comidas del plan 1 es de 3 comidas", () =>{

    const plan1 = new Plan();
    const comida1 = new Comida();
    const comida2 = new Comida();
    const comida3 = new Comida();
    const comida4 = new Comida();

    plan1.agregarComida(comida1);
    plan1.agregarComida(comida2);
    plan1.agregarComida(comida3);
    //plan1.agregarComida(comida4);



    expect(plan1.calcularCantidadDeComidas()).toBe(3);
}); 