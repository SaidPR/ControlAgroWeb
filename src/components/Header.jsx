import Inicio from '../assets/controlagro.webp'
import BG from '../assets/fondo.webp'

export default function Nav(){
    
    return(
        <header className="hero z-1" id="INICIO">
            {/* Fondo */}
            <div className='absolute w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[46rem] top-0'>
                <img 
                    className='w-full h-full object-cover'
                    alt='Fondo'
                    src= {BG}
                    onContextMenu={e => e.preventDefault()}
                />
                <div className='absolute inset-0 bg-gray-950 opacity-60'></div>
                <div className='absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t to-transparent backdrop-blur-xs'></div>
            </div>
            {/* Menú */}
            <nav id="menu">
                <div className="brand">
                    <span className="brand-mark">CA</span>
                    <span className="brand-name">Control Agro</span>
                </div>
                <div className="nav-links">
                    <a href="#INICIO">Inicio</a>
                    <a href="#DETALLES">Detalles</a>
                    <a href="#DESCARGAR">Descargar</a>
                    <a href="#CONTACTO">Contacto</a>
                </div>
            </nav>
            
            <div className="hero-content z-1 hero-glass-card">
                <p className="eyebrow">Gestión de operaciones agrícolas a gran escala</p>
                <h1>Control Agro</h1>
                <p className="lede">Aplicación móvil para facilitar el control de asistencia de los trabajadores hasta el seguimiento detallado de la producción.</p>
                <div className="hero-metrics">
                    <div className="metric">
                        <span className="metric-value">24/7</span>
                        <span className="metric-label">Operación sin papel</span>
                    </div>
                    <div className="metric">
                        <span className="metric-value">+40%</span>
                        <span className="metric-label">Registros mejor organizados</span>
                    </div>
                    <div className="metric">
                        <span className="metric-value">Listo</span>
                        <span className="metric-label">Para dispositivos móviles</span>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-center z-1 mt-10"> 
                <img 
                    className='w-3/4 md:w-1/2 lg:w-[45%] h-auto object-contain drop-shadow-2xl'
                    alt='ControlAgro'
                    src={Inicio} 
                    onContextMenu={e => e.preventDefault()}
                />
            </div>
        </header>
    )
}