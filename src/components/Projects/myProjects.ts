import printDesktopPokedex from '../../images/print pokedex desktop.png'
import printMobilePokedex from '../../images/print pokedex mobile.png'
import printDesktopGithub from '../../images/print github api desktop.png'
import printMobileGithub from '../../images/print github api mobile.png'


export const myProjects = [
    {
        title: 'Pokedex React.js',
        imageDesktopPath: printDesktopPokedex,
        imageMobilePath: printMobilePokedex,
        description: 'Pokedex React.js é uma aplicação que consome uma api e retorna dados de pokemon, desde o nome até os movimentos.',
        github: 'https://github.com/Eduardo071/pokedex-react',
        deploy: 'https://pokedex-react-fawn-one.vercel.app'
    },
    {
        title: 'Github API',
        imageDesktopPath: printDesktopGithub,
        imageMobilePath: printMobileGithub,
        description: 'Aplicação que consome uma api e retorna dados de usuários do github.',
        github: 'https://github.com/Eduardo071/github-api',
        deploy: 'https://github-api-fawn-one.vercel.app'
    }
]