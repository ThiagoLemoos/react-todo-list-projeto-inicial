import './button.style.css'

export function Button ({ children, ...rest }) {
    return (
        <div className='button-div'>
            <button className='btn' {...rest} >{children}</button>
        </div>
    )
}