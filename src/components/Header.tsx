import Image from '../assets/agabGIMP.jpg'

const Header = () => {
  return (
    <div className="w-full flex flex-col sm:flex-col lg:flex-row lg:pl-20 items-center md:justify-between lg:w-full lg:justify-between h-25 pt-2 bg-purple-800">
        <div className="flex items-center">
            <img src={Image} id="agab" alt="Agab" className="w-24 h-full pl-1" />
        </div>
        <div className="flex flex-col align-center">
          <h1 className="text-white font-bold text-7xl mx-auto alfa-slab pt-2">A.G.A.B.</h1>
          <p className="text-white font-bold text-2xl caveat mx-auto pt-2 pb-3">Amics dels Gats i d'altres Animals de Balenyà</p>
        </div>
        <div className="flex flex-col  flex-start items-center pr-1">
            <a href="#" className="text-lg text-black rounded-md p-1 border-4 border-black lora mb-3 bg-white">bizzum: 689969006</a>
            <a href="#" className="text-lg text-black rounded-md p-1 border-4 border-black lora mb-3  bg-white">agabanimals@gmail.com</a>  
        </div>

    </div>
  )
}

export default Header