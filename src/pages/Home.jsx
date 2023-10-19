
import BackToTopButton from '@/components/BackToTopButton'
import Me from '@/components/Me'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
  return (
    <div className=''>
        <div id='start' className='flex flex-col px-40 pt-12 pb-28 gap-4'>
            <h1 className='text-4xl font-extrabold'>Olá,</h1>
            <h1 className='text-4xl font-extrabold'>Eu sou o <span className='text-primary'>Rafael,</span></h1>
            <h1 className='text-4xl font-extrabold'>Desenvolvedor Front End</h1>
            <p className='text-xl text-muted-foreground'>Atualmente morando em Guarulhos, eu amo <span className='text-primary'>desenvolver</span> experiencias digitais incriveis!</p>
            <div className='flex gap-6 py-4'>
                <a  href="https://github.com/RafaelKunzler" target='_blank' rel="noreferrer"><BsGithub className='w-8 h-8 hover:text-primary'/></a>
                <a href="https://www.linkedin.com/in/rafael-rodrigues-do-patroc%C3%ADnio-nunes-3984921a2/" target='_blank' rel="noreferrer"><BsLinkedin className='w-8 h-8 hover:text-primary'/></a>
            </div>
        </div>
        
        <Me />



        <BackToTopButton />
    </div>
  )
}

export default Home