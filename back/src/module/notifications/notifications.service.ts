import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class NotificationsService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendWelcomeEmail(to: string, username: string): Promise<void> {

    const mailOptions = {
      from: '"Elysium Hotel & Resort" <tu-email@gmail.com>',
      to,
      subject: '¡Bienvenido/a a Elysium, tu escape de lujo en California! 🌴✨',
      text: `Hola ${username},
  
  ¡Gracias por registrarte en Elysium Hotel & Resort! Nos alegra tenerte como parte de nuestra exclusiva comunidad de huéspedes.
  
  En Elysium, nuestra misión es ofrecerte una experiencia única de lujo en el corazón de California. Ya sea que estés buscando un descanso relajante, una aventura emocionante o simplemente un lugar especial para crear recuerdos inolvidables, estamos aquí para hacer que tu estadía sea inolvidable.
  
  ¿Qué puedes esperar de Elysium?
  - 🏖️ Ubicación privilegiada: Con vistas espectaculares y cercanía a las mejores atracciones de California.
  - 🍷 Gastronomía de clase mundial: Saborea los mejores platos en nuestros restaurantes exclusivos.
  - 💆‍♀️ Bienestar y relajación: Disfruta de nuestro spa y áreas recreativas diseñadas para tu confort.
  
  Estamos ansiosos por darte la bienvenida personalmente y ayudarte a descubrir todo lo que Elysium tiene para ofrecer.
  
  Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos. ¡Estamos aquí para ti!
  
  ¡Vive una experiencia única en Elysium!
  El equipo de Elysium Hotel & Resort.
  
  Contacto:
  📧 info@elysiumhotel.com
  📞 +1-800-123-4567
  🌐 www.elysiumhotel.com`,
      html: `
        <p>Hola <strong>${username}</strong>,</p>
        <p>¡Gracias por registrarte en <strong>Elysium Hotel & Resort</strong>! Nos alegra tenerte como parte de nuestra exclusiva comunidad de huéspedes.</p>
        <p>En <strong>Elysium</strong>, nuestra misión es ofrecerte una experiencia única de lujo en el corazón de California. Ya sea que estés buscando un descanso relajante, una aventura emocionante o simplemente un lugar especial para crear recuerdos inolvidables, estamos aquí para hacer que tu estadía sea inolvidable.</p>
        <p><strong>¿Qué puedes esperar de Elysium?</strong></p>
        <ul>
          <li>🏖️ <strong>Ubicación privilegiada</strong>: Con vistas espectaculares y cercanía a las mejores atracciones de California.</li>
          <li>🍷 <strong>Gastronomía de clase mundial</strong>: Saborea los mejores platos en nuestros restaurantes exclusivos.</li>
          <li>💆‍♀️ <strong>Bienestar y relajación</strong>: Disfruta de nuestro spa y áreas recreativas diseñadas para tu confort.</li>
        </ul>
        <p>Estamos ansiosos por darte la bienvenida personalmente y ayudarte a descubrir todo lo que <strong>Elysium</strong> tiene para ofrecer.</p>
        <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos. ¡Estamos aquí para ti!</p>
        <p><strong>¡Vive una experiencia única en Elysium!</strong><br>
        El equipo de Elysium Hotel & Resort</p>
        <p><strong>Contacto:</strong><br>
        📧 info@elysiumhotel.com<br>
        📞 +1-800-123-4567<br>
        🌐 <a href="https://www.elysiumhotel.com">www.elysiumhotel.com</a></p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
