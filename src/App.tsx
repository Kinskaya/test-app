import { Path, useForm, UseFormRegister } from 'react-hook-form';
import React from 'react';

import Button from './components/Button'
import Input from './components/Input';

interface IFormInput {
    id?: number;
    yourNumber: number | string;
}

export type InputProps = {
    label: Path<IFormInput>;
    register: UseFormRegister<IFormInput>;
    required: boolean;
};

function App() {
  const message = {
      success: 'Заказ успешно отправлен',
      error: 'Что-то пошло не так, попробуйте еще раз'
  }

  const {
      register,
      handleSubmit,
      reset,
  } = useForm<IFormInput>({
      mode: "onBlur",
  });

    const postData = async (url: string, data: IFormInput) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
         'content-type': 'application/json',
        },
         body: JSON.stringify(data),
        });
          if (!response.ok) {
           throw new Error(message.error);
          }
        return await response.json();
    }

    const onSubmit = (data: IFormInput) => {
        postData('http://localhost:3000/forms/', data)
            .then(res => {
                if (res.yourNumber === ' ') {
                    alert(message.error);

                } else {
                    alert(message.success);
                    reset({
                        yourNumber: '',
                    })
                }
            })
            .catch(() => alert(message.error));
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="input-wrap">
          <Input label={'yourNumber'} register={register} required={true} />
        </div>
        <div className="button-wrap">
          <Button text='заказать' />
        </div>
      </form>
    </div>
  );
}

export default App;
