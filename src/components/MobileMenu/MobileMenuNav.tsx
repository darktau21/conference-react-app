import {
  Dispatch,
  type MouseEvent,
  type ReactElement,
  SetStateAction,
  useEffect,
} from 'react';

type Props = {
  changeState: Dispatch<SetStateAction<boolean>>
}

const liClassNames = 'font-light text-2xl uppercase p-5 block text-center';

const MobileMenuNav = ({changeState}: Props): ReactElement => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <div
      className={'fixed top-0 left-0 w-[100%] h-[100vh] bg-black/60 z-50 lg:hidden back'}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        if (!(e.target instanceof HTMLDivElement)) return;

        if (e.target.classList.contains('back')) {
          changeState(false);
        }
      }}>
      <nav className={'bg-white w-8/12 h-[100%]'}>
        <ul className={'h-[100%] flex flex-col items-center'}>
          <li><a href="#info" className={liClassNames}>Программа</a></li>
          <li><a href="#members-organising" className={liClassNames}>Организационный
            комитет</a></li>
          <li><a href="#members-international" className={liClassNames}>Международный
            комитет</a></li>
          <li><a href="#article-rules" className={liClassNames}>Правила
            оформления
            статей</a></li>
          <li><a href="#" className={liClassNames}>Контакты</a></li>
          <li><a href="#registration-form" className={liClassNames}>Подача
            заявки
          <span aria-hidden="true">&rarr;</span></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuNav;