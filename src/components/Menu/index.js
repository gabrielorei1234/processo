import React from 'react'
import { ContainerMenu } from './styles'
import { BiSearch } from "react-icons/bi";



export default function Menu(){
    return(
        <ContainerMenu>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Usuários</a></li>
                    <li><a>Produtos</a></li>
                    <BiSearch size="1.5em"  color='white'/>
                </ul>
            </ContainerMenu>
    )
}