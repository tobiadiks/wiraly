export default function SecondaryButton(props){
    return(
        <button onClick={props.onClick} type={props.type} className={` bg-blue-300 p-2 font-bold ${props.ring?'ring-2':''} ring-black outline-none focus:ring-4 ${props.rounded?'rounded-full':'rounded-sm'} ${props.full?'w-full':'w-fit'}`}>
        {props.text}
        </button>
    )
}