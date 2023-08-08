import { IMember } from '../../types/members.ts';

interface IMembersStorage {
  [lang: string]: {
    [rank: string]: IMember[];
  }
}

export const organisingCommittee: IMembersStorage = {
  ru: {
    chairs: [
      {
        name: 'Шевченко Инна Константиновна',
        sfeduRank: 'д.э.н., доцент, ректор Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E6393)',
        confRank: '',
        imgLink: '/members/Shevchenko.webp',
      }
    ],
    coChairs: [
      {
        name: 'Боровская Марина Александровна',
        sfeduRank: 'д.э.н., профессор, президент Южного федерального университета',
        sfeduLink:'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E5013)',
        confRank: '',
        imgLink: '/members/Borovskaya.webp',
      },
      {
        name: 'Безуглова Ольга Степановна',
        sfeduRank: 'д.б.н., профессор кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink:'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E46)',
        confRank: 'Председатель Ростовского отделения Общества почвоведов им. В.В. Докучаева, руководитель Рабочей группы по изучению черноземов.',
        imgLink: '/members/Bezuglova.webp',
      },
      {
        name: 'Казеев Камиль Шагидуллович',
        sfeduRank: 'д.г.н., профессор, директор Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E210)',
        imgLink: '/members/Kazeev.webp',
      },
      {
        name: 'Минкина Татьяна Михайловна',
        sfeduRank: 'д.б.н., профессор, зав. кафедрой почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E346)',
        imgLink: '/members/Minkina.webp',
      },
      {
        name: 'Рачаловский Константин Николаевич',
        sfeduRank: 'Министр сельского хозяйства и продовольствия Ростовской области',
        sfeduLink: 'https://www.donland.ru/phonebook/0/worker/647/',
        imgLink: '/members/rachalovskiy.webp',
      },
      {
        name: 'Фишкин Михаил Валерьевич',
        sfeduRank: 'Министр природных ресурсов и экологии Ростовской области',
        sfeduLink: 'https://www.donland.ru/phonebook/0/worker/565/',
        imgLink: '/members/Fishkin.webp',
      },
    ],
    members: [
      {
        name: 'Бауэр Татьяна Владимировна',
        sfeduRank: 'к.б.н., старший научный сотрудник лаборатории «Агробиотехнологии для повышения плодородия почв и качества сельскохозяйственной продукции» Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E7222)',
        imgLink: '',
      },
      {
        name: 'Бурачевская Марина Викторовна',
        sfeduRank: 'к.б.н., ведущий научный сотрудник научно-исследовательской лаборатории «Мониторинг биосферы» Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E6460)',
        imgLink: '',
      },
      {
        name: 'Вардуни Татьяна Викторовна',
        sfeduRank: 'д.пед.н., профессор, директор Ботанического сада Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E3859)',
        imgLink: '',
      },
      {
        name: 'Горбов Сергей Николаевич',
        sfeduRank: 'д.б.н., профессор кафедры ботаники, заведующий научно-испытательной лабораторией «Биогеохимия» Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета.',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E-5489)',
        imgLink: '',
      },
      {
        name: 'Горовцов Андрей Владимирович',
        sfeduRank: 'к.б.н., доцент кафедры биохимии и микробиологии Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E6063)',
        imgLink: '',
      },
      // {
      //   name: 'Гончарова Людмила Юрьевна',
      //   sfeduRank: 'к.с.-х.н., доцент кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
      //   sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E3071)',
      //   imgLink: '',
      // },
      {
        name: 'Замулина Инна Валерьевна',
        sfeduRank: 'старший преподаватель кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E4573)',
        imgLink: '',
      },
      {
        name: 'Кравцова Наталья Евгеньевна',
        sfeduRank: 'к.б.н., доцент кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E1418)',
        imgLink: '',
      },
      {
        name: 'Кушнарева Алла Владимировна',
        sfeduRank: 'заместитель министра природных ресурсов и экологии Ростовской области',
        sfeduLink: 'https://минприродыро.рф/about/structure/0/worker/493/',
        imgLink: '',
      },
      {
        name: 'Литвинов Юрий Алексеевич',
        sfeduRank: 'к.б.н., доцент кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E4898)',
        imgLink: '',
      },
      {
        name: 'Манджиева Саглара Сергеевна',
        sfeduRank: 'к.б.н., главный научный сотрудник, заведующий научно-исследовательской лабораторией «Мониторинг биосферы» Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E3253)',
        imgLink: '',
      },

      {
        name: 'Морозов Игорь Вадимович',
        sfeduRank: 'доцент кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E357)',
        imgLink: '',
      },
      {
        name: 'Омелянчук Алина Алексеевна',
        sfeduRank: 'помощник заместителя министра природных ресурсов и экологии Ростовской области',
        sfeduLink: '',
        imgLink: '',
      },
      {
        name: 'Репка Дмитрий Анатольевич',
        sfeduRank: 'заместитель министра сельского хозяйства и продовольствия Ростовской области',
        sfeduLink: '',
        imgLink: '',
      },
      {
        name: 'Сушкова Светлана Николаевна',
        sfeduRank: 'д.б.н., ведущий научный сотрудник, заведующий научно-исследовательской лабораторией «Интеллектуальных агробиосистем» Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E6009)',
        imgLink: '',
      },
      {
        name: 'Чаплыгин Виктор Анатольевич',
        sfeduRank: 'к.б.н., ведущий научный сотрудник научно-исследовательской лаборатории «Мониторинг биосферы» Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        confRank: 'Председатель Ростовского отделения Общества почвоведов им. В.В. Докучаева, руководитель Рабочей группы по изучению черноземов.',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E11104)',
        imgLink: '',
      },
    ],
    secretary:[
      {
        name: 'Тищенко Светлана Александровна',
        sfeduRank: 'к.б.н., доцент кафедры экологии и природопользования Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E1363)',
        imgLink: '',
      },
    ],
    techSecretary:[
      {
        name: 'Вилкова Валерия Валерьевна',
        sfeduRank: 'младший научный сотрудник лаборатории «Здоровье почв» Академии биологии и биотехнологии Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E1027103)',
        imgLink: '',
      },
      {
        name: 'Болдырева Вероника Эдуардовна',
        sfeduRank: 'преподаватель кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E7313)',
        imgLink: '',
      },
      {
        name: 'Шерстнев Алексей Константинович',
        sfeduRank: 'преподаватель кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E3070)',
        imgLink: '',
      },
      {
        name: 'Меженков Антон Александрович',
        sfeduRank: 'инженер кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E-13863)',
        confRank: '',
        imgLink: '',
      },
      {
        name: 'Барбашев Андрей Игоревич',
        sfeduRank: 'младший научный сотрудник Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E1023975)',
        imgLink: '',
      },
      {
        name: 'Дудникова Тамара Сергеевна',
        sfeduRank: 'младший научный сотрудник Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        sfeduLink: 'https://sfedu.ru/www/stat_pages22.show?p=UNI/s1/D&params=(p_per_id=%3E1026809)',
        imgLink: '',
      },
    ]
  },
};

