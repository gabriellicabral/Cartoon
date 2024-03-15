import React, {useState} from "react"
import Dexter from "./ImagensProgramacao/dexter.png"
import Vaca from "./ImagensProgramacao/vaca.png"
import Du from "./ImagensProgramacao/du.png"
import Coragem from "./ImagensProgramacao/coragem.png"
import Jorel from "./ImagensProgramacao/jorel.png"
import Monica from "./ImagensProgramacao/monica.png"
import Steven from "./ImagensProgramacao/steven.png"
import Billy from "./ImagensProgramacao/billy.png"
import * as S from "./StyleProgramacao.jsx"

export default function Programação (){
    const [desenhos, setDesenhos] = useState([
        {nome:"O LABORATÓRIO DE DEXTER", hora:"7:00h", imagem:Dexter, desenhoManha: true},
        {nome:"A VACA E O FRANGO", hora:"8:00h", imagem:Vaca, desenhoManha: true},
        {nome:"DU, DUDU E EDU", hora:"9:00h", imagem:Du, desenhoManha: true},
        {nome:"CORAGEM, O CÃO COVARDE", hora:"10:00h", imagem:Coragem, desenhoManha: true},
        {nome:"IRMÃO DO JOREL", hora:"11:00h", imagem:Jorel, desenhoManha: true},
        {nome:"TURMA DA MÔNICA JOVEM", hora:"12:00h", imagem:Monica, desenhoManha: false},
        {nome:"STEVEN UNIVERSO", hora:"13:00h", imagem:Steven, desenhoManha: false},
        {nome:"BILLY E MANDY", hora:"14:00h", imagem:Billy, desenhoManha: false},

    ])


    const desenhoDaManha = desenhos.filter((item)=> item.desenhoManha === true)

    return(
        <section>
        <S.SectionMap>
        {desenhos.map((item)=>(
           <S.Card>
            <S.H3>{item.hora}</S.H3>
            <S.H2>{item.nome}</S.H2>
            <img src={item.imagem} alt={item.nome} />
           </S.Card>
        )) }
        </S.SectionMap>

        <S.SectionFilter>
        { desenhoDaManha.map((item)=>(
<S.CardManha>
    <h3>{item.nome}</h3>
    <h3>{item.hora}</h3>
    <img src={item.imagem} alt="" />
</S.CardManha>

        ))}
        </S.SectionFilter>
        </section>

        
    )
}