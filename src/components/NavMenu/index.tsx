import { Container, ItenMenu } from "./styles";
import HouseLine from "../../assets/HouseLine.svg"
import ChartPieSlice from "../../assets/ChartPieSlice.png"
import Money from "../../assets/Money.png"
import Handshake from "../../assets/Handshake.png"
import PIX from "../../assets/PIX.png";
import CreditCard from "../../assets/CreditCard.png";
import Receipt from "../../assets/Receipt.png";
import Wrench from "../../assets/Wrench.png";
import Question from "../../assets/Question.png";
import Carets from "../../assets/Carets.png";

export const NavMenu = () => {

  return (
    <Container>
      <ItenMenu>
        <img src={HouseLine} alt="conta corrente" />
      </ItenMenu>

      <ItenMenu active>
        <img src={ChartPieSlice} alt="conta corrente" />
      </ItenMenu>

      <ItenMenu>
        <img src={Money} alt="Dinheiro" />
      </ItenMenu>

      <ItenMenu>
        <img src={Handshake} alt="Dinheiro" />
      </ItenMenu>

      <ItenMenu disable>
        <img src={PIX} alt="Dinheiro" />
      </ItenMenu>

      <ItenMenu disable>
        <img src={CreditCard} alt="Dinheiro" />
      </ItenMenu>

      <ItenMenu>
        <img src={Receipt} alt="Dinheiro" />
      </ItenMenu>

      <ItenMenu>
        <img src={Wrench} alt="Dinheiro" />
      </ItenMenu>

      <ItenMenu>
        <img src={Question} alt="Dinheiro" />
      </ItenMenu>
      <div > <img src={Carets} alt="seta" /></div>
    </Container>
  );
}