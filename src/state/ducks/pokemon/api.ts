

const getPokemonByName = async (name:string): Promise<any> =>{
    const {results: allPokemons} = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000').then(res => res.json());
    return allPokemons.filter((pokemon: any) => pokemon.name.includes(name) )
};

export {
    getPokemonByName
}