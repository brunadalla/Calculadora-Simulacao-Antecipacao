import styled from "styled-components"

interface IInputProps {
  error: boolean
}

export const InputContainer = styled.input<IInputProps>`
  width: 100%;
  min-height: 40px;
  padding: 0 10px;

  color: black;
  border: ${({ error }) => (error ? "2px solid #d90429" : "2px solid #ced4da")};
  border-radius: 6px;

  ${this}:focus {
    border: 2px solid var(--blue-100);
  }

  ${this}::placeholder {
    color: var(--gray-200)
  }
`

export const FormContainer = styled.form`
  height: 85%;
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    height: 25%;

    gap: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    label {
      color: var(--gray-600);
    }

    small,
    p {
      font-size: 0.85rem;
    }

    small {
      color: var(--gray-400);
    }

    p {
      color: var(--red-400);
    }
  }

  button {
    height: 40px;
    width: 100%;

    border-radius: 6px;

    color: var(--gray-400);
    font-weight: 600;
  }

  button:hover {
    cursor: pointer;
    color: white;
    background-color: var(--blue-300);
  }

  ${InputContainer}
`
