export default function TertiaryButton(props){
    return(
        <button disabled={props.disabled} onClick={props.onClick} type={props.type} className={` p-2 font-bold ${props.ring?'ring-1':''} ring-black disabled:cursor-not-allowed focus:ring-4 outline-none ${props.rounded?'rounded-full':'rounded-sm'} ${props.full?'w-full':'w-fit'}`}>
        {props.text}
        </button>
    )
}