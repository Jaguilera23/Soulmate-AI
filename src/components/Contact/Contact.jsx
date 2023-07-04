import './Contact.css';
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import Suscribe from "../Suscribe/Suscribe";

const Contact = () => {




    return (
        <section className="mt-[15.5rem]">
            <div className="flex justify-around mb-[9.81rem]">
                <div className=" text-left w-[33.1875rem]">
                    <HeadingTitle subTitle1='Discover AI-generated' principalTitle='characters for Virtual' />
                    <p>We are delighted to assist you in finding authentic and meaningful romantic and friendly relationships. Our team is committed to providing you with the best possible service. If you have any questions, comments, or would like to share your experiences, please don`t hesitate to get in touch with us. We value your trust and look forward to hearing from you.</p>
                    </div>
                <form action="" method="" className="flex flex-col ">
                    <input type="email" name="email" placeholder="Email" className="w-[33.4375rem] h-[5.125rem] border-borderCard  rounded-[1.3125rem] bg-bgForm ps-[1.94rem] placeholder-placeHolderColor font-Inter text-sm mb-[1.62rem] customFocus text-placeHolderColor" />
                    <input type="text" placeholder="Subject" className="w-[33.4375rem] h-[5.125rem]  rounded-[1.3125rem] bg-bgForm ps-[1.94rem] placeholder-placeHolderColor font-Inter text-sm mb-[1.62rem] customFocus text-placeHolderColor" />
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className=" rounded-[1.3125rem] bg-bgForm ps-[1.94rem] pt-[1.44rem] placeholder-placeHolderColor font-Inter text-sm text-placeHolderColor customFocus"></textarea>
                </form>
            </div>
            <div className='flex  flex-col justify-center mt-8 items-center text-center mb-72'>
                <h3 className='text-subtitlePurple text-5xl clash-regular mb-28 text-center w-2/4'>
                    Texto  <span className='text-titlePurple'>simulado</span> que se <span className='text-titlePurple'>Subscriban</span> al boletin
                </h3>
                <Suscribe />
            </div>
            
            
        </section>
    )
}

export default Contact;