import { object, string, number } from 'yup';

const updatedValueSchema = object({
  description: string().min(3).max(200).nullable(),
  phone: string().min(3).max(10).nullable(),
  price: number().min(3).nullable(),
  ground: string().min(3).max(10).nullable(),
  address: string().min(3).max(100).nullable(),
});

export default updatedValueSchema;
