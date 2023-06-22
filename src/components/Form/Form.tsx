import {
  ComponentPropsWithoutRef,
  FC, PropsWithoutRef,
} from 'react';

interface IFormProps {
  color: string;
}

const Form: FC<ComponentPropsWithoutRef<'form'> | IFormProps> = ({children}) => {
  return (
    <form
      className="mx-auto mt-16 max-w-xl sm:mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
  );
};

export default Form;