export default function Download(){
    return(
        <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 relative w-full lg:-top-5 top-5 h-65 lg:p-10 p-10" id="DESCARGAR">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-white text-xl lg:text-2xl font-bold tracking-wider">DESCARGA LA <span className="text-orange-300">DEMO</span> PARA ANDROID</h3>
                <p className="text-white text-md lg:text-lg font-bold tracking-wider mt-3">¡Listo para empezar a usar Control Agro en minutos!</p>
                <a href="https://github.com/SaidPR/ControlAgro25/releases/download/APK/ControlAgro.apk" className=" inline-flex items-center justify-center bg-green-200 text-white no-underline text-[1.3em] font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.2)] mt-[25px] px-[35px] py-4 rounded-[50px]" download>Descargar APK</a>
            </div>
        </section>
    )
}