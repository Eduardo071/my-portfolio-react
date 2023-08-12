import { FormEvent, useContext, useRef, useState, useEffect } from "react"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import * as S from './ContactStyle'
import { sendEmail } from "../../services/api/api"
import { BoxResponseEmail } from "../BoxResponseEmail/BoxResponseEmail"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
    
    useEffect(() => {
        gsap.fromTo("#form, #informationText",
        {
            y: 100
        },
        {
            y: 0,
            duration: 2,
            scrollTrigger: {
                trigger: "#contactLabel",
                start: "top bottom",
                scrub: true,
                toggleActions: "play none none reverse",
            },
        }
    )
    
    }, [])

    const { theme } = useContext(ThemeContext)
    const [emailStatus, setEmailStatus] = useState<string | null>(null)

    const form = useRef<HTMLFormElement>(null)

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const resultMessage = await sendEmail(form.current)
        if (resultMessage !== undefined) {
            setEmailStatus(resultMessage)
            console.log(resultMessage)
        }
    }

    return (

        <S.ContainerContact id="contact">
            <S.ContainerTitleContact id="contactLabel" backgroundcolor={theme.containerPrimaryColor}>
                <S.TitleText textcolor={theme.textColor}>Contate-
                    <S.SpecialTitleText textcolor={theme.specialTextColor}>me</S.SpecialTitleText>
                </S.TitleText>
            </S.ContainerTitleContact>

            <S.ContainerContactDetails backgroundcolor={theme.containerSecondaryColor}>
                <S.ContainerContactText id="informationText">
                    <S.Subtitle textcolor={theme.textColor}>Vamos trabalhar<S.SpecialSubtitle textcolor={theme.specialTextColor}> juntos</S.SpecialSubtitle>?</S.Subtitle>
                    <S.Paragraph>Pronto para dar vida à<S.SpecialParagraph textcolor={theme.specialTextColor}> inovação</S.SpecialParagraph>? Entre em contato agora e descubra como minhas habilidades em<S.SpecialParagraph textcolor={theme.specialTextColor}> desenvolvimento</S.SpecialParagraph> podem impulsionar sua equipe para novas alturas! 🚀💻</S.Paragraph>
                    <S.LinkEmail href="mailto:ti22mau@gmail.com?subject=Gostei%20do%20Portf%C3%B3lio&body=Ol%C3%A1%20Eduardo%2C%20gostei%20do%20seu%20portf%C3%B3lio" target="_blank">
                        <S.Svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 7.5H10C8.01088 7.5 6.10322 8.29018 4.6967 9.6967C3.29018 11.1032 2.5 13.0109 2.5 15V45C2.5 46.9891 3.29018 48.8968 4.6967 50.3033C6.10322 51.7098 8.01088 52.5 10 52.5H50C51.9891 52.5 53.8968 51.7098 55.3033 50.3033C56.7098 48.8968 57.5 46.9891 57.5 45V15C57.5 13.0109 56.7098 11.1032 55.3033 9.6967C53.8968 8.29018 51.9891 7.5 50 7.5ZM49.18 39.05C49.4338 39.2676 49.6414 39.5339 49.7905 39.8331C49.9396 40.1323 50.0271 40.4584 50.048 40.7921C50.0688 41.1258 50.0226 41.4602 49.9119 41.7757C49.8012 42.0911 49.6284 42.3812 49.4036 42.6287C49.1789 42.8762 48.9068 43.0761 48.6034 43.2166C48.3 43.3571 47.9716 43.4353 47.6374 43.4466C47.3033 43.4579 46.9703 43.4021 46.6581 43.2824C46.346 43.1628 46.061 42.9817 45.82 42.75L35.4625 33.35C33.8451 34.4291 31.9443 35.005 30 35.005C28.0557 35.005 26.1549 34.4291 24.5375 33.35L14.18 42.75C13.686 43.1735 13.0464 43.3877 12.397 43.3471C11.7475 43.3065 11.1395 43.0144 10.7021 42.5327C10.2647 42.051 10.0323 41.4177 10.0543 40.7674C10.0763 40.1171 10.351 39.501 10.82 39.05L20.71 30.0725L10.8175 21.075C10.5746 20.8541 10.3775 20.5874 10.2376 20.2903C10.0977 19.9932 10.0177 19.6715 10.0021 19.3434C9.97073 18.681 10.2038 18.0332 10.65 17.5425C11.0962 17.0519 11.7191 16.7586 12.3816 16.7271C13.044 16.6957 13.6918 16.9288 14.1825 17.375L26.63 28.6975C27.553 29.5381 28.7566 30.004 30.005 30.004C31.2534 30.004 32.457 29.5381 33.38 28.6975L45.8175 17.375C46.3081 16.9288 46.956 16.6957 47.6184 16.7271C48.2809 16.7586 48.9038 17.0519 49.35 17.5425C49.7962 18.0332 50.0293 18.681 49.9978 19.3434C49.9664 20.0059 49.6731 20.6288 49.1825 21.075L39.2925 30.075L49.18 39.05Z" fill={theme.specialTextColor} />
                        </S.Svg>

                        <S.EmailText textcolor={theme.specialTextColor}>ti22mau@gmail.com</S.EmailText>
                    </S.LinkEmail>
                </S.ContainerContactText>

                <S.Form method="post" ref={form} id="form" onSubmit={handleFormSubmit}>
                    <S.Label textcolor={theme.specialTextColor}>Nome</S.Label>
                    <S.Input required textcolor={theme.textColor} placeholder="Nome" backgroundcolor={theme.inputsBackgroundColor} type="text" name="user_name" />
                    <S.Label textcolor={theme.specialTextColor}>Email</S.Label>
                    <S.Input required textcolor={theme.textColor} placeholder="Email" backgroundcolor={theme.inputsBackgroundColor} type="email" name="user_email" />
                    <S.Label textcolor={theme.specialTextColor}>Mensagem</S.Label>
                    <S.TextArea required textcolor={theme.textColor} placeholder="Mensagem" backgroundcolor={theme.inputsBackgroundColor} name="message" />
                    <S.ButtonSubmit textcolor={theme.specialTextColor} shadowcolor={theme.borderShadowColor} backgroundcolor={theme.inputsBackgroundColor} type="submit" >Enviar</S.ButtonSubmit>
                </S.Form>
            </S.ContainerContactDetails>
            {emailStatus !== null && emailStatus !== '' && <BoxResponseEmail message={emailStatus} />}
        </S.ContainerContact>
    )
}
