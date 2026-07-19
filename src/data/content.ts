// Jedno miejsce na całą treść strony (PL + UK).
// Nietechniczna edycja: zmieniaj tylko tekst w cudzysłowach.
// Pola oznaczone // TODO uzupełnij prawdziwymi danymi.

export type Locale = 'pl' | 'uk';

export const brand = {
  name: 'AutoSafe Expert',
  owner: 'Iwan Bazylewicz',
  phone: '+48 799 979 735',
  phoneHref: '+48799979735',
  phone2: '+48 730 371 225',
  phone2Href: '+48730371225',
  email: 'bazylewicziwan@gmail.com',
  whatsapp: '+48799979735',
  facebook: '', // TODO wklej link po założeniu strony FB, np. https://www.facebook.com/autosafeexpert
  googleReview: '', // TODO wklej link "napisz opinię" z Profilu Firmy Google
};

type Service = { title: string; desc: string; priceFrom: string; icon: string };
type FaqItem = { q: string; a: string };
type ChecklistGroup = { title: string; items: string[] };
type Review = { name: string; text: string; source: string };

type Dict = {
  htmlLang: string;
  langName: string;
  meta: { title: string; description: string };
  nav: { services: string; expert: string; pricing: string; process: string; faq: string; contact: string; cta: string };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; trust: string[] };
  whyUs: { title: string; subtitle: string; items: { title: string; desc: string }[] };
  services: { title: string; subtitle: string; items: Service[]; note: string };
  checklist: {
    title: string;
    subtitle: string;
    basicLabel: string;
    groups: ChecklistGroup[];
    extendedLabel: string;
    extendedGroups: ChecklistGroup[];
  };
  expert: { title: string; lead: string; paragraphs: string[]; credentials: string[] };
  guarantee: { title: string; subtitle: string; items: { title: string; desc: string }[] };
  reviews: { title: string; subtitle: string; items: Review[]; googleCta: string };
  pricing: { title: string; subtitle: string; rows: { service: string; price: string }[]; note: string; cta: string };
  process: { title: string; subtitle: string; steps: { title: string; desc: string }[] };
  faq: { title: string; items: FaqItem[] };
  contact: { title: string; subtitle: string; phoneLabel: string; emailLabel: string; areaLabel: string; area: string; hoursLabel: string; hours: string; formName: string; formPhone: string; formMsg: string; formSubmit: string; formNote: string };
  footer: { rights: string; disclaimer: string; privacy: string };
};

