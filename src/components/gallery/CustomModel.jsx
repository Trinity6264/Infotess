
import React from 'react'
import { Modal, Image } from 'react-bootstrap'

const CustomModal = ({ img, isShow, disMiss }) => {
    return (
        <Modal
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            show={isShow}
            style={{ height: '90%', overflowY: 'hidden' }}
            >
            <Modal.Header closeButton onClick={() => disMiss(false)} />
            
            <Image src={img} style={{ height: '100%', }} />
        </Modal>
    )
}

export default CustomModal