import React from 'react'

class Text {
    TITLE = 'Portifolio'
    MOUSETRAP_INFO = <>
                        <h4>Projeto MouseTrap</h4>
                        <p className='status-concluido'>Concluído</p>
                        <p>Esse projeto foi meu trabalho final da cadeira de Algoritmos e Programação (1º semestre). Foi meu primeiro 'grande' projeto e uma experiência bem desafiadora e divertida.</p><p>A ideia era recriar o jogo MouseTrap em C, aplicando tudo que havíamos aprendido durante o semestre sem se preocupar com questões de interface (até porque é em C, né?).</p>
                        <p><a target='_blank' rel="noreferrer" href='https://github.com/vickyad/MouseTrap'>Veja esse projeto</a></p>
                    </>
    CERES_INFO = <>
                    <h4>Projeto Ceres</h4>
                    <p className='status-concluido'>Concluído</p>
                    <p>Essa foi minha pequena experiência com desenvolvimento web e criação de um design. Não temos nada de desenvolvimento web na faculdade, então decidi experimentar um pouco por conta prórpia e esse foi o resultado.</p>
                    <p><a target='_blank' rel="noreferrer" href='https://github.com/vickyad/vickyad.github.io-ceres'>Veja esse projeto</a></p>
                </>
    DINO_INFO = <>
                    <h4>Projeto Dino</h4>
                    <p className='status-emandamento'>Em andamento</p>
                    <p>Esse projeto é o primeiro projeto em que eu me meti quando entrei no PET. A ideia é criar um aplicativo em parceria com o Hospital das Clínicas de Porto Alegre que estimule as crianças a seguirem seus tratamentos.</p>
                    <p>Ainda estou desenvolvendo os conhecimentos necessários para contribuir na parte de código, mas já consegui dar sugestões em termos de Design.</p>
                    <p><a target='_blank' rel="noreferrer" href='https://github.com/petcomputacaoufrgs/DinoApp'>Veja esse projeto</a></p>
                </>
    PUZZLE_INFO = <>
                    <h4>Projeto Jogo da Memória</h4>
                    <p className='status-emandamento'>Em andamento</p>
                    <p>Esse é um projeto que faz parte do treinamento de React dado pelos meus colegas do PET (João e Mayra, vocês são incríveis). A ideia é estudar como criar jogos em React começando por um jogo simples</p>
                </>
}

export default new Text()