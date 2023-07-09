export interface MailBuilder {
    name: string;
    intro: string;
    outro: string;
    greeting: string;
    signature: string;
}
export interface MailOptions {
    to: string;
    subject: string;
    text: string;
    message: string;
}
