

export default function Footer() {
    return(
        <footer className="w-full text-center py-4 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-400 dark:border-gray-700 ">
            © {new Date().getFullYear()} Mauricio. Todos los derechos reservados.
        </footer>
    )
}