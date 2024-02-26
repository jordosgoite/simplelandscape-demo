import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { getProductDate } from '@/lib/helper';
import ArticleList from '../ArticlesList';

vi.doMock('@/store/useGlobalStore', async () => {
  const mod = await vi.importActual('@/store/useGlobalStore');
  const response = vi.fn().mockReturnValue({
    selectedProducts: [
      { nombre: 'Galletas de Avena', cantidad: 2, costo: 10, total: 20 },
      { nombre: 'Jugo de Naranja Natural', cantidad: 1, costo: 5, total: 5 },
    ],
    updateSelectedProducts: jest.fn(),
    updateTotalProducts: jest.fn(),
    updateTotalAmount: jest.fn(),
  });
  return {
    ...mod,
    default: response,
  };
});

describe('ArticleList component', () => {
  beforeEach(() => {
    render(
      <ArticleList
        articles={[
          {
            id: 1,
            nombre: 'Galletas de Avena',
            descripcion: 'This is a product description.',
            fechaDeValidez: getProductDate(true),
            costo: 10,
            img: 'https://example.com/image1.jpg',
          },
          {
            id: 2,
            nombre: 'Cebollas Blancas',
            descripcion: 'Another product description.',
            fechaDeValidez: getProductDate(false),
            costo: 5,
            img: 'https://example.com/image2.jpg',
          },
        ]}
      />
    ); 
  });

  it('should render the list of articles', async () => {
    const productOne = await screen.findAllByText(/Cebollas/i);
    expect(productOne.length).toBe(1);
    const imageproductOne = await screen.findByRole('img', { name: /Cebollas Blancas/i });
    expect(imageproductOne).toBeInTheDocument();
    const productTwo = await screen.findAllByText(/Galletas de Avena/i);
    expect(productTwo.length).toBe(1);
    const imageproductTwo = await screen.findByRole('img', { name: /Galletas de Avena/i });
    expect(imageproductTwo).toBeInTheDocument();
  });

  it('user should be able to select quantity and add to cart articles', async () => {
    const select =  screen.getByTestId('select-option-cantidad-1');
    expect(select).toBeInTheDocument();
    expect(select).not.toBeDisabled();
    const addToCartButton = screen.getByTestId('agregar-carrito-1');
    expect(addToCartButton).not.toBeDisabled();
  });

  it('should disable select and button for articles with expired date', async () => {
    const select =  screen.getByTestId('select-option-cantidad-2');
    expect(select).toBeInTheDocument();
    expect(select).toBeDisabled();
    const addToCartButton = screen.getByTestId('agregar-carrito-2');
    expect(addToCartButton).toBeDisabled();
  });

});
