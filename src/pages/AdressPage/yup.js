import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('doldurulması zorunlu alan').min(2, 'eksik'),
  openAddress: Yup.string().required('doldurulması zorunlu alan').min(5, 'eksik'),
  city: Yup.string().required('doldurulması zorunlu alan').min(2, 'eksik'),
  town: Yup.string().required('doldurulması zorunlu alan').min(2, 'eksik'),
  phone : Yup.number('rakam giriniz!').required('doldurulması zorunlu alan').min(11 ,'eksik'),
  no: Yup.number().required("doldurulması zorunlu alan"),
});
