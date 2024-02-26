import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Articles from '../Articles';

vi.mock('@/hooks/useDebounce', async () => {
  const mod = await vi.importActual('@/hooks/useDebounce');
  const response = vi.fn().mockReturnValue('manzana');
  return {
    ...mod,
    response,
  };
});
vi.mock('@/store/useGlobalStore', async () => {
  const mod = await vi.importActual('@/store/useGlobalStore');
  const response = vi.fn().mockReturnValue({
    productsList: [
      { id: 2, nombre: 'Galletas de Avena', costo: 4.5 },
      { id: 3, nombre: 'Jugo de Naranja Natural', costo: 3 },
    ],
    totalProducts: 0,
  });
  return {
    ...mod,
    response,
  };
});

describe('Articles component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Articles />
      </BrowserRouter>
    );
  });
  it('should render the search input, ordering button, and products', async () => {
    const searchInput = screen.getByPlaceholderText('Buscar Producto');
    const orderingButton = screen.getByRole('button', { name: 'Ordenar por' });
    expect(screen.getByText('Jugo de Naranja Natural')).toBeInTheDocument();
    expect(screen.getByText('Galletas de Avena')).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(orderingButton).toBeInTheDocument();
  });

  it('should render the list of products', async () => {
    const productOne = screen.getByText('Jugo de Naranja Natural');
    const productTwo = screen.getByText('Galletas de Avena');
    expect(productOne).toBeInTheDocument();
    expect(productTwo).toBeInTheDocument();
  });
});
