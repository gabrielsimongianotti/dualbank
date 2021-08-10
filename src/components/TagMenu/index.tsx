import React from "react";
import { Container, Button } from "./styles";
import { Tag } from "../Tag";

import Tagimage from "../../assets/Tag.png"
import PlusCircle from "../../assets/PlusCircle.png"
import { Popout } from "../Popout";
import { PopoutResources } from "../PopoutResources";


export const TagMenu: React.FC = () => {
  return (
    <Container>

      <PopoutResources>
        <Button>
          <img src={Tagimage} alt='informação das suas aplicações' />
        </Button>
      </PopoutResources>
     
      <Popout text="Nova alocação" style={{ width: 135, display: 'flex', alignItems: "center" }}>
        <Button>
          <img src={PlusCircle} alt='nova alocação' />
        </Button>
      </Popout>

      <Tag title="Principal" backgroundColor='#622ee5' value="R$40.000,00" />
      <Tag title="Aluguel" backgroundColor='#778899' value="R$40.000,00" />
      <Tag title="Alimentação" backgroundColor='#ff354e' value="R$40.000,00" />

    </Container>
  );
}