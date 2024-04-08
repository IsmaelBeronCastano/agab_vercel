import Card from "./Card"
import Noticies from "./Noticies"
import blanquet from '../assets/blanquet_ferit.jpg'
import Xarxes from "./Xarxes"



const Main = () => {
  return (
    <div className="container w-full h-full flex-row">
      <h2 className="text-4xl amatic-bold pt-4 mb-10 pl-2 text-center">Controlem colònies del carrer i mètode CER </h2>
      <h3 className="text-2xl sm:w-5/6 md:1/4 rounded-lg p-3 alfa-slab text-center mx-auto bg-purple-600 text-white mb-8">NOTICIES</h3>
      <section className="w-full h-full flex justify-center">
        <Noticies />
      </section>
      <h3 className="text-2xl sm:w-5/6 md:1/4 rounded-lg p-3 alfa-slab mt-4 text-center mx-auto bg-purple-600 text-black mb-8">GATS EN ADOPCIÓ</h3>
      <section className="w-full h-full md:flex justify-center gap-3">
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
        <Card  foto={blanquet} nom="Blanquet" descripcio={`
        El blanquet es molt carinyós.
        Fa temps que es amb nosaltres.
        Busca una familia que l'estimi
        `} />
      
      </section>
      <h3 className="text-2xl sm:w-5/6 md:1/4 rounded-lg p-3 alfa-slab mt-4 text-center mx-auto bg-purple-600 text-black mb-8">DONACIONS</h3>
      <section>
        <p className="text-2xl text-center amatic-bold"><span className="text-purple-600 alfa-slab text-xl">Fes-te TEAMER per 1 euro al mes!!</span></p>
        <div className="sm:w-full md:w-2/4 md:mx-auto text-center border-2 border-black rounded-md bg-purple-300 mt-3 mb-3">
          <a href="https://www.teaming.net/veronicagomez-martinez" 
          className= "text-2xl text-center mx-auto amatic-bold decoration-transparent hover:text-4xl hover:text-purple-800 cursor-pointer">Vull fer-me teamer</a>
          
        </div>
        <p className="text-2xl text-center amatic-bold">Si vols fer una donació PUNTUAL O MENSUAL pots fer-ho a NOM D' <span className="text-purple-600 alfa-slab text-xl">A.G.A.B.</span> a través de 
        <span className="text-purple-600 alfa-slab text-xl"> BIZZUM</span> o <span className="text-purple-600 alfa-slab text-xl">TRANSFERÈNCIA BANCÀRIA</span></p>
        <div className="flex-col">
         <p className="text-4xl text-center amatic-bold pt-4 pb-4"><span className="text-center border-2 border-black rounded-md bg-purple-300 mt-3 mb-3 p-1">BIZZUM</span> <span className="lora text-4xl"> 689969006</span></p> 
          <p className="text-4xl text-center amatic-bold"><span className="text-center border-2 border-black rounded-md bg-purple-300 mt-3 mb-3 p-1">IBAN</span><span className="lora text-4xl"> ES29 0182 9746 7002 0008 3106</span> </p>
        </div>
        <p className="text-2xl text-center amatic-bold mt-4"><span className="text-purple-600 alfa-slab text-xl">FES-TE SOCI!!</span></p>
        <p className="text-2xl text-center amatic-bold">Escull la frequència i la quota que millor et vagi, envians un correu per gestionar-ho!</p>
        <p className= "sm:w-full md:w-2/4 md:mx-auto text-2xl text-center indie-flower border-8 border-purple-800 rounded-xl mt-4 mb-4">agabanimals@gmail.com</p>
        <p className="sm:w-full md:w-2/4 md:mx-auto text-center border-2 text-3xl border-black rounded-md bg-purple-300 mt-3 mb-3 p-1 lobster">Recorda que les donacions desgraven a la declaració d'Hisenda</p>
        <p className="text-purple-600 alfa-slab text-6xl text-center mt-10 mb-10">XARXES</p>
        <Xarxes />
      </section>
    </div>
  )
}

export default Main