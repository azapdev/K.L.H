import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
}

const Input = <T extends FieldValues>({
  name,
  label,
  type = "text",
  register,
  errors,
}: InputProps<T>) => {
  return (
    <div>
      <label htmlFor="email" className="text-xl font-bold text-white">
        {label}
      </label>
      <input
        id="email"
        type={type}
        {...register(name)}
        className="my-2 h-8 w-full rounded-2xl px-2 text-white outline-3"
      />
      <span className="text-xs text-red-500">
        {errors[name]?.message as string}
      </span>
    </div>
  );
};

export default Input;
