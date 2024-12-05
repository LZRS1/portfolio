import './../App.css'
import Button from './Button'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function Hero() {
    return(
        <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-5/6 h-4/5 flex flex-wrap items-center py-6">
                <motion.div initial={{y:"100%", opacity:0}} animate={{y:"0%", opacity:1}} transition={{duration:1, ease:"easeInOut"}} className="w-full md:w-4/6 pb-10 md:pb-0">
                    <h1 className="font-semibold text-xl text-red-600">L4ZARUS CORP</h1>
                    <h2 className="text-sm text-gray-400">Front End Developer | Graphic Designer</h2>
                    <motion.p initial={{y: "100%"}} animate={{y: "0"}} transition={{delay:0.5, duration:1}} className="text-4xl font-extralight py-4 text-gray-300">
                    Me <span className="text-red-600 font-semibold">encanta </span> crear proyectos <span className="text-red-500 font-semibold">significativos.</span> 
                    </motion.p>
                    <p className="text-base font-normal pb-4 text-gray-400 xl:w-4/6">
                    De cara al futuro, me gustaría hablar contigo sobre cómo puedo aplicar mis diversas habilidades creativas a tu próximo proyecto.
                    </p>
                    <NavLink to="/Contact">
                        <Button className="bg-red-600 text-white hover:bg-red-500 transition duration-300 py-3 px-6 rounded-lg">
                            Contactar
                        </Button>
                    </NavLink>    
                </motion.div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, ease:"easeInOut"}} className="w-full md:w-2/6 pb-10 md:pb-0">
                    <img className="w-full h-auto" src="https://i.ibb.co/wszCx2v/logo.png" alt="Logo" />
                </motion.div>
                <Footer />
            </div>
        </div>
    )
}
