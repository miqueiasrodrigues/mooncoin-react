import React from "react";
import "./Purchase.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ListView from "../../components/ListView/ListView";
import Icon from "../../components/Icon/Icon";
import { fetchData } from "../../service/fetchData";
import { Coin } from "../../models/interfaces/Coin";
import { useDispatch } from "react-redux";
import { setIsLoading, setResponse } from "../../redux/appReducer";

interface PurchaseProps { }

const Purchase: React.FC<PurchaseProps> = (props) => {
  const [coins, setCoins] = React.useState<Coin[]>([]);
  const [isNext, setIsNext] = React.useState<boolean>(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchDetails = async () => {
      dispatch(setIsLoading(true));
      const response = await fetchData(`coins/markets`, {
        vs_currency: "brl",
        order: "market_cap_desc",
        per_page: "5",
        page: isNext ? "1" : "2",
        x_cg_demo_api_key: "CG-2aiotQEMxNZ79AF9vkRUWwAm",
      });
      if (response.status === "success") {
        setCoins(response.data);
      }else{
        dispatch(setResponse(response))
      }
      dispatch(setIsLoading(false));
     
    };

    fetchDetails();

  }, [isNext]);

  const handleButtonClick = () => {
    setIsNext(!isNext);
  };

  return (
    <div className="purchase">
      <Header height={10}>
        <div className="purchase-header">
          <h3>Top 10 Criptomoedas com Maiores Ganhos e Perdas</h3>
          <Button text={isNext ? "Avançar" : "Voltar"} type="textButton" action={handleButtonClick} />
        </div>
      </Header>
      <Card height={90} width={80} className="purchase-card" borderRadius={16}>
        {coins.length === 0 ? (
          <p style={{ display: "flex", justifyContent: "center" }}>Sem moedas carregadas...</p>
        ) : (
          coins.map((coin) => (
            <ListView key={coin.id} height={20} to={`/crypto/${coin.id}`}>
              <div className="purchase-list">
                <Icon
                  backgroundImage={coin.image}
                  height={64}
                  width={64}
                  backgroundSize={100}
                />
                <span className="name">{coin.name}</span>
              </div>
              <span className="price">
                {coin.current_price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </ListView>
          ))
        )}
      </Card>
    </div>
  );
};

export default Purchase;
