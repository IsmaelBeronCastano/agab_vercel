import Card from "./Card"
import Noticies from "./Noticies"
import gat1 from '../assets/adopcio/gat_1.jpg'
import gat2 from '../assets/adopcio/gat_2.jpg'
import gat3 from '../assets/adopcio/gat_3.jpg'
import gat5 from '../assets/adopcio/gat_5.jpg'
import gat6 from '../assets/adopcio/gat_6.jpg'
import gat7 from '../assets/adopcio/gat_7.jpg'
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
      <section className="w-full h-full md:flex md:flex-wrap justify-center gap-3">
        <Card  foto={gat1} nom="Blacky" color="bg-pink-300" descripcio={`
        Gat@ en adopció responsable.
        S'entreguen desparasitats, vacunats, i esterilitzats/des.
        Es fa contracte de seguiment i seguiment.
        Recordeu posar protecció a les finestres!!
        `} />
        <Card  foto={gat2} nom="Tigretó" color="bg-purple-300" descripcio={`
        Gat@ en adopció responsable.
        S'entreguen desparasitats, vacunats, i esterilitzats/des.
        Es fa contracte de seguiment i seguiment.
        Recordeu posar protecció a les finestres!!
        `} />
        <Card  foto={gat3} nom="Melissa" color="bg-orange-300" descripcio={`
        Gat@ en adopció responsable.
        S'entreguen desparasitats, vacunats, i esterilitzats/des.
        Es fa contracte de seguiment i seguiment.
        Recordeu posar protecció a les finestres!!
        `} />
       
        <Card  foto={gat5} nom="Fèlix" color="bg-indigo-300" descripcio={`
        Gat@ en adopció responsable.
        S'entreguen desparasitats, vacunats, i esterilitzats/des.
        Es fa contracte de seguiment i seguiment.
        Recordeu posar protecció a les finestres!!
        `} />
        <Card  foto={gat6} nom="Cinthia" color="bg-amber-300" descripcio={`
        Gat@ en adopció responsable.
        S'entreguen desparasitats, vacunats, i esterilitzats/des.
        Es fa contracte de seguiment i seguiment.
        Recordeu posar protecció a les finestres!!
        `} />
        <Card  foto={gat7} nom="Núvol" color="bg-blue-300" descripcio={`
        Gat@ en adopció responsable.
        S'entreguen desparasitats, vacunats, i esterilitzats/des.
        Es fa contracte de seguiment i seguiment.
        Recordeu posar protecció a les finestres!!
        `} />

      
      </section>
      <h3 className="text-2xl sm:w-5/6 md:1/4 rounded-lg p-3 alfa-slab mt-4 text-center mx-auto bg-purple-600 text-black mb-8">DONACIONS</h3>
      <section>
        <p className="text-2xl text-center amatic-bold"><span className="text-purple-600 alfa-slab text-xl">Fes-te TEAMER per 1 euro al mes!!</span></p>
        <div className="sm:w-full md:w-2/4 md:mx-auto text-center border-2 border-black rounded-md bg-purple-300 mt-3 mb-3">
          <a href="https://www.teaming.net/veronicagomez-martinez" 
          className= "text-2xl text-center mx-auto amatic-bold decoration-transparent hover:text-4xl hover:text-purple-800 cursor-pointer">Vull fer-me teamer</a>
          
        </div>
        <p className="text-2xl text-center amatic-bold mb-4">Si vols fer una donació PUNTUAL O MENSUAL pots fer-ho a NOM D' <span className="text-purple-600 alfa-slab text-xl">A.G.A.B.</span> a través de 
        <span className="text-purple-600 alfa-slab text-xl"> BIZZUM</span> o <span className="text-purple-600 alfa-slab text-xl">TRANSFERÈNCIA BANCÀRIA</span></p>
        <div className="flex-col text-center">
         <p className="text-4xl  amatic-bold pt-4 pb-4"><span className="text-center border-2 border-black rounded-md bg-purple-300 mt-3 p-1">BIZZUM</span></p> 
         <p className="text-4xl  amatic-bold pt-4 pb-8"><span className="lora text-4xl"> 689969006</span></p> 
          <p className="text-4xl amatic-bold pb-4"><span className="text-center border-2 border-black rounded-md bg-purple-300 mt-3 p-1">IBAN</span></p>
          <p className="text-4xl amatic-bold pt-4 pb-4"><span className="lora text-4xl">ES29 0182 9746 7002 0008 3106</span> </p>
        </div>
        <p className="text-2xl text-center amatic-bold mt-4"><span className="text-purple-600 alfa-slab text-xl">FES-TE SOCI!!</span></p>
        <p className="text-2xl text-center amatic-bold mt-4">Escull la frequència i la quota que millor et vagi, envians un correu per gestionar-ho!</p>
        <div className= "flex-wrap sm:w-full md:w-2/4 md:mx-auto text-2xl text-center indie-flower mt-4 mb-4">
          <a href="mailto:agabanimals@gmail.com">agabanimals@gmail.com</a></div>
        <p className="sm:w-full md:w-2/4 md:mx-auto text-center border-2 text-3xl border-black rounded-md bg-purple-300 mt-8 mb-3 p-1 lobster">Recorda que les donacions desgraven a la declaració d'Hisenda</p>
        <p className="text-black alfa-slab text-6xl text-center mt-10 mb-10">XARXES</p>
        <Xarxes />
      </section>
    </div>
  )
}

export default Main