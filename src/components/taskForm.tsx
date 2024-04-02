import React from "react";
import { Formik, Form, Field } from "formik";
import styled from '@emotion/styled';
import * as Yup from 'yup'; // Importa Yup
import CommonButton from "./common/commonButton";
import { ITaskForm } from "@/interfaces/interfaces";

const initialValues = {
  title: "",
  type: "",
  status: "to do",
  assignee: ""
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
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
  flex: 1;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

const StyledField = styled(Field)`
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 5px;
`;

const StyledSelect = styled(Field)`
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 5px;
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

const ErrorMessage = styled.div`
  color: red;
`;

const TaskForm = ({ handleSubmit }: ITaskForm) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ errors, touched }) => (
        <StyledForm>
          <FormGroup>
            <StyledLabel htmlFor="title">Title:</StyledLabel>
            <StyledField type="text" id="title" name="title" error={errors.title && touched.title} />
            {errors.title && touched.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </FormGroup>
          <RowWrapper>
            <FormGroup>
              <StyledLabel htmlFor="type">Type:</StyledLabel>
              <StyledSelect as="select" id="type" name="type" error={errors.type && touched.type}>
                <option value="">Select...</option>
                <option value="bug">Bug</option>
                <option value="task">Task</option>
              </StyledSelect>
              {errors.type && touched.type && <ErrorMessage>{errors.type}</ErrorMessage>}
            </FormGroup>
            <FormGroup style={{ marginLeft: '10px', marginRight: '10px' }}>
              <StyledLabel htmlFor="status">Status:</StyledLabel>
              <StyledSelect as="select" id="status" name="status" error={errors.status && touched.status}>
                <option value="">Select...</option>
                <option value="to do">To Do</option>
                <option value="progress">Progress</option>
                <option value="done">Done</option>
              </StyledSelect>
              {errors.status && touched.status && <ErrorMessage>{errors.status}</ErrorMessage>}
            </FormGroup>
            <FormGroup>
              <StyledLabel htmlFor="assignee">Assignee:</StyledLabel>
              <StyledField type="text" id="assignee" name="assignee" error={errors.assignee && touched.assignee} />
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
