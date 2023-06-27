import { object, string, number } from 'yup';

const updatedValueSchema = object({
  description: string()
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
  price: number()
    .min(3, 'يجب أن يكون السعر أكبر من أو يساوي 3')
    .nullable()
    .typeError(' يجب أن يكون السعر رقم'),
  ground: string()
    .min(3, 'يجب أن يحتوي نوع الملعب على الأقل 3 أحرف')
    .max(10, 'يجب أن يحتوي نوع الملعب على الأكثر 10 أحرف')
    .typeError('يجب أن نوع الارضية نص ')
    .nullable(),
  address: string()
    .min(3, 'يجب أن يحتوي العنوان على الأقل 3 أحرف')
    .max(100, 'يجب أن يحتوي العنوان على الأكثر 100 حرف')
    .typeError('يجب أن يكون العنوان نص ')
    .nullable(),
});
export default updatedValueSchema;
