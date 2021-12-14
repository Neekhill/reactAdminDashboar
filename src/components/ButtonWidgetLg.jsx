import styled from "styled-components";

const Button = styled.button`
  padding: 5px 8px;
  border: none;
  border-radius: 10px;

  background-color: ${(props) =>
    props.type === "Approved"
      ? "#e5faf2"
      : props.type === "Pending"
      ? "#ebf1fe"
      : props.type === "Declined"
      ? "#fff0f1"
      : "#fff0f1"};

  color: ${(props) =>
    props.type === "Approved"
      ? "#3bb077"
      : props.type === "Pending"
      ? "#2a7ade"
      : props.type === "Declined"
      ? "#d95087"
      : "#d95087"};
`;
const ButtonWidgetLg = ({ type }) => {
  return <Button type={type}>{type}</Button>;
};

export default ButtonWidgetLg;
