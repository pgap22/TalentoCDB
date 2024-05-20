import img_usuario from "../../../../../assets/usuario.png";

export const RegisterAthlete = () => {

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex gap-10 text-center border-solid border-2 border-amber-300 p-2 m-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    <p>Registrar Atleta en categoria SUB-U</p>
                </div>
                <section className="border-dashed bg-amber-50 w-9/12 border-2 border-orange-500 mb-24 lg:mb-12">
                    <form action="">
                        <center>
                            <img className="max-w-full h-auto rounded-full p-8 w-48" src={img_usuario} alt="" />
                            <a href="">

                                <button className="bg-amber-400 text-white rounded-full px-4 py-3 m-4">
                                    Agregar imagen
                                </button>
                            </a>
                        </center>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Nombres" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Apellidos" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Dirección" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Grado Académico" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Sección" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Código" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Nombre del encargado" />
                        <input className="rounded-lg h-10 border-solid border-2 border-gray-400 flex justify-center m-4" type="text" name="#" id="#" placeholder="  Télefono del encargado" />
                        </div>
                        <button className="bg-blue-500 text-white rounded-full px-4 py-4 m-4">
                            Crear perfil de atleta
                        </button>
                    </form>
                </section>
            </div>

        </>
    )
}