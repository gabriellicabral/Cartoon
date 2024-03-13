import React, {useState}  from "react"
import * as S from "./StyleMain"
import Programação from "../Programação/Programação.jsx" //importando o componente programação para a main
import Scooby from "./ImagensMain/scooby.png";
import TomeJerry from "./ImagensMain/tomejerry.png";
import Meninas from "./ImagensMain/meninas.png";
import Looney from "./ImagensMain/looney.png";
import Gumball from "./ImagensMain/gumball.png";
import Ben from "./ImagensMain/ben10.png";

export default function Main (){

  const [galeria1, setGaleria1] = useState([
    Scooby,
    Ben,
    Looney
])

const [galeria2, setGaleria2] = useState([
    Gumball,
    Meninas,
    TomeJerry
])

    return(
        <S.MainStyle>
          {/* MÉTODO MAP */}
            <S.Section1>
            {galeria1.map( (item)=>(
                <img src={item} alt=""/>
              ))}   
            </S.Section1>

            <S.Section2>
              {galeria2.map( (item)=>(
                <img src={item} alt=""/>
              ))}  
            </S.Section2>

            <Programação/>
        </S.MainStyle>
    )
}