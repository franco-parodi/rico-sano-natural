import { CalificacionObjetivos } from "../main/CalificacionObjetivos.enum";
import { Objetivo } from "../main/Objetivo";
import { Plan } from "../main/Plan";

test("Req 1) la cantidad de objetivos es del 75% y el rendimiento es MUY BUENA", () =>{
    
    const plan1 = new Plan();
    const objetivo1 = new Objetivo();
    const objetivo2 = new Objetivo();
    const objetivo3 = new Objetivo();
    const objetivo4 = new Objetivo();
    plan1.agregarObjetivo(objetivo1);
    plan1.agregarObjetivo(objetivo2);
    plan1.agregarObjetivo(objetivo3);
    plan1.agregarObjetivo(objetivo4);
    objetivo1.setCumplido(true);
    objetivo2.setCumplido(true);
    objetivo3.setCumplido(true);
    objetivo4.setCumplido(false);




    expect(plan1.calcularResultadoDeObjetivos()).toBe(CalificacionObjetivos.MUY_BUENA);




});

test("Req 1) la cantidad de objetivos es del 100% y el rendimiento es EXELENTE", () =>{
    
    const plan1 = new Plan();
    const objetivo1 = new Objetivo();
    const objetivo2 = new Objetivo();
    const objetivo3 = new Objetivo();
    const objetivo4 = new Objetivo();
    plan1.agregarObjetivo(objetivo1);
    plan1.agregarObjetivo(objetivo2);
    plan1.agregarObjetivo(objetivo3);
    plan1.agregarObjetivo(objetivo4);
    objetivo1.setCumplido(true);
    objetivo2.setCumplido(true);
    objetivo3.setCumplido(true);
    objetivo4.setCumplido(true);




    expect(plan1.calcularResultadoDeObjetivos()).toBe(CalificacionObjetivos.EXELENTE);




});

test("Req 1) la cantidad de objetivos es del 50% y el rendimiento es BUENA", () =>{
    
    const plan1 = new Plan();
    const objetivo1 = new Objetivo();
    const objetivo2 = new Objetivo();
    const objetivo3 = new Objetivo();
    const objetivo4 = new Objetivo();
    plan1.agregarObjetivo(objetivo1);
    plan1.agregarObjetivo(objetivo2);
    plan1.agregarObjetivo(objetivo3);
    plan1.agregarObjetivo(objetivo4);
    objetivo1.setCumplido(true);
    objetivo2.setCumplido(true);
    objetivo3.setCumplido(false);
    objetivo4.setCumplido(false);




    expect(plan1.calcularResultadoDeObjetivos()).toBe(CalificacionObjetivos.BUENA);




});

test("Req 1) la cantidad de objetivos es del 25% y el rendimiento es REGULAR", () =>{
    
    const plan1 = new Plan();
    const objetivo1 = new Objetivo();
    const objetivo2 = new Objetivo();
    const objetivo3 = new Objetivo();
    const objetivo4 = new Objetivo();
    plan1.agregarObjetivo(objetivo1);
    plan1.agregarObjetivo(objetivo2);
    plan1.agregarObjetivo(objetivo3);
    plan1.agregarObjetivo(objetivo4);
    objetivo1.setCumplido(true);
    objetivo2.setCumplido(false);
    objetivo3.setCumplido(false);
    objetivo4.setCumplido(false);




    expect(plan1.calcularResultadoDeObjetivos()).toBe(CalificacionObjetivos.REGULAR);




});