import { motion } from 'framer-motion';

export default function Card({ title, description, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-700 p-10 rounded-2xl shadow-lg
                 w-full sm:w-96 flex flex-col items-center text-center"
        >
            <h3 className="text-2xl font-bold mb-6">
                {title}
            </h3>

            {children}

            {description && (
                <p className="text-gray-300 mt-6 text-base">
                    {description}
                </p>
            )}
        </motion.div>
    );
}

