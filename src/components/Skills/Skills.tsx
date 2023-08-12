import { useContext, useEffect } from "react"
import { mySkills } from "./mySkills"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import * as S from './SkillsStyle'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import './swiper.css'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
    
    useEffect(() => {
        gsap.fromTo("#skillsLabel, #containerSkills",
        {
            y: 200
        },
        {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#skillsLabel",
                start: "top bottom",
                scrub: true,
                toggleActions: "play none none reverse",
            }
        }
    )
    
    }, [])

    const { theme } = useContext(ThemeContext)

    return (
        <S.ContainerSkills id="skills">  

            <S.ContainerTitleSkills id="skillsLabel" backgroundcolor={theme.containerPrimaryColor}>
                <S.TitleText textcolor={theme.textColor}>Minhas
                    <S.SpecialTitleText textcolor={theme.specialTextColor}> Habilidades</S.SpecialTitleText>
                </S.TitleText>
            </S.ContainerTitleSkills>

            <S.ContainerMySkills id="containerSkills" shadowcolor={theme.borderShadowColor} backgroundcolor={theme.containerPrimaryColor}>

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
                        <S.SkillName textcolor={theme.textColor}>{skill.name}</S.SkillName>
                        </S.Card>
                    </SwiperSlide>
                ))}
                </Swiper>

                </S.ContainerMySkills>

        </S.ContainerSkills>
    )
}