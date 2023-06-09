const Counter = () => {
  return (
    <main className="mx-auto w-96 flex flex-col gap-8 items-center">
      <h1>Counter</h1>
      <p className="text-7xl">0</p>
      <div className="flex place-content-between w-full">
        <button>Decrement</button>
        <button>Reset</button>
        <button>Increment</button>
      </div>
    </main>
  );
};

export default Counter;
