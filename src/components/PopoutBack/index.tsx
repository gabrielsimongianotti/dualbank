import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  visible: boolean;
}

export const PopoutBack: React.FC<TooltipProps> = ({ children, visible }) => {
  return (
    <Container show={visible}>
      {children}
      <div>
        <span>Conta Corrente</span>
        <p>Ag. 00005-1   C.C. 00000000000000000020-1</p>

        <span>Comnta Poupança</span>
        <p>Ag. 00005-1   C.C. 00000000000000000020-1</p>

        <span>C.C. Ed. Suzano</span>
        <p>Ag. 00005-1   C.C. 00000000000000000020-1</p>

        <span>C.C. Condomínio Guillermo</span>
        <p>Ag. 00005-1   C.C. 00000000000000000020-1</p>

        <span>C.C. Residencial Figma Ômega</span>
        <p>Ag. 00005-1   C.C. 00000000000000000020-1</p>

        <span>C.C. Residencial Figma Ômega</span>
        <p>Ag. 00005-1   C.C. 00000000000000000020-1</p>

        <span>C.C. Residencial Figma Ômega</span>
        <p>Ag. 00005-1   C.C. 00000000000000000020-1</p>
      </div>
    </Container>
  );
};