import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { clientAxios } from './config/clientAxios';
import { useNavigate } from 'react-router-dom';

const backgroundImage = 'https://scontent.fsal13-1.fna.fbcdn.net/v/t39.30808-6/453177677_902235635279726_4070072107231846285_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=PtW0SZzYlQcQ7kNvgEfV1mi&_nc_ht=scontent.fsal13-1.fna&oh=00_AYCjE4U-1Cwflsu0fVcNyUkPpF51C5tKCh6ktWchuSSGPw&oe=66C9D459';

export const AddDeportes = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()

  const file = watch("foto");
  const fotoPreview = file instanceof FileList && file.length > 0 ? URL.createObjectURL(file[0]) : ""

  const navigate = useNavigate();

  const enviarDatos = async (data) => {
    setLoading(true)
    const payload = new FormData()
    payload.append("foto", data.foto[0])
    payload.append("nombre", data.nombre)
    console.log(payload.get("foto"));
    console.log(payload.get("nombre"));
    await clientAxios.postForm("/deportes", payload)

    setLoading(false)
    navigate("/admin/menuOpciones");
  }

  const nameValue = watch('nombre') || '';

  useEffect(() => {
    if (nameValue) {
        // Capitaliza la primera letra
        const capitalized = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
        const sanitized = capitalized.replace(/[^A-Za-z\s]/g, ''); // Elimina caracteres no permitidos
        setValue('nombre', sanitized, { shouldValidate: true });
    }
}, [nameValue, setValue]);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}
      >

      </div>

      <div className="relative max-w-lg w-full bg-black p-6 rounded-lg shadow-md dark:bg-white dark:text-black">
        <div className="mb-6 text-center">
          <div className="w-48 h-48 border-2 border-dashed border-yellow-500 rounded-lg mx-auto mb-4 overflow-hidden">
            {fotoPreview ? <img
              src={fotoPreview}
              alt="Foto del Deporte"
              className="w-full h-full object-cover"
            /> : ""}
            <p className="text-gray-600">Sube una foto</p>

          </div>
          <input
            type="file"
            accept="image/*"
            {...register("foto", {
              required: "Sube una imagen",
              validate: (FileList) =>
                FileList[0] && FileList[0].type.startsWith('image/') || "El archivo debe ser una imagen",
            }
            )}
            className="block mx-auto text-blue-600 border border-blue-600 rounded-md py-1 px-3 hover:bg-blue-50 transition duration-150 ease-in-out"
          />
          {errors.foto && <p className="text-red-500 text-sm mt-2">{errors.foto.message}</p>}
        </div>

        <h2 className="text-xl font-semibold text-center mb-6">Añadir Nuevo Deporte</h2>
        <form onSubmit={handleSubmit(enviarDatos)}>
          {/* Campo 1: Nombre del Deporte */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="nombre">
              Nombre del Deporte
            </label>
            <input
              type="text"
              id="nombre"
              {...register("nombre",
                {
                  required: true,
                  validate: value => /^[A-Za-z\s]*$/.test(value) || "Solo se permiten letras",
                }
              )}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500`}
              required
            />
          </div>

          {/* Botón de Enviar */}
          <div className="text-center">
            <button
              disabled={loading}
              type="submit"
              className="inline-block rounded bg-blue-600 px-6 py-2 disabled:opacity-50 disabled:select-none   text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Guardar Deporte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
