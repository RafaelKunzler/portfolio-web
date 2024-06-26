
import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'
import Me from '@/components/Me'
import Navbar from '@/components/Navbar'
import ProjectLeft from '@/components/ProjectLeft'
import ProjectRight from '@/components/ProjectRight'
import { Separator } from '@/components/ui/separator'

import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='lg:px-40 px-8'>

      <Navbar />

      <div className='flex content-center justify-center w-full h-screen pb-12 gap-6 pt-12'>
        <div id='start' className='flex flex-col gap-4 text-center lg:text-left'>
            <h1 className='text-5xl font-bold font-serif'>Olá,</h1>
            <h1 className='text-5xl font-bold font-serif'>Eu sou o <span className='text-primary'>Rafael,</span></h1>
            <h1 className='text-4xl font-bold font-serif'>Desenvolvedor Front End</h1>
            <p className='text-xl text-muted-foreground'>Atualmente morando em São Paulo, eu amo <span className='text-primary'>desenvolver</span> experiencias digitais incriveis!</p>
            <div className='flex gap-6 py-4'>
                <a  href="https://github.com/RafaelKunzler" target='_blank' rel="noreferrer"><BsGithub className='w-8 h-8 hover:text-primary'/></a>
                <a href="https://www.linkedin.com/in/rafael-rodrigues-do-patroc%C3%ADnio-nunes-3984921a2/" target='_blank' rel="noreferrer"><BsLinkedin className='w-8 h-8 hover:text-primary'/></a>
                <a href="https://wa.me/5511965662378" target='_blank' rel='noreferrer'><BsWhatsapp className='w-8 h-8 hover:text-primary'/></a>
            </div>
        </div>
        <img src="/office.svg" alt="" className='w-1/2 h-3/4 hidden lg:block'/>
      </div>      
        
      <Me />

      <div id="projects" className='flex flex-col gap-20 pt-32'>

        <h1 className='text-3xl text-center pb-12 font-serif'>PROJETOS</h1>

        <ProjectRight
          image= "/projects/fit-flavors.png"
          name = "Fit Flavors"
          description = "Plataforma de compartilhamento de receitas utilizando Next.js, Tailwind CSS e MongoDB. O projeto inclui funcionalidades de busca e filtros para receitas veganas e vegetariana."
          github = "https://github.com/RafaelKunzler/Fit-Flavors"
          url = "https://fit-flavors.vercel.app"
          badge = {[
            "React",
            "NextJs",
            "Tailwind",
            "ShadCN",
            "MongoDB",
            "NextAuth",
            "Vercel",
            "Zod"
          ]}
        />

        <ProjectLeft
          image = "/projects/anime-vault.png"
          name = "Anime Vault"
          description = " Desenvolvimento de plataforma web com Next.js para explorar animes via API, destacando Infinite Scroll e Server Components para melhorar desempenho e experiência do usuário."
          github = "https://github.com/RafaelKunzler/anime_vault"
          url = "https://anime-vault-mu-seven.vercel.app"
          badge = {[
            "React",
            "Next.js",
            "Tailwind",
            "Typescript",
            "Infinite Scroll",
            "Server Components",
          ]}
        /> 

        <Separator className="px-40"/>

        <ProjectRight
          image= "/projects/fake-store.png"
          name = "Fake Store"
          description = "Estilo e Inovação, tudo em um clique! Aqui você encontra exatamente o que procura, quer seja uma jaqueta nova ou os mais recentes dispositivos eletrônicos."
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
          description = "Viaje com liberdade: escolha, dirija, explore! Transformando sonhos em estradas e aventuras em destinos."
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

        <Separator className="px-40"/>

        <ProjectRight
          image= "/projects/pokenext.png"
          name = "PokeNext"
          description = "Aquele projeto que todo desenvolvedor já fez, e que na teoria não agrega em nada no portifólio. Porem fiz esse projeto para estudar e entender os fundamentos do NextJS e deploy na Vercel."
          github = "https://github.com/RafaelKunzler/PokeNext"
          url = "https://pokenext-pearl-sigma.vercel.app/"
          badge = {[
            "React",
            "Next.js",
            "Vercel",            
            "API's"
          ]}
        />

        <Separator className="px-40"/>

        <ProjectLeft
          image = "/projects/weatherApp.png"
          name = "WeatherApp"
          description = "Projeto para o curso The Odin Project, consumindo uma API com base no input do usuário e a atualizando em tempo real"
          github = "https://github.com/RafaelKunzler/weather-app"
          url = "https://weather-app-kappa-opal-92.vercel.app/"
          badge = {[
            "React",
            "Vite",
            "Tailwind",
            "ShadCN",
            "API",

          ]}
        /> 

        <Separator className="px-40"/>

        <ProjectRight
          image = "/projects/rock-paper-scissors.png"
          name = "Rock Paper Scissors"
          description = "Meu primeiro projeto, um jogo de pedra papel e tesoura, feito inteiramente com Javascript Vanilla"
          github = "https://github.com/RafaelKunzler/TheOdinProject/tree/main/3.Rock%20Paper%20Scissors"
          url = "https://celebrated-ganache-7495ed.netlify.app"
          badge = {[
            "Javascript",
            "CSS"
          ]}
        />

        </div>

        
        <Footer />
        

        <BackToTopButton />
    </div>
  )
}

export default Home