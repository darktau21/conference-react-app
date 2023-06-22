import { FC, useRef } from 'react';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { Transition } from 'react-transition-group';

const Header: FC<{headerTheme: HeaderThemes}> = ({headerTheme}) => {
  let classNames = '';
  const ref = useRef<HTMLElement>(null);

  switch (headerTheme) {
  case HeaderThemes.transparent:
    classNames = 'text-gray-900 transition-colors absolute inset-x-0 top-0 z-50 drop-shadow-xl';
    break;
  case HeaderThemes.light:
    classNames = 'text-gray-900 transition-colors fixed bg-white inset-x-0 top-0 z-50 drop-shadow-xl';
    break;
  case HeaderThemes.dark:
    classNames = 'text-white bg-black transition-colors fixed inset-x-0 top-0 z-50 drop-shadow-xl';
    break;
  }

  const duration = 300;
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {opacity: 1}
  };

  return (
    <Transition
      timeout={duration}
      in={true}
      appear={true}
      mountOnEnter={true}
      nodeRef={ref}>
      {state => (
        <header id="header"
          className={classNames}
          style={{...defaultStyle, ...transitionStyles[state]}}>
          <nav
            className="flex items-center px-6 py-3 lg:px-8 gap-x-7 xs:justify-between"
            aria-label="Global">
            <div className="max-w-[100px] xs:max-w-[50px]">
              <a
                href="https://sfedu.ru/"
                target={'_blank'}
                rel={'noreferrer noopener'}
                className="-m-1.5 p-1.5 block">
                <span className="sr-only">SFEDU</span>
                <img className="" src="/sfedu.webp" alt="SFEDU"/>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Открыть меню</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </button>
            </div>
            <div
              className="lg:flex-1 hidden lg:flex lg:gap-x-12 justify-center text-inherit">
              <a href="#info"
                className="text-base font-semibold leading-6 ">Программа</a>
              <a href="#members-organising" className="text-base font-semibold leading-6 ">Организационный
                комитет</a>
              <a href="#members-international" className="text-base font-semibold leading-6 ">Международный
                комитет</a>

              <a href="#article-rules" className="text-base font-semibold leading-6">Правила
                оформления статей</a>

              <a href="#"
                className="text-base font-semibold leading-6 ">Контакты</a>
            </div>
            <div className="hidden lg:block">
              <a href="#registration-form" className="text-sm font-semibold leading-6">
                Подача заявки
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <div className="hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">SFEDU</span>
                  <img className="h-8 w-auto" src="/sfedu.webp" alt="SFEDU"/>
                </a>
                <button type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Закрыть меню</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Программа
                    </a>
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Организационный комитет
                    </a>
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Международный комитет
                    </a>
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Правила оформления статей
                    </a>
                    <a href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Контакты
                    </a>
                  </div>
                  <div className="py-6">
                    <a href="#registration-form"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Подача заявки
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </Transition>

  );
};

export default Header;