import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode,
    typed: 'filled' | 'outlined',
    action?: VoidFunction,
    otherStyles?: string,
    submit?: boolean
}

const Button = ({ children, typed, submit = false, action, otherStyles, ...otherArgs }: ButtonProps) => {

    return (
        <>
            {typed == 'filled' ? (
                <button onClick={action} type={submit == true ? "submit": "button"} {...otherArgs} className={`btn-primary-filled ${otherStyles}`}>
                    {children}
                </button>
            ) : (
                <button onClick={action} type={submit == true ? "submit": "button"} {...otherArgs} className={`btn-primary-outlined ${otherStyles}`}>
                    {children}
                </button>
            )}
            
        </>
    )
}

export default Button