import { MailOptions } from '../interfaces/mail';
declare const sendEmail: ({ to, subject, text, message }: MailOptions) => Promise<void>;
export default sendEmail;
