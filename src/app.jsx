import React, { useState } from "react";
import Counters from "./components/counters.jsx";
import NavBar from "./components/navBar.jsx";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex(
      (counter) => counter.id === counterId
    );
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex(
      (counter) => counter.id === counterId
    );
    newCounters[elementIndex].value < 1
      ? (newCounters[elementIndex].value = 0)
      : newCounters[elementIndex].value--;
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
