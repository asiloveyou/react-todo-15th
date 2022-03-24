import React, { useState } from "react";
import styled from "styled-components";

// styled component를 사용한다

const AppInput = styled.div`
  width: 28rem;
  margin-bottom: 1rem;
`;

const FormControl = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const FormInput = styled.input`
  width: 23rem;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 2rem;
  border-color: transparent;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding-left: 1.2rem;
  font-family: var(--ff-main);
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  }
`;

const AppTitle = styled.div`
  font-size: 1.7rem;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 1.5rem 0 1.5rem 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border-color: transparent;
  color: grey;
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
  }
  & p {
    font-size: 2rem;
    width: 3rem;
  }
`;

const InputContainer = (props) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // form 내 입력이 존재하는 경우만 업데이트 한다
    if (text !== "") {
      const uid = new Date().getTime().toString();
      props.dispatchListState({
        type: "ADD",
        payload: { id: uid, type: "todo", content: text },
      });
      setText("");
    }
  };

  return (
    <AppInput>
      <AppTitle>
        <h3>투두 투두</h3>
      </AppTitle>
      <FormControl onSubmit={(e) => submitHandler(e)}>
        <FormInput
          type="text"
          id="todoItem"
          placeholder="오늘은 행복하길 바래"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <SubmitBtn type="submit">
          <p>+</p>
        </SubmitBtn>
      </FormControl>
    </AppInput>
  );
};

export default InputContainer;
