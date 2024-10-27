function Button({
  className,
  text,
  type,
  icon,
  disabled,
  onClick,
}: {
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: string;
  disabled: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`transition-colors rounded-md px-4 py-2 ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {text} {icon && <i className={icon} />}
    </button>
  );
}

export default Button;
