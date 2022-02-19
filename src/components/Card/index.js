import React from 'react'
import foto from '../../assets/img/foto.png'


export default function Card(){
    return(
        <div class= "card">
        <div class="image">
        <img src={foto}></img>
        </div>
        <div class="title">
          <h1>Nome Sobrenome</h1>
        </div>
        <div className="text1">
          <h2>Usuário: UserName</h2>
        </div>
        <div class="text2">
          <h2>Email: email@dominio.com</h2>
        </div>
        <div class="site">
          <h3><a href="">http://www.siteusuario.com</a></h3>
        </div>
      </div>
    )
}