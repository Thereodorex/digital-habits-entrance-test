import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchContentById, selectContentById, removeFile } from '../store/contentSlice';

import Row from './Row';

const Wrapper = styled.ul`
  padding-left: 25px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`


const List = ({ id }) => {
  const dispatch = useDispatch();
  const fileItem = useSelector(selectContentById(id));

  useEffect(() => {
    const thunkPromise = dispatch(fetchContentById(id));
    return (() => {
      thunkPromise.abort();
      dispatch(removeFile(id))
    });
  }, [ dispatch, id ]);

  const filesElements = fileItem?.children?.map(file => {
    return <Row
      key={file}
      id={file}
    />
  });;

  return (
    <Wrapper>
      {filesElements}
    </Wrapper>
  );
}

export default List;