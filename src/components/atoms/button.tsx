type ButtonProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

function Button({ buttonText, type, disabled }: ButtonProps) {
  return (
    <button
      className="bg-[#047db2] hover:bg-[#047db2] text-white font-medium py-4 px-8 rounded uppercase cursor-pointer duration-200"
      disabled={disabled}
      type={type || "button"}
    >
      {buttonText}
    </button>
  );
}

export default Button;
