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
						<svg
							className='h-4 w-4 fill-current'
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
