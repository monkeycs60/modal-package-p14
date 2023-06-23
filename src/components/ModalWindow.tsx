import React from 'react';
import '../styles/modalWindow.css';

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const ModalWindow = ({ isOpen, onClose, children }: ModalProps) => {
	return (
		isOpen && (
			<div className='modal-overlay' onClick={onClose}>
				<div
					className={`modal-container`}
					onClick={(e) => {
						e.stopPropagation();
					}}>
					<button
						className='modal-close'
						onClick={() => {
							onClose();
						}}>
							X
					</button>
					{children}
				</div>
			</div>
		)
	);
};
