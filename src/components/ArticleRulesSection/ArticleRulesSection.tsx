import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { Dispatch, FC, memo, SetStateAction } from 'react';

const ArticleRulesSection: FC<{
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}> = memo(({setHeaderTheme}) => {
  const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);
  return (
    <section id={'article-rules'} ref={themeRef} className="bg-black">
      <div className="container mx-auto text-white xs:m-w-[300px] px-6 mb-10">
        <div className="p-10 list-decimal leading-7">
          <p className="pb-2.5">
            Публикации: Материалы конференции планируется издать к началу
            конференции, они также будут размещены на сайте конференции.
            Рассылка сборников конференций по почте не предполагается. Статьи
            будут индексироваться в РИНЦ, снабжены DOI.
          </p>
          <p className="pb-2.5">
            Регистрационный и оргвзнос отсутствуют, участие в конференции и
            молодежной школе – бесплатное. Оплата экскурсий и праздничного ужина
            будет предложена очным участникам в 3-м информационном письме, а
            также по прибытию при регистрации.
          </p>
          <p className="pb-2.5">
            Проживание участники бронируют самостоятельно.&nbsp;
            <a
              href="/pdf/Список-гостиниц.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-indigo-600">
              Список гостиниц в приложении
            </a>
            , также в свободном доступе в интернете.
          </p>
          <p className="pb-2.5">
            Желающим забронировать проживание в новом кампусе Южного
            федерального университета по адресу ул. Зорге, 21, необходимо подать
            заявку на адрес оргкомитета конференции не позднее 25 августа 2023
            г. Стоимость проживания в двухместных номерах с отдельной кухней –
            700 руб. в сутки (цена на дату отправки письма).
          </p>
          <div className="mt-4">
            <a href="/pdf/Правила-оформления-статей.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-indigo-600">
              Правила оформления статей
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ArticleRulesSection;