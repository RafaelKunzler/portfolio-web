import { useState } from 'react';

import { Menu, X } from 'lucide-react';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(isOpen === true ? false : true)
        
    }

  return (

    
   <div className='py-10 w-full px-8 w-full font-bold lg:flex items-center justify-around lg:px-0'>
        <div className='flex items-center justify-between'>            
            <div className='flex content-center items-center gap-3 font-semibold text-3xl'> 
                    <span className=''>RAFAEL</span>
                    <h3 className='text-primary'>RODRIGUES</h3>
            </div>       
             
            {isOpen ? <X className='lg:invisible' onClick={handleToggleMenu}/> : <Menu className='lg:invisible' onClick={handleToggleMenu}/>}
            
        </div>

        <div className='hidden lg:block items-center py-6 lg:py-0 lg:flex-row text-lg'>

            <ul className='flex gap-8 object-left lg:flex-row flex-col lg:items-center'>
                <li className='hover:text-primary hover:cursor-pointer '><a href="#start">Inicio</a></li>
                <li className='hover:text-primary hover:cursor-pointer'><a href="#me">Quem sou</a></li>
                <li className='hover:text-primary hover:cursor-pointer'><a href="#projects">Projetos</a></li>
                <li className='hover:text-primary hover:cursor-pointer'>Habilidades</li>                
                
            </ul>
        </div>

        {isOpen ? 
            <div className='xl:hidden flex items-center py-6 lg:py-0 lg:flex-row'>
                <ul className='flex gap-8 object-left lg:flex-row flex-col lg:items-center'>
                    <li onClick={handleToggleMenu} className='hover:text-primary hover:cursor-pointer'>Inicio</li>
                    <li onClick={handleToggleMenu} className='hover:text-primary hover:cursor-pointer'>Quem sou</li>
                    <li onClick={handleToggleMenu} className='hover:text-primary hover:cursor-pointer'>Projetos</li>
                    <li onClick={handleToggleMenu} className='hover:text-primary hover:cursor-pointer'>Habilidades</li>
                </ul>
            </div> :
        ''
        }        

               

    </div>
  )
}

export default Navbar