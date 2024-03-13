import React from "react";
import * as S from "./StyleHeader";
import Jogos from "./ImagensHeader/jogos.png"
import Logo from "./ImagensHeader/logo.png"
import Relogio from "./ImagensHeader/relógio.png"

export default function Header (){
    return(
        <S.HeaderStyle>
            <S.Img src={Logo} alt="Logo do Cartoon Network" />
            <S.Section>
            <S.Div>
              <img src={Jogos} alt="" />
              <S.H2>JOGOS</S.H2>
            </S.Div>
            <S.Div>
              <img src={Relogio} alt="" />
              <S.H2>PROGRAMAÇÃO</S.H2>
            </S.Div>
          </S.Section>  
        </S.HeaderStyle>
    )
}