import React from 'react';

function App() {
  const [color, setColor] = React.useState('red');

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
        Choose a Background Color
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setColor('red')}
          className="px-6 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Red
        </button>
        <button
          onClick={() => setColor('blue')}
          className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Blue
        </button>
        <button
          onClick={() => setColor('green')}
          className="px-6 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Green
        </button>
        <button
          onClick={() => setColor('yellow')}
          className="px-6 py-2 rounded bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
