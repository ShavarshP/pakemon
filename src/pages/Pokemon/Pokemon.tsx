import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Pokemon: React.FC = (): JSX.Element => {
    const { pokemon } = useTypedSelector((state) => state.pokemon);
    const { getPokemon } = useActions();

    const { id } = useParams();

    useEffect(() => {
        getPokemon(Number(id));
    }, []);
    return (
        <>
            {pokemon && (
                <div className="mx-auto right-0 mt-2 w-60">
                    <div className="bg-white rounded overflow-hidden shadow-lg">
                        <div className="text-center p-4 bg-gray-800 border-b">
                            <img
                                className="h-36 w-36 text-white rounded-full mx-auto"
                                alt={pokemon?.name}
                                src={pokemon?.sprites?.back_default}
                            />

                            <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon?.name}</p>
                        </div>
                        <div className="border-b">
                            <span>
                                <a className="px-4 py-2 hover:bg-gray-100 flex">
                                    <div className="text-green-600">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">
                                            base experience
                                        </p>
                                        <p className="text-xs text-gray-500">{pokemon.base_experience}</p>
                                    </div>
                                </a>
                            </span>
                            <span>
                                <a className="px-4 py-2 hover:bg-gray-100 flex">
                                    <div className="text-gray-800">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">ability</p>
                                        <p className="text-xs text-gray-500">
                                            {pokemon.abilities.map(
                                                ({ ability }: { ability: { name: string; url: string } }) =>
                                                    `${ability.name} `,
                                            )}
                                        </p>
                                    </div>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Pokemon;
