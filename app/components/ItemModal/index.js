/**
*
* ItemModal
*
*/

import React from 'react';
import Modal from 'react-modal';
// import styled from 'styled-components';


function ItemModal(props) {
  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }
      contentLabel="Modal"
      >

      <h1>Modal Content</h1>
      <p>hey.</p>
      <button onClick={() => props.onRequestClose()}>close</button>
    </Modal>
  );
}

ItemModal.propTypes = {

};

export default ItemModal;
