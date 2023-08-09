import { useContext } from "react"
import { mySkills } from "./mySkills"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import * as S from './SkillsStyle'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'

export function Skills() {

    const { theme } = useContext(ThemeContext)

    return (
        <S.ContainerSkills id="skills">  

            <S.ContainerTitleSkills backgroundcolor={theme.containerPrimaryColor}>
                <S.TitleText textColor={theme.textColor}>Minhas
                    <S.SpecialTitleText textColor={theme.specialTextColor}> Habilidades</S.SpecialTitleText>
                </S.TitleText>
            </S.ContainerTitleSkills>

            <S.ContainerMySkills backgroundcolor={theme.containerPrimaryColor}>

                <Swiper
                modules={[Navigation]}
                navigation
                scrollbar={{ draggable: true }}
                slidesPerView={5}
                spaceBetween={2}
                >
                    {mySkills.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <S.Card>
                        <S.SkillImage src={skill.pathImage} />
                        <S.SkillName textColor={theme.textColor}>{skill.name}</S.SkillName>
                        </S.Card>
                    </SwiperSlide>
                ))}
                </Swiper>

                </S.ContainerMySkills>

        </S.ContainerSkills>
    )
}