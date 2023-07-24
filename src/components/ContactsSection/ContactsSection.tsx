import { Dispatch, SetStateAction } from 'react';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';

const ContactsSection = ({setHeaderTheme}: {
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}) => {
  const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);

  return (
    <footer id={'contacts'} ref={themeRef}
      className={'grid sm:grid-flow-col col-auto grid-flow-row justify-stretch justify-items-center pr-3 pl-3'}>
      <img className={'w-[150px]'} src="/sfedu.webp"
        alt="Southern Federal University"/>
      <img className={'w-[200px]'} src="/conference.webp" alt="Conference"/>
      <img className={'w-[150px]'} src="/soil-health.webp" alt="Soil health"/>
      <div className={'sm:w-1/3 justify-self-end text-center'}>
        <address className={'not-italic'}>
          АДРЕС ОРГКОМИТЕТА: 344006, Ростов-на-Дону, пр. Стачки, 194/1
          Южный федеральный университет,
          Академия биологии и биотехнологии им. Д.И. Ивановского
        </address>
        <p>soil.health.conf@mail.ru</p>
        <p>tischenko@sfedu.ru</p>
        <p>snsushkova@sfedu.ru</p>
      </div>
    </footer>
  );
};

export default ContactsSection;