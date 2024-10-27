function Button({
  className,
  text,
  icon,
  onClick,
}: {
  className?: string;
  text: string;
  icon?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`transition-colors rounded-md px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {text} {icon && <i className={icon} />}
    </button>
  );
}

export default Button;
