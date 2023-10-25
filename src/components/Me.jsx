import { Card, CardContent } from '@/components/ui/card'

const Me = () => {
  return (
    <div id='me' className='w-full'>
            <Card className='p-8 shadow-2xl'>
                <CardContent className='flex flex-wrap lg:flex-nowrap gap-16 '>
                    <div className='w-1/2'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="" />

                    </div>
                    <div className='flex flex-col w-1/2 gap-6 justify-center'>
                        <h3 className='text-primary text-2xl font-semibold'>Quem Sou Eu</h3>
                        <h1 className='text-4xl font-semibold'>Rafael Rodrigues</h1>
                        <h3 className='text-2xl font-semibold'>Desenvolvedor Front End</h3>
                        <p className='text-muted-foreground'>
                            Meu nome é Rafael Rodrigues, atualmente estudo <span className='font-bold italic'>Análise e Desenvolvimento de Sistemas</span>, e estou em busca de uma recolocação profissional. <br/><br/>
                            Desde criança, sempre tive curiosidade pela area da tecnologia, e procuro transformar essa minha paixão em profissão. <br/><br/>
                            Faço projetos responsivos em <span className='font-bold italic'>React</span> com <span className='font-bold italic'>Tailwind</span>, mas estou sempre em busca de aprimorar minhas habilidades e de novos conhecimentos! <br/><br/>

                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
  )
}

export default Me