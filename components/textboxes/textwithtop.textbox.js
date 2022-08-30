export default function TextWithTop(props) {
    return (
        <div className="relative h-fit">
            <input name={props.name} type={props.type} className={`  p-2  ${props.ring ? 'ring-2' : ''} ring-black focus:ring-4 outline-none ${props.rounded ? 'rounded-full' : 'rounded-sm'} ${props.full ? 'w-full' : 'w-fit'}`} />
            <div className="absolute text-sm  transform left-6 bg-white -translate-y-1/2 top-0">{props.text}</div>
        </div>
    )
}