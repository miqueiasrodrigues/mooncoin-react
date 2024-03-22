import React from "react";
import ReactApexChart from "react-apexcharts";
import { fetchData } from "../../service/fetchData";
import { Coin } from "../../models/interfaces/Coin";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Icon from "../../components/Icon/Icon";
import "./Crypto.css";
import { useDispatch } from "react-redux";
import { setIsLoading, setResponse } from "../../redux/appReducer";

interface CryptoProps {

}

const Crypto: React.FC<CryptoProps> = () => {
  const [coinData, setCoinData] = React.useState<Coin>();
  const { id } = useParams();
  const dispatch = useDispatch();


  React.useEffect(() => {
    const fetchCoinData = async () => {
      dispatch(setIsLoading(true));

      const response1 = await fetchData(`coins/${id}/market_chart`, {
        x_cg_demo_api_key: "CG-2aiotQEMxNZ79AF9vkRUWwAm",
        vs_currency: "brl",
        days: "8",
        interval: "daily",
      });

      if (response1.status === "success") {
        setCoinData(response1.data);
      }

      const response2 = await fetchData(`coins/markets?ids=${id}`, {
        vs_currency: "brl",
        x_cg_demo_api_key: "CG-2aiotQEMxNZ79AF9vkRUWwAm",
      });

      if (response2.status === "success") {
        setCoinData(prevState => ({
          ...prevState,
          ...response2.data[0]
        }));
      } else {
        dispatch(setResponse(response2))
      }
      dispatch(setIsLoading(false));
    };
    fetchCoinData();
  }, []);

  if (!coinData) {
    return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>Moeda não carregada...</div>;
  }

  const chartOptions = {
    chart: {
      height: 600,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        color: 'var(--white-color)'
      }
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: `Gráfico de Preço para ${coinData.name}`,
      align: 'left',
      style: {
        color: 'var(--white-color)'
      }
    },
    xaxis: {
      type: 'datetime',
      style: {
        color: 'var(--white-color)'
      }
    },
    yaxis: {
      title: {
        text: 'Preço (BRL)',
      },
      style: {
        color: 'var(--white-color)'
      }
    },
    colors: ['var( --nebula-purple)']
  };

  const chartSeries = [{
    name: 'Preço',
    data: coinData.prices,
  }];

  return (
    <div className="crypto">
      <Card className="crypto-card">
        <Icon
          backgroundImage={coinData.image}
          width={120}
          height={120}
        />
        <div className="crypto-details">
          <h3>{coinData.name} - Detalhes</h3>
          <p>Preço Atual: R$ {coinData.current_price}</p>
          <p>Variação de Preço (24h): {coinData.price_change_24h}</p>
          <p>Alta (24h): R$ {coinData.high_24h}</p>
          <p>Baixa (24h): R$ {coinData.low_24h}</p>
          <p>Volume de Mercado: {coinData.total_volume}</p>
        </div>
      </Card>
      <ReactApexChart options={chartOptions as ApexCharts.ApexOptions} series={chartSeries} type="line" height={250} width={400} />
    </div>
  );
};

export default Crypto;
