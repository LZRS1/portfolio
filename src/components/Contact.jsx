import { motion } from 'framer-motion'
import './../App.css'
import Button from './Button'
import Footer from './Footer'
import Input from './Input.jsx'
import emailjs from 'emailjs-com'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(null)  // Para manejar errores

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)

        // Aquí, reemplaza con tus credenciales de EmailJS
        emailjs.sendForm('service_mlj01pa', 'template_jj4fuow', e.target, 'bUKDZYhdQc21oPIrB')
            .then((result) => {
                console.log('Resultado: ', result.text)
                setSent(true)
                setSending(false)
                setFormData({ name: '', email: '', message: '' })
            }, (error) => {
                console.error('Error: ', error.text)  // Imprime el error en consola
                setError('Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.') // Mensaje de error
                setSending(false)
            })
    }

    return (
        <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-5/6 h-4/5 flex flex-wrap items-center">
                <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} className="w-full md:w-4/6 text-white">
                    <p className="py-6 pr-10 text-3xl font-bold text-red-600">Hablemos de tu <span className="text-gray-400">proyecto.</span> Envíame un mensaje y me pondré en contacto dentro de un día hábil.</p>
                    <h1 className="font-semibold text-xl">L4ZARUS CORP</h1>
                    <h2 className="text-sm">Programador</h2>
                    <p className="text-base pt-4 text-gray-400">E.R.M</p>
                    <p className="text-base text-gray-400">l4zarus@l4zarus.com</p>
                </motion.div>

                <div className="w-full md:w-2/6 mt-4 py-4">
                    <p className="py-4 text-lg font-semibold text-white">CONTACTAME</p>
                    <form onSubmit={handleSubmit}>
                        <div className="pb-4">
                            <Input.Label htmlFor="name" className="text-white">Nombre</Input.Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-black border border-gray-600 text-white focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <div className="pb-4">
                            <Input.Label htmlFor="email" className="text-white">Correo electrónico</Input.Label>
                            <Input
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-black border border-gray-600 text-white focus:ring-2 focus:ring-red-600"
                            />
                        </div>
                        <div className="pb-4">
                            <Input.Label htmlFor="message" className="text-white">Mensaje</Input.Label>
                            <Input.TextArea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-black border border-gray-600 text-white focus:ring-2 focus:ring-red-600"
                            ></Input.TextArea>
                        </div>
                        <Button
                            type="submit"
                            className={`bg-red-600 text-white hover:bg-red-700 rounded-full py-3 px-6 ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={sending}
                        >
                            {sending ? 'Enviando...' : 'ENVIAR'}
                        </Button>
                    </form>
                    {sent && <p className="text-green-500 mt-4">¡Mensaje enviado con éxito!</p>}
                    {error && <p className="text-red-500 mt-4">{error}</p>}  {/* Muestra mensaje de error */}
                </div>
                <Footer className="text-white" />
            </div>
        </div>
    )
}
