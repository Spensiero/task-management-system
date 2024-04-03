import React from "react";
import { Formik, Form, Field } from "formik";
import styled from '@emotion/styled';
import * as Yup from 'yup';
import CommonButton from "./common/commonButton";
import { ITask, ITaskForm } from "@/interfaces/interfaces";

const initialValues: ITask = {
  title: "",
  taskType: "",
  status: "T",
  assignee: ""
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  taskType: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
  assignee: Yup.string().required("Required"),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ErrorMessage = styled.div`
  color: red;
  position: absolute;
  top: -20px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

const StyledField = styled(Field)`
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 5px;
  margin-bottom: 5px;
`;

const StyledSelect = styled(Field)`
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 5px;
  margin-bottom: 5px;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const TaskForm = ({ handleSubmit, taskToUpdate }: ITaskForm) => {
  return (
    <Formik initialValues={taskToUpdate ? taskToUpdate : initialValues} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <StyledForm>
          <FormGroup>
            <StyledLabel htmlFor="title">Title:</StyledLabel>
            <StyledField onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()} type="text" id="title" name="title" error={errors.title && touched.title} />
            {errors.title && touched.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>
          <RowWrapper>
            <FormGroup>
              <StyledLabel htmlFor="type">Type:</StyledLabel>
              <StyledSelect onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()} as="select" id="type" name="taskType" error={errors.taskType && touched.taskType}>
                <option value="">Select...</option>
                <option value="B">Bug</option>
                <option value="T">Task</option>
              </StyledSelect>
              {errors.taskType && touched.taskType && <ErrorMessage>{errors.taskType}</ErrorMessage>}
            </FormGroup>
            <FormGroup style={{ marginLeft: '10px', marginRight: '10px' }}>
              <StyledLabel htmlFor="status">Status:</StyledLabel>
              <StyledSelect onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()} as="select" id="status" name="status" error={errors.status && touched.status}>
                <option value="">Select...</option>
                <option value="T">To Do</option>
                <option value="P">Progress</option>
                <option value="D">Done</option>
              </StyledSelect>
              {errors.status && touched.status && <ErrorMessage>{errors.status}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="assignee">Assignee:</StyledLabel>
              <StyledField onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()} type="text" id="assignee" name="assignee" error={errors.assignee && touched.assignee} />
              {errors.assignee && touched.assignee && <ErrorMessage>{errors.assignee}</ErrorMessage>}
            </FormGroup>
          </RowWrapper>
          <ButtonWrapper>
            <CommonButton
                type="submit"
                title="Submit"
                label="Submit"
                backgroundColor="#3685CE"
                shadowColorRgba="rgba(55, 136, 208, 0.3)"
                textColor="#fff"
            />
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};
export default TaskForm;