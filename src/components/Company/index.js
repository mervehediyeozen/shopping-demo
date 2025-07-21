import React, { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import kampanya1 from '../../images/kampanya1.jpeg';
import kampanya2 from '../../images/kampanya2.jpg';
import { useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useLang } from '../../Contexts/LanguageContext';

function Company1() {
  const { messages, locale } = useLang();
  const location = useLocation();
  const [showIt, setShowIt] = useState(true); // Başlangıçta içerik açık

  const hidePaths = ["/Signup", "/Signin", "/SubscribedClient"];

  // Eğer location.pathname, hidePaths dizisinde varsa bileşeni render etmiyoruz
  if (hidePaths.includes(location.pathname)) {
    return null;  // Bu sayfalarda görünmesin
  }

  const toggleCompanyList = () => {
    setShowIt(prevState => !prevState);  // Durumu tersine çevir
  };

  return (
    <div className={styles.companies}>
      <div className={styles.compHead}>
        <Button
          variant="ghost"
          width="167px"
          rounded="none"
          size="sm"
          type="submit"
          _hover={{bg:"softNav2.200"}}
          className={styles.closeButton}
          onClick={toggleCompanyList}
        >
          {showIt ? messages[locale].closeCom : messages[locale].openCom}
          <FontAwesomeIcon icon={faTimes} className={styles.iconStyle} /> 
        </Button>
      </div>

      <div>
        {showIt && (
          <ul className={styles.imgList}>
            <li>
              <div className={`card ${styles.cards}`}>
                <img src={kampanya1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">{messages[locale].comp1title1}</h6>
                  <p className="card-text">{messages[locale].comp1p}</p>
                  <Button size="sm" color="white" bg="softBrown.600" _hover={{bg: "softGray.600"}}>
                    <a href="#">{messages[locale].goLink}</a> 
                  </Button>
                </div>
              </div>
            </li>
            <li>
              <div className={`card ${styles.cards}`}>
                <img src={kampanya2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">{messages[locale].comp1title2}</h6>
                  <p className="card-text">{messages[locale].comp1p}</p>
                  <Button size="sm" color="white" bg="softBrown.600" _hover={{bg: "softGray.600"}}>
                    <a href="#">{messages[locale].goLink}</a> 
                  </Button>
                </div>
              </div>
            </li>
           
          </ul>
        )}
      </div>
    </div>
  );
}

export default Company1;
