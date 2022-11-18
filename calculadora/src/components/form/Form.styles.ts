import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  width: 600px;
  border: 1px solid lightgrey;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 60px;
  }

  .form-title {
    font-size: 20px;
  }

  .results {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    margin-left: 40px;
    justify-content: center;
    background-color: var(--internalBackground);
    width: 100%;
    font-style: italic;
  }

  .results-title {
    color: var(--blue);
  }
  .results-days {
    display: flex;
    flex-direction: column;
    color: var(--primary);
    gap: 35px;
  }
  .underline {
    color: var(--primary);
  }
`;
export default StyledForm;
