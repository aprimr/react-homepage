import ShoeImage from '../assets/shoe_image.png';
import AmazonImg from '../assets/amazon.png';
import FlipkartImg from '../assets/flipkart.png';

export default function Hero(){
    return(
        <>
        <div className='flex flex-wrap justify-center gap-16 mx-40 mt-24' >
            <div className='w-1/2'>
                <h2 className='text-7xl  uppercase font-extrabold'>Your feet deserve the best</h2>
                <p className='mt-4 pr-32 text-justify text-base font-semibold'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='mt-8 flex gap-4'>
                    <button className='px-8 py-2 bg-red-500 border-2 text-white font-semibold hover:bg-white hover:text-red-500  hover:border-red-500'>Shop Now</button>
                    <button className='px-8 py-2 border-2 border-black font-medium hover:border-red-500  hover:text-red-500'>Category</button>
                </div>
                <div className='mt-4 text-gray-500'>
                    <p>Also available on</p>
                    <div className='flex gap-4 mt-4'>
                        <img src={FlipkartImg} alt="flipkart" className='w-8'/>
                        <img src={AmazonImg} alt="amazon" className='w-8'/>
                    </div>
                </div>
            </div>
            <div className=' w-1/3 '>
                <img src={ShoeImage} alt="shoe" />
            </div>
        </div>
        </>
    );
}