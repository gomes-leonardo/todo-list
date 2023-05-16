import styled from "styled-components";

export const Form = styled.form`
  width: 90vw;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    margin-bottom: 10px;
  }

  input[type="text"]:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  textarea {
    height: 100px;
    resize: none;
  }

  button {
    width: 70%;
    padding: 10px;
    background-color: #2196f3;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }

  button:hover {
    background-color: #0e81ce;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;

  input[type="search"] {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    text-align: center;
  }

  input:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
`;

export const TaskList = styled.div`
  margin: auto;
  max-width: 90vw;
  text-align: start;

  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  div{
    display: flex;
    align-items: center;
    gap: px;
  }

  h3 {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  button {
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    transform: scale(1.2);
  }

  li {
    background-color: #f4f4f4;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
