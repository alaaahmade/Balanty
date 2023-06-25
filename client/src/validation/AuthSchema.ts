import * as yup from 'yup';
import { loginProps, signupProps } from '../interfaces';

const loginSchema = yup.object<loginProps>().shape({
  username: yup
    .string()
    .min(4, 'يجب ألا يقل اسم المستخدم عن 8 أحرف')
    .required('اسم المستخدم حقل مطلوب'),
  password: yup
    .string()
    .min(4, 'يجب أن تكون كلمة المرور 8 أحرف على الأقل')
    .required('كلمة المرور حقل مطلوب')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'يجب أن تحتوي كلمة المرور على حرف واحد كبير على الأقل وحرف صغير واحد ورقم واحد وحرف خاص واحد',
    ),
});

const signupSchema = yup.object<signupProps>().shape({
  username: yup
    .string()
    .min(4, 'يجب ألا يقل اسم المستخدم عن 8 أحرف')
    .required('اسم المستخدم حقل مطلوب'),
  email: yup
    .string()
    .email('يجب أن تكون قيمة الحقل عبارة عن بريد إلكتروني فعَال')
    .min(4, 'يجب أن يكون البريد الإلكتروني مكَون من 8 أحرف على الأقل')
    .required('البريد الإلكتروني حقل مطلوب'),
  role: yup.string().oneOf(['player', 'stadium']).required('هذا الحقل مطلوب'),
  phone: yup.number().min(7).max(10).required('حقل رقم الهاتف مطلوب'),
  password: yup
    .string()
    .min(4, 'يجب أن تكون كلمة المرور 8 أحرف على الأقل')
    .required('كلمة المرور حقل مطلوب')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'يجب أن تحتوي كلمة المرور على حرف واحد كبير على الأقل وحرف صغير واحد ورقم واحد وحرف خاص واحد',
    ),
  confirmPassword: yup
    .string()
    .min(4, 'يجب أن تكون كلمة المرور 8 أحرف على الأقل')
    .required('كلمة المرور حقل مطلوب')
    .oneOf([yup.ref('password')], 'كلمة المرور غير متطابقة'),
});

export { loginSchema, signupSchema };
