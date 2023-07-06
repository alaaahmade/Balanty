import { UserData } from '../interfaces/auth';
import { userLoginAttrs } from '../interfaces/auth';
declare const signupService: (userData: UserData) => Promise<{
    status: number;
    data: object | string;
    token?: string | null | undefined;
}>;
declare const loginService: (userData: userLoginAttrs) => Promise<{
    loggedUser: object;
    token: string;
}>;
export { signupService, loginService };
