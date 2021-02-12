import React from 'react'

const Card = ({ children }) => {
    const ref = React.useRef(null);

    const handleAnimation = () => {
        // ref.current.classList.add('-translate-x-2', 'translate-y-2', 'shadow-inner')
        // ref.current.classList.toggle('shadow-border')
        // setTimeout(() => {
        //     ref.current.classList.remove('-translate-x-2', 'translate-y-2', 'shadow-inner')
        //     ref.current.classList.toggle('shadow-border')
        // }, 150)
    }

    return (
        <div 
            className='card__container bg-secondary border-2 border-primary ease-out w-full shadow-border transform transition-shadow duration-150'
            ref={ref}
            >
            { children }
        </div>
    )
}

export default Card