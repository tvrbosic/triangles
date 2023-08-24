export interface IInfoModal {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
