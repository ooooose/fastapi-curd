import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  FormControl,
  FormLabel,
  Input,
  FormHelperText } from "@chakra-ui/react";

const Form = ({ task, setTask }) => {
  const { register, handleSubmit } = useForm();
  // 登録に必要な属性を取得
  const { onChange, content, ref } = register("inputValue");

  // submit時に実行する
  const onSubmit = (data) => {
    // submit時にバリデーション
    if (data.inputValue && data.inputValue.length > 10) {
      console.log("10文字以内で入力してください");
      return;
    }
    console.log(data.inputValue);
  };
  
  return (
    <>
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>タスク内容</FormLabel>
          <Input 
            type='text' 
            content={content} 
            onChange={onChange} 
            ref={ref}
            value={task} 
            {...register('content', {
              required: '必須入力',
              maxLength: {
                value: 50,
                message: '最大50文字です'
              }
            })}
            />
        <FormHelperText>タスクの内容を記載してください</FormHelperText>
      </FormControl>
    </>
  )
}

export default Form;