import Card from "./Card";
import './../App.css';
import Footer from "./Footer";

export default function Portfolio() {
    return (
        <div className="w-full h-full flex flex-wrap justify-center items-center mx-auto py-20 bg-black">
            <div className="w-5/6 flex flex-wrap justify-center gap-6 xl:gap-10">
                <p className="w-full text-center text-2xl text-white font-semibold">Mis Mejores Proyectos</p>
                <Card>
                    <a href="https://l4zarusid.com/" target="_blank" rel="noopener noreferrer">
                        <Card.Body>
                            <img src="https://i.ibb.co/HFz87Bd/v2.png" className="" />
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-slate-200 text-base group-hover:text-white md:text-xs font-medium">E-COMMERCE V2</p>
                            <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">https://l4zarusid.com/</p>
                        </Card.Footer>
                    </a>
                </Card>

                <Card>
                    <a href="https://l4zarus.online/" target="_blank" rel="noopener noreferrer">
                        <Card.Body>
                            <img src="https://i.ibb.co/zJBGkwX/donacion-icon.png" className="" />
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-slate-200 text-base group-hover:text-white md:text-xs font-medium">PAGINA DE DONACION</p>
                            <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">https://l4zarus.online/</p>
                        </Card.Footer>
                    </a>
                </Card>

                <Card>
                    <a href="https://l4zarus.com/" target="_blank" rel="noopener noreferrer">
                        <Card.Body>
                            <img src="https://i.ibb.co/bXRP717/portfolio.png" className="" />
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-slate-200 text-base group-hover:text-white md:text-xs font-medium">Portfolio</p>
                            <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">https://l4zarus.com/</p>
                        </Card.Footer>
                    </a>
                </Card>

                <Card>
                    <a href="https://l4zarus.store/" target="_blank" rel="noopener noreferrer">
                        <Card.Body>
                            <img src="https://i.ibb.co/hLXxhKv/ecommerce-icon.png" className="" />
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-slate-200 text-base group-hover:text-white md:text-xs font-medium">ECOMMERCE</p>
                            <p className="text-sm text-slate-400 group-hover:text-white md:text-xs">https://l4zarus.store/</p>
                        </Card.Footer>
                    </a>
                </Card>


                <Footer />
            </div>
        </div>
    );
}
