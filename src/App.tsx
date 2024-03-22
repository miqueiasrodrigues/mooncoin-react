import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import React from "react";
import Loading from "./components/Loading/Loading";
import Section from "./components/Section/Section";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { IResponse } from "./models/interfaces/Response";

const App: React.FC = () => {
  const response: IResponse = useSelector(
    (state: RootState) => state.app.response
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.app.isLoading
  );
  return (
    <main className="app">
      <Header
        height={15}
        nav={[
          { name: "Início", route: "/" },
          { name: "Ferramentas", route: "/features" },
          { name: "Comprar", route: "/purchase" },
          { name: "Sobre", route: "/about" },
        ]}
      >
        <div className="logo">
          <span>Moon</span>
          <span>Coin</span>
        </div>
      </Header>

      <Section height={response.message !== "" ? 75 : 85}>
        {isLoading && (
          <div className="section-loading">
            <Loading />
          </div>
        )}
        <div
          className="conteiner"
          style={{ display: isLoading ? "none" : "flex" }}
        >
          <Outlet />
        </div>
      </Section>
      {response.message !== "" && (
        <Message height={10} response={response}/>
      )}
    </main>
  );
};

export default App;
