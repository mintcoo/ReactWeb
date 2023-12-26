import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";
const BASE_URL_NICO = "https://ohlcv-api.nomadcoders.workers.dev";

export async function fetchCoins() {
  const { data } = await axios(`${BASE_URL}/coins`);
  return data.slice(0, 100);
}

export async function fetchCoinInfo(coinId: string) {
  const { data: coinData } = await axios(`${BASE_URL}/coins/${coinId}`);
  return coinData;
}

export async function fetchCoinPrice(coinId: string) {
  const {
    data: {
      quotes: { USD: coinPrice },
    },
  } = await axios(`${BASE_URL}/tickers/${coinId}`);
  return coinPrice;
}

export async function fetchCoinHistory(coinId: string) {
  const { data: coinHistory } = await axios(
    `${BASE_URL_NICO}/?coinId=${coinId}`
  );
  return coinHistory;
}

// ============ 연습용 메이플 정보 ===============
export async function fetchMapleOcid() {
  const { data } = await axios({
    url: `${process.env.REACT_APP_API_URL}/maplestory/v1/id`,
    method: "get",
    headers: {
      "x-nxopen-api-key": `${process.env.REACT_APP_API_KEY}`,
    },
    params: {
      // 인자로 보낼 데이터
      // get요청은 params로 담아 보내야한다
      character_name: "꿀묘",
    },
  });
  return data.ocid;
}
