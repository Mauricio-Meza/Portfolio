import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';



export default function Content() {
    return (
        <main className='w-full flex flex-col items-center justify-center min-h-screen p-10'>
            <section id='Home'>
                <h2>Home</h2>
                <Home />
            </section>

            <section id='About'>
                <h2>About</h2>
                <About />
            </section>

            <section id='Skills'>
                <h2>Skills</h2>
                <Skills />
            </section>

            <section id='Projects'>
                <h2>Projects</h2>

            </section>

            <section id='Contact'>
                <h2>Contact</h2>

            </section>
        </main>
    )
}