export const content: Record<Locale, Dict> = {
  pl: {
    htmlLang: 'pl',
    langName: 'PL',
    meta: {
      title: 'AutoSafe Expert — sprawdzenie auta przed zakupem | Warszawa, Radzymin',
      description:
        'Niezależny biegły motoryzacyjny sprawdzi auto przed zakupem. Oględziny, diagnostyka, pomoc w rejestracji. Warszawa, Radzymin i okolice do 100 km. Dojazd w cenie.',
    },
    nav: {
      services: 'Usługi',
      expert: 'O ekspercie',
      pricing: 'Cennik',
      process: 'Jak to działa',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Umów oględziny',
    },
    hero: {
      badge: 'Niezależny biegły motoryzacyjny',
      title: 'Kupujesz samochód? Pomagamy uniknąć kosztownych błędów.',
      subtitle:
        'Profesjonalne oględziny auta przed zakupem oraz pomoc w formalnościach rejestracyjnych. Kupuj ze świadomością wad i zalet — a negocjacja ceny zwróci koszt usługi.',
      ctaPrimary: 'Umów oględziny',
      ctaSecondary: 'Zadzwoń teraz',
      trust: ['Biegły sądowy i prawnik', '15 lat ekspertyz motoryzacyjnych', 'Dojazd w cenie do 100 km', 'Obsługa cudzoziemców'],
    },
    whyUs: {
      title: 'Dlaczego AutoSafe Expert',
      subtitle: 'Realna wiedza eksperta, uczciwa cena i pełna niezależność.',
      items: [
        { title: 'Realny biegły, nie pośrednik', desc: 'Inżynier bezpieczeństwa ruchu drogowego i prawnik z licencją biegłego — a nie sprzedawca.' },
        { title: 'Uczciwa cena', desc: 'Oględziny już od 250 zł. Dojazd w promieniu 100 km wliczony w cenę usługi.' },
        { title: 'Pełna niezależność', desc: 'Pracuję dla Ciebie, nie dla sprzedającego. Rekomendacja: kup, negocjuj albo odradzam.' },
        { title: 'Pomoc w formalnościach', desc: 'Rejestracja pojazdu i wsparcie dla osób z zagranicy — od A do Z.' },
      ],
    },
    services: {
      title: 'Usługi',
      subtitle: 'Cztery usługi, jasne ceny. Raport stanu technicznego zawsze w cenie sprawdzenia.',
      items: [
        {
          title: 'Sprawdzenie auta — pakiet podstawowy',
          desc: 'Analiza ogłoszenia i rozmowa ze sprzedającym, weryfikacja historii VIN, dokumenty, silnik, lakier i bezwypadkowość, hamulce, opony, elektryka, szyby, lampy, wnętrze, komora silnika, jazda próbna. Zdjęcia i video + raport stanu technicznego.',
          priceFrom: '250 zł netto',
          icon: 'shield',
        },
        {
          title: 'Sprawdzenie auta — pakiet rozszerzony',
          desc: 'Wszystko z pakietu podstawowego + pełna diagnostyka komputerowa (systemy bezpieczeństwa i komfortu, błędy wszystkich modułów, wtryskiwacze, DPF/FAP, turbo, ABS) oraz kontrola podwozia. Raport stanu technicznego.',
          priceFrom: '450 zł netto',
          icon: 'wrench',
        },
        {
          title: 'Pomoc w rejestracji pojazdu',
          desc: 'Pomoc w formalnościach związanych z rejestracją: dokumenty, wnioski, procedury. Wsparcie także dla osób z zagranicy — po polsku i po ukraińsku.',
          priceFrom: '100 zł netto',
          icon: 'doc',
        },
        {
          title: 'Kompleksowa usługa (A–Z)',
          desc: 'Wyszukanie samochodu, sprawdzenie stanu technicznego, negocjacja ceny, podpisanie umowy oraz pomoc w formalnościach związanych z rejestracją pojazdu.',
          priceFrom: '800 zł netto',
          icon: 'star',
        },
      ],
      note: 'Dojazd w promieniu 100 km od Warszawy / Radzymina wliczony w cenę usługi. Ceny netto.',
    },
    checklist: {
      title: 'Co dokładnie sprawdzam',
      subtitle: 'Pełen, jawny zakres każdego pakietu — bez skrótów i bez niespodzianek.',
      basicLabel: 'Pakiet podstawowy — 250 zł netto',
      groups: [
        { title: 'Analiza przed oględzinami', items: ['Analiza ogłoszenia', 'Rozmowa ze sprzedającym', 'Weryfikacja historii VIN'] },
        { title: 'Dokumentacja', items: ['Dowód rejestracyjny, karta pojazdu, OC', 'Dokumenty zagraniczne, akcyza (jeśli sprowadzony)', 'Dokumentacja serwisowa', 'Faktura lub umowa zakupu'] },
        { title: 'Stan silnika', items: ['Weryfikacja zespołu napędowego', 'Wycieki, praca, poziom płynów', 'Paski rozrządu i klinowe', 'Oględziny komory silnika'] },
        { title: 'Grubość powłok lakierowych', items: ['Pomiar miernikiem lakieru', 'Badanie bezwypadkowości pojazdu', 'Weryfikacja poszyć zewnętrznych i szkieletu', 'Stan podłużnic, wnęk, podłogi, progów'] },
        { title: 'Hamulce i opony', items: ['Grubość tarcz i klocków, prawidłowość działania', 'Rocznik i bieżnik opon', 'Opony zimowe / letnie / wielosezonowe'] },
        { title: 'Elektryka, szyby, lampy, wnętrze', items: ['Klimatyzacja, szyby, lusterka, radio, elektryka', 'Oryginalność i stan szyb', 'Oryginalność i działanie lamp', 'Oględziny wnętrza'] },
        { title: 'Jazda próbna', items: ['Zachowanie zespołu napędowego', 'Praca zawieszenia', 'Praca hamulców', 'Weryfikacja przeniesienia napędu'] },
        { title: 'Dokumentacja foto/video i raport', items: ['Zdjęcia stanu pojazdu — WhatsApp / e-mail', 'Video pracy silnika — WhatsApp / e-mail', 'Raport stanu technicznego w cenie', 'Telefon z wynikiem od razu po oględzinach'] },
      ],
      extendedLabel: 'Pakiet rozszerzony — 450 zł netto (podstawowy + poniższe)',
      extendedGroups: [
        { title: 'Diagnostyka komputerowa', items: ['Systemy bezpieczeństwa, komfortu, elektroniki i silnika', 'Błędy wszystkich modułów', 'Korekty na wtryskiwaczach', 'Stan DPF, FAP, turbo, ABS'] },
        { title: 'Kontrola podwozia', items: ['Amortyzatory — sprawność, wycieki', 'Hamulce — zużycie układu, przewody hamulcowe', 'Zawieszenie — luzy na sworzniach, tulejach wahaczy, drążkach, łączniki stabilizatora, łożyska kół', 'Oględziny podwozia — korozja, uszkodzenia, przewody paliwowe, wycieki'] },
      ],
    },
    expert: {
      title: 'O ekspercie',
      lead: 'Iwan Bazylewicz — inżynier organizacji i bezpieczeństwa ruchu drogowego oraz prawnik.',
      paragraphs: [
        'Od 2018 roku oferuję rzetelne, niezależne i profesjonalne ekspertyzy motoryzacyjne w Polsce. Wydaję opinie dla osób prywatnych, firm i kancelarii prawnych — oceniam stan techniczny pojazdów, jakość napraw oraz przyczyny uszkodzeń.',
        'Moje wykształcenie zostało uznane w Polsce przez NAWA.',
      ],
      credentials: [
        'Inżynier organizacji i bezpieczeństwa ruchu drogowego oraz prawnik.',
        '15 lat doświadczenia w zakresie ekspertyz motoryzacyjnych.',
        '10 lat doświadczenia w badaniu wypadków drogowych.',
        'Ekspert w państwowym Centrum Ekspertyz Sądowych i Kryminalistyki Ministerstwa Sprawiedliwości Republiki Białoruś oraz w prywatnych organizacjach eksperckich.',
        'Służba w Wydziale ruchu drogowego MSW Republiki Białoruś w Mińsku.',
        'Licencja biegłego z zakresu ekspertyz technicznych pojazdów oraz rekonstrukcji wypadków drogowych.',
        'Wykształcenie uznane w Polsce przez NAWA.',
      ],
    },
    guarantee: {
      title: 'Gwarancja przejrzystości',
      subtitle: 'Wiesz dokładnie, za co płacisz i co dostajesz.',
      items: [
        { title: 'Bez ukrytych kosztów', desc: 'Cena ustalona z góry przy pierwszym kontakcie. Dojazd do 100 km wliczony.' },
        { title: 'Dowody, nie opinie', desc: 'Zdjęcia i video z każdych oględzin na WhatsApp / e-mail. Widzisz to, co ja.' },
        { title: 'Wynik od razu', desc: 'Telefon z wynikiem natychmiast po oględzinach, a raport stanu technicznego w cenie.' },
        { title: 'Jasna rekomendacja', desc: 'Zawsze kończę jednoznacznie: kupić, negocjować albo odradzam.' },
      ],
    },
    reviews: {
      title: 'Opinie klientów',
      subtitle: 'Prawdziwe opinie z Google i Facebooka.',
      // TODO: dodaj pierwsze prawdziwe opinie — sekcja pokaże się automatycznie.
      // Format: { name: 'Jan K.', text: '...', source: 'Google' }
      items: [],
      googleCta: 'Zobacz opinie w Google',
    },
    pricing: {
      title: 'Cennik',
      subtitle: 'Przejrzyste ceny. Bez ukrytych kosztów. Dojazd do 100 km w cenie.',
      rows: [
        { service: 'Sprawdzenie auta — pakiet podstawowy (z raportem)', price: '250 zł netto' },
        { service: 'Sprawdzenie auta — pakiet rozszerzony (z raportem)', price: '450 zł netto' },
        { service: 'Pomoc w formalnościach przy rejestracji pojazdu', price: '100 zł netto' },
        { service: 'Kompleksowa usługa: wyszukanie, sprawdzenie, negocjacja, umowa, rejestracja', price: '800 zł netto' },
      ],
      note: 'Ceny netto. Raport stanu technicznego samochodu w cenie każdego sprawdzenia.',
      cta: 'Umów termin',
    },
    process: {
      title: 'Jak to działa',
      subtitle: 'Cztery proste kroki do bezpiecznego zakupu.',
      steps: [
        { title: '1. Zamawiasz usługę', desc: 'Dzwonisz lub piszesz. Ustalamy auto, lokalizację pojazdu, pakiet i termin.' },
        { title: '2. Dokonujesz opłaty', desc: 'Cena znana z góry — zgodnie z cennikiem, bez ukrytych kosztów.' },
        { title: '3. Specjalistyczne oględziny', desc: 'Ekspert wykonuje oględziny na miejscu (dojazd do 100 km w cenie). Możesz uczestniczyć.' },
        { title: '4. Otrzymujesz raport', desc: 'Poznajesz stan samochodu: raport, zdjęcia i video oraz jasna rekomendacja — kupić, negocjować albo odradzam.' },
      ],
    },
    faq: {
      title: 'Najczęstsze pytania',
      items: [
        { q: 'Gdzie działacie?', a: 'Warszawa, Radzymin i okolice — do 100 km. Dojazd w tym promieniu jest wliczony w cenę usługi.' },
        { q: 'Ile trwają oględziny?', a: 'Standardowo od 60 do 90 minut, w zależności od stanu auta i wybranego zakresu diagnostyki.' },
        { q: 'Czy muszę być obecny?', a: 'Nie musisz. Jeśli nie możesz przyjechać, dzwonię z wynikiem od razu po oględzinach i wysyłam zdjęcia oraz video.' },
        { q: 'Czy pomagacie obcokrajowcom?', a: 'Tak. Wspieram osoby z zagranicy w organizacji formalności i w rejestracji pojazdu.' },
        { q: 'Czy dostanę raport?', a: 'Tak — raport stanu technicznego samochodu jest w cenie każdego pakietu sprawdzenia, razem ze zdjęciami i video.' },
        { q: 'Czym różni się pakiet podstawowy od rozszerzonego?', a: 'Rozszerzony (450 zł netto) obejmuje wszystko z podstawowego (250 zł netto) plus pełną diagnostykę komputerową i kontrolę podwozia.' },
      ],
    },
    contact: {
      title: 'Umów oględziny',
      subtitle: 'Zadzwoń, napisz na WhatsApp lub zostaw kontakt — oddzwonię.',
      phoneLabel: 'Telefon',
      emailLabel: 'E-mail',
      areaLabel: 'Obszar',
      area: 'Warszawa • Radzymin • okolice do 100 km',
      hoursLabel: 'Godziny',
      hours: 'Pon.–Sob. 8:00–20:00',
      formName: 'Imię',
      formPhone: 'Telefon',
      formMsg: 'Jakiego auta dotyczy sprawa i gdzie się znajduje?',
      formSubmit: 'Wyślij zgłoszenie',
      formNote: 'Wysyłając formularz otwierasz gotową wiadomość e-mail do eksperta.',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      disclaimer: 'Niezależne ekspertyzy motoryzacyjne. Warszawa, Radzymin i okolice.',
      privacy: 'Polityka prywatności',
    },
  },

  uk: {
    htmlLang: 'uk',
    langName: 'UA',
    meta: {
      title: 'AutoSafe Expert — перевірка авто перед купівлею | Варшава, Радзимін',
      description:
        'Незалежний автоексперт перевірить авто перед купівлею. Огляд, діагностика, допомога з реєстрацією. Варшава, Радзимін та околиці до 100 км. Виїзд у ціні.',
    },
    nav: {
      services: 'Послуги',
      expert: 'Про експерта',
      pricing: 'Ціни',
      process: 'Як це працює',
      faq: 'Питання',
      contact: 'Контакт',
      cta: 'Замовити огляд',
    },
    hero: {
      badge: 'Незалежний автоексперт',
      title: 'Купуєте авто? Допоможемо уникнути дорогих помилок.',
      subtitle:
        'Професійний огляд авто перед купівлею та допомога з реєстрацією. Купуйте, знаючи всі переваги й недоліки — а торг за ціну поверне вартість послуги.',
      ctaPrimary: 'Замовити огляд',
      ctaSecondary: 'Зателефонувати',
      trust: ['Судовий експерт і юрист', '15 років автоекспертиз', 'Виїзд до 100 км у ціні', 'Обслуговування іноземців'],
    },
    whyUs: {
      title: 'Чому AutoSafe Expert',
      subtitle: 'Справжні знання експерта, чесна ціна та повна незалежність.',
      items: [
        { title: 'Справжній експерт, а не посередник', desc: 'Інженер безпеки дорожнього руху та юрист із ліцензією експерта — а не продавець.' },
        { title: 'Чесна ціна', desc: 'Огляд від 250 zł. Виїзд у радіусі 100 км входить у вартість послуги.' },
        { title: 'Повна незалежність', desc: 'Я працюю на вас, а не на продавця. Рекомендація: купувати, торгуватися чи відмовитися.' },
        { title: 'Допомога з формальностями', desc: 'Реєстрація авто та підтримка для іноземців — від А до Я.' },
      ],
    },
    services: {
      title: 'Послуги',
      subtitle: 'Чотири послуги, чіткі ціни. Звіт про технічний стан завжди в ціні перевірки.',
      items: [
        {
          title: 'Перевірка авто — базовий пакет',
          desc: 'Аналіз оголошення й розмова з продавцем, перевірка історії VIN, документи, двигун, фарба та перевірка на ДТП, гальма, шини, електрика, скло, фари, салон, моторний відсік, тест-драйв. Фото й відео + звіт про технічний стан.',
          priceFrom: '250 zł нетто',
          icon: 'shield',
        },
        {
          title: 'Перевірка авто — розширений пакет',
          desc: 'Усе з базового пакета + повна комп\'ютерна діагностика (системи безпеки та комфорту, помилки всіх модулів, форсунки, DPF/FAP, турбіна, ABS) та контроль ходової. Звіт про технічний стан.',
          priceFrom: '450 zł нетто',
          icon: 'wrench',
        },
        {
          title: 'Допомога з реєстрацією авто',
          desc: 'Допомога з формальностями при реєстрації: документи, заяви, процедури. Підтримка також для іноземців — польською та українською.',
          priceFrom: '100 zł нетто',
          icon: 'doc',
        },
        {
          title: 'Комплексна послуга (А–Я)',
          desc: 'Пошук авто, перевірка технічного стану, торг за ціну, підписання договору та допомога з формальностями при реєстрації.',
          priceFrom: '800 zł нетто',
          icon: 'star',
        },
      ],
      note: 'Виїзд у радіусі 100 км від Варшави / Радзиміна входить у вартість послуги. Ціни нетто.',
    },
    checklist: {
      title: 'Що саме я перевіряю',
      subtitle: 'Повний, відкритий обсяг кожного пакета — без скорочень і несподіванок.',
      basicLabel: 'Базовий пакет — 250 zł нетто',
      groups: [
        { title: 'Аналіз перед оглядом', items: ['Аналіз оголошення', 'Розмова з продавцем', 'Перевірка історії VIN'] },
        { title: 'Документація', items: ['Техпаспорт, картка авто, страховка OC', 'Іноземні документи, акциз (якщо ввезене)', 'Сервісна документація', 'Рахунок або договір купівлі'] },
        { title: 'Стан двигуна', items: ['Перевірка силового агрегату', 'Течі, робота, рівень рідин', 'Ремені ГРМ та привідні', 'Огляд моторного відсіку'] },
        { title: 'Товщина лакофарбового покриття', items: ['Вимірювання товщиноміром', 'Перевірка на відсутність ДТП', 'Перевірка зовнішніх панелей і каркаса', 'Стан лонжеронів, ніш, підлоги, порогів'] },
        { title: 'Гальма та шини', items: ['Товщина дисків і колодок, справність', 'Рік випуску та протектор шин', 'Зимові / літні / всесезонні шини'] },
        { title: 'Електрика, скло, фари, салон', items: ['Клімат, скло, дзеркала, радіо, електрика', 'Оригінальність і стан скла', 'Оригінальність і робота фар', 'Огляд салону'] },
        { title: 'Тест-драйв', items: ['Поведінка силового агрегату', 'Робота підвіски', 'Робота гальм', 'Перевірка трансмісії'] },
        { title: 'Фото/відео та звіт', items: ['Фото стану авто — WhatsApp / e-mail', 'Відео роботи двигуна — WhatsApp / e-mail', 'Звіт про технічний стан у ціні', 'Дзвінок із результатом одразу після огляду'] },
      ],
      extendedLabel: 'Розширений пакет — 450 zł нетто (базовий + нижче)',
      extendedGroups: [
        { title: "Комп'ютерна діагностика", items: ['Системи безпеки, комфорту, електроніки та двигуна', 'Помилки всіх модулів', 'Корекції форсунок', 'Стан DPF, FAP, турбіни, ABS'] },
        { title: 'Контроль ходової', items: ['Амортизатори — справність, течі', 'Гальма — знос системи, гальмівні шланги', 'Підвіска — люфти шарнірів, втулок важелів, тяг, стійки стабілізатора, підшипники коліс', 'Огляд ходової — корозія, пошкодження, паливні магістралі, течі'] },
      ],
    },
    expert: {
      title: 'Про експерта',
      lead: 'Іван Базилевич — інженер організації та безпеки дорожнього руху, юрист.',
      paragraphs: [
        'З 2018 року надаю чесні, незалежні та професійні автоекспертизи в Польщі. Готую висновки для приватних осіб, компаній та юридичних фірм — оцінюю технічний стан авто, якість ремонту та причини пошкоджень.',
        'Мою освіту визнано в Польщі установою NAWA.',
      ],
      credentials: [
        'Інженер організації та безпеки дорожнього руху, юрист.',
        '15 років досвіду в автоекспертизах.',
        '10 років досвіду в дослідженні дорожніх пригод.',
        'Експерт державного Центру судових експертиз і криміналістики Міністерства юстиції Республіки Білорусь та приватних експертних організацій.',
        'Служба у відділі дорожнього руху МВС Республіки Білорусь у Мінську.',
        'Ліцензія експерта з технічних експертиз транспортних засобів та реконструкції ДТП.',
        'Освіту визнано в Польщі установою NAWA.',
      ],
    },
    guarantee: {
      title: 'Гарантія прозорості',
      subtitle: 'Ви точно знаєте, за що платите і що отримуєте.',
      items: [
        { title: 'Без прихованих витрат', desc: 'Ціна узгоджена наперед під час першого контакту. Виїзд до 100 км у ціні.' },
        { title: 'Докази, а не слова', desc: 'Фото й відео з кожного огляду на WhatsApp / e-mail. Ви бачите те саме, що і я.' },
        { title: 'Результат одразу', desc: 'Дзвінок із результатом одразу після огляду, а звіт про технічний стан — у ціні.' },
        { title: 'Чітка рекомендація', desc: 'Завжди завершую однозначно: купувати, торгуватися чи відмовитися.' },
      ],
    },
    reviews: {
      title: 'Відгуки клієнтів',
      subtitle: 'Справжні відгуки з Google і Facebook.',
      items: [],
      googleCta: 'Відгуки в Google',
    },
    pricing: {
      title: 'Ціни',
      subtitle: 'Прозорі ціни. Без прихованих витрат. Виїзд до 100 км у ціні.',
      rows: [
        { service: 'Перевірка авто — базовий пакет (зі звітом)', price: '250 zł нетто' },
        { service: 'Перевірка авто — розширений пакет (зі звітом)', price: '450 zł нетто' },
        { service: 'Допомога з формальностями при реєстрації', price: '100 zł нетто' },
        { service: 'Комплексна послуга: пошук, перевірка, торг, договір, реєстрація', price: '800 zł нетто' },
      ],
      note: 'Ціни нетто. Звіт про технічний стан авто в ціні кожної перевірки.',
      cta: 'Замовити час',
    },
    process: {
      title: 'Як це працює',
      subtitle: 'Чотири прості кроки до безпечної купівлі.',
      steps: [
        { title: '1. Замовляєте послугу', desc: 'Телефонуєте або пишете. Узгоджуємо авто, розташування, пакет і час.' },
        { title: '2. Оплачуєте', desc: 'Ціна відома наперед — згідно з прайсом, без прихованих витрат.' },
        { title: '3. Спеціалізований огляд', desc: 'Експерт проводить огляд на місці (виїзд до 100 км у ціні). Ви можете бути присутні.' },
        { title: '4. Отримуєте звіт', desc: 'Дізнаєтеся стан авто: звіт, фото й відео та чітка рекомендація — купувати, торгуватися чи відмовитися.' },
      ],
    },
    faq: {
      title: 'Часті запитання',
      items: [
        { q: 'Де ви працюєте?', a: 'Варшава, Радзимін та околиці — до 100 км. Виїзд у цьому радіусі входить у вартість послуги.' },
        { q: 'Скільки триває огляд?', a: 'Зазвичай від 60 до 90 хвилин, залежно від стану авто та обраного обсягу діагностики.' },
        { q: 'Чи маю бути присутнім?', a: 'Ні. Якщо не можете приїхати, телефоную з результатом одразу після огляду й надсилаю фото та відео.' },
        { q: 'Чи допомагаєте іноземцям?', a: 'Так. Підтримую іноземців в організації формальностей та реєстрації авто.' },
        { q: 'Чи отримаю звіт?', a: 'Так — звіт про технічний стан авто входить у ціну кожного пакета перевірки, разом із фото та відео.' },
        { q: 'Чим відрізняється базовий пакет від розширеного?', a: 'Розширений (450 zł нетто) містить усе з базового (250 zł нетто) плюс повну комп\'ютерну діагностику та контроль ходової.' },
      ],
    },
    contact: {
      title: 'Замовити огляд',
      subtitle: 'Зателефонуйте, напишіть у WhatsApp або залиште контакт — я передзвоню.',
      phoneLabel: 'Телефон',
      emailLabel: 'E-mail',
      areaLabel: 'Зона',
      area: 'Варшава • Радзимін • околиці до 100 км',
      hoursLabel: 'Години',
      hours: 'Пн.–Сб. 8:00–20:00',
      formName: 'Ім’я',
      formPhone: 'Телефон',
      formMsg: 'Яке авто та де воно знаходиться?',
      formSubmit: 'Надіслати заявку',
      formNote: 'Надіславши форму, ви відкриваєте готовий лист e-mail до експерта.',
    },
    footer: {
      rights: 'Усі права захищені.',
      disclaimer: 'Незалежні автоекспертизи. Варшава, Радзимін та околиці.',
      privacy: 'Політика конфіденційності',
    },
  },
};
