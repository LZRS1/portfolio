import Card from "./Card"
import './../App.css'

export default function Services() {
    return (
        <div className="w-full min-h-screen flex flex-wrap justify-center items-center mx-auto py-20 bg-black">
            <div className="w-5/6 flex flex-wrap justify-center gap-6 xl:gap-10">
                <p className="w-full text-center text-2xl text-white font-semibold">MIS SERVICIOS</p>
                <Card>
                    <Card.Body><img src="https://i.ibb.co/cJvVCrt/hosting.png" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-200 text-base group-hover:text-white md:text-md font-bold text-center">HOSTING</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">
                            Ofrecemos planes de hosting rápidos y seguros para que tu web esté siempre disponible.
                        </p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="https://i.ibb.co/M7HYGpV/ssl.png" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-200 text-base group-hover:text-white md:text-md font-bold text-center">SSL Y SEGURIDAD PARA LAS WEB</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">
                            Implementamos certificados SSL y otras soluciones de seguridad para proteger tu sitio web.
                        </p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="https://i.ibb.co/grX00SR/correo.png" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-200 text-base group-hover:text-white md:text-md font-bold text-center">CORREOS EMPRESARIALES</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">
                            Creamos correos electrónicos profesionales con tu propio dominio para mejorar la imagen de tu empresa.
                        </p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="https://i.ibb.co/3WcqTL6/base.png" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-200 text-base group-hover:text-white md:text-md font-bold text-center">BASES DE DATOS</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">
                            Diseño, implementación y mantenimiento de bases de datos seguras y eficientes para tu negocio.
                        </p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="https://i.ibb.co/VD1mcpq/codigo.png" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-200 text-base group-hover:text-white md:text-md font-bold text-center">PROGRAMADOR WEB</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">
                            Desarrollo de sitios web a medida, optimizados y funcionales para tu negocio.
                        </p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body><img src="https://i.ibb.co/S041XJk/premium.png" className="" /></Card.Body>
                    <Card.Footer>
                        <p className="text-slate-200 text-base group-hover:text-white md:text-md font-bold text-center">CUENTAS PREMIUM, SUSCRIPCIONES Y LICENCIAS</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">
                            Proveemos cuentas premium, suscripciones y licencias de software para maximizar tus recursos digitales.
                        </p>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <img src="https://i.ibb.co/h1sjL3C/redes.png" className="" />
                    </Card.Body>
                    <Card.Footer>
                        <p className="text-slate-200 text-base group-hover:text-white md:text-md font-bold text-center">MARKETING PARA FACEBOOK, TIKTOK, INSTAGRAM Y SPOTIFY</p>
                        <p className="text-sm text-slate-400 group-hover:text-white md:text-xs text-center py-2">
                            Se venden LIKES, SEGUIDORES, VISTAS, COMENTARIOS, REACCIONES Y MÁS.
                        </p>
                    </Card.Footer>
                </Card>
             
                
            </div>
        </div>
    )
}
