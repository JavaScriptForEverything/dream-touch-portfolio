// type Props = React.ComponentProps<'div'> & {
type Props = {
	// children: React.ReactNode 				
  label: string;
  onDelete?: () => void;
  color?: string; // Optional color prop for customization
};


export const Chip = ({ label, onDelete, color = 'bg-blue-500' }: Props) => {
  return (
    <div className={`flex items-center px-3 py-1 rounded-full ${color} text-white`}>
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={onDelete}
          className="ml-2 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Delete"
        >
          &times; 
        </button>
      )}
    </div>
  );
};

