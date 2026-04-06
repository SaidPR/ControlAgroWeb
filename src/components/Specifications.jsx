import IMG1 from '../assets/principal.webp'
import IMG2 from '../assets/lista.webp'

export default function Specs(){
    return(
        <section className="relative -top-22 lg:scroll-m-25" id="DETALLES">
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 h-auto mt-10">
                <div className="flex items-center justify-end pr-30 ">
                    <img 
                        className='object-scale-down w-65'
                        alt='Principal'
                        src={IMG1}
                        onContextMenu={e => e.preventDefault()}
                    />
                    
                </div>
                <div className="flex flex-col items-start justify-start text-start p-10 space-y-3.5">
                    <h2 className='text-4xl lg:text-5xl font-bold tracking-tight leading-tight'>
                        UNA <span className='text-green-600'>APLICACIÓN</span> CON <br/>
                        TODO EN <span className='text-orange-600 underline underline-offset-8'>UNO</span>
                    </h2>                    
                    <p className='text-xl pt-5 pr-50 font-light'>Un solo panel para dirigir asistencias, reportes y producción sin saltar entre apps.</p>
                    <p className='text-xl text-gray-600 font-light max-w-xl'>
                        Optimiza la gestión de tu campo desde un solo lugar. Control Agro centraliza la administración de personal, 
                        el monitoreo de cosechas y la logística de insumos sin necesidad de alternar entre múltiples herramientas.
                    </p>
                    <ul className="space-y-4 text-gray-700">
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
                            <p><strong>Sincronización Automática:</strong> Los datos se actualizan al detectar conexión Wi-Fi o datos.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right p-10 lg:p-20 space-y-6 order-2 lg:order-1">
                    <h2 className='text-4xl font-bold tracking-tight'>
                        UN <span className='text-orange-600'>MEJOR</span> CONTROL <br/>OPERATIVO
                    </h2>
                    <p className='text-lg text-gray-600 max-w-md'>
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
                <div className="flex items-center justify-start bg-white pl-30 order-1 lg:order-2">
                    <img 
                        className='object-contain w-65 drop-shadow-2xl transition-transform hover:scale-105 duration-500'
                        alt='Lista de personal'
                        src={IMG2}
                        onContextMenu={e => e.preventDefault()}
                    />
                </div>
            </div>
        </section>
    )
}