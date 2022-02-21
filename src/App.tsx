import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppState } from "./state/store";
import { myNumberOperations } from "./state/ducks/myNumber";
import { UpdateOperation } from "./state/ducks/myNumber/interfaces/actions.interface";
import { pokemonOperations } from "./state/ducks/pokemon";

function App(props: any) {
  //variables locales
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState("");

  //states redux
  const number = useSelector((state: AppState) => state.myNumber.num);
  const pokemons = useSelector((state: AppState) => state.pokemon.data);
  const isLoading = useSelector((state: AppState) => state.pokemon.isLoading);
  const err = useSelector((state: AppState) => state.pokemon.err);

  //dispatch y operations
  const dispatch = useDispatch();
  const { updateNumber } = myNumberOperations;
  const { getPokemonByName } = pokemonOperations;

  useEffect(() => {
    dispatch(updateNumber(UpdateOperation.increment));
  }, []);

  const handleSearchChange = (e: any) => {
    const newValue = e.target.value;
    setSearch(newValue);
    if (newValue.length >= 3) {
      dispatch(getPokemonByName(newValue));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="App-main">
        <button
          className="App-button-main"
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateNumber(UpdateOperation.increment));
          }}
        >
          Incrementar
        </button>
        <span className="App-result-main">{number}</span>
        <button
          className="App-button-main"
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateNumber(UpdateOperation.decrement));
          }}
        >
          Decrementar
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setCheck(!check);
          }}
        >
          click
        </button>

        <hr />
        <h3>Obtener Pokemon</h3>
        <input
          type="text"
          placeholder="Buscar Pokemon"
          value={search}
          onChange={handleSearchChange}
        />
        <>
          {isLoading === true ? (
            <h1>CARGANDO......!!!!!</h1>
          ) : (
            <>
              {err !== null ? (
                <h3>TENEMOS UN ERROR!!!</h3>
              ) : (
                pokemons !== null &&
                pokemons.map((data: any) => (
                  <div key={data.name}>{data.name}</div>
                ))
              )}
            </>
          )}
        </>
      </main>
    </div>
  );
}

export default App;
