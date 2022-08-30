export default function PrimaryButton(props){
    return(
        <button onClick={props.onClick} type={props.type} className={` bg-yellow-300 p-2 font-bold ${props.ring?'ring-2':''} ring-black focus:ring-4 outline-none ${props.rounded?'rounded-full':'rounded-sm'} ${props.full?'w-full':'w-fit'}`}>
        {props.text}
        </button>
    )
}