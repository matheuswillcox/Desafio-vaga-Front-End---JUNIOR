import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin: 5px;
  
  label {
    color: var(--font) ;
  }

  input {
    border: 1px solid var(--border);
    padding: 10px;
    border-radius: 3px;
    :focus{
        border: 1px solid var(--primary)
    }
  }

  .description {
    color: var(--font);
  }
`;

export default StyledInput;
