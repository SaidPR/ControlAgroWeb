export default function Footer(){
    return(
        <footer className="relative w-full" id="CONTACTO">
            <div className="footer-content">
                <div>
                    <p className="eyebrow-footer">Desarrollado por Said Ramos</p>
                    <p className="eyebrow-footer">Flujo digital que mantiene tus funciones agrícolas organizadas.</p>
                </div>
                <div className="footer-contact">
                    <p>Contacto</p>
                    <a href="mailto:ramoszaid5@gmail.com">ramoszaid5@gmail.com</a>
                </div>
                <div className="footer-contact space-y-1">
                    <p>Repositorio</p>
                    <a
                        className="font-bold inline-flex items-center gap-2"
                        href="https://github.com/SaidPR/ControlAgro25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver en GitHub
                        <span aria-hidden className="text-sm">↗</span>
                    </a>
                    <a
                        className="text-sm text-[#f89ab7] inline-block"
                        href="https://github.com/SaidPR/ControlAgro25/issues/new"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Reportar un issue o sugerencia
                    </a>
                    <span className="block text-xs text-[#f7eefa]/80">Pull requests y comentarios son bienvenidos.</span>
                </div>
            </div>
        </footer>
    )
}
