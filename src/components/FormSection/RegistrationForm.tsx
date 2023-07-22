import { FC } from 'react';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { IRegistrationInput } from './IRegistrationInput.ts';
import Input from './Input.tsx';
import FileDropZone from './FileDropZone.tsx';
import { useTranslation } from 'react-i18next';

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegistrationInput>({
    mode: 'all'
  });

  const {t} = useTranslation();

  const inputOptions: RegisterOptions = {
    required: {
      value: true,
      message: t('registrationForm.errorMsg.required'),
    },
    minLength: {
      value: 2,
      message: t('registrationForm.errorMsg.minLength')
    }
  };

  const onSubmit: SubmitHandler<IRegistrationInput> = (data) => console.log(data);

  return (
    <form
      className="mx-auto mt-16 max-w-xl sm:mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
        <div>
          <Input
            label={t('registrationForm.lastname')}
            register={register}
            autoComplete={'family-name'}
            id={'lastname'}
            errorMessage={errors.lastname?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.firstname')}
            register={register}
            autoComplete={'given-name'}
            id={'firstname'}
            errorMessage={errors.firstname?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.middleName')}
            register={register}
            autoComplete={'additional-name'}
            id={'middleName'}
            options={{...inputOptions, required: false}}
            errorMessage={errors.middleName?.message}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={t('registrationForm.city')}
            register={register}
            autoComplete={'country-name'}
            id={'city'}
            errorMessage={errors.city?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={t('registrationForm.organization')}
            register={register}
            autoComplete={'organization'}
            id={'organization'}
            errorMessage={errors.organization?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.position')}
            register={register}
            id={'position'}
            errorMessage={errors.position?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.academicDegree')}
            register={register}
            id={'academicDegree'}
            errorMessage={errors.academicDegree?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.academicGrade')}
            register={register}
            id={'academicGrade'}
            errorMessage={errors.academicGrade?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.reportName')}
            register={register}
            id={'reportName'}
            errorMessage={errors.reportName?.message}
            options={inputOptions}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.conferenceDirection')}
            register={register}
            id={'conferenceDirection'}
            options={inputOptions}
            errorMessage={errors.conferenceDirection?.message}
          />
        </div>
        <div>
          <Input
            label={t('registrationForm.concernForm')}
            register={register}
            id={'concernForm'}
            errorMessage={errors.concernForm?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={t('registrationForm.email')}
            register={register}
            autoComplete={'email'}
            id={'email'}
            errorMessage={errors.email?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={t('registrationForm.phoneNumber')}
            register={register}
            autoComplete={'tel'}
            id={'phoneNumber'}
            errorMessage={errors.phoneNumber?.message}
            options={inputOptions}
          />
        </div>
        <div className="sm:col-span-2">
          <Input
            label={t('registrationForm.address')}
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
            label={t('registrationForm.booking.label')}
            id="booking"
            register={register}
            errorMessage={errors.booking?.message}
            options={inputOptions}>
            <option value="" hidden>
              {t('registrationForm.booking.optionsTitle')}
            </option>
            <option value="independently">
              {t('registrationForm.booking.independently')}
            </option>
            <option value="required">
              {t('registrationForm.booking.required')}
            </option>
            <option value="hasRoom">
              {t('registrationForm.booking.hasRoom')}
            </option>
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
                    return t('registrationForm.errorMsg.file');
                  }
                }
                return true;
              }
            }
          }}
        >
          {t('registrationForm.dropZoneDescription')}
        </FileDropZone>
      </div>
      <div className="mt-10">
        <input type="submit"
          value={t('registrationForm.submit')}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
      </div>
    </form>
  );
};

export default RegistrationForm;