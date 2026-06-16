import { useEffect, useState } from "react";
import { GetCharacters } from "../services/get-characters";

export function useCharacters(){
  const [data, setData] = useState({info: {},results: []}); // Estado para guardar productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de productos
  const [error, setError] = useState(null); // Estado de error al traer productos

  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

    useEffect(() =>{
        setLoading(true);

        let url = `https://rickandmortyapi.com/api/character?page=${page}`;

        if (name) {
            url += `&name=${name}`;
        }

        GetCharacters(url)
        .then((data) => setData(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    },[page,name]);

    const nextPage = () => {
        setPage((prev) => prev + 1);
    };

    const prevPage = () => {
        setPage((prev) => prev - 1);
    };

    return {
        data,
        loading,
        error,
        nextPage,
        prevPage,
        name,
        setName,
    };
}