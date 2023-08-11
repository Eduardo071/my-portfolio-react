import emailjs from '@emailjs/browser';

export const sendEmail = async (form: HTMLFormElement | null) => {

    const sendComplete = 'Obrigado, sua mensagem foi enviada com sucesso'
    const sendError = 'Lamento, houve um erro inesperado com sua mensagem'

    if (form) {

        const response = await emailjs.sendForm('service_b91l4wf', 'template_92umzu4', form, '_R502jfSNE_DIG3Q9')
        if (response.text === 'OK') {
            form.reset();
            return sendComplete
        } else {
            form.reset();
            return sendError
        }

    }
}