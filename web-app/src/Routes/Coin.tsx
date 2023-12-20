import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();

  return <h1>여기는 {coinId} 정보입니다</h1>;
}

export default Coin;
