interface CircleProps {
  CircleColor: String;
}

function Circle({ CircleColor }: CircleProps) {
  return (
    <div className="w-20 h-20 text-2xl text-teal-800 bg-rose-400">
      {CircleColor}
    </div>
  );
}

export default Circle;
