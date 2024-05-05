import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "e5e6c794a75fd5",
            pass: "531303627f0672"
        }
    });

    const { email, nombre, token } = datos;

    // Enviar email
    const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: 'Reestablece tu Password',
        text: 'Reestablece tu Password',
        html: `<p>Hola: ${nombre}, has solicitado restablecer tu password</p>
            <p>Sigue el siguiente enlace para generar un nuevo password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `,
    });
    console.log('Mensaje enviado: %s', info.messageId);
}


export default emailOlvidePassword