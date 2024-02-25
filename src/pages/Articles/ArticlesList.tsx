import React, { useState } from 'react';
import { Option, Select } from '@material-tailwind/react';
import Button from '@/components/Button';
import { productQuantity } from '@/lib/constants';
import { getProductDate } from '@/lib/helper';
import useGlobalStore from '@/store/useGlobalStore';
import { type Article, type SelectedArticle } from '@/types/article';

export interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [selectedArticles, setSelectedArticles] = useState<SelectedArticle[]>(
    []
  );
  const { updateSelectedProducts, updateTotalProducts, updateTotalAmount } =
    useGlobalStore((state) => state);
  if (!articles?.length) {
    return <div>No se encontraron productos</div>;
  }

  const addArticle = (
    articleId: number,
    articleName: string,
    cost: number,
    quantity: number,
    totalAmount: number
  ) => {
    const newProduct = {
      id: articleId,
      nombre: articleName,
      costo: cost,
      cantidad: quantity,
      total: totalAmount,
    };
    if (selectedArticles.length > 0) {
      const productIndex = selectedArticles.findIndex(
        (product) => product.id === articleId
      );
      if (productIndex !== -1) {
        const selectedArticlesCopy = [...selectedArticles];
        selectedArticlesCopy.splice(productIndex, 1, newProduct);
        setSelectedArticles(selectedArticlesCopy);
      } else {
        setSelectedArticles([...selectedArticles, newProduct]);
      }
    } else {
      setSelectedArticles([newProduct]);
    }
  };

  const handleSubmitArticles = () => {
    selectedArticles.length && updateSelectedProducts(selectedArticles);
    updateTotalProducts(
      selectedArticles.reduce((total, producto) => {
        return total + producto.cantidad;
      }, 0)
    );
    updateTotalAmount(
      selectedArticles.reduce((total, producto) => {
        return total + producto.total;
      }, 0)
    );
  };

  return (
    <>
      {articles.map((article) => (
        <div
          key={article.id}
          className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href={article.img} target="_blank" rel="noreferrer">
              {article.img ? (
                <img
                  alt={article.nombre}
                  className="block w-full"
                  src={article.img}
                  style={{ height: '250px' }}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[215px] w-[370px] bg-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a
                  className="no-underline hover:underline text-black"
                  href={article.img}
                  target="_blank"
                  rel="noreferrer"
                >
                  {article.nombre}
                </a>
              </h1>
              <p className="text-grey-darker text-sm">
                {article.fechaDeValidez}
              </p>
            </header>
            <h2 className="p-4">
              {article.descripcion.length <= 40
                ? article.descripcion
                : article.descripcion.substring(0, 167) + '...'}
            </h2>
            <footer className="flex flex-col items-left justify-between leading-none p-2 md:p-4">
              <div className="flex flex-row items-center justify-between relative">
                <h1 className="text-grey-darker text-base">
                  {`Costo: ${article.costo}€`}
                </h1>
                <div className="flex flex-row items-center relative w-15">
                  <Select
                    disabled={article.fechaDeValidez === getProductDate(false)}
                    label="Cantidad:"
                    onChange={(e: any) => {
                      addArticle(
                        article.id,
                        article.nombre,
                        article.costo,
                        parseInt(e, 10),
                        article.costo * e
                      );
                    }}
                  >
                    {productQuantity.map((item, key) => (
                      <Option value={item.toString()} key={key}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <h1 className="text-grey-darker text-base mt-6">
                {selectedArticles.map((item) => {
                  if (item.id === article.id) {
                    return `Total: ${item.total.toFixed(2)}€`;
                  }
                  return '';
                })}
              </h1>
              <Button
                text="Agregar al carrito"
                className="bg-[#00a99d] p-4 text-white hover:bg-[#3cc2b8] mt-10"
                disabled={article.fechaDeValidez === getProductDate(false)}
                onClick={() => {
                  handleSubmitArticles();
                }}
              />
            </footer>
          </article>
        </div>
      ))}
    </>
  );
};
export default ArticleList;
