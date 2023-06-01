import Link from 'next/link'
import MyHead from '../components/MyHead'
import CollectEmail from '../components/CollectEmail'

const gamepadImg = ['GamePad.jpg', 'GamePad2.jpg', 'GamePad3.jpg']

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
      <section>
          <h2 className='text-2xl md:text-3xl text-center font-bold text-white pb-3'>Explore <span className='headline'>Trending</span> Products</h2>
          <hr className="w-40 mx-auto h-3 my-4" />
          <div className="prod w-8/12 mx-auto flex flex-col md:flex-row gap-3">
            {gamepadImg.map((img, i) => (
              <span className=''>
                <img key={i} className='w-full md:w-8/12 mx-auto rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer' src={`/images/products/game/${img}`} alt="" />
              </span>
            ))}
          </div>
      </section>
    </>
  )
}
