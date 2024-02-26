import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Purchase from '../Purchase';

const preSelectedProducts = [
  { nombre: 'Galletas de Avena', cantidad: 2, costo: 10, total: 20 },
  { nombre: 'Jugo de Naranja Natural', cantidad: 1, costo: 5, total: 5 },
];
vi.mock('@/store/useGlobalStore', async () => {
  const mod = await vi.importActual('@/store/useGlobalStore');
  const response = vi.fn().mockReturnValue({
    selectedProducts: [
      { nombre: 'Galletas de Avena', cantidad: 2, costo: 10, total: 20 },
      { nombre: 'Jugo de Naranja Natural', cantidad: 1, costo: 5, total: 5 },
    ],
    totalProducts: 0,
  });
  return {
    ...mod,
    default: response,
  };
});

describe('Purchase component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Purchase />
      </BrowserRouter>
    );
  });
  it('should render the purchase form', () => {
    const purchaseFormTitle = screen.getByText('Resumen de su compra');
    expect(purchaseFormTitle).toBeInTheDocument();
    expect(screen.queryByRole('table')).toBeInTheDocument();
  });

  it('should render the buttons vaciar carrito, seguir comprando y completar compra', () => {
    const buyingButton = screen.getByRole('button', {
      name: /Seguir comprando/i,
    });
    expect(buyingButton).toBeInTheDocument();
    const emptyCartButton = screen.getByRole('button', {
      name: /Vaciar carrito/i,
    });
    expect(emptyCartButton).toBeInTheDocument();
    const resumePurchaseButton = screen.getByRole('button', {
      name: /Completar compra/i,
    });
    expect(resumePurchaseButton).toBeInTheDocument();
  });

  it('should render the selected products in the form', () => {
    const productOne = screen.getByText('Galletas de Avena');
    expect(productOne).toBeInTheDocument();
    const productTwo = screen.getByText('Jugo de Naranja Natural');
    expect(productTwo).toBeInTheDocument();
  });

  it('should render the correct total purchase amount', () => {
    const totalAmount = preSelectedProducts?.reduce((total, producto) => {
      return total + producto.total;
    }, 0);
    const totalAmountText = screen.getByText(`${totalAmount} €`);
    expect(totalAmountText).toBeInTheDocument();
  });
});
