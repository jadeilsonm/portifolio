import React from 'react'
import styled from 'styled-components'



const HeaderS = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #000000;
  color: #919191;
  height: 100px
  `

const Links = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-between;
`
const BtLink = styled.a`
  color: #878787;
  text-decoration: none;

  &:hover {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  } 

`

const TextLink = styled.p`
  margin-left: 19px;
  font-size: 1.05em;
  font-weight: 600;
`

function Header() {
  return (
    <HeaderS>
      <h3 style={{ color: '#F8F8FF' }}>Jadeilson Martinho da Silva</h3>
      <Links>
        <BtLink href={ `#sobre` }>
          <TextLink>Quem sou eu?</TextLink>
        </BtLink>
        <BtLink href={`#contatos`  }>
          <TextLink>Contatos</TextLink>
        </BtLink>
        <BtLink href={`#projetos`  }>
          <TextLink>Projetos</TextLink>
        </BtLink>
        <BtLink href={`#skill`  }>
          <TextLink>Habilidades</TextLink>
        </BtLink>
      </Links>
    </HeaderS>
  )
}



export default Header
