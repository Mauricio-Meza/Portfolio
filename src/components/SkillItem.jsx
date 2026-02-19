

export default function Skill({ icon, name }) {

    return (
        <div className="flex flex-col items-center justify-center gap-2 group cursor-default">

            <div className="text-4xl
        transition-all duration-300
        group-hover:scale-110
        group-hover:-rotate-6
        group-hover:drop-shadow-lg
        ">
                {icon}
            </div>

            <span className=" text-sm text-gray-400
        opacity-80
        group-hover:opacity-100
        transition">
                {name}
            </span>
        </div>
    )
}