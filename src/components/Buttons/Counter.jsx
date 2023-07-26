import { useState, useEffect } from 'react';

const Counter = ({ onAddToCart, onDecreaseItem, onDeleteItem, initialQuantity }) => {
  const [counter, setCounter] = useState(initialQuantity);
  const isValidCounter = counter > 0;

  useEffect(() => {
    setCounter(initialQuantity);
  }, [initialQuantity]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    onAddToCart(counter + 1);
  };

  const decrementCounter = () => {
    if (!isValidCounter) {
      return;
    }

    // Si la cantidad actual es 1, eliminar el producto del carrito
    if (counter === 0) {
      onDeleteItem();
    } else {
      setCounter((prevCounter) => prevCounter - 1);
      onDecreaseItem(counter - 1); // Pasar la nueva cantidad como argumento
    }
  };

  return (
    <div className="flex w-[80px]">
      <button
        type="button"
        onClick={decrementCounter}
        className="border w-6 h-6 border-borderCard rounded flex items-center justify-center clash-regular"
        disabled={!isValidCounter}
      >
        -
      </button>
      <span className="px-3 clash-regular">{counter}</span>
      <button
        type="button"
        className="border w-6 h-6 border-borderCard rounded flex items-center justify-center clash-regular"
        onClick={incrementCounter}
      >
        +
      </button>
    </div>
  );
};

export default Counter;


