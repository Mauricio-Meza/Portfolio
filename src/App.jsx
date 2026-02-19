import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import translations from './i18n/translations'
import NavBar from './components/NavBar'

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  
  
  const [languaje, setLanguaje] = useState(
    localStorage.getItem('leng') || 'es'
  )
  useEffect(() => {
    localStorage.setItem('leng', languaje)
  }, [languaje])
  const t = translations[languaje] || translations.es

   



  return (
    <>
      <div className="bg-slate-200 dark:bg-slate-900 h-screen  flex flex-col  ">

        <NavBar
          languaje={languaje}
          setLanguaje={setLanguaje}
          t={t}
          
        />

        <main className=" flex-1  overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/skills" element={<Skills t={t} />} />
            <Route path="/projects" element={<Projects t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />


          </Routes>

        </main>


      </div>

    </>
  )
}
