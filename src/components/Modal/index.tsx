import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { styles } from './styles';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  setIsOpen: () => void;
}

export function Modal({isOpen, setIsOpen, children}: ModalProps) {
  const [modalStatus, setModalStatus] = useState<boolean>(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen])

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={styles}
      >
        {children}
      </ReactModal>
    );
};