
const ContactUs = () => {
    return (
        <div className='mx-auto py-10 mt-20 my-10 flex flex-col items-center justify-center'>
                <div className='text-4xl text-center font-bold mb-4'>Contact Us</div>
            <div className=''>
                <form className='w-full max-w-lg'>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-first-name'>
                                First Name
                            </label>
                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' type='text' placeholder='Jane' />
                        </div>
                        <div className='w-full md:w-1/2 px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-last-name'>
                                Last Name
                            </label>
                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white' id='grid-last-name' type='text' placeholder='Doe' />
                        </div>
                    </div>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-email'>
                                Email
                            </label>
                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-email' type='email' placeholder='jane.doe@example.com' />
                        </div>
                    </div>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-message'>
                                Message
                            </label>
                            <textarea className='no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none' id='grid-message'></textarea>
                        </div>
                    </div>
                    <div className='md:flex md:items-center'>
                        <div className='md:w-1/3'>
                            <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='button'>
                                Send
                            </button>
                        </div>
                        <div className='md:w-2/3'></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;