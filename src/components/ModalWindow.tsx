import React, { useEffect, MouseEvent } from 'react';
import '../styles/modalWindow.css';

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

/**
 * ModalWindow TypeScript React component that renders a modal window with a close button and children
 * content. This modal can be closed by clicking the close button, clicking outside the modal window,
 * or pressing the escape key.
 *
 * @param {boolean} props.isOpen - A boolean indicating if the modal window should be open or not.
 * @param {Function} props.onClose - A function that is called when the modal needs to be closed.
 * @param {React.ReactNode} props.children - The elements to be rendered inside the modal window.
 *
 * @example
 * <ModalWindow isOpen={true} onClose={() => {console.log('Modal Closed')}}>
 *   <div>Modal Content</div>
 * </ModalWindow>
 *
 * @returns {React.Component} The ModalWindow component.
 */
export const ModalWindow = ({ isOpen, onClose, children }: ModalProps) => {
	/**
	 * useEffect hook to handle the addition and cleanup of event listeners for closing the modal.
	 */
	useEffect(() => {
		/**
		 * Function to handle the 'keypress' event.
		 * If the 'Escape' key is pressed and the modal is open, the onClose function is called.
		 *
		 * @param {KeyboardEvent} event - The keyboard event.
		 */
		const handleKeyEscape = (event: KeyboardEvent) => {
			if (event.code === 'Escape' && isOpen) {
				onClose();
			}
		};

		document.addEventListener('keypress', handleKeyEscape);
		return () => {
			document.removeEventListener('keypress', handleKeyEscape);
		};
	}, [isOpen, onClose]);

	/**
	 * Function to handle the 'click' event within the modal.
	 * It stops the propagation of the event to prevent the modal from closing.
	 *
	 * @param {MouseEvent} e - The mouse event.
	 */
	const handleClickInside = (e: MouseEvent) => {
		e.stopPropagation();
	};

	return (
		isOpen && (
			<div className='modal-overlay' onClick={onClose}>
				<div
					role='dialog'
					aria-modal='true'
					className={`modal-container`}
					onClick={handleClickInside}>
					<button
						className='modal-close'
						aria-label='Close Modal'
						onClick={() => {
							onClose();
						}}>
						<svg
							className='h-4 w-4 fill-current close-svg'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'>
							<path d='M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59l-4.88-4.88a1 1 0 1 0-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L12 13.41l4.88 4.88a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l4.88-4.88a1 1 0 0 0 0-1.41z' />
						</svg>
					</button>
					{children}
				</div>
			</div>
		)
	);
};
