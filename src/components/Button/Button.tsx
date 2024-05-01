type Props = {
  isSelected?: boolean;
  children: React.ReactNode;
}

const Button = ({ isSelected, children }: Props) => {
  return (
    <button className={`rounded-lg p-2 ${isSelected && 'bg-soft-gray'}`}>
      {children}
    </button>
  )
}

export default Button