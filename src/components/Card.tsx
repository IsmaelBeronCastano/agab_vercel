

interface Props{
    foto: string
    nom: string
    descripcio: string
}

const Card = ({foto, nom, descripcio}:Props) => {
    return (
        <div className="bg-purple-500 p-4 rounded-lg sm:w-full md:w-3/6 md:items-center mt-4">
            <div className="flex justify-center">
                <img src={foto} alt="Imagen" className="w-full object-cover" />
            </div>
            <div className="bg-white p-2 mt-4 rounded-lg">
                <div>
                    <h3 className="text-xl text-center amatic-bold">
                        <span className="text-2xl text-center amatic-bold">Nom: </span>{nom}
                    </h3>
                </div>
                <div className='flex-col'>
                    <p className="text-center flex-wrap whitespace-pre-line indie-flower">{descripcio}</p>
                    <p className="alfa-slab text-md mt-2 flex-wrap text-center bg-purple-300 rounded-md">Les adopcions van amb contracte i seguiment</p>
                </div>
            </div>
        </div>
    );
};

export default Card;