import React from 'react';
import { useLang } from '../../Contexts/LanguageContext';

function ShowClients({ msg }) {
  const {messages, locale} = useLang();
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title"> {messages[locale].ShowT} {msg} </h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h6>{messages[locale].ShowH}</h6>
           <p> {messages[locale].ShoeP}</p> 
           <input type='text'></input>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{messages[locale].ShowBt1}</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{messages[locale].ShowBt2}</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowClients;
