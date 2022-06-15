import React from 'react'
import Perfil from '../assets/MinhaFoto.jpeg'
import styled from 'styled-components'

const Container = styled.div`
  background: #1d1d1d;
  color: #fff;
`

// container de apresentação
const ContainerInicial = styled.div`
  display: flex;
  padding: 35px 25px;
  width: 80%;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  & h2 {
    margin: 0;
    padding: 0
  }

  & h1 {
    margin: 0;
    padding: 0
  }
`

// Container para contar um pouco sobre mim.
const ContainerSobre = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 25px;
  width: 60%;
  align-items: center;
  margin: 0 auto;
  `

const Img = styled.img`
  width: 490px;
  border-radius: 50%;
`

function Main() {
  return (
    <Container>
      <ContainerInicial>
        <div>
          <h2>Olá, eu sou</h2>
          <h1>Jadeilson Martinho.</h1>
          <h2>Futuro full stack developer </h2>
        </div>
        <Img src={ Perfil } alt="Foto de jadeilson com uma blusa azul" />
      </ContainerInicial>
      <ContainerSobre id='sobre'>
        <h1>Um pouco sobre mim</h1>

        <p>Sou apaixonado por tecnologia e inovação, por meio dessa paixão decidi mim tornar uma pessoa estudante de Dsenvolvimento Web na TRYBE, "A Trybe é uma escola do futuro para qualquer pessoa que deseja construir uma carreira de sucesso em tecnologia", Alem de cursar a TRYBE tambem faço parte da rede federal de ensino por meio do "IFPE" no curso de Informatica para internet.
        </p>
        <p>Sou um jovem cristão bastante sonhador com muita força de vontade, bastante energia, louco para aprender cada vez mais e com muita determinação.</p>
      </ContainerSobre>
    </Container>
  )
}

export default Main
