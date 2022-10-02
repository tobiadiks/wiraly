export default function SecondaryButton(props){
    return(
        <button onClick={props.onclick} type={props.type} className={` bg-gray-100 p-2 font-bold ${props.ring?'ring-2':''} ring-black outline-none focus:ring-2 ${props.rounded?'rounded-full':'rounded-sm'} ${props.full?'w-full':'w-fit'}`}>
        {props.text}
        </button>
    )
}