import React from "react";
import useInterval from "use-interval";
import styled, { keyframes } from "styled-components";
const useLoading = arr => {
  const [count, setC] = React.useState(0);
  useInterval(() => {
    setC(count + 1);
    if (count === arr.length - 1) {
      setC(0);
    }
  }, 3000);
  const render = () => (
    <Container>
      <h4>
        {count === 0
          ? arr[arr.length - 2]
          : count === 1
          ? arr[arr.length - 3]
          : arr[count - 2]}
      </h4>
      <h3>{count === 0 ? arr[arr.length - 1] : arr[count - 1]}</h3>
      <h2>{arr[count]}</h2>
      <h3>{count === arr.length - 1 ? arr[0] : arr[count + 1]}</h3>
      <h4>
        {count === arr.length - 1
          ? arr[1]
          : count === arr.length - 2
          ? arr[0]
          : arr[count + 2]}
      </h4>
    </Container>
  );
  const anim = keyframes`
  from{opacity:0},to{opacity:1}
  `;
  const Container = styled.div`
    * {
      animation: ${anim} 3s infinite;
    }
    h4 {
      font-size: 0.8rem;
      opacity: 0.3;
    }
    h3 {
      font-size: 1rem;
      opacity: 0.4;
    }
  `;
  return [render()];
};
export default useLoading;
