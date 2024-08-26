interface TPSLInputProps {
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  placeholder: string;
}

export default function TPSLInput({
  value,
  onChange,
  onBlur,
  placeholder,
}: TPSLInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="w-full rounded-xl border border-p-light bg-secondary px-3 py-2 text-white placeholder-p-light focus:border-s-light focus:outline-none"
      placeholder={placeholder}
    />
  );
}
