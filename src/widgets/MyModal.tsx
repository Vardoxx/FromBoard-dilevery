import { Modal } from "antd";
import { ReactNode } from "react";

interface MyModalProps {
  open: boolean;
  onClose: () => void;
  width?: number;
  children?: ReactNode;
}
const MyModal: React.FC<MyModalProps> = ({
  open,
  onClose,
  children,
  width,
}) => {
  return (
    <Modal width={width} open={open} footer={null} onCancel={onClose}>
      {children}
    </Modal>
  );
};

export default MyModal;
