import { FC } from 'react';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { IRegistrationInput } from './IRegistrationInput.ts';
import Input from './Input.tsx';
import FileDropZone from './FileDropZone.tsx';

const inputOptions: RegisterOptions = {
  required: {
    value: false,
    message: 'Обязательное поле',
  },
  minLength: {
    value: 2,
    message: 'Минимум 2 символа'
  }
};

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm<IRegistrationInput>({
    mode: 'all'
  });
  const onSubmit: SubmitHandler<IRegistrationInput> = (data) => console.log(data);

  return (
    <form
      className="mx-auto mt-16 max-w-xl sm:mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        <div>
          <Input
            label={'Фамилия'}
            register={register}
            autoComplete={'family-name'}
            id={'lastname'}
            errorMessage={errors.lastname?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={'Имя'}
            register={register}
            autoComplete={'given-name'}
            id={'firstname'}
            errorMessage={errors.firstname?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={'Отчество'}
            register={register}
            autoComplete={'additional-name'}
            id={'middleName'}
            options={{...inputOptions, required: false}}
            errorMessage={errors.middleName?.message}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={'Страна, город'}
            register={register}
            autoComplete={'country-name'}
            id={'city'}
            errorMessage={errors.city?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={'Организация (полное официальное название)'}
            register={register}
            autoComplete={'organization'}
            id={'organization'}
            errorMessage={errors.organization?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={'Должность'}
            register={register}
            id={'position'}
            errorMessage={errors.position?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={'Ученая степень'}
            register={register}
            id={'academicDegree'}
            errorMessage={errors.academicDegree?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={'Ученое звание'}
            register={register}
            id={'academicGrade'}
            errorMessage={errors.academicGrade?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={'Название доклада'}
            register={register}
            id={'reportName'}
            errorMessage={errors.reportName?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={'Направление работы конференции'}
            register={register}
            id={'conferenceDirection'}
            options={inputOptions}
            errorMessage={errors.conferenceDirection?.message}
          />
        </div>
        <div>
          <Input
            label={'Форма участия (очное, заочное)'}
            register={register}
            id={'concernForm'}
            errorMessage={errors.concernForm?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={'Email'}
            register={register}
            autoComplete={'email'}
            id={'email'}
            errorMessage={errors.email?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={'Номер телефона'}
            register={register}
            autoComplete={'tel'}
            id={'phoneNumber'}
            errorMessage={errors.phoneNumber?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={'Почтовый адрес'}
            register={register}
            autoComplete={'street-address'}
            id={'address'}
            errorMessage={errors.address?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            select={true}
            label={'Бронирование (выбрать)'}
            id="booking"
            register={register}
            errorMessage={errors.booking?.message}
            options={inputOptions}>
            <option value="" hidden>Выберите опцию</option>
            <option value="independently">Самостоятельно</option>
            <option value="required">Требуется место</option>
            <option value="hasRoom">Номер в кампусе</option>
          </Input>
        </div>
        <FileDropZone
          id={'files'}
          register={register}
          errorMessage={errors.files?.message}
          options={{
            validate: {
              isDoc: (files: FileList) => {
                for (let i = 0; i < files.length; i++) {
                  if (!['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(files[i].type)) {
                    return 'Все файлы должны быть формата doc или docx';
                  }
                }
                return true;
              }
            }
          }}
        >
          Файл, содержащий заявку на участие, называть следующим образом:
          Фамилия участника, слово «Заявка» через пробел
          (Ivanov_zajavka-conf.doc) либо (Ivanov_zajavka-shkola.doc), для
          каждого соавтора следует оформить отдельную заявку. Файл, содержащий
          статью, называть по имени первого автора (Ivanov.doc).
        </FileDropZone>
      </div>
      <div className="mt-10">
        <input type="submit"
          value={'Отправить заявку'}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
      </div>
    </form>
  );
};

export default RegistrationForm;