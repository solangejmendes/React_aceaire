import React from 'react'

export default function Aplicacion() {
    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Tipos de aplicaciones  
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-left">
                            <p>
                                Según su uso, normalmente, el aire comprimido se divide en cuatro grupos: 
                            </p>
                            <p>
                                1. Air respirable: Las aplicaciones más comunes para aire respirable se encuentran en hospitales o instalaciones médicas, así como para actividades subacuáticas. Si alguna vez ha buceado, definitivamente entiende la importancia de tener un aire que sea seguro para respirar, libre de contaminantes y que contenga una cierta cantidad de vapor de agua. En la escala ISO 8573.1, esto entra en la clase 1 para contaminantes o partículas (es decir, no debería haber ninguno de estos presentes) pero en las clases 4 a 6 para el vapor de agua. 
                            </p>
                            <p>
                                2. Aire de proceso: cuando se fabrica un producto que será consumido por humanos o animales, el aire de proceso se utiliza a menudo en el proceso de producción. No es sorprendente que el aire comprimido que cumpla con la norma deba tener cero contaminación por aceite o partículas, por lo que las empresas de fabricación de alimentos o incluso las farmacéuticas requieren que la calidad del aire comprimido cumpla con la norma ISO 8573.1 clase 1 o 2. 
                            </p>
                            <p>
                                3. Aire de potencia: Usualmente usado en bombas neumáticas o equipos como los usados para arenado, por ejemplo, la calidad del aire comprimido usado para estos propósitos tiende a ser un poco más baja que los dos primeros tipos de aire comprimido mencionados anteriormente. En el caso del aire de potencia, las gotas de aceite o el vapor de agua pueden causar un poco de molestia, pero ciertamente no es una amenaza para la vida. Para no dañar el equipo y obstruir los filtros, el aire de potencia debe cumplir con la clase 4 o 5 del estándar de calidad de aire comprimido. 
                            </p>
                            <p>
                                4. Aire de instrumentación: utilizado con fines de instrumentación neumática, la calidad del aire comprimido para el aire de instrumentación debe ser superior a la del aire de potencia y, en general, cumple con la clase 3 o 4 de la norma de calidad de aire comprimido. Esto no es solo para proteger el equipo y los instrumentos para los que se utiliza, sino también para proteger la calidad del producto terminado. El aire de instrumentación con un alto nivel de contaminantes podría afectar la calidad del producto en el que se está utilizando, como por ejemplo, en la pulverización de pintura, o provocar averías inoportunas de la instrumentación, lo que provocaría una pérdida de ingresos. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
