import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'uk', // Explicitly set initial language to Ukrainian
    fallbackLng: 'uk',
    supportedLngs: ['uk', 'en'], // Explicitly list supported languages
    detection: {
      order: ['localStorage', 'navigator'], // Prioritize localStorage, then browser language
      caches: ['localStorage'], // Cache detected language in localStorage
      lookupLocalStorage: 'i18nextLng',
      // Only use supported languages from the detector
      checkWhitelist: true, // Deprecated, but still works for older versions
      // Newer way to restrict detected languages:
      // If you want to restrict detected languages, you can filter them before init
      // or ensure your backend only serves supported ones.
      // For browser detector, it will try to match against supportedLngs
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      uk: {
        translation: {
          "home": "Головна",
          "services": "Послуги",
          "projects": "Реалізовані проєкти",
          "about": "Про нас",
          "contact": "Контакти",
          "rialto_ukraine": "РІАЛЬТО УКРАЇНА",
          "hero_tagline_1": "Трансформуємо ваші документи в цифрове майбутнє.",
          "hero_tagline_2": "Створюємо ефективні електронні архіви.",
          "hero_tagline_3": "Автоматизуємо ваші бізнес-процеси.",
          "hero_tagline_4": "Надійні рішення для цифрової трансформації.",
          "our_services": "Наші Послуги",
          "consultation": "Консультація",
          "read_more": "Детальніше...",
          "service_not_found": "Послугу не знайдено",
          "back_to_services": "Повернутися до списку послуг",
          "project_not_found": "Проєкт не знайдено",
          "back_to_projects": "Повернутися до списку проєктів",
          "about_company": "Про Компанію",
          "contact_us": "Зв'яжіться з нами",
          "your_name": "Ваше ім'я",
          "your_email": "Email адреса",
          "email_privacy": "Ми ніколи не передамо вашу електронну адресу нікому іншому.",
          "message": "Повідомлення",
          "send": "Надіслати",
          "all_rights_reserved": "Всі права захищено.",
          // About Page
          "about_company_lead": "Ми — команда експертів, що спеціалізується на трансформації паперового документообігу в ефективні цифрові рішення.",
          "about_company_mission": "Наша місія — допомогти українським компаніям та установам оптимізувати свою роботу, забезпечити надійне зберігання даних та прискорити доступ до інформації. Ми віримо, що майбутнє за цифровими технологіями, і прагнемо зробити цей перехід максимально простим та ефективним для наших клієнтів.",
          "about_company_guarantee": "Завдяки багаторічному досвіду та використанню передових технологій, ми гарантуємо високу якість наших послуг, безпеку даних та індивідуальний підхід до кожного проєкту.",
          // Services
          "service_scanning_title": "Сканування Документів",
          "service_scanning_short_desc": "Професійне сканування будь-яких форматів документів з високою точністю та якістю.",
          "service_scanning_long_desc": "Ми пропонуємо повний спектр послуг зі сканування документів, від стандартних аркушів А4 до великоформатних креслень. Наше сучасне обладнання дозволяє оцифровувати документи з високою роздільною здатністю, а технології обробки зображень гарантують чудову читабельність та якість. Ми перетворюємо ваші паперові архіви в ефективні та надійні цифрові активи.",
          "service_archives_title": "Створення Електронних Архівів",
          "service_archives_short_desc": "Систематизація та організація цифрових документів у захищені та легкодоступні електронні архіви.",
          "service_archives_long_desc": "Створення електронного архіву — це не просто зберігання файлів. Це побудова структурованої системи, яка забезпечує миттєвий доступ до потрібної інформації, надійний захист даних та відповідність нормативним вимогам. Ми розробляємо та впроваджуємо рішення, які дозволяють керувати життєвим циклом документів, налаштовувати права доступу та інтегрувати архів з іншими бізнес-системами.",
          "service_software_title": "Розробка Програмного Забезпечення",
          "service_software_short_desc": "Створення індивідуальних програмних рішень для управління документами та автоматизації процесів.",
          "service_software_long_desc": "Коли стандартних рішень недостатньо, ми приходимо на допомогу. Наша команда розробників створює спеціалізоване програмне забезпечення для управління електронними документами (EDMS), автоматизації робочих процесів (BPM) та інтеграції з вашими існуючими IT-системами. Ми аналізуємо ваші потреби та створюємо гнучкі, масштабовані та безпечні додатки, що повністю відповідають задачам вашого бізнесу.",
          // Projects
          "project_state_archive_title": "Електронний архів для державного сектору",
          "project_state_archive_short_desc": "Розроблено та впроваджено комплексну систему електронного документообігу та архіву для великої державної установи.",
          "project_state_archive_long_desc": "Проєкт включав аналіз існуючих паперових процесів, розробку архітектури системи, оцифрування понад 1 мільйона документів та навчання персоналу. В результаті було створено централізоване сховище, що значно прискорило пошук інформації та підвищило безпеку даних.",
          "project_construction_title": "Оцифрування технічної документації",
          "project_construction_short_desc": "Виконано проєкт зі сканування та індексації великого обсягу проєктної та технічної документації для будівельної компанії.",
          "project_construction_long_desc": "Для провідної будівельної компанії було виконано сканування та атрибутивне індексування креслень, специфікацій та дозволів. Це дозволило створити єдину базу знань, доступну для інженерів та менеджерів проєктів безпосередньо на будівельних майданчиках.",
          "project_contract_title": "Система управління договорами",
          "project_contract_short_desc": "Створено ПЗ для автоматизації процесу узгодження, підписання та зберігання договорів для юридичної фірми.",
          "project_contract_long_desc": "Розроблене на замовлення програмне забезпечення автоматизувало повний життєвий цикл договорів: від створення за шаблоном до електронного підписання та контролю термінів виконання. Система дозволила скоротити час на узгодження договорів на 40%.",
          "project_bank_archive_title": "Архів для банку",
          "project_bank_archive_short_desc": "Переведено в цифровий формат та систематизовано кредитні справи та інші клієнтські документи для великого комерційного банку.",
          "project_bank_archive_long_desc": "В рамках проєкту було оцифровано та індексовано архів кредитних справ за 10 років. Створена система електронного архіву була інтегрована з основною банківською системою, що дозволило менеджерам отримувати доступ до документів клієнта за лічені секунди."
        }
      },
      en: {
        translation: {
          "home": "Home",
          "services": "Services",
          "projects": "Completed Projects",
          "about": "About Us",
          "contact": "Contact",
          "rialto_ukraine": "RIALTO UKRAINE",
          "hero_tagline_1": "Transforming your documents into a digital future.",
          "hero_tagline_2": "Creating effective electronic archives.",
          "hero_tagline_3": "Automating your business processes.",
          "hero_tagline_4": "Reliable solutions for digital transformation.",
          "our_services": "Our Services",
          "consultation": "Consultation",
          "read_more": "Read more...",
          "service_not_found": "Service not found",
          "back_to_services": "Back to services list",
          "project_not_found": "Project not found",
          "back_to_projects": "Back to projects list",
          "about_company": "About Company",
          "contact_us": "Contact Us",
          "your_name": "Your Name",
          "your_email": "Email Address",
          "email_privacy": "We'll never share your email with anyone else.",
          "message": "Message",
          "send": "Send",
          "all_rights_reserved": "All rights reserved.",
          // About Page
          "about_company_lead": "We are a team of experts specializing in transforming paper document management into efficient digital solutions.",
          "about_company_mission": "Our mission is to help Ukrainian companies and institutions optimize their work, ensure reliable data storage, and accelerate access to information. We believe in the future of digital technologies and strive to make this transition as simple and effective as possible for our clients.",
          "about_company_guarantee": "Thanks to many years of experience and the use of advanced technologies, we guarantee the high quality of our services, data security, and an individual approach to each project."
        }
      }
    }
  });

export default i18n;
