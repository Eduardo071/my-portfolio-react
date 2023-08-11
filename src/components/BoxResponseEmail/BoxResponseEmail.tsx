import { useState, useEffect, useContext } from 'react'
import * as S from './BoxResponseEmailStyle'
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';

interface BoxResponseEmailProps {
    message?: string | null;
}

export const BoxResponseEmail: React.FC<BoxResponseEmailProps> = ({ message }) => {

    const [showBox, setShowBox] = useState(false)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        setShowBox(true)
        const showBoxTimeout = setTimeout(() => {
            setShowBox(false)
            clearTimeout(showBoxTimeout)
        }, 3500)
    }, [message])
    return (
        showBox && (
            <S.ContainerBox backgroundcolor={theme.boxMessageColor}>
                <S.ContainerMessage>
                    <S.MessageText color={theme.textColor}>{message}</S.MessageText>
                </S.ContainerMessage>
                <S.ProgressBar backgroundcolor={theme.specialTextColor}/>
            </S.ContainerBox>
        )
    )
}