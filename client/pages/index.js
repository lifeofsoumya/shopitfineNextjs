import Link from 'next/link'
import MyHead from '../components/MyHead'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <section className="first-block">
        <div className="hero flex text-center flex-col items-center justify-end h-screen px-2">
          <h1 className='text-2xl md:text-7xl font-bold text-white pb-3'>The <span className='headline'>Finest</span> Shopping</h1>
          <p className='tag-line md:text-xl'>Compare prices of all sites for the same product, <span>Save Money</span></p>
          <form className="rounded-lg md:rounded-full p-1 px-2 my-10 border-2 border-indigo-500">
              <input className="text-white border-1 bg-transparent border-gray-100 p-2 rounded-l-lg focus:outline-none autofocus w-full md:w-auto" spellCheck="false" type="email" placeholder='Enter your email' required/>
              <input className="cursor-pointer py-1 px-3 border-2 border-indigo-500 bg-indigo-500 hover:bg-indigo-600 text-white transition-all duration-300 font-bold rounded-lg md:rounded-full w-full md:w-auto " type="submit" value="Get Early Access" />
          </form>
          <img className='w-full md:w-3/6 mt-8' src="/images/sitehero.png" alt="" />


        </div>
      </section>
    </>
  )
}
