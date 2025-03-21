import styled from "styled-components";

function NumberSelector({ selectedNum, setSelectedNum, error, setError }) {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const numSelectHandler = (value) => {
    setSelectedNum(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectedNum}
            key={i}
            onClick={() => numSelectHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
