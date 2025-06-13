import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <div className='bg-black'>
      <Head>
        <title>Mujahid Ali | Front-End Developer</title>
        <meta name="description" content="Versatile Front-End Developer with 4+ years of experience." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
