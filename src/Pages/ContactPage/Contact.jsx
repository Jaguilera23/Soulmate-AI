import './Contact.css';
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import Suscribe from "../../components/Suscribe/Suscribe";

const Contact = () => {




    return (
        <section className="md:mt-[15.5rem] xs:mt-[5rem]">
            <div className="flex lg:justify-around mb-[9.81rem] xs:flex-col xs:items-center lg:flex-row">
                <div className=" text-left xs:w-[22rem]  md:w-[33.1875rem]">
                    <HeadingTitle subTitle1='Discover AI-generated' principalTitle='characters for Virtual' />
                    <p className='font-Inter xs:text-sm lg:text-base md:text-xl'>We are delighted to assist you in finding authentic and meaningful romantic and friendly relationships. Our team is committed to providing you with the best possible service. If you have any questions, comments, or would like to share your experiences, please don`t hesitate to get in touch with us. We value your trust and look forward to hearing from you.</p>
                    </div>
                <form action="" method="" className="flex flex-col items-end 0 xs:mt-10 lg:mt-0">
                    <input type="email" name="email" placeholder="Email" className="  md:w-[33.4375rem] xs:w-[22rem] h-[5.125rem] border-borderCard  rounded-[1.3125rem] bg-bgForm ps-[1.94rem] placeholder-placeHolderColor font-Inter text-sm mb-[1.62rem] customFocus text-placeHolderColor" />
                    <input type="text" placeholder="Subject" className="md:w-[33.4375rem] xs:w-[22rem] h-[5.125rem]  rounded-[1.3125rem]  border-borderCard bg-bgForm ps-[1.94rem] placeholder-placeHolderColor font-Inter text-sm mb-[1.62rem] customFocus text-placeHolderColor" />
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className=" xs:w-[22rem] md:w-[33.4375rem]  border-borderCard lg:w-full rounded-[1.3125rem] bg-bgForm ps-[1.94rem] pt-[1.44rem] placeholder-placeHolderColor font-Inter text-sm text-placeHolderColor customFocus"></textarea>
                    <button className="border rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-placeHolderColor font-Inter text-xs border-borderCard bg-bgForm  mt-[2rem]" type='submit'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='md:flex  flex-col justify-center md:mt-8 items-center text-center mb-72 hidden '>
                <h3 className='text-subtitlePurple xs:text-3xl lg:text-5xl clash-regular mb-28 text-center w-2/4 '>
                Subscribe to the <span className='text-titlePurple'>Newsletter</span>
                </h3>
                <Suscribe />
            </div>
            
            
        </section>
    )
}

export default Contact;