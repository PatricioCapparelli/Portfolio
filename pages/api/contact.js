import { mailOptions, transporter } from "@/config/nodemailer";

const generateEmailContent = (data) => {
    const { firstname, lastname, email, phone, message } = data;


    const text = `
    Nombre: ${firstname} ${lastname}
    Email: ${email}
    Teléfono: ${phone}
    Mensaje: ${message}
`;


    const html = `
    <h1>Nuevo mensaje de contacto</h1>
    <p><strong>Nombre:</strong> ${firstname} ${lastname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Mensaje:</strong> ${message}</p>
`;

    return { text, html };
};


const sendContactForm = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;

        console.log("Datos recibidos:", data);

        try {

            const { text, html } = generateEmailContent(data);


            await transporter.sendMail({
                ...mailOptions,
                subject: "Nuevo mensaje de contacto", 
                text: text,
                html: html, 
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            console.error("Error enviando el correo:", error);
            return res.status(400).json({ message: error.message });
        }
    } else {
        res.status(400).json({ message: "Bad request" });
    }
};

export default sendContactForm;