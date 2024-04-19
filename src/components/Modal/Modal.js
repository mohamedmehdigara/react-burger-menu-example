import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
    // Effect to manage focus within the modal and close on Escape key press
    useEffect(() => {
        // Focus the first focusable element in the modal when it opens
        if (isOpen) {
            const focusableElements = 'button, [href], input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
            const modalContent = document.querySelector('.modal-content');
            const firstFocusableElement = modalContent.querySelectorAll(focusableElements)[0];
            if (firstFocusableElement) {
                firstFocusableElement.focus();
            }

            // Handle closing the modal on Escape key press
            const handleKeyDown = (event) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleKeyDown);

            // Cleanup: remove the keydown event listener
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isOpen, onClose]);

    // Return null if modal is not open
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-hidden={!isOpen}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
            >
                {/* Close button */}
                <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                
                {/* Modal content */}
                {children}
            </div>
        </div>
    );
}

export default Modal;
