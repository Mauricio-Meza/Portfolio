import Card from '../components/Card.jsx'

const Home = () => {
  return (
    <div className='flex gap-10 justify-center flex-wrap'>
      <Card title='Quién soy?' description='Soy un desarrollador full stack en formación, me apasiona  la tecnología y el desarrollo de software.' />
      <Card title='Qué hago?' description='Actualmente estoy aprendiendo tecnologías como React, Node.js, JavaScript, HTML, CSS Y PostgreSQL.' />
      <Card title='Objetivos' description='Mi objetivo es convertirme en un desarrollador full stack competente y poder contribuir en proyectos innovadores, ademas de querer mi primer experiencia en el area IT.' />
    </div>

  )
}

export default Home
