import React, { useState } from 'react';

export default function Home() {
  const [tnved, setTnved] = useState('');
  const [weight, setWeight] = useState('');
  const [value, setValue] = useState('');
  const [results, setResults] = useState(null);

  const calculate = () => {
    const customsValue = parseFloat(value);
    const kg = parseFloat(weight);
    const duty = customsValue * 0.1 + (kg * 0.06 * 1.1); // 1.1 = пример курса евро
    const fee = customsValue * 0.004;
    const vat = (customsValue + duty + fee) * 0.12;
    setResults({ duty, fee, vat });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-xl font-bold mb-4">Калькулятор логиста</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Код ТН ВЭД</label>
          <input
            type="text"
            value={tnved}
            onChange={e => setTnved(e.target.value)}
            className="w-full border p-2 rounded-lg"
            placeholder="напр. 9403109800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Вес (кг)</label>
          <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            className="w-full border p-2 rounded-lg"
            placeholder="введите вес"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Таможенная стоимость ($)</label>
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="w-full border p-2 rounded-lg"
            placeholder="введите сумму"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Инкотермс</label>
          <select className="w-full border p-2 rounded-lg">
            <option>Выберите (заглушка)</option>
            <option>FOB</option>
            <option>DDP</option>
            <option>CIF</option>
          </select>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition"
        >
          Рассчитать платежи
        </button>

        {results && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl">
            <h2 className="font-semibold mb-2">Результаты расчета:</h2>
            <p>Пошлина: ${results.duty.toFixed(2)}</p>
            <p>Сбор: ${results.fee.toFixed(2)}</p>
            <p>НДС: ${results.vat.toFixed(2)}</p>
            <div className="mt-2 text-sm text-gray-500">Документы и проверки — в разработке</div>
          </div>
        )}
      </div>
    </div>
  );
}

