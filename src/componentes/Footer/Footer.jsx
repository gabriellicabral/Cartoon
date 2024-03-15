import React from "react"
import * as S from "./StyleFooter"
import Warner from "./ImagensFooter/warner.png"
import Git from "./ImagensFooter/git.png"
import Linkedin from "./ImagensFooter/linkedin.png"

export default function Footer (){
    return (
        <S.FooterStyle>
            <S.Section1>
            <S.Img1 src={Warner} alt="" />
            <S.Ul>
                <li>Sobre Nós</li>
                <li>Produtos</li>
                <li>Personagens</li>
            </S.Ul>
            <S.Div>
                <S.Img2 src={Git} alt="" />
                <S.Img2 src={Linkedin} alt="" />
            </S.Div>
            </S.Section1>
           <S.Section2>
           <h1>© 2024 Cartoon Network</h1> 
          </S.Section2>
         </S.FooterStyle>
    )
}