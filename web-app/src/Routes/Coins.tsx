import { Outlet } from "react-router-dom";

function Coins() {
  return (
    <>
      <div className="text-4xl">Coins</div>
      <Outlet />
    </>
  );
}

export default Coins;
