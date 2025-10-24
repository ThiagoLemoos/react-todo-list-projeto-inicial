import './button.style.css'

export function Button ({ children }) {
    return (
        <div className='button-div'>
            <button className='button'>{children}</button>
        </div>
    )
}