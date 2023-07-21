import { FC, PropsWithChildren } from 'react';
import { IRegistrationInput } from './IRegistrationInput.ts';
import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface IFileDropProps extends PropsWithChildren {
  register: UseFormRegister<IRegistrationInput>;
  errorMessage?: string;
  options?: RegisterOptions;
  id: Path<IRegistrationInput>;
  select?: boolean;
}

const FileDropZone: FC<IFileDropProps> = ({
  children,
  id,
  register,
  errorMessage,
  options}) => {
  return (
    <>
      <div className="flex items-center justify-center w-full span-col-2">
        <label htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none"
              stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span
              className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">SVG, PNG,
              JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden"/>
        </label>
      </div>
      <div className="col-span-2 text-5 text-red-700 h-5">{errorMessage}</div>
      <div
        className="col-span-2 block text-sm font-semibold leading-6 text-gray-900">
        {children}
      </div>
    </>
  );
};

export default FileDropZone;