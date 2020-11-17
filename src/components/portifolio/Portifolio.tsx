import React from 'react'
import Text from '../../constants/text_portifolio'

import './style.css'

import mousetrapProject from '../../icons/mouse.png'
import ceresProject from '../../icons/rocket.png'
import dinoProject from '../../icons/dino.png'

const Portifolio: React.FC = () => {
    return (
        <>
            <h2 id="portifolio">{Text.TITLE}</h2>
            <div className="flex-box">
                <div>
                    <div className="my-projects" /*onclick='insereTexto("mousetrap")'*/>
                        <img src={mousetrapProject} width="250px" alt="" />
                    </div>
                </div>

                <div>
                    <div className="my-projects" /*onclick='insereTexto("ceres")'*/>
                        <img src={ceresProject} width="250px" alt="" />
                    </div>
                </div>

                <div>
                    <div className="my-projects" /*onclick='insereTexto("dino")'*/>
                        <img src={dinoProject} width="250px" alt="" />
                    </div>
                </div>

                <div>
                    <div className="my-projects" /*onclick='insereTexto("jogo_memoria")'*/>
                        <img src={dinoProject} width="250px" alt="" />
                    </div>
                </div>
            </div>
            <div id="input-descricao"></div>
        </>
    )
}

export default Portifolio

/*
function insereTexto(id){
    var texto;

    switch(id){
        case 'mousetrap':
            texto = "<h4>Projeto MouseTrap</h4><p className='status-concluido'>Concluído</p><p>Esse projeto foi meu trabalho final da cadeira de Algoritmos e Programação (1º semestre). Foi meu primeiro 'grande' projeto e uma experiência bem desafiadora e divertida.</p><p>A ideia era recriar o jogo MouseTrap em C, aplicando tudo que havíamos aprendido durante o semestre sem se preocupar com questões de interface (até porque é em C, né?).</p><p><a target='_blank' href='https://github.com/vickyad/MouseTrap'>Veja esse projeto</a></p>"
            break;
        case 'ceres':
            texto = "<h4>Projeto Ceres</h4><p className='status-concluido'>Concluído</p><p>Essa foi minha pequena experiência com desenvolvimento web e criação de um design. Não temos nada de desenvolvimento web na faculdade, então decidi experimentar um pouco por conta prórpia e esse foi o resultado.</p><p><a target='_blank' href='https://github.com/vickyad/vickyad.github.io-ceres'>Veja esse projeto</a></p>"
            break;
        case 'dino':
            texto = "<h4>Projeto Dino</h4><p className='status-emandamento'>Em andamento</p><p>Esse projeto é o primeiro projeto em que eu me meti quando entrei no PET. A ideia é criar um aplicativo em parceria com o Hospital das Clínicas de Porto Alegre que estimule as crianças a seguirem seus tratamentos.</p><p>Ainda estou desenvolvendo os conhecimentos necessários para contribuir na parte de código, mas já consegui dar sugestões em termos de Design.</p><p><a target='_blank' href='https://github.com/petcomputacaoufrgs/DinoApp'>Veja esse projeto</a></p>"
            break;
        default:
            break;
    }

    document.getElementById('input-descricao').innerHTML = texto;
}
*/