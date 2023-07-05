import React, { memo } from "react";
import { Field, Form } from 'formik';

import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'

export const form = memo(({props}) => {
  return (
    <>
      <Form>
        <Field name='name' >
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>First name</FormLabel>
              <Input {...field} placeholder='name' />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      </Form>
    </>
  )
});