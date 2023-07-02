import styled from "styled-components";
//At this point i would go copy a link from react-hook-form.com
import {useForm} from "react-hook-form";
import * as yup from "yup";
import moment from "moment";
import {yupResolver} from "@hookform/resolvers/yup"
import {v4 as uuiddv4} from "uuid"
import { createTask } from "../Utils/APIs";



const InputScreen = () => {
const inputSchema = yup.object({
  task: yup.string().required("Task cannot be empty"),
  avatar: yup.string().required("Avatar cannot be empty"),
  priority: yup.string().required("Priority must be selected")
})

const {
  register,
  reset,
  formState: {errors},
  handleSubmit
} = useForm({
  resolver: yupResolver(inputSchema)
})

const onHandleSubmit = handleSubmit((res: any) => {
  const {task, avatar, priority} = res;
  const date = Date.now()
  console.log(moment(date).fromNow())
  createTask({
    time: date,
    id: uuiddv4(),
    reaction: 0,
    task,
    avatar,
    priority
  })
  reset()
})

  return (
    <div>
      <Container>
        <Main onSubmit={onHandleSubmit}>
          <InputHolder>
            <InputTitle>Task</InputTitle>
            <Input placeholder="Task" {...register("task")}/>
            <Error>{errors.task && "Enter a task"}</Error>
          </InputHolder>
          <InputHolder>
            <InputTitle>Avatar</InputTitle>
            <Input placeholder="Avatar" {...register("avatar")}/>
            <Error>{errors.avatar && "Enter an avatar"}</Error>
          </InputHolder>

          <InputHolder>
            <InputTitle>Priority</InputTitle>
            <Selector {...register("priority")}>
              <Options>Low</Options>
              <Options>High</Options>
              <Options>Urgent</Options>
            </Selector>
            <Error>{errors.priority && "Please select a state"}</Error>
          </InputHolder>
          <Button type="submit">Add Task</Button>
        </Main>
      </Container>
    </div>
  );
};

export default InputScreen;
const Options = styled.option`
  margin: 10px 0;
`;

const Selector = styled.select`
  /* border: 1px solid silver; */
  position: relative;
  height: 40px;
  border-radius: 3px;
  width: 100%;
  outline: none;
  padding-left: 10px;
`;

const Error = styled.div`
  color: red;
  font-size: 11px;
  position: absolute;
  right: 0;
`;
const Button = styled.button`
  border-radius: 5px;
  background-color: #023b81;
  color: white;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  outline: none;
  border: 0;
  width: 100%;
  cursor: pointer;
`;

const Input = styled.input`
  outline: none;
  border: 0;
  width: 93%;
  height: 95%;
  padding-left: 10px;
  margin-left: 5px;
  ::placeholder {
    font-family: Montserrat;
  }
`;

const InputTitle = styled.div`
  font-size: 12px;
  position: absolute;
  top: -9px;
  left: 10px;
  background-color: white;
  padding: 0 5px;
  z-index: 10;
`;

const InputHolder = styled.div`
  border: 1px solid silver;
  position: relative;
  height: 40px;
  border-radius: 3px;
  margin: 18px 0;
`;

const Main = styled.form`
  width: 300px;
  border: 1px solid silver;
  padding: 10px;

  border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;
