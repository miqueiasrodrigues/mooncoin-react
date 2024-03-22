import React, { useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import Web3 from "web3";
import { useDispatch } from "react-redux";
import { setResponse } from "../../redux/appReducer";

interface HomeProps { }

const Home: React.FC<HomeProps> = (props) => {
  const dispatch = useDispatch();
  const [ethBalance, setEthBalance] = useState<string | null>(null);

  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const web3 = new Web3(window.ethereum);

        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        const balance = await web3.eth.getBalance(userAddress);
        const formattedBalance = web3.utils.fromWei(balance, 'ether');

        setEthBalance(formattedBalance);
        dispatch(setResponse({ message: "Conectado ao Metamask.", status: "success", data: null }));
      } catch (error) {
        console.error('Erro ao conectar à carteira Metamask:', error);
        dispatch(setResponse({ message: "Erro ao conectar à carteira Metamask.", status: "error", data: null }));
      }
    } else {
      dispatch(setResponse({ message: "A Metamask não está instalada.", status: "error", data: null }));
    }
  };

  return (
    <div className="home">
      <Card className="home-card">
        <div className="welcome">
          <h1>Explorando o Universo das Criptomoedas</h1>
          <p>
            Navegue pelas estrelas da economia digital com a MoonCoin e explore novas fronteiras de oportunidades de investimento.
          </p>
          <p>
            Saldo do Ethereum: {ethBalance ? `${ethBalance} ETH` : "N/A"}
          </p>
          <Button text="Conectar Metamask" action={connectToMetamask}/>
        </div>
      </Card>
      <Card className="home-card">
        <Icon
          className="moon-image"
          backgroundImage={"/assets/images/moon.png"}
        />
      </Card>
    </div>
  );
};

export default Home;
