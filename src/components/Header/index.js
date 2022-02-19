import React from 'react'
import Menu from '../Menu'
import Logo from '../../assets/img/Logo.png'
import { HeaderContainer,Container,HorizontalRule, TitleH2 } from './styles'
export default function header(){
    return(
        
            <HeaderContainer>
                <Container>

            <div>
                <img src={Logo}></img>
            </div>
            
            <Menu />
            </Container>
            <HorizontalRule />
            <Container>
                <TitleH2><i>
                    Lista de usuários
                    </i>
                </TitleH2>
            </Container>
            </HeaderContainer>

    )
}