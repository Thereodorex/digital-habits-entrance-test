import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { selectContentById } from '../store/contentSlice';

import List from './List';

const RowStyled = styled.li(({ isFolder }) => css`
  display: flex;
  align-items: center;
  cursor: ${isFolder ? 'pointer' : 'default'};
`)

const Icon = styled.div`
  margin-right: 10px;
  width: 22px;
  height: 26px;
`

const LoadingIcon = styled.div`
  height: 26px;
  margin-right: 19px;
  font-size: 15px;
  line-height: 26px;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
`

const Row = ({ id, children, handleClick }) => {
  const [opened, setOpened] = useState(false);

  const { title, status } = useSelector(selectContentById(id));

  const icon = {
    'file': <Icon>🗒</Icon>,
    'folder': <Icon>📁</Icon>,
    'opened': <Icon>📂</Icon>,
    'loading': <LoadingIcon>↻</LoadingIcon>,
    'notLoaded': <Icon>❌</Icon>,
  }[status]

  return (
    <>
      <RowStyled isFolder={status !== 'file'} onClick={() => setOpened(!opened)}>
        {icon}
        {title}
      </RowStyled>
      {opened && <RowStyled><List id={id} /></RowStyled>}
    </>
  );
}

export default Row;