


import { motion } from "framer-motion";

export default function About({ t }) {

    return (
        <section
            id="about"
            className="flex justify-center items-center px-6 py-20"
        >
            <div className="max-w-5xl grid md:grid-cols-2 gap-12">

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6">
                        {t.about.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t.about.p1}
                    </p>


                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        {t.about.p2}
                    </p>
                </motion.div>

                {/* Detalles / interacción */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 text-gray-600 dark:text-gray-300 justify-center items-center"

                >
                    {t.about.highlights.map((item, i) => (
                        <div key={i} className="group cursor-default">
                            <p className="text-lg group-hover:translate-x-2 transition-transform">
                                {item}
                            </p>
                            <div className="h-[2px] w-0 group-hover:w-full bg-indigo-500 transition-all duration-300" />
                        </div>
                    ))}

                   

                </motion.div>
            </div>
        </section>
    );
}

