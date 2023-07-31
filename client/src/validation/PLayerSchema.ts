import { string, object, number } from 'yup';

const updateProfileSchema = object().shape({
  bio: string()
    .min(3, 'يجب أن يكون الوصف على الأقل 3 أحرف')
    .max(200, 'يجب أن يكون الوصف على الأكثر 200 حرف')
    .nullable()
    .typeError('يجب أن يكون الوصف نص '),

  phone: number()
    .test(
      'phone-length',
      'يجب ان يتكون رقم الهاتف من 7 الى 10 ارقام',
      value =>
        value === undefined ||
        (value.toString().length >= 7 && value.toString().length <= 10),
    )
    .nullable()
    .typeError('يجب ان يكون رقم الهاتف عبارة عن أرقام'),
  age: number().nullable().typeError('يجب أن يكون العمر رقم'),
  position: string()
    .min(3, 'يجب أن يحتوي المركز على الأقل 3 أحرف')
    .max(25, 'يجب أن يحتوي المركز على الأكثر 25 أحرف')
    .typeError('يجب أن المركز نص ')
    .nullable(),
});

export default updateProfileSchema;
