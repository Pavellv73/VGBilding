# Vostochnyj bank

Коммерческий банк

## INSTALLATION

Для запуска проекта необходимо:

- Установить [node.js](https://nodejs.org/en/).

- Открыть консоль/терминал от имени администратора, перейти в папку с проектом и выполнить команду установки нужных пакетов/библиотек (npm install);
    ```sh
    $ npm install
    ```

- Выполнять команду, после чего сайт автоматические откроется в вашем браузере;
    ```sh
    $ npm run dev
    ```

- Сборка проекта;
    ```sh
    $ npm run build
    ```

## TEST

После отправки коммита в репозиторий, он сам запускает проверку, сборку и после успешного хавершения всех этапов - загружает на тестовый сервер актуальную версию проекта.

Чтобы не возникло казусов, перед отправкой убедитесь, что все тесты проходят без ошибок.

- Проверка JavaScript с помощью eslint и правилами от Airbnb;
    ```sh
    $ npm run eslint
    ```

- Проверка Styles с помощью stylelint и правилами от Webstandards&htmlacademy;
    ```sh
    $ npm run stylelint
    ```

- Проверка Template с помощью puglint и собсвенныеми правилами основываясь на докментиции pug и логики;
    ```sh
    $ npm run puglint
    ```

## PAGES

Главная - /index.html

Агентам - /agents.html

Акции и бонусы для клиентов - /promotions.html
  Cash-back за покупки в интернете - /promotionsCashBack.html
  Акция «Приведи друга» - /promotionsSaleOne.html
  Автоплатеж ЖКУ без комиссии - /promotionsSaleThree.html
  Возвращаем до 40%  от ваших покупок! - /promotionsSaleTwo.html

Банковские услуги - / bankingService.html
  Эквайринг от эксперта рынка -  /acquiringExpert.html

О банке - /about.html
  Карьера в банке Восточный - /aboutCareer.html
  Эмиссия ценных бумаг - /aboutEmission.html
  Раскрытие информции - /aboutInformationDisclosure.html
  О банке - руководство - /aboutLeaders.html
  Официальные документы - /aboutOfficialDocuments.html
  Отчетность - /aboutReporting.html
  О банке - история успеха - /aboutStories.html
  О банке - история успеха детальная - /aboutStoriesDetail.html
  Вакансия - детальная - /aboutVacancyDetail.html


Банковские услуги
  Агент валютного контроля - /currencyControl.html
  Факторинг - /factoring.html

Банкоматы - /atms.html

Бизнес - /businessIndex.html

Бизнесу -
  Вклады - /depositsBusiness.html
  Депозиты
    Вклады бизнесу детальная- /depositBusinessDetails.html
  Калькулятор стоимости РКО - /calculationRKO.html
  Кредиты - /creditsBusiness.html
  Кредит детальная - /creditDetailsBusiness.html
  Овердрафты - /overdrafts.html
    Овердрафт детальная - /overdraftsDetails.html
  Расчетно-кассовое обслуживание - /rko.html

Вклады - /deposits.html
  Вклады детальная - /depositDetails.html

Зарплатный проект - /salaryProject.html

Карьера в банке
  Каталог вакансий - /catalog.html

Контакты - /contacts.html

Корпоративная культура - /corporateCulture.html

Кредитные карты - /creditCards.html
  Карта Кешбек - /creditCardDetails.html

Кредиты - /credits.html
  Кредит детальная - /creditDetails.html

Офисы и банкоматы - /offices.html

Официальная информация
  Залоговое имущество - /mortgagedProperty.html
  Тарифы - /tariffs.html

Партнерам и Финансовым организациям
  Брокерские услуги для юридических лиц - /brokerServices.html
  Депозитарное обслуживание
    Депозитарное обслуживание - /custodyService.html
  Долговые инструменты - /debtIinstrument.html
  Кредитным организация
    Финансовые операции - /creditinstitution.html
  Основные виды финансовых операций и услуг
    Финансовые операции - /financialOperation.html
  Финансовым организациям
    Финансовые операции - /financialInstitution.html

Поиск  - общий - /searchGeneral.html
Поиск  - информационный - /searchInformations.html
Поиск  - продуктовый- /searchProducts.html
Поиск  - сервисный - /searchServices.html
Поиск  - сервисный 1 - /searchServicesDoc.html

Помощь и поддержка - /help.html
  Документы, договоры и образцы заявлений - /docs.html
  Частые вопросы - /questions.html
  Способы погашения кредита - /referenceOrder.html
  Способы погашения кредита - /repaymentMethods.html
  Услуги Клиентского центра - /servicesCenter.html

Пресс-центр - /pressCenter.html

Реквизиты - /requisites.html

Справочный центр - /helpCenter.html

Статья - /articlePage.html

Частным лицам
  Дебетовые карты - /debitCard.html
    Карта №1 - /creditCardNumberOne.html
  Онлайн сервисы
    Apple Pay - /servicesPayApple.html
    Google Pay- /servicesPayGoogle.html
    Samsung Pay - /servicesPaySamsung.html
    SMS Банк - /servicesSms.html
    Бот Восточного - /servicesBot.html
    Восточный экспресс - /servicesEasternExpress.html
    Интернет банк - /servicesInternetBank.html
    Мобильный банк - /servicesMobileBank.html
    Просто кредит - /servicesCredit.html

  Платежи и переводы
    Автоплатеж ЖКУ - /paymentsAuto.html
    Перевод «Золотая Корона» - /paymentsGoldCrown.html
    Перевод «MoneyGram» - /paymentsMoneyGram.html
    Перевод «Юнистрим» - /paymentsUnistream.html
    Перевод «Western Unionа» - /paymentsWesternUnion.html
    Перевод с карты на карту - /translation.html
    Погашение кредита онлайн - /redemption.html
  Сравнение товаров - /comparison.html
  Страхование - /insurance.html
    Страхование детальная - /insuranceDetails.html



VIP
Главная - /vipIndex.html

VIP-клиентам
  Вклад - /vipDeposits.html
    Вклад детальная - /vipDepositDetails.html
  Дебетовые карты - /vipDebitCard.html
    Visa Infinite - /vipCardInfinite.html
  Кредитные карты - /vipCreditCards.html
    vipCreditCardDetails - /vipCreditCardDetails.html
  Кредиты - /vipCredits.html
    Кредит детальная - /vipCreditDetails.html
  Инвестиции - /vipInvestments.html
    «Восточный Капитал - Акции» - /vipInvestmentCapitalStock.html
    Индивидуальный инвестиционный счёт - /vipInvestmentDetails.html
    Паевые инвестиционные фонды - /vipInvestmentFunds.html
  Сравнение
    Сравнение товаров - /vipComparison.html
  Страхование
    Страхование VIP лиц - /vipInsurance.html
    Страхование от несчастного случая - /vipInsuranceDetails.html

Клуб VIP-привилегий
  Консьерж-сервис Prime - /vipConciergeService.html
  Пакет услуг «All inclusive» - /vipPackageAllInclusive.html
  Персональное банковское обслуживание_об услуге - /vipPersonalBankingServices.html
  Программа привилегий Visa - /vipPrivilegeProgram.html
  Пакет услуг «Восточный Престиж» и «Восточный Премиум» - /vipServicePackage.html
  Персональное банковское обслуживание_об услуге - /vipServicesOffices.html
  Персональное банковское обслуживание_об услуге - /vipServicesOfficesCard.html


Предложения для VIP-клиентов
  Вклад детальная - /vipOfferDetails.html

Сервисы VIP - /vipOffer.html
Сервисы VIP - /vipServices.html
