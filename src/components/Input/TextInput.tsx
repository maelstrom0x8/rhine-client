
type InputProps = {
    type : 'text' | 'password'
    placeholder: string
    required: boolean
    handleChange: () => void
}

export const TextInput = (props : InputProps) => {
    return (
        <input
            className="focus:border-l-4 focus:border-l-blue-300 focus:font-semibold  pl-1 shadow-sm w-full text-black text-sm"
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            onChange={props.handleChange}
          />
    )
}