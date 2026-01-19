import Card from '../components/Card.jsx'

const About = () => {
    return (
        <div className="flex gap-10 justify-center flex-wrap">
            <Card
                title="Sobre mí"
                description="Me llamo Mauricio tengo 27 años, soy Buenos Aires,Argentina. Soy un desarrollador full stack en formación, me apasiona la tecnología y el desarrollo de software."
            />
            <Card
                title="Educación"
                description="Actualmente finalicé la tecnicatura superior en programación en el instituto técnico Teclab. Pude adquirir conocimientos en diversas tecnologías y lenguajes de programación."
            />
        </div>
    )
}

export default About
