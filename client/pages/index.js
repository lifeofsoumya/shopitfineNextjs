import Link from 'next/link'
import MyHead from '../components/MyHead'
import CollectEmail from '../components/CollectEmail'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to ShopItFine, Compare prices of all sites for the same product and save money"
        image="https://shopitfine.com/images/logo-min.png"
        url="https://shopitfine.com"
      />

      <section className="first-block">
        <div className="hero flex text-center flex-col items-center justify-center md:justify-end h-screen px-2 mt-10">
          <h1 className='text-2xl md:text-7xl font-bold text-white pb-3'>The <span className='headline'>Finest</span> Shopping</h1>
          <p className='tag-line md:text-xl'>Compare prices of all sites for the same product, <span>Save Money</span></p>
          <CollectEmail/>
          <img className='w-full md:w-3/6 mt-8' src="/images/sitehero.png" alt="" />


        </div>
      </section>
    </>
  )
}
