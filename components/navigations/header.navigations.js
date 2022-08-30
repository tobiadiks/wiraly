
import PrimaryButton from '../buttons/primary.button'
import TertiaryButton from '../buttons/tertiary.button'
export default function HeaderNavigation() {
    return (
        <nav className='w-full z-50 py-4 px-4 bg-white border-b flex fixed top-0 justify-between' >
            <div className='text-yellow-300 my-auto font-bold' > Wiraly </div>
            {/* <div className='space-x-4' >
                <TertiaryButton text='Signup' />
                <PrimaryButton text='Login' />
            </div> */}
        </nav>
    )
}