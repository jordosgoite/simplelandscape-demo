import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import useDebounce from '@/hooks/useDebounce';
import useGlobalStore from '@/store/useGlobalStore';
import { type Article } from '@/types/article';
import ArticleList from './ArticlesList';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const { productsList, totalProducts } = useGlobalStore((state) => state);
  const [orderParameter, setOrderParameter] = useState('name');
  const navigate = useNavigate();
  const productosFiltrados = useMemo<Article[]>(() => {
    if (!searchTerm) {
      return productsList;
    }
    return productsList.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12 relative">
      <div className="flex justify-center w-full">
        <div className="mb-3 xl:w-[40%]">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-auto mr-2 px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Buscar Producto"
              aria-label="Search"
              aria-describedby="button-addon3"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="relative inline-block mr-4">
          <button
            type="button"
            className="border border-gray-300 rounded-md bg-white text-gray-700 py-2 px-3 shadow-sm flex items-center"
            onClick={() => {
              setShowMenu((prevState) => !prevState);
            }}
          >
            Ordenar por
            <svg
              className={`ml-2 w-4 h-4 ${showMenu ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {showMenu && (
            <ul className="absolute z-10 w-48 rounded-md bg-white shadow-lg top-full mt-1 left-0">
              <li
                className={` text-gray-700 hover:bg-gray-100 ${
                  orderParameter === 'name' ? 'bg-[#3cc2b8]' : 'bg-transparent'
                }`}
              >
                <button
                  className="w-full text-left px-4 py-2"
                  onClick={() => {
                    setOrderParameter('name');
                    setShowMenu(false);
                  }}
                >
                  Nombre
                </button>
              </li>
              <li
                className={`text-gray-700 hover:bg-gray-100 ${
                  orderParameter === 'description'
                    ? 'bg-[#3cc2b8]'
                    : 'bg-transparent'
                }`}
              >
                <button
                  className="w-full text-left px-4 py-2"
                  onClick={() => {
                    setOrderParameter('description');
                    setShowMenu(false);
                  }}
                >
                  Descripción
                </button>
              </li>
            </ul>
          )}
        </div>
        <button
          className="h-auto ml-4 flex flex-col items-center cursor-pointer fixed right-4 mr-4"
          disabled={totalProducts===0}
          onClick={() => {
            navigate('/purchase');
          }}
        >
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00a99d"
              style={{ width: '60px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-blue">{totalProducts}</p>
          </div>
        </button>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {!productosFiltrados ? (
          <div>Loading...</div>
        ) : (
          <ArticleList
            articles={
              productosFiltrados.sort((a, b) => {
                if (orderParameter === 'name') {
                  return a.nombre.localeCompare(b.nombre);
                } else {
                  return a.descripcion.localeCompare(b.descripcion);
                }
              }) ?? []
            }
          />
        )}
      </div>
    </div>
  );
};

export default Articles;
