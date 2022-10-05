import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Pagination } from 'components/Pagination';

const Main: React.FC = (): JSX.Element => {
    const { countPagePokemon, pokemonList } = useTypedSelector((state) => state.pokemon);
    const { getPokemonList } = useActions();

    let { search } = useLocation();

    const searchParams = new URLSearchParams(search);
    const pageParams = searchParams.get('page');

    useEffect(() => {
        getPokemonList(Number(pageParams) - 1, countPagePokemon);
    }, [pageParams]);

    return (
        <>
            <section className=" flex flex-col items-center min-h-screen body-font text-gray-600 ">
                <Pagination />
                <div className="container flex justify-between flex-wrap mx-auto px-32 py-10">
                    {pokemonList.map(({ name, url }) => (
                        <Link
                            key={name}
                            to={`/pokemon/${url.split('/')[url.split('/').length - 2]}`}
                            className="cursor-pointer grid m-8 h-20 place-items-center "
                        >
                            <div className="cursor-pointer rounded-lg bg-white shadow-lg">
                                <div className="flex w-full rounded-lg border-2 border-black bg-yellow-200 shadow">
                                    <label className="p-2 font-mono text-2xl font-medium">{name}</label>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Main;
