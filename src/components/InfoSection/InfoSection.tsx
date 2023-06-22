import { Dispatch, FC, memo, SetStateAction } from "react";
import { HeaderThemes } from '../../types/headerThemes.ts';
import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';

const InfoSection: FC<{
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}> = memo(({setHeaderTheme}) => {
  const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);

  return (
    <section id={'info'} ref={themeRef} className="info-section bg-black pb-10">
      <div
        className="container mx-auto text-white xs:m-w-[300px] px-6 mb-10 relative z-20">
        <h1 className="font-bold uppercase text-3xl pt-20">Научная тематика
          конференции</h1>
        <ol className="p-10 list-decimal leading-10">
          <li>
            Естественные и антропогенные факторы почвообразования в формировании
            полигенетического
            почвенного покрова в степной и лесостепной зонах. Актуальные
            проблемы физики, химии, биогеохимии
            и биологии почв.
          </li>
          <li>
            Роль почвенного покрова в обеспечении продовольственной безопасности
            страны. Ресурсосберегающие
            технологии в повышении плодородия сельскохозяйственных земель
            степной и лесостепной зон.
          </li>
          <li>
            Теоретические и практические аспекты оценки, охраны и рационального
            использования почвенного
            покрова с участием черноземов.
          </li>
          <li>
            Почвы урбо- и техногенных ландшафтов степной и лесостепной зон.
          </li>
        </ol>
        <p className="font-bold text-[34px] flex content-center justify-center">
          Время проведения конференции: 12–17 сентября 2023 г.
        </p>
        <h1 className="font-bold uppercase text-3xl pt-10">Примерная программа
          конференции</h1>
        <div className="p-10 leading-7">
          <p>
            <span className="font-bold text-[20px]">
              12.09.2023
            </span>
            &nbsp;&ndash; день заезда. В 9 утра поездка
            экскурсия &laquo;Сельский туризм&raquo; в
            Неклиновский район Ростовской области на
            Био-Хутор &laquo;Петровский&raquo;&mdash; первый
            производитель
            органических продуктов на Юге России,&nbsp;
            <a href="https://biohutor.ru/tourism" target={'_blank'}
              rel={'noreferrer noopener'}
              className={'text-indigo-600'}>
              https://biohutor.ru/tourism
            </a>
          </p>
          <p>
            <span className="font-bold text-[20px]">13.09.2023</span>
            &nbsp;&ndash; открытие конференции, пленарные доклады, работа секций
          </p>
          <p><span
            className="font-bold text-[20px]">14.09.2023</span> &nbsp;&ndash; работа
            секций</p>
          <p><span
            className="font-bold text-[20px]">15.09.2023</span> &nbsp;&ndash; работа
            Международной
            молодежной школы</p>
          <p>
            <span className="font-bold text-[20px]">16.09.2023</span>
            &nbsp;&ndash; полевая экскурсия на длительный опыт
            контурно-ландшафтного земледелия
            (восстановление
            плодородия эродированной пашни ведением специальных севооборотов,
            приемов обработки почвы и
            удобрений) Федерального ростовского аграрного научного центра –
            ФРАНЦ.
          </p>
          <p><span
            className="font-bold text-[20px]">17.09.2023</span>&nbsp;&ndash; день
            отъезда</p>
        </div>
        <p className="pb-5">
          <span
            className="font-bold text-[20px] uppercase">место проведения:</span>
          &nbsp;г. Ростов-на-Дону, ФГАОУ ВО «Южный федеральный университет», ул.
          Б. Садовая, 105
        </p>
        <p className="pb-5">
          <span
            className="font-bold text-[20px] uppercase">язык конференции:</span>
          &nbsp;русский, английский.
        </p>
        <p className="pb-5"><span className="font-bold text-[20px] uppercase">формы участия:</span>
          &nbsp;очное участие (выступление или представление стендового доклада
          и публикация материалов,
          выступление онлайн) и заочное участие (только публикация материалов).
          Материалы конференции будут
          изданы в печатном виде к началу конференции.
        </p>
        <p className="font-bold text-[24px] pb-2.5">КОНТРОЛЬНЫЕ ДАТЫ:</p>
        <p className="leading-7"><span
          className="font-bold text-[20px]">20.07.2023</span>
          &nbsp;&ndash; срок подачи регистрационной формы
        </p>
        <p className="leading-7"><span
          className="font-bold text-[20px] pb-10">20.08.2023</span>
          &nbsp;&ndash; срок подачи тезисов докладов
        </p>
      </div>
    </section>
  );
});

export default InfoSection;