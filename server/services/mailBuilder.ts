import Mailgen from 'mailgen';
import { PRODUCT, PRODUCT_LINK } from '../config';
import { MailBuilder } from '../interfaces/mail';

export const generateEmail = (body: MailBuilder) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    textDirection: 'rtl',
    product: {
      name: `${PRODUCT}`,
      link: `${PRODUCT_LINK}`,
      copyright: 'حقوق النشر محفوظة لدى بلنتي @ 2023',
    },
  });

  const email = { body };

  const emailBody = mailGenerator.generate(email);
  const emailText = mailGenerator.generatePlaintext(email);

  return { emailBody, emailText };
};
