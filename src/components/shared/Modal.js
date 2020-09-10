import React from 'react'
import './Modal.scss';
import { motion } from 'framer-motion';

const backdropVariant = {
    hidden: { opacity: 0 },
    visable: { opacity: 1 }
}

const modalVariant = {
    hidden: { opacity: 0, y: '-100vh' },
    visable: { opacity: 1, y: 200, transition: { type: 'spring', stiffness: 100 } }
}

const Modal = ({ cocktailModal, setCocktailModal }) => {
    const { show, cocktail } = cocktailModal;

    const closeModal = (e) => {
        if (e.target.className === 'backdrop')
            setCocktailModal({ show: false, cocktail: {} })
    }

    return (
        <>
            {show && (
                <motion.div onClick={closeModal} className="backdrop"
                    variants={backdropVariant}
                    initial={'hidden'}
                    animate={'visable'}>

                    <motion.div className="modal"
                        variants={modalVariant}
                    >
                        {cocktail.slogan}
                    </motion.div>
                </motion.div>
            )}
        </>
    )
};

export default Modal