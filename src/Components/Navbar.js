import BrandLogo from '../assets/brand_logo.png';

export default function NavBar(){
    return(
        <>
            <div className="h-16 flex px-36 justify-between items-center">
                <div>
                    <img src={BrandLogo} alt="Logo" />
                </div>
                <div className="flex gap-8 text-base uppercase font-semibold">
                    <a href="https://aprimr.netlify.app/" className='hover:text-red-500'>Home</a>
                    <a href="https://aprimr.netlify.app/" className='hover:text-red-500'>Location</a>
                    <a href="https://aprimr.netlify.app/" className='hover:text-red-500'>About</a>
                    <a href="https://aprimr.netlify.app/" className='hover:text-red-500'>Contact</a>
                </div>
                <div>
                    <button className='px-5 py-1 bg-red-500 border-2 border-red-500 text-white font-bold hover:bg-white hover:text-red-400'>Login</button>
                </div>
            </div>
        </>
    );
}