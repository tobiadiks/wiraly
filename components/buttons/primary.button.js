export default function PrimaryButton(props){
    return(
        <button onClick={props.onclick} type={props.type} className={` bg-yellow-300 p-2 font-bold ${props.ring?'ring-1':''} ring-black focus:ring-2 outline-none ${props.rounded?'rounded-full':'rounded-sm'} ${props.full?'w-full':'w-fit'}`}>
        {props.text}
        </button>
    )
}