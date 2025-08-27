"use client"

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Button } from '../ui/button';

const MobileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggler = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <div className="lg:hidden">
          <Button onClick={toggler} variant="outline" >
            {
                isMenuOpen ? <AiOutlineClose size={24}/> :<AiOutlineMenu size={24}/>
            }
          </Button>
        </div>
  )
}

export default MobileMenu