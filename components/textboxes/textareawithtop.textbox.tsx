import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

export default function TextAreaWithTop({ ...props }: { full: boolean, ring: boolean, rounded: boolean, text: string } & DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>) {
    return (
        <div className={`relative h-fit ${props.full ? 'w-full' : 'w-fit'}`}>
            <textarea disabled={props.disabled} value={props.value} name={props.name} className={`  p-2  ${props.ring ? 'ring-1' : ''} ring-black  outline-none ${props.rounded ? 'rounded-full' : 'rounded-sm'} ${props.full ? 'w-full' : 'w-fit'}`} />
            <div className="absolute text-sm  transform left-6 bg-white -translate-y-1/2 top-0">{props.text}</div>
        </div>
    )
}