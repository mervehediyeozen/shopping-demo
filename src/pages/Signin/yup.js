import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('doldurulması zorunlu alan').min(3, 'eksik'),
  surname: Yup.string().required('doldurulması zorunlu alan').min(3, 'eksik'),
  email: Yup.string().required('doldurulması zorunlu alan').email('geçerli bir e-posta girin').min(3, 'eksik'),
  password: Yup.string().required('doldurulması zorunlu alan').min(6, 'eksik'),
});
