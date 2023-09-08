import { Comida } from "../main/Comida";
import { ComposicionComida } from "../main/ComposicionComida";
import { Plan } from "../main/Plan";
import { TipoAlimento } from "../main/TipoAlimento.enum";
import { TipoComida } from "../main/TipoComida.enum";

test("Req 4) el plan 1 es alto en proteinas", () =>{
    const plan1 = new Plan();
    const comida1 = new Comida();
    const comida2 = new Comida();
    const comida3 = new Comida();
    const comida4 = new Comida();
    const comida5 = new Comida();
    const comida6 = new Comida();
    const comida7 = new Comida();
    const compo1 = new ComposicionComida();
    const compo2 = new ComposicionComida();
    const compo3 = new ComposicionComida();
    const compo4 = new ComposicionComida();
    const compo5 = new ComposicionComida();
    const compo6 = new ComposicionComida();
    const compo7 = new ComposicionComida();
    const compo8 = new ComposicionComida();
    const compo9 = new ComposicionComida();
    const compo10 = new ComposicionComida();
    const compo11 = new ComposicionComida();
    const compo12 = new ComposicionComida();
    const compo13 = new ComposicionComida();
    const compo14 = new ComposicionComida();
    const compo15 = new ComposicionComida();
    const compo16 = new ComposicionComida();
    const compo17 = new ComposicionComida();
    const compo18 = new ComposicionComida();
    const compo19 = new ComposicionComida();
    const compo20 = new ComposicionComida();




    comida1.setTipoComida(TipoComida.AC);
    comida2.setTipoComida(TipoComida.AC);
    comida3.setTipoComida(TipoComida.AC);
    comida4.setTipoComida(TipoComida.AC);
    comida5.setTipoComida(TipoComida.AC);
    comida6.setTipoComida(TipoComida.AC);
    comida7.setTipoComida(TipoComida.AC);
    

    compo1.setTipoAlimento(TipoAlimento.PROTEINAS); //1
    compo1.setPorcentaje(50);
    compo2.setTipoAlimento(TipoAlimento.CARBOHIDRATOS);
    compo2.setPorcentaje(15);
    compo3.setTipoAlimento(TipoAlimento.PROTEINAS); //2
    compo3.setPorcentaje(15);
    compo4.setTipoAlimento(TipoAlimento.VEGETALES);
    compo4.setPorcentaje(50);
    compo5.setTipoAlimento(TipoAlimento.PROTEINAS); //3
    compo5.setPorcentaje(50);
    compo6.setTipoAlimento(TipoAlimento.PROTEINAS); //4
    compo6.setPorcentaje(15);
    compo7.setTipoAlimento(TipoAlimento.VEGETALES);
    compo7.setPorcentaje(50);
    compo8.setTipoAlimento(TipoAlimento.PROTEINAS); //5
    compo8.setPorcentaje(100);
    compo9.setTipoAlimento(TipoAlimento.VEGETALES);
    compo9.setPorcentaje(50);
    compo10.setTipoAlimento(TipoAlimento.PROTEINAS); //6
    compo10.setPorcentaje(100);
    compo11.setTipoAlimento(TipoAlimento.PROTEINAS); //7
    compo11.setPorcentaje(50);
    compo12.setTipoAlimento(TipoAlimento.VEGETALES); 
    compo12.setPorcentaje(10);
    compo13.setTipoAlimento(TipoAlimento.PROTEINAS); //8
    compo13.setPorcentaje(50);
    compo14.setTipoAlimento(TipoAlimento.PROTEINAS); //9
    compo14.setPorcentaje(90);
    compo15.setTipoAlimento(TipoAlimento.CARBOHIDRATOS);
    compo15.setPorcentaje(50);
    compo16.setTipoAlimento(TipoAlimento.PROTEINAS); //10
    compo16.setPorcentaje(20);
    compo17.setTipoAlimento(TipoAlimento.PROTEINAS); //11
    compo17.setPorcentaje(50);
    compo18.setTipoAlimento(TipoAlimento.CARBOHIDRATOS); 
    compo18.setPorcentaje(50);
    compo19.setTipoAlimento(TipoAlimento.PROTEINAS); //12
    compo19.setPorcentaje(20);
    compo20.setTipoAlimento(TipoAlimento.CARBOHIDRATOS);
    compo20.setPorcentaje(100);

    comida1.agregarComposicion(compo1);
    comida1.agregarComposicion(compo3);
    comida1.agregarComposicion(compo4);

    comida2.agregarComposicion(compo2);
    comida2.agregarComposicion(compo5);
    comida2.agregarComposicion(compo6);

    comida3.agregarComposicion(compo7);
    comida3.agregarComposicion(compo8);
    comida3.agregarComposicion(compo9);

    comida4.agregarComposicion(compo10);
    comida4.agregarComposicion(compo11);
    comida4.agregarComposicion(compo12);

    comida5.agregarComposicion(compo13);
    comida5.agregarComposicion(compo14);
    comida5.agregarComposicion(compo15);

    comida6.agregarComposicion(compo16);
    comida6.agregarComposicion(compo17);
    comida6.agregarComposicion(compo18);

    comida7.agregarComposicion(compo19);
    comida7.agregarComposicion(compo20);
    comida7.agregarComposicion(compo19);

    
    

    


    plan1.agregarComida(comida1);
    plan1.agregarComida(comida2);
    plan1.agregarComida(comida3);
    plan1.agregarComida(comida4);
    plan1.agregarComida(comida5);
    plan1.agregarComida(comida6);
    plan1.agregarComida(comida7);


    expect(plan1.EsFuerteEnProteinas()).toBe(true); 

});