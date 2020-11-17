import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PhoneContainer = ({ modalIsOpen, closeModal, phoneDetail }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
      {modalIsOpen && (
        <>
          <button onClick={closeModal} className="close">
            back to list
          </button>
          <div className="container">
            <h3>{phoneDetail.title}</h3>
            <h5>Specifications:</h5>
            <picture>
              <img
                src={phoneDetail.img}
                alt={phoneDetail.title}
                className="display"
              />
            </picture>
              <a href="/" className="link-manual" >Read Manual of Use</a>
          </div>
          <section className="details">
            <dl>
              {Object.entries(phoneDetail.quick_spec).map(([key, value]) => {
                const formattedKey = key.replace('_', ' ');
                formattedKey.toUpperCase();
                return (
                  <div key={key} className="specs">
                    <dt className="subs">{formattedKey.toUpperCase()}</dt>
                    <dd className="text">{value}</dd>
                  </div>
                );
              })}
            </dl>
          </section>
        </>
      )}
    </Modal>
  );
};
export default PhoneContainer;
