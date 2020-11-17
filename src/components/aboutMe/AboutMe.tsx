import React from 'react'
import Text from '../../constants/text_aboutMe'

import './style.css'

import myself from '../../images/me.png'
import mygender from '../../icons/demigirl.svg'
import mysexuality from '../../icons/pansexual.svg'
import koko from '../../images/koko.png'
import frida from '../../images/frida.png'
import suculentas from '../../images/suculentas.png'
import curso from '../../images/curso.png'

import {ReactComponent as MailIcon} from '../../icons/email.svg'
import {ReactComponent as LinkedinIcon} from '../../icons/linkedin.svg'
import {ReactComponent as GithubIcon} from '../../icons/github.svg'
import {ReactComponent as InstagramIcon} from '../../icons/instagram.svg'
import {ReactComponent as PinterestIcon} from '../../icons/pinterest.svg'
import {ReactComponent as SteamIcon} from '../../icons/steam.svg'

const AboutMe: React.FC = () => {
    return (
        <>
            <h2 id="sobre-mim">{Text.TITLE}</h2>
            <div className="flex-box">
                <div className="sobre-mim-conteudo">
                    <img id="euzi" src={myself} width="250px" alt="Myself" />
                    <img src={mygender} height="100px" alt="My gender: Demigirl" />
                    <img src={mysexuality} height="100px" alt="My sexuality: Pansexual" />
                    <p>{Text.FOLLOW_ME}</p>
                    <ul>
                        <li className="social-media"><a target="_blank" rel="noreferrer" href="mailto://victoria.ad40@gmail.com"><MailIcon /></a></li>
                        <li className="social-media"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victoria-duarte-193322176/"><LinkedinIcon /></a></li>
                        <li className="social-media"><a target="_blank" rel="noreferrer" href="https://github.com/vickyad"><GithubIcon /></a></li>
                        <li className="social-media"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/vicky_ad_99/"><InstagramIcon /></a></li>
                        <li className="social-media"><a target="_blank" rel="noreferrer" href="https://br.pinterest.com/deavelarduarte/_saved/"><PinterestIcon /></a></li>
                        <li className="social-media"><a target="_blank" rel="noreferrer" href="https://steamcommunity.com/id/vickychanmae"><SteamIcon /></a></li>
                    </ul>
                </div>
                <article className="sobre-mim-conteudo">
                    <>{Text.PRESENTATION}</>
                    <img src={koko} width="200px" alt="my cute little dog" />
                    <img src={suculentas} width="200px" alt="my succulent" />
                    <img src={frida} width="200px" alt="my little cat niece" />
                    <p><a href={curso} target="_blank" rel="noreferrer">{Text.KEEP_TRACK_OF_MY_PROGRESS}</a></p>
                </article>
            </div >
        </>
    )
}

export default AboutMe