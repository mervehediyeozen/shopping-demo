import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  
  cardNo: Yup.string().required('doldurulması zorunlu alan').min(12, 'eksik'),
  cardCvv: Yup.string().required('doldurulması zorunlu alan').max(3, 'fazla'),
  
 
});