import { useLocation, useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  const name = location.state;
  console.log(name, "name");

  return <div className="text-2xl text-sky-700">여기는 {name} 정보입니다</div>;
}

export default Coin;
