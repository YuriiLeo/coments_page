type Props = {
  onClose: () => void;
};

export const CloseButton = ({ onClose }: Props): JSX.Element => {
  return (
    <button
      className="bg-primary text-black text-sm uppercase rounded-full w-6 h-6 flex justify-center items-center"
      onClick={onClose}
    >
      x
    </button>
  );
};
