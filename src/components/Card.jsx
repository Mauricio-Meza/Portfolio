import { motion } from 'framer-motion';

export default function Card({ title, description, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow-lg"
        >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            {children}
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
}
