import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchContentById, selectContentById, removeFile } from '../store/contentSlice';

import Row from './Row';

const Wrapper = styled.div`
  padding-left: 25px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`

const List = ({ id }) => {
  const dispatch = useDispatch();
  const filesList = useSelector(selectContentById(id));

  useEffect(() => {
    dispatch(fetchContentById(id));
    return (() => dispatch(removeFile(id)));
  }, [ dispatch, id ]);

  const content = filesList.map(file => <Row key={file.id} {...file} />)

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

export default List;