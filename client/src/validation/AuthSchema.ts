import * as yup from 'yup';
import { loginProps, signupProps } from '../interfaces';

const loginSchema = yup.object<loginProps>().shape({
  username: yup
    .string()
    .min(4, 'يجب ألا يقل اسم المستخدم عن 4 أحرف')
    .required('اسم المستخدم حقل مطلوب'),
  password: yup
    .string()
    .min(4, 'يجب أن تكون كلمة المرور 4 أحرف على الأقل')
    .required('كلمة المرور حقل مطلوب')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'يجب أن تحتوي كلمة المرور على حرف واحد كبير على الأقل وحرف صغير واحد ورقم واحد وحرف خاص واحد',
    ),
});

const signupSchema = yup.object<signupProps>().shape({
  username: yup
    .string()
    .min(4, 'يجب ألا يقل اسم المستخدم عن 4 أحرف')
    .required('اسم المستخدم حقل مطلوب'),
  email: yup
    .string()
    .email('يجب أن تكون قيمة الحقل عبارة عن بريد إلكتروني فعَال')
    .min(4, 'يجب أن يكون البريد الإلكتروني مكَون من 4 أحرف على الأقل')
    .required('البريد الإلكتروني حقل مطلوب'),
  phone: yup
    .string()
    .min(7, 'يجب أن يكون رقم الهاتف مكَون من 7 أرقام على الأقل')
    .required('حقل رقم الهاتف مطلوب')
    .matches(/^[0-9]{10}$/, 'رقم الهاتف غير متاح'),
  password: yup
    .string()
    .min(4, 'يجب أن تكون كلمة المرور 4 أحرف على الأقل')
    .required('كلمة المرور حقل مطلوب')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'يجب أن تحتوي كلمة المرور على حرف واحد كبير على الأقل وحرف صغير واحد ورقم واحد وحرف خاص واحد',
    ),
  confirmPassword: yup
    .string()
    .min(4, 'يجب أن تكون كلمة المرور 4 أحرف على الأقل')
    .required('كلمة المرور حقل مطلوب')
    .oneOf([yup.ref('password')], 'كلمة المرور غير متطابقة'),
});

export { loginSchema, signupSchema };
