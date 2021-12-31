import React from 'react';
import rustedPipe from '../../images/rustedPipe.jpg';
import class0 from '../../images/class0.jpg';
import filtration from '../../images/filtration.png';
import { Link } from 'react-router-dom';

export default function Parametros() {
    return (
        <div>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Parametros de Calidad</h3>
                            <div className="underline mx-auto"></div>
                            <p>Hay tres parámetros de calidad del aire que deben obtenerse de esta medición: </p>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={filtration} className="w-100 border-bottom" alt="filtration" />
                                <div className="card-body">
                                    <h6>Partículas</h6>
                                    <div className="underline"></div>
                                    <p>El número de partículas en el aire y la humedad relativa</p>
                                    <p>
                                        Un fltro básicamente separa las partículas de aire de las partículas contaminantes. La capacidad de separación de partículas de un filtro es el resultado de las subcapacidades combinadas (para los diferentes tamaños de partículas) como se establece en la tabla de la ISO8573. 
                                    </p>
                                    <p>
                                        En realidad, cada filtro es un compromiso, ya que ningún filtro es eficiente en todo el rango de tamaño de partículas. Incluso el efecto de la velocidad de la corriente sobre la capacidad de separación para diferentes tamaños de partículas no es un factor decisivo. 
                                    </p>
                                    <p>
                                        Generalmente, las partículas entre 0,1 μm y 0,2 μm son las más difíciles de separar (tamaño de partícula más penetrante) .2.35.png 
                                    </p>
                                    <p>
                                        Como se indicó anteriormente, la eficiencia de captura total de un filtro coalescente se puede atribuir a una combinación de todos los mecanismos que ocurren. Obviamente, la importancia de cada mecanismo, los tamaños de partícula para los que ocurren y el valor de la eficiencia total dependen en gran medida de la distribución del tamaño de partícula del aerosol, la velocidad del aire y la distribución del diámetro de las fibras del medio filtrante. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={class0} className="w-100 border-bottom center" alt="aceite" id="imagencarda"/>
                                <div className="card-body">
                                    <h6>Aceite</h6>
                                    <div className="underline"></div>
                                    <p>
                                        La cantidad de aceite lubricante en aire presurizado.
                                    </p>
                                    <p>
                                        Los suministradores de aire comprimido, en particular, los que no emplean un compresor exento de aceite, deben monitorear la contaminación por hidrocarburos. Un exceso de aceite en forma de aerosol puede eventualmente acumularse en forma de aceite líquido y esto puede provocar una parada inmediata del sistema. 
                                    </p>
                                    <p>
                                        Los hidrocarburos son líquidos y vapores aceitosos que pueden ser peligrosos para los consumidores y los productos. Estos se encuentran regularmente en los lubricantes de los sistemas de aire comprimido. Si se ingieren, los hidrocarburos pueden causar enfermedades al consumidor. 
                                    </p>
                                    <p>
                                        Además, cuando el sistema se calienta, los lubricantes pueden crear vapores de aceite. Debido a que el aceite tiene una presión de vapor baja, es extremadamente difícil deshacerse de la contaminación una vez que ocurre.
                                    </p>
                                    <p>
                                        La cantidad de aceite lubricante en aire presurizado.Muchas instalaciones emplean compresores exentos de aceite para evitar la contaminación, pero aunque el compresor no agrega aceite al flujo de aire, esto no elimina por completo la posibilidad de una contaminación por aceite, ya que el aire ambiental que se ingiere en el compresor puede contener hidrocarburos como gases de escape o vapores. Se requieren, por lo tanto, una filtración adecuada y pruebas regulares al aire.
                                    </p>
                                    <p>
                                        El aceite y el agua en forma de aerosol se comportan de manera similar a otras partículas y también se pueden separar mediante un filtro coalescente. 
                                    </p>
                                    <p>
                                        En el filtro, estos aerosoles líquidos se juntan en gotas más grandes que se hunden hasta el fondo del filtro por fuerza de la gravedad. El filtro puede separar el aceite en aerosol y también en forma líquida. Sin embargo, el aceite en forma líquida, debido a la alta concentración inherente, dará como resultado una alta caída de presión y arrastre de aceite. 
                                    </p>
                                    <p>
                                        Si se va a separar aceite en forma de vapor, el filtro debe contener un material de adsorción adecuado, generalmente carbón activado. Todo filtrado inevitablemente da como resultado una caída de presión, que es una pérdida de energía en el sistema de aire comprimido. Los filtros más finos con una estructura más ajustada provocan una mayor caída de presión y pueden obstruirse más rápidamente, lo que exige un reemplazo de filtro más frecuente y, en consecuencia, mayores costos de mantenimiento. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={rustedPipe} className="w-100 border-bottom" alt="agua" />
                                <div className="card-body">
                                    <h6>Agua</h6>
                                    <div className="underline"></div>
                                    <p>
                                        La temperatura del agua o del punto de rocío a presión (Pdp).
                                    </p>
                                    <p>
                                        El aire se saturará y parte del aire se convertirá en gotas de agua o condensado. Con la bajada de temperatura, la condensación aumentará y, con ello, la cantidad de gotas de agua que salen en el aire de salida. La cantidad de aire que sale del aire comprimido bajo condiciones de presión puede ser aún mayor. Por ejemplo, un compresor de 30 kW extrae aproximadamente 20 litros de agua en el sistema de aire comprimido en una condición de humedad del 60% y una temperatura ambiente de 20 ° C. En compresores más grandes, los números serán mucho más altos. 
                                    </p>
                                    <p>
                                        El impacto de la mala calidad del aire en la contaminación del agua puede ser perjudicial para la longevidad de un sistema de aire comprimido al provocar la corrosión de las tuberías y otras funciones del sistema. Las reparaciones y reemplazos por daños causados por el agua son extremadamente costosos y requieren mucho tiempo. 
                                    </p>
                                    <p>
                                        La humedad también proporciona un caldo de cultivo adecuado para que los microorganismos crezcan y florezcan. La contaminación por bacterias, levaduras y moho pone en riesgo a los usuarios finales y a los empleados expuestos. Cuando los microorganismos están hambrientos de nutrientes, producen exotoxinas. Las exotoxinas, incluso en cantidades muy pequeñas, pueden causar enfermedades (como botulismo) en los consumidores. Algunas bacterias también pueden producir productos no viables como endotoxinas. 
                                    </p>
                                    <p>
                                        Estos metabolitos secundarios son muy perjudiciales para los consumidores. Se han retirado del mercado innumerables productos debido a la contaminación microbiana. Los filtros estériles se emplean a menudo para evitar que las partículas viables impacten en los productos finales. 
                                    </p>
                                    <p>
                                        Estos metabolitos secundarios son muy perjudiciales para los consumidores. Se han retirado del mercado innumerables productos debido a la contaminación microbiana. Los filtros estériles se emplean a menudo para evitar que las partículas viables impacten en los productos finales. 
                                    </p>
                                    <p>
                                        Se utilizan diferentes tipos de secadores para controlar los problemas debidos al alto contenido de humedad al eliminar la humedad del aire comprimido. La presión de punto de rocío se utiliza para indicar el nivel de sequedad del aire comprimido. El punto de rocío es la temperatura a la que el vapor de agua contenido en el aire se condensará en agua líquida (saturada con un 100% de humedad relativa). Cuanto menor sea la presión de punto de rocío, menor será la cantidad de vapor de agua en el aire comprimido. 
                                    </p>
                                    <p>
                                        Existen varios tipos de secadores de aire. Los más famosos son los secadores frigoríficos y los secadores de adsorción. Los secadores frigoríficos enfrían el aire comprimido entre 2 y 5 ° C y el exceso de vapor de agua se condensará y desechará. Por tanto, los secadores refrigerados se utilizan cuando la máxima calidad de aire requerida es de clase 4. 
                                    </p>
                                    <p>
                                        Si se requiere aire comprimido con menos humedad, se debe instalar un secador de adsorción porque tiene una mayor capacidad una vez que el punto de rocío puede alcanzar entre -20 y -70 ° C. Los secadores desecantes eliminarán la humedad del aire comprimido; sin embargo, cuando se regeneran, el proceso crea polvo desecante, pequeñas partículas que deben eliminarse con un filtro de partículas justo después del secador. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </div>
    )
}