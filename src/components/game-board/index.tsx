const GameBoard = () => {
  const rows = 6;
  const cols = 7;
  const board = Array(rows).fill(Array(cols).fill(null));

  return (
    <div className="grid grid-cols-7 gap-[0.5rem] p-[1rem] pb-[2rem] bg-white rounded-3xl border-[0.2rem] border-[#000] shadow-custom-shadow z-10">
      {board.map((row, rowIndex) =>
        row.map((_: null, colIndex: number) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="md:w-16 md:h-16 w-6 h-6 sm:w-9 sm:h-9 bg-[#7945FF] border-[0.3rem] border-[#000] shadow-custom-shadow-2 rounded-full cursor-pointer"
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
