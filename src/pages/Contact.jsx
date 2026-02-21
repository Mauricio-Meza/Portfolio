import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'


export default function Contact({ t }) {
    const form = useRef()
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )

            .then(() => {
                setSent(true)
                setLoading(false)
                form.current.reset()
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
                alert('Error al enviar el mensaje ❌')
            })
    }

    return (

        <section className="h-full flex justify-center items-center py-6">

            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" w-full max-w-xl mx-auto bg-white dark:bg-gray-700 text-gray-900  dark:text-white border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8"

            >
                <h2 className="text-3xl font-bold  mb-2 text-center text-black ">
                    {t.contact.title}
                </h2>


                <div className="flex gap-10 justify-center flex-wrap">

                    <form
                        ref={form}
                        className="mt-8 max-w-xl mx-auto flex flex-col gap-4"
                        onSubmit={sendEmail}

                    >
                        <input
                            type="text"
                            name="name"
                            placeholder={t.contact.name}
                            required
                            className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none py-2"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t.contact.email}
                            required
                            className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none py-2"

                        />
                        <textarea
                            placeholder={t.contact.message}
                            name="message"
                            rows="4"
                            required
                            className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 outline-none py-2 resize-none"

                        />

                        <button className="mt-6 self-start px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition">
                            {t.contact.submit}
                        </button>

                        {sent && (
                            <p className="text-green-600 text-sm mt-4">
                                ¡Mensaje enviado con éxito!
                            </p>
                        )}

                        


                    </form>
                </div >
            </motion.div>

        </section>


    )
}


