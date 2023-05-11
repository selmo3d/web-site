import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = 'MyFavorites';

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

//Hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {

        //Verifiva se o item favorito já existe
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);

        //Nova lista recebe a lista anterior
        let newList = [...favorite];

        //Verifica se não tem favorito repetido e adiciona o item na lista de favoritos
        if (!repeatedFavorite) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        //Se for repetido ele vai ser retirado da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id);
        return setFavorite(newList);

    }

    return {
        favorite,
        addFavorite
    };

};