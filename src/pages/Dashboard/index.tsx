import { Container, Content, BankBalance, Icon } from "./styles";
import { NavMenu } from "../../components/NavMenu";
import { TagMenu } from "../../components/TagMenu";
import printImg from "../../assets/Printer.svg";
import DownloadImg from "../../assets/Download File.svg";
import Share from "../../assets/Share.svg";
import { Card } from "../../components/Card/index";

export const Dashboard = () => {

  return (
    <Container>
      <NavMenu />
      <Content>
        <TagMenu />

        <BankBalance>
          <p>Saldo Bancário</p>
          <button>
            <Icon src={printImg} />
          </button>
          <button>
            <Icon src={DownloadImg} />
          </button>

          <button>
            <Icon src={Share}/>
          </button>

        </BankBalance>
        <Card date="10/10/2021" value="R$ 1000" />
      </Content>
    </Container>
  );
}