import React from 'react';
import auditoria from '../images/auditoria.png';

export default function Elegir() {
    return (
        <div className="container">
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                En la industria, el aire comprimido se usa tan ampliamente que a menudo se lo considera la cuarta utilidad, después de la electricidad, el gas natural y el agua. 
                            </p>
                            <br />
                            <p>    
                                Con el tiempo, los fabricantes han invertido en tecnología para superar las ineficiencias de los compresores de aire y simplificar la experiencia del usuario. Sin embargo, el aire comprimido sigue siendo más caro que los otros tres servicios cuando se evalúa por unidad de energía suministrada. 
                            </p>
                            <p>    
                                El desglose típico del costo del ciclo de vida de un compresor muestra que el consumo de energía representa alrededor del 88% del costo del ciclo de vida de 10 años de un compresor. Se desperdicia hasta el 50% del aire, lo que resulta en miles de euros gastados (perdidos) en energía. Hay muchos factores que contribuyen a una operación ineficiente (ver auditorías de aire). 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                ¿Cómo puede garantizar un sistema de aire comprimido eficiente en su planta? 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 left">
                            <p>
                                Realizar una auditoría de aire comprimido de su sistema es el primer paso para determinar los problemas que podrían obstaculizar la eficiencia de su unidad y aumentar innecesariamente los costos de energía. Hay varios niveles de auditorías de aire comprimido que se pueden realizar: 
                            </p>
                            <ul>
                                <li>Evaluación cualitativa del sistema:
                                    <p>
                                        Este proceso generalmente lleva ½ a 2 días e incluye un análisis general del sistema de aire comprimido de la planta (sea una pequeña instalación con un compresor o una gran instalación formada por varias salas de compresores), incluido un análisis del sistema de distribución para verificar si hay fugas, caídas de presión y problemas de dimensión del compresor. Se trazará un mapa del sistema de aire comprimido y se propondrá las medidas que llevarán a un mayor ahorro energético. 
                                    </p>
                                </li>
                                <li>Evaluación cuantitativa del sistema:
                                    <p>
                                        Para una revisión más completa, se encuentra disponible una evaluación del sistema que incluye un recorrido, así como lecturas recopiladas para identificar la dinámica del sistema. El mapeo del sistema de aire comprimido incluirá perfiles de presión y demanda. Las conclusiones del informe y las soluciones propuestas se proporcionarán al final de la evaluación. 
                                    </p>
                                </li>
                                <li>Auditoría completa del sistema:
                                    <p>
                                        La auditoría del sistema es la revisión más completa y toma alrededor de 3 a 10 días con poco o ningún impacto en los procedimientos de ejecución actuales. Las auditorías completas del sistema de aire comprimido incluyen: 
                                    </p>
                                    <ul>
                                        <li>Registro de datos de uso de energía: registra la energía que consumen los compresores de aire. </li>
                                        <li>Medición de aire: identifica la verdadera demanda de aire comprimido y el programa operativo de una fábrica. </li>
                                        <li>Detección y control de fugas de aire: identifica la cantidad de aire que se pierde debido a las fugas. </li>
                                        <li>Calidad del aire: mide la cantidad de partículas en el sistema de aire, como agua y aceite. </li>
                                        <li>Revisión de mantenimiento: evalúa la eficacia del plan de mantenimiento actual.</li>
                                        <li>Programa de seguimiento y control: hace recomendaciones para mantener una eficiencia óptima. </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Beneficios de una auditoría de aire  
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                            <p>
                                Los fabricantes que utilizan aire comprimido independientemente de la industria (alimentación, bebidas, automoción, textil, energía, electrónica, plásticos, etc.), a menudo se darán cuenta que una auditoría de aire comprimido se amortiza sola. 
                            </p>
                            <img src={auditoria} className="w-50 border-bottom" alt="auditorias" />
                            <p>    
                                Dependiendo de los resultados de la auditoría, los fabricantes pueden esperar ver mejoras en la eficiencia energética y la fiabilidad del sistema y menores costos operativos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
