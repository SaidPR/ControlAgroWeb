import IMG1 from '../assets/principal.webp'
import IMG2 from '../assets/lista.webp'

export default function Specs(){
    return(
        <section className="relative md:-top-20 lg:-top-5 lg:scroll-m-25" id="DETALLES">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 h-auto mt-10">
                <div className="flex items-center justify-end pr-8 md:pr-25 lg:pr-30 ">
                    <img 
                        className='object-scale-down md:w-45 lg:w-65 '
                        alt='Principal'
                        src={IMG1}
                        onContextMenu={e => e.preventDefault()}
                    />
                    
                </div>
                <div className="flex flex-col items-center md:items-start justify-center md:justify-start text-start md:text-start mt-5 md:-mt-90 lg:-mt-5 p-10 md:pl-15 lg:p-10 space-y-3.5">
                    <h2 className='text-2xl md:text-2xl lg:text-5xl font-bold tracking-tight leading-tight'>
                        UNA <span className='text-green-600'>APLICACIÓN</span> CON <br/>
                        TODO EN <span className='text-orange-600 underline underline-offset-8'>UNO</span>
                    </h2>                    
                    <p className='md:text-base lg:text-xl pt-5 md:pr-50 font-light'>Un solo panel para dirigir asistencias, reportes y producción sin saltar entre apps.</p>
                    <p className='md:text-base lg:text-xl text-gray-600 font-light max-w-xl'>
                        Optimiza la gestión de tu campo desde un solo lugar. Control Agro centraliza la administración de personal, 
                        el monitoreo de cosechas y la logística de insumos sin necesidad de alternar entre múltiples herramientas.
                    </p>
                    <ul className="md:space-y-2 lg:space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 font-bold">01.</span>
                            <p><strong>Gestión Centralizada:</strong> Supervisa asistencias y reportes técnicos en tiempo real.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 font-bold">02.</span>
                            <p><strong>Offline First:</strong> Sigue registrando datos incluso en zonas sin cobertura de red.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 font-bold">03.</span>
                            <p><strong>Sincronización Automática:</strong> Los datos se actualizan al detectar conexión Wi-Fi.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col md:-mt-90 items-center lg:items-end justify-center md:justify-end text-center md:text-end lg:text-right p-5 md:p-10 md:pl-85 lg:p-20 space-y-6 order-2 lg:order-1">
                    <h2 className='text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight'>
                        UN <span className='text-orange-600'>MEJOR</span> CONTROL <br/>OPERATIVO
                    </h2>
                    <p className='md:text-base lg:text-lg text-gray-600 max-w-md'>
                        Obtén visibilidad absoluta sobre el rendimiento de tu cuadrilla. Organiza turnos complejos, 
                        asigna actividades específicas por lote y recibe alertas automáticas sobre incidencias en el campo.
                    </p>
                    <div className="grid grid-cols-2 gap-4 w-full pt-4">
                        <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                            <span className="block font-bold text-orange-600">Reportes</span>
                            <span className="text-sm">Métricas detalladas</span>
                        </div>
                        <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
                            <span className="block font-bold text-orange-600">Alertas</span>
                            <span className="text-sm">Notificaciones push</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-start bg-white pl-10 md:pl-30 order-1 lg:order-2">
                    <img 
                        className='object-contain md:w-45 lg:w-65 drop-shadow-2xl transition-transform hover:scale-105 duration-500'
                        alt='Lista de personal'
                        src={IMG2}
                        onContextMenu={e => e.preventDefault()}
                    />
                </div>
            </div>
        </section>
    )
}