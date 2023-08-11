import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import * as S from './ProjectsStyle'
import { myProjects } from "./myProjects"
import desktopFrame from '../../assets/monitor frame.png'
import mobileFrame from '../../assets/mobile frame.png'

export function Projects() {

    const { theme } = useContext(ThemeContext)
    return (
        <S.ContainerProjects id="projects">
            <S.ContainerTitleProjects backgroundcolor={theme.containerPrimaryColor}>
                <S.TitleText textcolor={theme.textColor}>Meus
                    <S.SpecialTitleText textcolor={theme.specialTextColor}> Projetos</S.SpecialTitleText>
                </S.TitleText>
            </S.ContainerTitleProjects>

            <S.ContainerAllProjects>
                {myProjects.map((project, index) => (
                    <S.CardProject key={index} backgroundcolor={theme.containerPrimaryColor}>

                        <S.ProjectTitle textcolor={theme.textColor}>{project.title}</S.ProjectTitle>
                        <S.ContainerPreview>
                            <S.DesktopPreview>
                                <S.ImageDesktopFrame src={desktopFrame} alt="Desktop preview" />


                                <S.ImageDesktopPreview src={project.imageDesktopPath} alt="Print Preview" />

                            </S.DesktopPreview>

                            <S.MobilePreview>
                                <S.ImageMobileFrame src={mobileFrame} alt="Mobile preview" />


                                <S.ImageMobilePreview src={project.imageMobilePath} alt="Print Preview" />

                            </S.MobilePreview>
                        </S.ContainerPreview>

                        <S.DescriptionText textcolor={theme.textColor}>{project.description}</S.DescriptionText>

                        <S.RepoLink textcolor={theme.specialTextColor} target="_blank" href={project.github}>Link para o repositório</S.RepoLink>
                        <S.DeployLink textcolor={theme.specialTextColor} target="_blank" href={project.deploy}>Link para o deploy</S.DeployLink>

                    </S.CardProject>
                ))}
            </S.ContainerAllProjects>

            <S.LineDivisor fontcolor={theme.textColor} />
        </S.ContainerProjects>
    )
}