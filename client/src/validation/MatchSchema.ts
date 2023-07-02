import { object, string, number } from 'yup';

const MatchSchema = object({
  endDate: string().required('يجب حجز وقت المباراة'),
  startDate: string().required('يجب حجز وقت المباراة'),
  StadiumId: number()
    .min(1, '!يجب ادخال اسم الملعب')
    .required('!يجب ادخال اسم الملعب'),
  description: string()
    .min(5, 'يجب ان يكون الوصف 5 احرف على الاقل')
    .required('!يجب كتابة وصف للمباراة'),
  seats: number()
    .required('يجب ادخال عدد اللاعبين')
    .min(5, 'يجب ان يكون عدد اللاعبين 5 على الاقل')
    .max(50, 'يجب ان لا يزيد عدد اللاعبين عن 50'),
  title: string()
    .required('يجب كتابة عنوان للمباراة')
    .min(5, 'يجب ان يكون العنوان 5 احرف على الاقل')
    .max(50, 'يجب ان لا يزيد عدد الاحرف في العنوان عن 50'),
});

export default MatchSchema;
