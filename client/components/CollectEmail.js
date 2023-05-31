import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const CollectEmail = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if(email) setSubmitted(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://formspree.io/f/mrgvvwdd', { email });
        try {
            if(submitted) return toast('You have already submitted your email.');
            await axios.post('https://formspree.io/f/mrgvvwdd', { email });
            setSubmitted(true);
            toast.success('Email submitted successfully!');
            setEmail('');
            localStorage.setItem('email', email);
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
        }
    };

    if(submitted) return (
        <div className="rounded-lg md:rounded-full p-1 px-2 my-5 border-2 border-indigo-500 inline-flex gap-2">
            <img src="/svg/verified.svg" className='w-4' alt="" />
            <p className="text-white text-center">Thank you for subscribing!</p>
        </div>
    )

    return (
        <>
        <form onSubmit={handleSubmit} className="rounded-lg md:rounded-full p-1 px-2 my-10 border-2 border-indigo-500">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="text-white border-1 bg-transparent border-gray-100 p-2 rounded-l-lg focus:outline-none autofocus w-full md:w-auto" spellCheck="false" type="email" placeholder='Enter your email' required/>
            <input className="cursor-pointer py-1 px-3 border-2 border-indigo-500 bg-indigo-500 hover:bg-indigo-600 text-white transition-all duration-300 font-bold rounded-lg md:rounded-full w-full md:w-auto " type="submit" value="Get Early Access" />
        </form>
        </>
    )
}

export default CollectEmail