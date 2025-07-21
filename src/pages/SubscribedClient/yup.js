import * as Yup from 'yup';

export const validateForm = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required('Doldurulması zorunlu alan')
      .min(3, 'Kullanıcı adınız eksik'),
    
    password: Yup.string()
      .required('Şifre girilmesi zorunludur')
      .min(6, 'Şifre en az 6 karakter olmalıdır'),
  });
};
