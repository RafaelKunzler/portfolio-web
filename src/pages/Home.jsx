
import BackToTopButton from '@/components/BackToTopButton'
import Me from '@/components/Me'
import ProjectLeft from '@/components/ProjectLeft'
import ProjectRight from '@/components/ProjectRight'
import { Separator } from '@/components/ui/separator'

import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Home = () => {
  return (
    <div className=''>
        <div id='start' className='flex flex-col px-40 pt-20 pb-36 gap-4'>
            <h1 className='text-4xl font-extrabold'>Olá,</h1>
            <h1 className='text-4xl font-extrabold'>Eu sou o <span className='text-primary'>Rafael,</span></h1>
            <h1 className='text-4xl font-extrabold'>Desenvolvedor Front End</h1>
            <p className='text-xl text-muted-foreground'>Atualmente morando em Guarulhos, eu amo <span className='text-primary'>desenvolver</span> experiencias digitais incriveis!</p>
            <div className='flex gap-6 py-4'>
                <a  href="https://github.com/RafaelKunzler" target='_blank' rel="noreferrer"><BsGithub className='w-8 h-8 hover:text-primary'/></a>
                <a href="https://www.linkedin.com/in/rafael-rodrigues-do-patroc%C3%ADnio-nunes-3984921a2/" target='_blank' rel="noreferrer"><BsLinkedin className='w-8 h-8 hover:text-primary'/></a>
                <a href="https://wa.me/11916473434" target='_blank' rel='noreferrer'><BsWhatsapp className='w-8 h-8 hover:text-primary'/></a>

            </div>
        </div>
        
        <Me />

        <div id="projects" className='px-40'>

        <ProjectRight
            image= "/projects/fake-store.png"
            name = "Fake Store"
            description = "Site de uma loja, com produtos ficticios retirados a partir da Fake Store API, e com um sistema de cadastro e login feito com o firebase.
            Feito com React e Tailwind "
            github = "https://github.com/RafaelKunzler/fake-store"
            url = "https://genuine-rabanadas-6f1982.netlify.app/"
            badge = {[
              "React",
              "Vite",
              "Tailwind",
              "ShadCN",
              "Router-Dom",
              "Firebase",
              "API's"
            ]}
          />

          <Separator className="px-40"/>

          <ProjectLeft
            image = "/projects/car-rental.png"
            name = "Car Rental"
            description = "Projeto Front-End de locação de carros, com um design moderno e responsivo. Feito com React e Tailwind."
            github = "https://github.com/RafaelKunzler/car-rental-web"
            url = "https://vermillion-valkyrie-84e68e.netlify.app/"
            badge = {[
              "React",
              "Vite",
              "Tailwind",
              "ShadCN",
              "Router-Dom",

            ]}
          /> 




        </div>



        <BackToTopButton />
    </div>
  )
}

export default Home