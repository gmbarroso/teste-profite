import React from 'react'
import Button from '../../component/Button/index'

import IconMail from '../../img/mail.png'
import IconHeadphone from '../../img/headphone.svg'
import image from '../../img/google.png';

import '../../index.css'
import './style.css'

const renderLocation = () => (
  <div className="location">
    <div align="left" className="sp">
      <p>São Paulo</p>
      <p>Rua do Ócio, 423/1801</p>
      <p>Vila Olímpia - SP</p>
      <p>04552-000</p>
      <p>+55 11 3333 3333</p>
    </div>
    <div align="left" className="rj">
      <p>Rio de Janeiro</p>
      <p>Vol. da Pátria, 301/702</p>
      <p>Botafogo - RJ</p>
      <p>22270-000</p>
      <p>+55 21 3333 3333</p>
    </div>
</div>
)

const Footer = () => (
  <div className="footer">
    <div className="localDiv">
      <p align="left" className="localTitle">Localização</p>
      <div className="line3"/>
      {renderLocation()}
    </div>
    <div className="buttons">
      <div>
        <Button
          // icon={<IconMail width={12} height={12}/>}
        >
          Entre em contato
        </Button>
      </div>
      <div>
        <Button
          // icon={<IconHeadphone width={12} height={12}/>}
        >
          Entre em contato com nosso consultor online
        </Button>
      </div>
    </div>
    <div className="creation">
      <div>
        <p>Created by:</p>
        <img src={image} className="image" alt="logo" />
      </div>
      <div>
        <p>Powered by:</p>
        <img src={image} className="image" alt="logo" />
      </div>
    </div>
  </div>

  // basear em brackpoint
)

export default Footer