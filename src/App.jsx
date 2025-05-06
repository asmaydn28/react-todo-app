import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./App.css";
import styled from "styled-components";



const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #0d6efd;
  color: white;

  &:hover {
    background-color: #0a58ca;
  }
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    } else {
      alert("Boş Görev Tuşlaması Yapmayınız...");
    }
  };

  const deleteTodo = (index) => {
    setTodos((todos) => {
      return todos.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      <section>
        <div className="col-4 m-3 mx-auto">
          <div className="text-center my-3 h1 fw-semibold">Yapılacaklar Listesi</div>
          <div>
            <Form className="d-flex">
              <Form.Control
                onChange={handleChange}
                placeholder="Bir Görev Giriniz..."
                value={todoInput}
                className="text-center rounded-0 border-end-0"
                type="text"
              />
              <Button onClick={addTodo} className="rounded-0">
                Ekle
              </Button>
            </Form>
          </div>
          <div className="text-center fw-semibold mt-1 h6">
            Girilen Değer: {todoInput}
          </div>
          <div className="d-flex justify-content-center">
            <StyledUl className="w-100 text-center fw-semibold">
              {todos.map((todo, index) => (
                <StyledLi
                  onClick={() => deleteTodo(index)}
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  {todo}
                </StyledLi>
              ))}
            </StyledUl>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
