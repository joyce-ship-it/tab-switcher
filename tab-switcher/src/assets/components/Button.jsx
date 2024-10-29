
export default function Button({children, handleSelect, isActive}){
    return (

        <button className={isActive ? 'active' : ''} onClick={handleSelect}>{children}</button>
    )
}