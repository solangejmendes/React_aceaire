import React from 'react';
import Measurequality from '../images/Measurequality.png';
import qualitymeasure from '../images/qualitymeasure.png';
import Parametros from './inc/Parametros';

export default function Calidad() {
    return (
        <div className="container">
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                Los compresores aspiran aire ambiental sin filtrar para el proceso de compresión donde las partículas, el agua, el aceite y / o los microorganismos pueden contaminar el aire comprimido final si no se aplica el tratamiento de aire adecuado en el punto de uso. De hecho, 1m3 de aire comprimido sin tratar puede contener cerca de 200 millones de partículas de suciedad y otras sustancias. 
                            </p>
                            <p>    
                                Ya sea que la contaminación provenga de partículas no viables, agua, aceite o microorganismos, cualquier contaminación puede inducir a una parada por fallo del equipo, provocar un retroceso de producción por para de línea y/o requerir el reemplazo y revalidación del equipo. Debido a estas consecuencias perjudiciales, se debe implementar procesos de calidad en sus sistemas, evitar que ocurra contaminación y probar regularmente sus sistemas de aire comprimido. 
                            </p>
                            <p>    
                                La calidad del aire en lo que respecta a la cantidad de partículas y la presencia de agua y aceite se define en la norma ISO 8573 "Aire comprimido para uso general" que es el estándar de la industria para la pureza del aire, determinando hasta qué punto es necesario limpiar el aire comprimido. También define qué otros dispositivos se pueden utilizar para lograr la clase de calidad de aire comprimido requerida. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={Measurequality} className="w-75 border-bottom" alt="calidad" />
                        </div>
                    </div>
                </div>
            </section>

            <Parametros />

            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Riesgo de control 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-left">
                            <p>
                                Para eliminar el riesgo de contaminación del aire en un proceso crítico, se recomienda que solo se utilice aire comprimido clasificado como Clase 0. Además, los filtros deben estar dimensionados para que no sólo manejen correctamente el flujo nominal, sino que también tengan un umbral de capacidad mayor para manejar alguna caída de presión debido a una cierta cantidad de bloqueo. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Planes de seguimiento  
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-left">
                            <p>
                                Mientras que algunas instalaciones usan aire comprimido en contacto directo con los productos para limpiarlos, airearlos o moverlos a través de los procesos, otras usan gases de proceso en bombas de fluidos que llevan los productos a través de los procesos de producción y llenado. Se pueden utilizar generadores de nitrógeno o aire comprimido para envasar o cubrir según el resultado requerido. Los gases de proceso también se pueden utilizar para pulverizar o revestir un producto, o como ingrediente del propio producto. La cantidad y el tipo de contacto que los productos tienen con aire comprimido o gases de proceso informan los riesgos asociados y los planes de monitoreo necesarios para un sistema. 
                            </p>
                            <p>    
                                Generalmente, las tuberías de aire comprimido están hechas de acero o acero sin revestimiento de zinc. Por lo tanto, la tasa de corrosión aumentará bastante a partir de la humedad relativa del 50%. El óxido se liberará gradualmente y se trasladará al punto de uso. Esto causará problemas como boquillas comprimidas, elementos de control defectuosos y producción alterada. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={qualitymeasure} className="w-50 border-bottom" alt="medición" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <p>
                                La previsibilidad y la repetibilidad son los factores más importantes de cualquier plan de calidad en una planta de fabricación. Debido a esto, es fundamental diseñar un plan de monitoreo y muestreo que permita a las instalaciones detectar problemas potenciales antes de dañar cualquier producto. 
                            </p>
                            <p>    
                                La frecuencia y la ubicación del muestreo dependerán en gran medida de la evaluación de riesgos individual creada por la instalación. Algunos suministradores de aire comprimido optan por realizar pruebas trimestrales para tener en cuenta los cambios estacionales, mientras que otros optan por realizar pruebas antes y después de realizar el mantenimiento. Esto asegura que no se haya causado contaminación durante el mantenimiento, ya sea por parte del personal, materiales de limpieza o cambios sistémicos. Las pruebas anuales también son una opción para los suministradores, sin embargo, eso no proporciona datos adecuados para el análisis de tendencias y es representativo del sistema sólo en el momento del muestreo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
