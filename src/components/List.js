import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Row from './Row';

const Wrapper = styled.div`
  padding-left: 25px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`

const List = ({ id }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const requestUrl = new URL(process.env.REACT_APP_API_URL);
      const requestParams = {};
      if (id) requestParams.dirId = id;
      requestUrl.search = new URLSearchParams(requestParams);
      const resp = await fetch(requestUrl);
      const data = await resp.json();
      setList(data.children);
    })();
  }, [ id ]);

  const content = list.map(file => <Row key={file.id} {...file} />)

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
}

export default List;