import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import List from './List';

const RowStyled = styled.div(({ isFolder }) => css`
  display: flex;
  cursor: ${isFolder ? 'pointer' : 'default'};
  transition: all 3s ease-in;
`)

const Icon = styled.div`
  margin-right: 10px;
`

const Row = ({ id, title, children }) => {
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => {
    if (children) {
      setOpened(!isOpened);
    }
  }

  return (
    <React.Fragment>
      <RowStyled isFolder={children} onClick={handleClick}>
        <Icon>{isOpened ? '📂' : children ? '📁' : '🗒' }</Icon>
        {title}
      </RowStyled>
      {isOpened && <List id={id} />}
    </React.Fragment>
  );
}

export default Row;