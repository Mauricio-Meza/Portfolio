

export default function NavBar() {
  return (
    <nav className="
      sticky w-full top-0 left-0 z-50
      bg-slate-800/80 backdrop-blur-md
      px-10 py-4
      flex justify-center gap-10
      text-white
      shadow-md
    ">
      {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="
            relative
            hover:text-cyan-500
            transition
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0 after:bg-cyan-400
            after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </nav>
  )
}







