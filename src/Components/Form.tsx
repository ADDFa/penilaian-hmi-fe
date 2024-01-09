import { FC, FormEventHandler, FormHTMLAttributes } from "react"

const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({
    onSubmit,
    children,
    ...rest
}) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        if (onSubmit) onSubmit(e)
    }

    return (
        <form {...rest} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default Form
