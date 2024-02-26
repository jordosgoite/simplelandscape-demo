import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '@/components/Button';
import Modal from '@/components/Modal/Modal';
import ModalMsg from '@/components/Modal/ModalMsg';
import useGlobalStore from '@/store/useGlobalStore';

const Purchase = () => {
  const {
    selectedProducts,
    updateSelectedProducts,
    updateTotalAmount,
    updateTotalProducts,
  } = useGlobalStore((state) => state);
  const totalPurchase = selectedProducts?.reduce((total, producto) => {
    return total + producto.total;
  }, 0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container my-12 mx-auto px-4 md:px-12 relative">
      <div
        className="flex flex-col flex-wrap bg-[#d0f5f2] rounded-lg"
        style={{
          padding: window.innerWidth < 768 ? '20px' : '100px 150px',
          color: '#00a99d',
          border: '3px #4a4b8c solid',
          fontSize: window.innerWidth < 768 ? '11px' : '16px',
        }}
      >
        <p className="mb-4 text-xl font-bold">
          Resumen de su compra
        </p>
        {!selectedProducts ? (
          <div>Loading...</div>
        ) : (
          <table>
            <thead style={{ textAlign: 'justify' }}>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Costo por unidad</th>
                <th>Total producto</th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((item, key) => (
                <tr key={key}>
                  <td>{item.nombre}</td>
                  <td>{item.cantidad}</td>
                  <td>{`${item.costo} €`}</td>
                  <td>{`${item.total.toFixed(2)} €`}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td className="text-xl md:text-sm font-bold">Total General</td>
                <td className="text-xl font-bold">{`${totalPurchase} €`}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-between w-full">
        <Button
          text="Seguir comprando"
          className="bg-[#00a99d] p-1 md:p-4 text-white hover:bg-[#3cc2b8] mt-10 rounded-lg"
          onClick={() => {
            navigate('/articles');
          }}
        />
        <Button
          text="Vaciar carrito"
          className="bg-[#00a99d] p-1 md:p-4 text-white hover:bg-[#3cc2b8] mt-10 rounded-lg"
          onClick={() => {
            updateSelectedProducts([]);
            updateTotalAmount(0);
            updateTotalProducts(0);
            navigate('/articles');
          }}
        />
        <Button
          text="Completar compra"
          className="bg-blue-500 p-1 md:p-4 text-white hover:bg-[#3cc2b8] mt-10 rounded-lg"
          onClick={() => {
            setShow(true);
          }}
        />
      </div>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
          updateTotalAmount(0);
          updateTotalProducts(0);
          navigate('/articles');
        }}
      >
        <ModalMsg typeModal="success" textModal="Su compra ha sido exitosa!" />
      </Modal>
    </div>
  );
};

export default Purchase;
