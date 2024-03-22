import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import "./Features.css";

interface FeaturesProps { }

const Features: React.FC<FeaturesProps> = (props) => {
  return (
    <div className="features">
      <Header height={20} justifyContent="center">
        <div className="features-header">
          <h2>Funcionalidades do MoonCoin</h2>
          <p>
            Com estas funcionalidades, a MoonCoin oferece uma plataforma abrangente e envolvente para explorar e investir no mundo das criptomoedas.
          </p>
        </div>
      </Header>
      <div className="cards">
        <Card className="features-card" backgroundColor="black">
          <div className="content">
            <Icon
              backgroundImage="assets/images/metamask.png"
              width={120}
              height={120}
            />
            <p>
              Conecte-se facilmente à sua carteira Metamask para realizar transações seguras e rápidas com a MoonCoin diretamente na aplicação.
            </p>
          </div>
        </Card>
        <Card className="features-card" backgroundColor="black">
          <div className="content">
            <Icon
              backgroundImage="assets/images/ui.png"
              width={120}
              height={120}
            />
            <p>
              Navegue por um ambiente intuitivo e amigável, projetado para proporcionar uma experiência envolvente e informativa aos usuários.
            </p>
          </div>
        </Card>
        <Card className="features-card" backgroundColor="black">
          <div className="content">
            <Icon
              backgroundImage="assets/images/moon_icon.png"
              width={120}
              height={120}
            />
            <p>
              Acesse análises e estatísticas sobre o desempenho do MoonCoin, incluindo gráficos e métricas relevantes para ajudar na tomada de decisões.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Features;
