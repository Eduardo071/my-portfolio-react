import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import { useContext } from 'react'
import * as S from './LinkedinIconStyle'

export function LinkedinIcon() {

    const { theme } = useContext(ThemeContext)

    return (
        <S.Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_29_297)">
                <path d="M73.9539 -0.211395C77.2164 -0.211395 79.8734 2.37189 79.8734 5.55829V74.035C79.8734 77.2214 77.2164 79.8091 73.9539 79.8091H5.75719C2.5011 79.8091 -0.144836 77.2214 -0.144836 74.035V5.55829C-0.144836 2.37189 2.5011 -0.211395 5.75719 -0.211395H73.9539ZM68.0431 67.9744V47.0316C68.0431 36.7469 65.8225 28.8399 53.8056 28.8399C48.0314 28.8399 44.1589 32.0059 42.5764 35.008H42.4139V29.7875H31.0372V67.9744H42.8913V49.0872C42.8913 44.1055 43.8336 39.2789 50.0091 39.2789C56.0999 39.2789 56.1759 44.9759 56.1759 49.4042V67.9744H68.0431ZM23.5917 29.7875H11.7114V67.9744H23.5917V29.7875ZM17.6547 10.8049C13.843 10.8049 10.7694 13.8884 10.7694 17.6872C10.7694 21.4869 13.843 24.5703 17.6547 24.5703C21.4514 24.5703 24.5338 21.4869 24.5338 17.6872C24.5338 13.8884 21.4514 10.8049 17.6547 10.8049Z" fill={theme.textColor} />
            </g>
            <defs>
                <clipPath id="clip0_29_297">
                    <rect width="80" height="80" fill="white" />
                </clipPath>
            </defs>
        </S.Svg>

    )
}