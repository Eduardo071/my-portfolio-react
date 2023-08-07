import sun from '../../assets/sun icon.svg'
import moon from '../../assets/moon icon.svg'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext'
import { themes } from '../../contexts/ThemeContext/themes'
import * as S from './TogglerStyle'
import {useContext, useEffect, useState} from 'react'

export function Toggler(){

    const {theme, setTheme} = useContext(ThemeContext)
    const [actualIcon, setActualIcon] =useState(sun)
    useEffect(() => theme === themes.light ? setActualIcon(sun) : setActualIcon(moon), [theme])
    return(
        <S.Toggler backgroundcolor={theme.togglerBackgroundColor} onClick={() => {
            setTheme(theme === themes.light ? themes.dark : themes.light)
        }}>
            <img src={actualIcon} alt="toggler icon" />
        </S.Toggler>
    )
}