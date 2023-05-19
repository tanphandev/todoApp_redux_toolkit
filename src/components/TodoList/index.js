import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { todoListAffterFilter } from "../../reduxToolkit/selectors";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import todoListSlice from "./todoListSlice";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListAffterFilter);
  console.log("list", todoList);
  const [name, setName] = useState("");
  const [addPriority, setAddPriority] = useState("Medium");
  const handleAddTodo = (e) => {
    setName(e.target.value);
  };
  const handleAddPriority = (e) => {
    setAddPriority(e);
  };

  const handleClickAddTodo = () => {
    dispatch(
      todoListSlice.actions.addToDo({
        id: uuid(),
        name: name,
        priority: addPriority,
        completed: false,
      })
    );
    setName("");
    setAddPriority("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={name} onChange={handleAddTodo} />
          <Select value={addPriority} onChange={handleAddPriority}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleClickAddTodo} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
