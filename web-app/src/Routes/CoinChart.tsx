import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";
import Chart from "react-apexcharts";

interface chartProps {
  id: string;
}

interface IChartData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

// APEX CHARTS
// 현대적이고 인터랙티브한 오픈 소스 차트
// npm install --save react-apexcharts apexcharts
// 뒤에 apexcharts는 타입스크립트를 위한 것
// https://apexcharts.com

function CoinChart() {
  const { id: coinId } = useOutletContext<chartProps>();

  const { isLoading, data: historyData } = useQuery<IChartData[]>(
    ["history", coinId],
    () => fetchCoinHistory(coinId)
  );
  console.log(historyData);

  return (
    <>
      <div className="text-4xl">CoinChart {coinId}</div>;
      <div>
        {isLoading ? (
          <div>로딩중...</div>
        ) : (
          // <Chart
          //   options={{
          //     theme: { mode: "dark" },
          //     chart: {
          //       id: "basic-bar",
          //       toolbar: { show: false },
          //       background: "transparent",
          //     },
          //     grid: { show: false },
          //     stroke: { curve: "smooth", width: 2 },
          //     xaxis: {
          //       labels: { show: false },
          //       axisTicks: { show: false },
          //       // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          //     },
          //     yaxis: {
          //       labels: { show: false },
          //     },
          //   }}
          //   series={[
          //     {
          //       name: `${coinId} Price:`,
          //       data:
          //         historyData?.map((price) => parseFloat(price.close)) ?? [],
          //     },
          //   ]}
          //   type="line"
          //   width={500}
          //   height={300}
          // />
          // 위에는 막대그래프 아래는 코인그래프
          <Chart
            options={{
              theme: { mode: "dark" },
              chart: {
                type: "candlestick",
                toolbar: { show: false },
                background: "transparent",
              },
              grid: { show: false },
              stroke: { curve: "smooth", width: 2 },
              annotations: {
                xaxis: [
                  {
                    x: "Oct 06 14:00",
                    borderColor: "#00E396",
                    label: {
                      borderColor: "#00E396",
                      style: {
                        fontSize: "12px",
                        color: "#fff",
                        background: "#00E396",
                      },
                      orientation: "horizontal",
                      offsetY: 7,
                      text: "Annotation Test",
                    },
                  },
                ],
              },
              xaxis: {
                labels: { show: false },
                axisTicks: { show: false },
                // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
              },
              yaxis: {
                tooltip: {
                  enabled: true,
                },
              },
            }}
            series={[
              {
                name: `${coinId} Price:`,
                data:
                  historyData?.map((price) => {
                    const obj = {
                      x: new Date(price.time_open),
                      y: [
                        parseFloat(price.open),
                        parseFloat(price.high),
                        parseFloat(price.low),
                        parseFloat(price.close),
                      ],
                    };
                    return obj;
                  }) ?? [],
              },
            ]}
            type="candlestick"
            width={800}
            height={300}
          />
        )}
      </div>{" "}
    </>
  );
}

export default CoinChart;
