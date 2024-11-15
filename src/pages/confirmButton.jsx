import React from 'react';
import './ConfirmButton.scss';

const ConfirmModal = ({ mensaje, onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{mensaje}</p>
                <button onClick={onConfirm}>Confirmar</button>
                <button onClick={onCancel}>Cancelar</button>
            </div>
        </div>
    );
};

export default ConfirmModal;