export const internationalCommittee: IMembersStorage = {
  ru: {
    chairs: [
      {
        name: 'Минг Хунг Вонг (Ming Hung Wong)',
        sfeduRank: 'профессор, руководитель мегагранта «Биореставрация загрязненных почвенных экосистем»',
        confRank: ' главный научный сотрудник лаборатории «Здоровье почв», советник Образовательного университета Гонконга (The Education University of Hong Kong)',
        imgLink: '/members/Vong.webp',
      },
    ],
    members: [
      {
        name: 'Cerbari Valerian',
        sfeduRank: 'Doctor of Science in Biology, prof., Chief of Laboratory of Soil Science, Institute of Pedology',
        confRank: 'Agrochemistry and Soil Protection “Nicolae Dimo’, Chisinau, Republic of Moldova',
        imgLink: '',
      },
      {
        name: 'Ghazaryan Karen',
        sfeduRank: 'Doctor of Science in Biology',
        confRank: 'Deputy Dean of the Faculty of Biology, Yerevan State University, Armenia',
        imgLink: '',
      },
      {
        name: 'Gulser Coskun',
        sfeduRank: 'Doctor of Science in Soil Sciences, Professor',
        confRank: 'Head of Department of Soil Science and Plant Nutrition, Faculty of Agriculture, Ondokuz Mayıs University, Samsun, Turkey',
        imgLink: '',
      },
      {
        name: 'Jun Yao',
        sfeduRank: 'Doctor of Science in Earth Science, Professor',
        confRank: 'School of Water Resources and Environment, China University of Geosciences, Beijing',
        imgLink: '',
      },
      {
        name: 'Keswani Chetan',
        sfeduRank: 'PhD in Biology,Highly qualified specialist',
        confRank: 'Head of laboratory «Agrobiotechnologies to improve soil fertility and the quality of agricultural production», Southern Federal University, Russia',
        imgLink: '',
      },
      {
        name: 'Kızılkaya Ridvan',
        sfeduRank: 'Doctor of Science in Soil Sciences, Professor',
        confRank: 'Ondokuz Mayıs University, General Secretary of Federation of Eurasian Soil Science Societies, Vice President Soil Science Society of Turkey, Samsun, Turkey',
        imgLink: '',
      },
      {
        name: 'Kumari Arpna',
        sfeduRank: 'PhD in Biology',
        confRank: 'University of Tokyo, Tokyo, Japan',
        imgLink: '',
      },
      {
        name: 'Manoj Shrivastava',
        sfeduRank: 'PhD in Biology',
        confRank: 'Indian Agricultural Research Institute, Delhi, India',
        imgLink: '',
      },
      {
        name: 'Mikayilov Fariz',
        sfeduRank: 'Doctor of Science in Biology, Professor',
        confRank: 'Iğdır University, Department of Soil Science and Plant Nutrition, Iğdır, Turkey',
        imgLink: '',
      },
      {
        name: 'Movsesyan Hasmik Sedrak',
        sfeduRank: 'PhD in Biology, Associate Professor',
        confRank: 'Chair of Ecology and Nature Protection Department, Faculty of Biology, Yerevan State University',
        imgLink: '',
      },
      {
        name: 'Rajput Vishnu Dayal',
        sfeduRank: 'PhD in Biology, Highly qualified specialist',
        confRank: 'Head of laboratory “Soil Health”, Southern Federal University, Russia',
        imgLink: '',
      },
      {
        name: 'Ranjan Anuj',
        sfeduRank: 'PhD in Biology',
        confRank: 'Highly qualified specialist, Southern Federal University, Russia',
        imgLink: '',
      },
      {
        name: 'Savelyeva Tamara',
        sfeduRank: 'PhD in Biology, Assistant Professor',
        confRank: 'Department of International Education and Lifelong Learning, The Education University of Hong Kong',
        imgLink: '',
      },
      {
        name: 'Shan Shengdao',
        sfeduRank: 'Doctor of Science in Biology, Professor',
        confRank: 'Zhejiang University of science and technology, China',
        imgLink: '',
      },
      {
        name: 'Shende Sudhir',
        sfeduRank: 'PhD in Biological science, senior researcher',
        confRank: 'Southern federal university, Russia',
        imgLink: '',
      },
      {
        name: 'Sudhakar Srivastava',
        sfeduRank: 'PhD in Biology',
        confRank: 'Banaras Hindu University, India',
        imgLink: '',
      },
      {
        name: 'Yanzheng Gao',
        sfeduRank: 'Doctor of Science in Biology, Professor',
        confRank: 'Nanjing Agricultural University, College of Resource and Environmental Sciences, Director of Institute of Organic Contaminant Control and Soil Remediation',
        imgLink: '',
      },
      {
        name: 'Yu Shen',
        sfeduRank: 'Doctor of Science in Biology, Emeritus Professor',
        confRank: 'Chongqing Technology and Business University, College of Environment and Resources',
        imgLink: '',
      },
      {
        name: 'Асатурова Анжела Михайловна',
        sfeduRank: 'к.б.н., директор Федерального государственного бюджетного научного учреждения «Федеральный научный центр биологической защиты растений», г. Краснодар',
        imgLink: '',
      },
      {
        name: 'Асылбаев Ильгиз Галлямович',
        sfeduRank: 'д.б.н., профессор, декан факультета агротехнологий и лесного хозяйства, Башкирский государственный аграрный университет, г. Уфа.',
        imgLink: '',
      },
      {
        name: 'Барановская Наталья Владимировна',
        sfeduRank: 'д.б.н., профессор Национального исследовательского Томского политехнического университета, г. Томск',
        imgLink: '',
      },
      {
        name: 'Бердников Сергей Владимирович',
        sfeduRank: 'д.г.н., директор Южного научного центра РАН, г. Ростов-на-Дону',
        imgLink: '',
      },
      {
        name: 'Бирюкова Ольга Александровна',
        sfeduRank: 'д.с-х.н., профессор кафедры почвоведения и оценки земельных ресурсов Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета, г. Ростов-на-Дону',
        imgLink: '',
      },
      {
        name: 'Васенев Иван Иванович',
        sfeduRank: 'д.б.н., профессор, заведующий кафедрой экологии РГАУ – МСХА им. К.А. Тимирязева, г. Москва',
        imgLink: '',
      },
      {
        name: 'Евстафьева Елена Владимировна',
        sfeduRank: 'д.б.н., профессор, заведующий кафедрой нормальной физиологии Медицинской академии им. С.И. Георгиевского Крымского федерального университета им. В.И. Вернадского, г. Симферополь',
        imgLink: '',
      },
      {
        name: 'Ергина Елена Ивановна',
        sfeduRank: 'д.г.н., профессор кафедры физической географии океанологии и ландшафтоведения Таврической Академии Крымского федерального университета им. В.И. Вернадского, г. Симферополь',
        imgLink: '',
      },
      {
        name: 'Клименко Александр Иванович',
        sfeduRank: 'д.с.-х.н., профессор, академик РАН, директор Федерального Ростовского аграрного научного центра, Россия',
        imgLink: '',
      },
      {
        name: 'Колесников Сергей Ильич',
        sfeduRank: 'д.с.-х.н., профессор, зав. кафедрой экологии и природопользования Академии биологии и биотехнологии им. Д.И. Ивановского Южного федерального университета',
        imgLink: '',
      },
      {
        name: 'Линник Виталий Григорьевич',
        sfeduRank: 'д.г.н., главный научный сотрудник, Институт геохимии и аналитической химии им. В.И. Вернадского Российской академии наук (ГЕОХИ РАН) – Vernadsky Institute, г. Москва',
        imgLink: '',
      },
      {
        name: 'Мамонтов Владимир Григорьевич',
        sfeduRank: 'д.б.н., профессор кафедры почвоведения, геологии и ландшафтоведения РГАУ-МСХА им. К.А. Тимирязева, г. Москва',
        imgLink: '',
      },
      {
        name: 'Масютенко Нина Петровна',
        sfeduRank: 'д.с.-х.н, профессор, зав. лабораторией агропочвоведения, зам. директора по научной работе Всероссийского научно-исследовательского института земледелия и защиты почв от эрозии, г. Курск',
        imgLink: '',
      },
      {
        name: 'Назаренко Ольга Георгиевна',
        sfeduRank: 'д.б.н., профессор, директор ФГБУ ГЦАС «Ростовский»',
        imgLink: '',
      },
      {
        name: 'Осяк Валентина Владимировна',
        sfeduRank: 'к.ю.н., доцент, заведующий кафедрой криминалистики Ростовского филиала ФГКОУ ВО «Санкт-Петербургская академия Следственного комитета Российской Федерации», Россия',
        imgLink: '',
      },
      {
        name: 'Переломов Леонид Викторович',
        sfeduRank: 'к.б.н., заведующий научно-исследовательской лабораторией «Биогеохимии», Тульский государственный педагогический университет им. Л.Н. Толстого, г. Тула',
        imgLink: '',
      },
      {
        name: 'Персикова Тамара Филипповна',
        sfeduRank: 'д.с.-х.н., профессор, заведующий кафедрой почвоведения Белорусской государственной сельскохозяйственной академии, г. Горки, Беларусь',
        imgLink: '',
      },
      {
        name: 'Пинский Давид Лазаревич',
        sfeduRank: 'д.б.н., профессор, заместитель директора Института физико-химических и биологических проблем почвоведения РАН, г. Пущино',
        imgLink: '',
      },
      {
        name: 'Позаченюк Екатерина Анатольевна',
        sfeduRank: 'д.г.н., профессор, заведующий кафедрой физической географии океанологии и ландшафтоведения Таврической Академии Крымского федерального университета им. В.И. Вернадского, г. Симферополь',
        imgLink: '',
      },
      {
        name: 'Русанов Александр Михайлович',
        sfeduRank: 'д.б.н., профессор, зав. кафедрой биологии и почвоведения Оренбургского государственного аграрного университета, г. Оренбург',
        imgLink: '',
      },
      {
        name: 'Самойлова Юлия Борисовна',
        sfeduRank: 'к.ю.н., доцент, директор Ростовского филиала ФГКОУ ВО «Санкт-Петербургская академия Следственного комитета Российской Федерации», Россия',
        imgLink: '',
      },
      {
        name: 'Синдирева Анна Владимировна',
        sfeduRank: 'д.б.н., профессор, заведующий кафедрой геоэкологии и природопользования Тюменского государственного университета, г. Тюмень',
        imgLink: '',
      },
      {
        name: 'Соловьев Дмитрий Андреевич',
        sfeduRank: 'к.с.-х.н., директор Всероссийского научно-исследовательского института мелиорированных земель – филиала Федерального государственного бюджетного научного учреждения Федерального исследовательского центра «Почвенный институт имени В.В. Докучаева» (ВНИИМЗ)',
        imgLink: '',
      },
      {
        name: 'Суюндуков Ялиль Тухватович',
        sfeduRank: 'доктор биологических наук, профессор, Заслуженный деятель науки Республики Башкортостан, член-корреспондент Академии наук Республики Башкортостан, г. Сибай',
        imgLink: '',
      },
      {
        name: 'Умарова Аминат Батальбиевна',
        sfeduRank: 'д.б.н., профессор, заведующий кафедрой физики почв факультета почвоведения Московского государственного университета им. М.В. Ломоносова, г. Москва',
        imgLink: '',
      },
      {
        name: 'Хитров Николай Борисович',
        sfeduRank: 'д.с.-х.н., зав. отделом генезиса и мелиорации засоленных и солонцовых почв Почвенного института им. В.В. Докучаева, г. Москва',
        imgLink: '',
      },
      {
        name: 'Хомяков Дмитрий Михайлович',
        sfeduRank: 'д.т.н., к.б.н., профессор кафедры общего земледелия и агроэкологии факультета почвоведения МГУ имени. М.В. Ломоносова',
        confRank: 'Заслуженный профессор МГУ имени М.В. Ломоносова, г. Москва',
        imgLink: '',
      },
      {
        name: 'Цховребов Валерий Сергеевич',
        sfeduRank: 'д.с.-х.н., профессор, заведующий кафедрой почвоведения Ставропольского государственного агарного университета, г. Ставрополь, Россия',
        imgLink: '',
      },
      {
        name: 'Шеуджен Асхад Хазретович',
        sfeduRank: 'д.б.н., профессор, академик РАН, заведующий кафедрой агрохимии Кубанского государственного аграрного книверситетат, г. Краснодар, Россия',
        imgLink: '',
      },
      {
        name: 'Шпедт Александр Артурович',
        sfeduRank: 'д.c.-х.н., профессор, директор ФИЦ КНЦ СО РАН, член-корреспондент РАН, г. Красноярск, Россия',
        imgLink: '',
      },
    ],
  }
};