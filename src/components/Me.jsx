import { Card, CardContent } from '@/components/ui/card'

const Me = () => {
  return (
    <div id='me' className='w-full'>
            <Card className='lg:p-8 shadow-2xl'>
                <CardContent className='flex flex-wrap lg:flex-nowrap gap-16 '>
                    <div className='w-full lg:w-1/2 '>
                        <img src="/me.png" alt="photo of me" className='h-auto lg:h-screen w-full' />

                    </div>
                    <div className='flex flex-col lg:w-1/2 gap-6 justify-center text-center lg:text-left'>
                        <h3 className='text-primary text-2xl font-semibold font-serif'>Quem Sou Eu</h3>
                        <h1 className='text-4xl font-semibold font-serif'>Rafael Rodrigues</h1>
                        <h3 className='text-2xl font-semibold font-serif'>Desenvolvedor Front End</h3>
                        <p className='text-muted-foreground'>
                            Meu nome é Rafael, sou gestor de equipes comerciais e estudo <span className='font-bold italic'>Análise e Desenvolvimento de Sistemas</span>. Estou em busca de recolocação profissional. <br/><br/>
                            Desde criança, tenho curiosidade pela área da tecnologia, e hoje o foco é transformar essa minha paixão em profissão. <br/><br/>
                            Especializado em projetos responsivos com <span className='font-bold'>React</span> e <span className='font-bold'>Tailwind</span>, busco aprimorar minhas habilidades e adquirir novos conhecimentos. <br/><br/>

                        </p>
                    </div>

                    
                </CardContent>
            </Card>
        </div>
  )
}

export default Me