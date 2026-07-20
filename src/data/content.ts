// Jedno miejsce na całą treść strony (PL + UK).
// Nietechniczna edycja: zmieniaj tylko tekst w cudzysłowach.
// Pola oznaczone // TODO uzupełnij prawdziwymi danymi.

export type Locale = 'pl' | 'uk' | 'en' | 'ru' | 'be';

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
          desc: 'Pomoc w formalnościach związanych z rejestracją: dokumenty, wnioski, procedury. Wsparcie także dla osób z zagranicy — po polsku, ukraińsku, rosyjsku, białorusku i angielsku.',
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
        { q: 'Czy pomagacie obcokrajowcom?', a: 'Tak. Wspieram osoby z zagranicy w organizacji formalności i w rejestracji pojazdu — po polsku, ukraińsku, rosyjsku, białorusku i angielsku.' },
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
          desc: 'Допомога з формальностями при реєстрації: документи, заяви, процедури. Підтримка також для іноземців — українською, польською, російською, білоруською та англійською.',
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
        { q: 'Чи допомагаєте іноземцям?', a: 'Так. Підтримую іноземців в організації формальностей та реєстрації авто — українською, польською, російською, білоруською та англійською.' },
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

  en: {
    htmlLang: 'en',
    langName: 'EN',
    meta: {
      title: 'AutoSafe Expert — pre-purchase car inspection | Warsaw, Radzymin',
      description:
        'Independent automotive expert will inspect a car before you buy it. Inspection, diagnostics, vehicle registration help. Warsaw, Radzymin and up to 100 km. Travel included in the price.',
    },
    nav: {
      services: 'Services',
      expert: 'About the expert',
      pricing: 'Pricing',
      process: 'How it works',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book an inspection',
    },
    hero: {
      badge: 'Independent automotive expert',
      title: 'Buying a car in Poland? We help you avoid costly mistakes.',
      subtitle:
        'Professional pre-purchase car inspection and help with vehicle registration paperwork. Know the flaws before you pay — price negotiation usually covers the cost of the service.',
      ctaPrimary: 'Book an inspection',
      ctaSecondary: 'Call now',
      trust: ['Licensed expert & lawyer', '15 years of automotive expertise', 'Travel up to 100 km included', 'English-speaking service'],
    },
    whyUs: {
      title: 'Why AutoSafe Expert',
      subtitle: 'Real expert knowledge, fair price and full independence.',
      items: [
        { title: 'A real expert, not a middleman', desc: 'Road safety engineer and lawyer with an expert licence — not a salesman.' },
        { title: 'Fair price', desc: 'Inspection from 250 PLN. Travel within 100 km is included in the price.' },
        { title: 'Fully independent', desc: 'I work for you, not for the seller. Clear recommendation: buy, negotiate, or walk away.' },
        { title: 'Paperwork help', desc: 'Vehicle registration and support for foreigners — from A to Z.' },
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'Four services, clear prices. A technical condition report is always included with an inspection.',
      items: [
        {
          title: 'Car inspection — basic package',
          desc: 'Listing analysis and a call with the seller, VIN history check, documents, engine, paint and accident history, brakes, tyres, electrics, glass, lights, interior, engine bay, test drive. Photos and video + technical condition report.',
          priceFrom: '250 PLN net',
          icon: 'shield',
        },
        {
          title: 'Car inspection — extended package',
          desc: 'Everything in the basic package + full computer diagnostics (safety and comfort systems, fault codes of all modules, injectors, DPF/FAP, turbo, ABS) and an underbody check. Technical condition report.',
          priceFrom: '450 PLN net',
          icon: 'wrench',
        },
        {
          title: 'Vehicle registration help',
          desc: 'Help with registration formalities: documents, applications, procedures. Support for foreigners — in English, Polish, Ukrainian, Russian and Belarusian.',
          priceFrom: '100 PLN net',
          icon: 'doc',
        },
        {
          title: 'Full service (A–Z)',
          desc: 'Finding the car, technical inspection, price negotiation, signing the contract and help with registration formalities.',
          priceFrom: '800 PLN net',
          icon: 'star',
        },
      ],
      note: 'Travel within 100 km of Warsaw / Radzymin is included in the price. Prices are net.',
    },
    checklist: {
      title: 'What exactly I check',
      subtitle: 'The full, open scope of each package — no shortcuts, no surprises.',
      basicLabel: 'Basic package — 250 PLN net',
      groups: [
        { title: 'Before the inspection', items: ['Listing analysis', 'Call with the seller', 'VIN history check'] },
        { title: 'Documents', items: ['Registration certificate, vehicle card, insurance', 'Foreign documents, excise duty (if imported)', 'Service history', 'Invoice or purchase agreement'] },
        { title: 'Engine condition', items: ['Drivetrain check', 'Leaks, operation, fluid levels', 'Timing and drive belts', 'Engine bay inspection'] },
        { title: 'Paint thickness', items: ['Paint gauge measurement', 'Accident history check', 'Outer panels and frame check', 'Condition of rails, wells, floor, sills'] },
        { title: 'Brakes and tyres', items: ['Disc and pad thickness, correct operation', 'Tyre age and tread', 'Winter / summer / all-season'] },
        { title: 'Electrics, glass, lights, interior', items: ['A/C, windows, mirrors, radio, electrics', 'Glass originality and condition', 'Light originality and operation', 'Interior inspection'] },
        { title: 'Test drive', items: ['Drivetrain behaviour', 'Suspension performance', 'Brake performance', 'Transmission check'] },
        { title: 'Photo/video documentation and report', items: ['Photos of the car — WhatsApp / e-mail', 'Video of the engine running — WhatsApp / e-mail', 'Technical condition report included', 'Phone call with results right after the inspection'] },
      ],
      extendedLabel: 'Extended package — 450 PLN net (basic + below)',
      extendedGroups: [
        { title: 'Computer diagnostics', items: ['Safety, comfort, electronics and engine systems', 'Fault codes of all modules', 'Injector corrections', 'DPF, FAP, turbo, ABS condition'] },
        { title: 'Underbody check', items: ['Shock absorbers — performance, leaks', 'Brakes — system wear, brake lines', 'Suspension — play in joints, bushings, rods, stabiliser links, wheel bearings', 'Underbody inspection — corrosion, damage, fuel lines, leaks'] },
      ],
    },
    expert: {
      title: 'About the expert',
      lead: 'Iwan Bazylewicz — road traffic organisation and safety engineer, and a lawyer.',
      paragraphs: [
        'Since 2018 I have been providing honest, independent and professional automotive expert services in Poland. I prepare opinions for individuals, companies and law firms — assessing the technical condition of vehicles, repair quality and causes of damage.',
        'My education has been officially recognised in Poland by NAWA.',
      ],
      credentials: [
        'Road traffic organisation and safety engineer, and a lawyer.',
        '15 years of experience in automotive expert assessments.',
        '10 years of experience in road accident investigation.',
        'Expert at the state Centre of Forensic Expertise of the Ministry of Justice of Belarus and at private expert organisations.',
        'Service in the Road Traffic Department of the Ministry of Internal Affairs in Minsk.',
        'Licensed expert in vehicle technical assessments and road accident reconstruction.',
        'Education recognised in Poland by NAWA.',
      ],
    },
    guarantee: {
      title: 'Transparency guarantee',
      subtitle: 'You know exactly what you pay for and what you get.',
      items: [
        { title: 'No hidden costs', desc: 'The price is agreed upfront at first contact. Travel up to 100 km included.' },
        { title: 'Evidence, not opinions', desc: 'Photos and video from every inspection via WhatsApp / e-mail. You see what I see.' },
        { title: 'Results immediately', desc: 'A phone call with the results right after the inspection, and the report is included.' },
        { title: 'Clear recommendation', desc: 'I always finish with a clear verdict: buy, negotiate, or walk away.' },
      ],
    },
    reviews: {
      title: 'Client reviews',
      subtitle: 'Real reviews from Google and Facebook.',
      items: [],
      googleCta: 'See reviews on Google',
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Transparent prices. No hidden costs. Travel up to 100 km included.',
      rows: [
        { service: 'Car inspection — basic package (with report)', price: '250 PLN net' },
        { service: 'Car inspection — extended package (with report)', price: '450 PLN net' },
        { service: 'Vehicle registration help', price: '100 PLN net' },
        { service: 'Full service: search, inspection, negotiation, contract, registration', price: '800 PLN net' },
      ],
      note: 'Net prices. A technical condition report is included with every inspection.',
      cta: 'Book a slot',
    },
    process: {
      title: 'How it works',
      subtitle: 'Four simple steps to a safe purchase.',
      steps: [
        { title: '1. You book the service', desc: 'Call or write. We agree on the car, its location, the package and the date.' },
        { title: '2. You pay', desc: 'The price is known upfront — per the price list, no hidden costs.' },
        { title: '3. Expert inspection', desc: 'The expert inspects the car on site (travel up to 100 km included). You are welcome to attend.' },
        { title: '4. You get the report', desc: 'You learn the car’s condition: report, photos and video plus a clear recommendation — buy, negotiate, or walk away.' },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'Where do you operate?', a: 'Warsaw, Radzymin and surroundings — up to 100 km. Travel within this radius is included in the price.' },
        { q: 'How long does an inspection take?', a: 'Usually 60 to 90 minutes, depending on the car’s condition and the chosen package.' },
        { q: 'Do I have to be present?', a: 'No. If you cannot come, I call you with the results right after the inspection and send photos and video.' },
        { q: 'Do you help foreigners?', a: 'Yes. I support foreigners with paperwork and vehicle registration — in English, Polish, Ukrainian, Russian and Belarusian.' },
        { q: 'Will I get a report?', a: 'Yes — a technical condition report is included with every inspection package, along with photos and video.' },
        { q: 'What is the difference between the basic and extended package?', a: 'The extended package (450 PLN net) includes everything in the basic one (250 PLN net) plus full computer diagnostics and an underbody check.' },
      ],
    },
    contact: {
      title: 'Book an inspection',
      subtitle: 'Call, write on WhatsApp or leave your contact — I will call you back.',
      phoneLabel: 'Phone',
      emailLabel: 'E-mail',
      areaLabel: 'Area',
      area: 'Warsaw • Radzymin • up to 100 km',
      hoursLabel: 'Hours',
      hours: 'Mon–Sat 8:00–20:00',
      formName: 'Name',
      formPhone: 'Phone',
      formMsg: 'Which car is it about and where is it located?',
      formSubmit: 'Send request',
      formNote: 'Submitting the form opens a ready e-mail to the expert.',
    },
    footer: {
      rights: 'All rights reserved.',
      disclaimer: 'Independent automotive expert services. Warsaw, Radzymin and surroundings.',
      privacy: 'Privacy policy',
    },
  },

  ru: {
    htmlLang: 'ru',
    langName: 'RU',
    meta: {
      title: 'AutoSafe Expert — проверка авто перед покупкой | Варшава, Радзымин',
      description:
        'Независимый автоэксперт проверит автомобиль перед покупкой. Осмотр, диагностика, помощь с регистрацией авто в Польше. Варшава, Радзымин и окрестности до 100 км. Выезд включён в цену.',
    },
    nav: {
      services: 'Услуги',
      expert: 'Об эксперте',
      pricing: 'Цены',
      process: 'Как это работает',
      faq: 'Вопросы',
      contact: 'Контакт',
      cta: 'Заказать осмотр',
    },
    hero: {
      badge: 'Независимый автоэксперт',
      title: 'Покупаете авто в Польше? Поможем избежать дорогих ошибок.',
      subtitle:
        'Профессиональный осмотр автомобиля перед покупкой и помощь с оформлением регистрации. Покупайте, зная все плюсы и минусы — торг по цене обычно окупает стоимость услуги.',
      ctaPrimary: 'Заказать осмотр',
      ctaSecondary: 'Позвонить',
      trust: ['Судебный эксперт и юрист', '15 лет автоэкспертиз', 'Выезд до 100 км включён', 'Обслуживание на русском'],
    },
    whyUs: {
      title: 'Почему AutoSafe Expert',
      subtitle: 'Реальные знания эксперта, честная цена и полная независимость.',
      items: [
        { title: 'Настоящий эксперт, а не посредник', desc: 'Инженер безопасности дорожного движения и юрист с лицензией эксперта — а не продавец.' },
        { title: 'Честная цена', desc: 'Осмотр от 250 злотых. Выезд в радиусе 100 км включён в стоимость.' },
        { title: 'Полная независимость', desc: 'Я работаю на вас, а не на продавца. Рекомендация: покупать, торговаться или отказаться.' },
        { title: 'Помощь с формальностями', desc: 'Регистрация авто и поддержка иностранцев — от А до Я.' },
      ],
    },
    services: {
      title: 'Услуги',
      subtitle: 'Четыре услуги, понятные цены. Отчёт о техническом состоянии всегда включён в проверку.',
      items: [
        {
          title: 'Проверка авто — базовый пакет',
          desc: 'Анализ объявления и разговор с продавцом, проверка истории VIN, документы, двигатель, лакокрасочное покрытие и проверка на ДТП, тормоза, шины, электрика, стёкла, фары, салон, подкапотное пространство, тест-драйв. Фото и видео + отчёт о техническом состоянии.',
          priceFrom: '250 zł нетто',
          icon: 'shield',
        },
        {
          title: 'Проверка авто — расширенный пакет',
          desc: 'Всё из базового пакета + полная компьютерная диагностика (системы безопасности и комфорта, ошибки всех модулей, форсунки, DPF/FAP, турбина, ABS) и проверка ходовой. Отчёт о техническом состоянии.',
          priceFrom: '450 zł нетто',
          icon: 'wrench',
        },
        {
          title: 'Помощь с регистрацией авто',
          desc: 'Помощь с формальностями при регистрации: документы, заявления, процедуры. Поддержка иностранцев — на русском, польском, украинском, белорусском и английском.',
          priceFrom: '100 zł нетто',
          icon: 'doc',
        },
        {
          title: 'Комплексная услуга (А–Я)',
          desc: 'Поиск автомобиля, проверка технического состояния, торг по цене, подписание договора и помощь с регистрацией.',
          priceFrom: '800 zł нетто',
          icon: 'star',
        },
      ],
      note: 'Выезд в радиусе 100 км от Варшавы / Радзымина включён в стоимость услуги. Цены нетто.',
    },
    checklist: {
      title: 'Что именно я проверяю',
      subtitle: 'Полный, открытый объём каждого пакета — без сокращений и сюрпризов.',
      basicLabel: 'Базовый пакет — 250 zł нетто',
      groups: [
        { title: 'Анализ до осмотра', items: ['Анализ объявления', 'Разговор с продавцом', 'Проверка истории VIN'] },
        { title: 'Документы', items: ['Техпаспорт, карта автомобиля, страховка OC', 'Иностранные документы, акциз (если ввезён)', 'Сервисная история', 'Счёт или договор купли-продажи'] },
        { title: 'Состояние двигателя', items: ['Проверка силового агрегата', 'Течи, работа, уровень жидкостей', 'Ремни ГРМ и приводные', 'Осмотр подкапотного пространства'] },
        { title: 'Толщина лакокрасочного покрытия', items: ['Замер толщиномером', 'Проверка на ДТП', 'Проверка внешних панелей и каркаса', 'Состояние лонжеронов, ниш, пола, порогов'] },
        { title: 'Тормоза и шины', items: ['Толщина дисков и колодок, исправность', 'Год выпуска и протектор шин', 'Зимние / летние / всесезонные'] },
        { title: 'Электрика, стёкла, фары, салон', items: ['Кондиционер, стёкла, зеркала, радио, электрика', 'Оригинальность и состояние стёкол', 'Оригинальность и работа фар', 'Осмотр салона'] },
        { title: 'Тест-драйв', items: ['Поведение силового агрегата', 'Работа подвески', 'Работа тормозов', 'Проверка трансмиссии'] },
        { title: 'Фото/видео и отчёт', items: ['Фото состояния авто — WhatsApp / e-mail', 'Видео работы двигателя — WhatsApp / e-mail', 'Отчёт о техническом состоянии включён', 'Звонок с результатом сразу после осмотра'] },
      ],
      extendedLabel: 'Расширенный пакет — 450 zł нетто (базовый + ниже)',
      extendedGroups: [
        { title: 'Компьютерная диагностика', items: ['Системы безопасности, комфорта, электроники и двигателя', 'Ошибки всех модулей', 'Коррекции форсунок', 'Состояние DPF, FAP, турбины, ABS'] },
        { title: 'Проверка ходовой', items: ['Амортизаторы — исправность, течи', 'Тормоза — износ системы, тормозные шланги', 'Подвеска — люфты шаровых, сайлентблоков, тяг, стойки стабилизатора, подшипники колёс', 'Осмотр днища — коррозия, повреждения, топливные магистрали, течи'] },
      ],
    },
    expert: {
      title: 'Об эксперте',
      lead: 'Иван Базилевич — инженер организации и безопасности дорожного движения, юрист.',
      paragraphs: [
        'С 2018 года я выполняю честные, независимые и профессиональные автоэкспертизы в Польше. Готовлю заключения для частных лиц, компаний и юридических фирм — оцениваю техническое состояние автомобилей, качество ремонта и причины повреждений.',
        'Моё образование официально признано в Польше агентством NAWA.',
      ],
      credentials: [
        'Инженер организации и безопасности дорожного движения, юрист.',
        '15 лет опыта в автотехнических экспертизах.',
        '10 лет опыта в исследовании дорожно-транспортных происшествий.',
        'Эксперт государственного Центра судебных экспертиз и криминалистики Министерства юстиции Республики Беларусь и частных экспертных организаций.',
        'Служба в отделе дорожного движения МВД Республики Беларусь в Минске.',
        'Лицензия эксперта по технической экспертизе транспортных средств и реконструкции ДТП.',
        'Образование признано в Польше агентством NAWA.',
      ],
    },
    guarantee: {
      title: 'Гарантия прозрачности',
      subtitle: 'Вы точно знаете, за что платите и что получаете.',
      items: [
        { title: 'Без скрытых расходов', desc: 'Цена согласована заранее при первом контакте. Выезд до 100 км включён.' },
        { title: 'Доказательства, а не слова', desc: 'Фото и видео с каждого осмотра в WhatsApp / e-mail. Вы видите то же, что и я.' },
        { title: 'Результат сразу', desc: 'Звонок с результатом сразу после осмотра, а отчёт о состоянии — включён в цену.' },
        { title: 'Чёткая рекомендация', desc: 'Всегда заканчиваю однозначно: покупать, торговаться или отказаться.' },
      ],
    },
    reviews: {
      title: 'Отзывы клиентов',
      subtitle: 'Реальные отзывы из Google и Facebook.',
      items: [],
      googleCta: 'Отзывы в Google',
    },
    pricing: {
      title: 'Цены',
      subtitle: 'Прозрачные цены. Без скрытых расходов. Выезд до 100 км включён.',
      rows: [
        { service: 'Проверка авто — базовый пакет (с отчётом)', price: '250 zł нетто' },
        { service: 'Проверка авто — расширенный пакет (с отчётом)', price: '450 zł нетто' },
        { service: 'Помощь с регистрацией автомобиля', price: '100 zł нетто' },
        { service: 'Комплексная услуга: поиск, проверка, торг, договор, регистрация', price: '800 zł нетто' },
      ],
      note: 'Цены нетто. Отчёт о техническом состоянии включён в каждую проверку.',
      cta: 'Записаться',
    },
    process: {
      title: 'Как это работает',
      subtitle: 'Четыре простых шага к безопасной покупке.',
      steps: [
        { title: '1. Заказываете услугу', desc: 'Звоните или пишете. Согласуем автомобиль, его местоположение, пакет и время.' },
        { title: '2. Оплачиваете', desc: 'Цена известна заранее — по прайсу, без скрытых расходов.' },
        { title: '3. Экспертный осмотр', desc: 'Эксперт осматривает автомобиль на месте (выезд до 100 км включён). Вы можете присутствовать.' },
        { title: '4. Получаете отчёт', desc: 'Узнаёте состояние машины: отчёт, фото и видео плюс чёткая рекомендация — покупать, торговаться или отказаться.' },
      ],
    },
    faq: {
      title: 'Частые вопросы',
      items: [
        { q: 'Где вы работаете?', a: 'Варшава, Радзымин и окрестности — до 100 км. Выезд в этом радиусе включён в стоимость.' },
        { q: 'Сколько длится осмотр?', a: 'Обычно от 60 до 90 минут, в зависимости от состояния автомобиля и выбранного пакета.' },
        { q: 'Нужно ли мне присутствовать?', a: 'Нет. Если вы не можете приехать, я звоню с результатом сразу после осмотра и отправляю фото и видео.' },
        { q: 'Помогаете ли иностранцам?', a: 'Да. Помогаю иностранцам с формальностями и регистрацией автомобиля — на русском, польском, украинском, белорусском и английском.' },
        { q: 'Получу ли я отчёт?', a: 'Да — отчёт о техническом состоянии входит в цену каждого пакета проверки, вместе с фото и видео.' },
        { q: 'Чем отличается базовый пакет от расширенного?', a: 'Расширенный (450 zł нетто) включает всё из базового (250 zł нетто) плюс полную компьютерную диагностику и проверку ходовой.' },
      ],
    },
    contact: {
      title: 'Заказать осмотр',
      subtitle: 'Позвоните, напишите в WhatsApp или оставьте контакт — я перезвоню.',
      phoneLabel: 'Телефон',
      emailLabel: 'E-mail',
      areaLabel: 'Район',
      area: 'Варшава • Радзымин • до 100 км',
      hoursLabel: 'Часы',
      hours: 'Пн–Сб 8:00–20:00',
      formName: 'Имя',
      formPhone: 'Телефон',
      formMsg: 'О какой машине речь и где она находится?',
      formSubmit: 'Отправить заявку',
      formNote: 'Отправка формы откроет готовое письмо эксперту.',
    },
    footer: {
      rights: 'Все права защищены.',
      disclaimer: 'Независимые автоэкспертизы. Варшава, Радзымин и окрестности.',
      privacy: 'Политика конфиденциальности',
    },
  },

  be: {
    htmlLang: 'be',
    langName: 'BY',
    meta: {
      title: 'AutoSafe Expert — праверка аўто перад пакупкай | Варшава, Радзымін',
      description:
        'Незалежны аўтаэксперт праверыць аўтамабіль перад пакупкай. Агляд, дыягностыка, дапамога з рэгістрацыяй аўто ў Польшчы. Варшава, Радзымін і ваколіцы да 100 км. Выезд уключаны ў цану.',
    },
    nav: {
      services: 'Паслугі',
      expert: 'Пра эксперта',
      pricing: 'Цэны',
      process: 'Як гэта працуе',
      faq: 'Пытанні',
      contact: 'Кантакт',
      cta: 'Замовіць агляд',
    },
    hero: {
      badge: 'Незалежны аўтаэксперт',
      title: 'Купляеце аўто ў Польшчы? Дапаможам пазбегнуць дарагіх памылак.',
      subtitle:
        'Прафесійны агляд аўтамабіля перад пакупкай і дапамога з афармленнем рэгістрацыі. Купляйце, ведаючы ўсе плюсы і мінусы — торг па цане звычайна акупляе кошт паслугі.',
      ctaPrimary: 'Замовіць агляд',
      ctaSecondary: 'Патэлефанаваць',
      trust: ['Судовы эксперт і юрыст', '15 гадоў аўтаэкспертыз', 'Выезд да 100 км уключаны', 'Абслугоўванне па-беларуску'],
    },
    whyUs: {
      title: 'Чаму AutoSafe Expert',
      subtitle: 'Сапраўдныя веды эксперта, сумленная цана і поўная незалежнасць.',
      items: [
        { title: 'Сапраўдны эксперт, а не пасрэднік', desc: 'Інжынер бяспекі дарожнага руху і юрыст з ліцэнзіяй эксперта — а не прадавец.' },
        { title: 'Сумленная цана', desc: 'Агляд ад 250 злотых. Выезд у радыусе 100 км уключаны ў кошт.' },
        { title: 'Поўная незалежнасць', desc: 'Я працую на вас, а не на прадаўца. Рэкамендацыя: купляць, таргавацца ці адмовіцца.' },
        { title: 'Дапамога з фармальнасцямі', desc: 'Рэгістрацыя аўто і падтрымка замежнікаў — ад А да Я.' },
      ],
    },
    services: {
      title: 'Паслугі',
      subtitle: 'Чатыры паслугі, зразумелыя цэны. Справаздача аб тэхнічным стане заўсёды ўключана ў праверку.',
      items: [
        {
          title: 'Праверка аўто — базавы пакет',
          desc: 'Аналіз аб’явы і размова з прадаўцом, праверка гісторыі VIN, дакументы, рухавік, лакафарбавае пакрыццё і праверка на ДТЗ, тармазы, шыны, электрыка, шкло, фары, салон, падкапотная прастора, тэст-драйв. Фота і відэа + справаздача аб тэхнічным стане.',
          priceFrom: '250 zł нета',
          icon: 'shield',
        },
        {
          title: 'Праверка аўто — пашыраны пакет',
          desc: 'Усё з базавага пакета + поўная камп’ютарная дыягностыка (сістэмы бяспекі і камфорту, памылкі ўсіх модуляў, фарсункі, DPF/FAP, турбіна, ABS) і праверка хадавой. Справаздача аб тэхнічным стане.',
          priceFrom: '450 zł нета',
          icon: 'wrench',
        },
        {
          title: 'Дапамога з рэгістрацыяй аўто',
          desc: 'Дапамога з фармальнасцямі пры рэгістрацыі: дакументы, заявы, працэдуры. Падтрымка замежнікаў — па-беларуску, па-польску, па-руску, па-ўкраінску і па-англійску.',
          priceFrom: '100 zł нета',
          icon: 'doc',
        },
        {
          title: 'Комплексная паслуга (А–Я)',
          desc: 'Пошук аўтамабіля, праверка тэхнічнага стану, торг па цане, падпісанне дагавора і дапамога з рэгістрацыяй.',
          priceFrom: '800 zł нета',
          icon: 'star',
        },
      ],
      note: 'Выезд у радыусе 100 км ад Варшавы / Радзыміна ўключаны ў кошт паслугі. Цэны нета.',
    },
    checklist: {
      title: 'Што менавіта я правяраю',
      subtitle: 'Поўны, адкрыты аб’ём кожнага пакета — без скарачэнняў і сюрпрызаў.',
      basicLabel: 'Базавы пакет — 250 zł нета',
      groups: [
        { title: 'Аналіз да агляду', items: ['Аналіз аб’явы', 'Размова з прадаўцом', 'Праверка гісторыі VIN'] },
        { title: 'Дакументы', items: ['Тэхпашпарт, карта аўтамабіля, страхоўка OC', 'Замежныя дакументы, акцыз (калі ўвезены)', 'Сэрвісная гісторыя', 'Рахунак або дагавор куплі-продажу'] },
        { title: 'Стан рухавіка', items: ['Праверка сілавога агрэгата', 'Цечы, праца, узровень вадкасцей', 'Рамяні ГРМ і прывадныя', 'Агляд падкапотнай прасторы'] },
        { title: 'Таўшчыня лакафарбавага пакрыцця', items: ['Замер таўшчынямерам', 'Праверка на ДТЗ', 'Праверка вонкавых панэляў і каркаса', 'Стан ланжэронаў, ніш, падлогі, парогаў'] },
        { title: 'Тармазы і шыны', items: ['Таўшчыня дыскаў і калодак, спраўнасць', 'Год выпуску і пратэктар шын', 'Зімовыя / летнія / усесезонныя'] },
        { title: 'Электрыка, шкло, фары, салон', items: ['Кандыцыянер, шкло, люстэркі, радыё, электрыка', 'Арыгінальнасць і стан шкла', 'Арыгінальнасць і праца фар', 'Агляд салона'] },
        { title: 'Тэст-драйв', items: ['Паводзіны сілавога агрэгата', 'Праца падвескі', 'Праца тармазоў', 'Праверка трансмісіі'] },
        { title: 'Фота/відэа і справаздача', items: ['Фота стану аўто — WhatsApp / e-mail', 'Відэа працы рухавіка — WhatsApp / e-mail', 'Справаздача аб тэхнічным стане ўключана', 'Званок з вынікам адразу пасля агляду'] },
      ],
      extendedLabel: 'Пашыраны пакет — 450 zł нета (базавы + ніжэй)',
      extendedGroups: [
        { title: 'Камп’ютарная дыягностыка', items: ['Сістэмы бяспекі, камфорту, электронікі і рухавіка', 'Памылкі ўсіх модуляў', 'Карэкцыі фарсунак', 'Стан DPF, FAP, турбіны, ABS'] },
        { title: 'Праверка хадавой', items: ['Амартызатары — спраўнасць, цечы', 'Тармазы — знос сістэмы, тармазныя шлангі', 'Падвеска — люфты шарніраў, сайлентблокаў, цяг, стойкі стабілізатара, падшыпнікі колаў', 'Агляд днішча — карозія, пашкоджанні, паліўныя магістралі, цечы'] },
      ],
    },
    expert: {
      title: 'Пра эксперта',
      lead: 'Іван Базылевіч — інжынер арганізацыі і бяспекі дарожнага руху, юрыст.',
      paragraphs: [
        'З 2018 года я выконваю сумленныя, незалежныя і прафесійныя аўтаэкспертызы ў Польшчы. Рыхтую заключэнні для прыватных асоб, кампаній і юрыдычных фірмаў — ацэньваю тэхнічны стан аўтамабіляў, якасць рамонту і прычыны пашкоджанняў.',
        'Мая адукацыя афіцыйна прызнана ў Польшчы агенцтвам NAWA.',
      ],
      credentials: [
        'Інжынер арганізацыі і бяспекі дарожнага руху, юрыст.',
        '15 гадоў вопыту ў аўтатэхнічных экспертызах.',
        '10 гадоў вопыту ў даследаванні дарожна-транспартных здарэнняў.',
        'Эксперт дзяржаўнага Цэнтра судовых экспертыз і крыміналістыкі Міністэрства юстыцыі Рэспублікі Беларусь і прыватных экспертных арганізацый.',
        'Служба ў аддзеле дарожнага руху МУС Рэспублікі Беларусь у Мінску.',
        'Ліцэнзія эксперта па тэхнічнай экспертызе транспартных сродкаў і рэканструкцыі ДТЗ.',
        'Адукацыя прызнана ў Польшчы агенцтвам NAWA.',
      ],
    },
    guarantee: {
      title: 'Гарантыя празрыстасці',
      subtitle: 'Вы дакладна ведаеце, за што плаціце і што атрымліваеце.',
      items: [
        { title: 'Без схаваных выдаткаў', desc: 'Цана ўзгоднена загадзя пры першым кантакце. Выезд да 100 км уключаны.' },
        { title: 'Доказы, а не словы', desc: 'Фота і відэа з кожнага агляду ў WhatsApp / e-mail. Вы бачыце тое ж, што і я.' },
        { title: 'Вынік адразу', desc: 'Званок з вынікам адразу пасля агляду, а справаздача — уключана ў цану.' },
        { title: 'Выразная рэкамендацыя', desc: 'Заўсёды заканчваю адназначна: купляць, таргавацца ці адмовіцца.' },
      ],
    },
    reviews: {
      title: 'Водгукі кліентаў',
      subtitle: 'Сапраўдныя водгукі з Google і Facebook.',
      items: [],
      googleCta: 'Водгукі ў Google',
    },
    pricing: {
      title: 'Цэны',
      subtitle: 'Празрыстыя цэны. Без схаваных выдаткаў. Выезд да 100 км уключаны.',
      rows: [
        { service: 'Праверка аўто — базавы пакет (са справаздачай)', price: '250 zł нета' },
        { service: 'Праверка аўто — пашыраны пакет (са справаздачай)', price: '450 zł нета' },
        { service: 'Дапамога з рэгістрацыяй аўтамабіля', price: '100 zł нета' },
        { service: 'Комплексная паслуга: пошук, праверка, торг, дагавор, рэгістрацыя', price: '800 zł нета' },
      ],
      note: 'Цэны нета. Справаздача аб тэхнічным стане ўключана ў кожную праверку.',
      cta: 'Запісацца',
    },
    process: {
      title: 'Як гэта працуе',
      subtitle: 'Чатыры простыя крокі да бяспечнай пакупкі.',
      steps: [
        { title: '1. Замаўляеце паслугу', desc: 'Тэлефануеце або пішаце. Узгадняем аўтамабіль, яго месцазнаходжанне, пакет і час.' },
        { title: '2. Аплачваеце', desc: 'Цана вядомая загадзя — па прайсе, без схаваных выдаткаў.' },
        { title: '3. Экспертны агляд', desc: 'Эксперт аглядае аўтамабіль на месцы (выезд да 100 км уключаны). Вы можаце прысутнічаць.' },
        { title: '4. Атрымліваеце справаздачу', desc: 'Даведваецеся стан машыны: справаздача, фота і відэа плюс выразная рэкамендацыя — купляць, таргавацца ці адмовіцца.' },
      ],
    },
    faq: {
      title: 'Частыя пытанні',
      items: [
        { q: 'Дзе вы працуеце?', a: 'Варшава, Радзымін і ваколіцы — да 100 км. Выезд у гэтым радыусе ўключаны ў кошт.' },
        { q: 'Колькі доўжыцца агляд?', a: 'Звычайна ад 60 да 90 хвілін, у залежнасці ад стану аўтамабіля і абранага пакета.' },
        { q: 'Ці трэба мне прысутнічаць?', a: 'Не. Калі вы не можаце прыехаць, я тэлефаную з вынікам адразу пасля агляду і дасылаю фота і відэа.' },
        { q: 'Ці дапамагаеце замежнікам?', a: 'Так. Дапамагаю замежнікам з фармальнасцямі і рэгістрацыяй аўтамабіля — па-беларуску, па-польску, па-руску, па-ўкраінску і па-англійску.' },
        { q: 'Ці атрымаю я справаздачу?', a: 'Так — справаздача аб тэхнічным стане ўваходзіць у цану кожнага пакета праверкі, разам з фота і відэа.' },
        { q: 'Чым адрозніваецца базавы пакет ад пашыранага?', a: 'Пашыраны (450 zł нета) уключае ўсё з базавага (250 zł нета) плюс поўную камп’ютарную дыягностыку і праверку хадавой.' },
      ],
    },
    contact: {
      title: 'Замовіць агляд',
      subtitle: 'Патэлефануйце, напішыце ў WhatsApp або пакіньце кантакт — я ператэлефаную.',
      phoneLabel: 'Тэлефон',
      emailLabel: 'E-mail',
      areaLabel: 'Раён',
      area: 'Варшава • Радзымін • да 100 км',
      hoursLabel: 'Гадзіны',
      hours: 'Пн–Сб 8:00–20:00',
      formName: 'Імя',
      formPhone: 'Тэлефон',
      formMsg: 'Пра якую машыну ідзе гаворка і дзе яна знаходзіцца?',
      formSubmit: 'Адправіць заяўку',
      formNote: 'Адпраўка формы адкрые гатовы ліст эксперту.',
    },
    footer: {
      rights: 'Усе правы абаронены.',
      disclaimer: 'Незалежныя аўтаэкспертызы. Варшава, Радзымін і ваколіцы.',
      privacy: 'Палітыка канфідэнцыяльнасці',
    },
  },
};
