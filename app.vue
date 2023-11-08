<template>
  <Head>
    <Title>USA BabyWay</Title>
    <Meta name="description" content="USA BabyWay" />
    <Meta name="keywords"
      content="'Роды в США' 'Роды в Америке' 'Роды в Саванне' 'Гражданство США' 'Гражданство Америки'" />
  </Head>
  <div class="container">
    <header class="header flex justify-between header-padding">
      <img class="mobile-logo" src="~/assets/images/babyway.png" />
      <img class="pc-logo" src="~/assets/images/icons/babyway.svg" />
      <img class="header-button" src="~/assets/images/burgerButton.svg" @click="toggleMenu" v-if="!isMenuOpen" />
      <img class="header-button" src="~/assets/images/icons/closeButton.svg" @click="toggleMenu" v-if="isMenuOpen" />
      <Transition name="slide-menu">
        <menu class="navbar" v-show="isMenuOpen">
          <li class="navbar-list-item" @click="goTo('about-us')">О нас</li>
          <li class="navbar-list-item" @click="goTo('about-city-content')">Место рождения счастья</li>
          <li class="navbar-list-item" @click="goTo('services')">Наши услуги</li>
          <li class="navbar-list-item" @click="goTo('support-and-care')">Поддержка и забота</li>
          <li class="navbar-list-item" @click="goTo('benefits')">Преимущества</li>
          <li class="navbar-list-item" @click="goTo('footer')">Контакты</li>
        </menu>
      </Transition>
    </header>

    <div class="allsections">
      <section class="section-1">
        <div class="flex flex-col items-center gap-[8px] mt-[20px] section-1-content">
          <h1 class="section-1-h1-text">USA BabyWay</h1>
          <div class="section-1-h1-desc mb-[311px]">Место рождения счастья</div>
          <button @click="goTo('contact-form', true)"
            class="mb-[12px] pt-[16px] pb-[16px] pl-[24px] pr-[24px] bg-[#0B63E5] rounded-xl section-1-button-text">Связаться
            с
            нами</button>
          <div class="section-1-advantages-list">
            <div class="flex items-center section-1-advantages-list-item">
              <img src="~/assets/images/icons/vedushaya.svg" class="section-1-icons" />
              <span>Ведущая в мире медицина</span>
            </div>
            <div class="flex items-center section-1-advantages-list-item">
              <img src="~/assets/images/icons/vvedenie1.svg" class="section-1-icons" />
              <span>Ведение родов любой сложности</span>
            </div>
            <div class="flex items-center section-1-advantages-list-item">
              <img src="~/assets/images/icons/america1.svg" class="section-1-icons" />
              <span>Американское гражданство</span>
            </div>
            <div class="flex items-center section-1-advantages-list-item">
              <img src="~/assets/images/icons/shapka.svg" class="section-1-icons" />
              <span>Бесплатное образование</span>
            </div>
          </div>
        </div>
      </section>
      <section class="about-us" ref="about-us">
        <div class="about-us-text">
          <h2 class="about-us-title mb-[20px]">О нас</h2>
          <div class="abouts-us-description">
            Мы стремимся сделать мечты о рождении <br> ребенка в США для наших клиентов<br> из Казахстана реальностью.
            <br>
            <br>
            Наша миссия
            заключается в обеспечении безопасных, комфортных и незабываемых родов в Америке, предоставляя <br>
            высококачественные
            услуги и поддержку на каждом этапе этого удивительного <br> семейного путешествия.
          </div>
        </div>
        <div class="mt-[24px] flex flex-col gap-4 about-us-features">
          <div class="about-us-features-card">
            <div class="flex align-mrefdle mb-[8px]">
              <img src="~/assets/images/icons/fi-rr-thumbs-up1.svg" class="mr-[18px] about-us-features-card-img">
              <div class="about-us-features-title">Профессионализм</div>
            </div>
            <div class="about-us-features-text">
              Мы гордимся высоким стандартом профессионализма нашей команды, всегда готовой предоставить клиентам лучшие
              услуги
            </div>
          </div>
          <div class="about-us-features-card">
            <div class="flex align-middle items-center mb-[8px]">
              <img src="~/assets/images/icons/Heart1.svg" class="mr-[18px] about-us-features-card-img">
              <div class="about-us-features-title">Забота и Сочувствие</div>
            </div>
            <div class="about-us-features-text">
              Мы вложили в сердце нашей компании заботу и сочувствие к нашим клиентам, поддерживая вас на каждом этапе
              этого
              удивительного приключения
            </div>
          </div>
          <div class="about-us-features-card">
            <div class="flex align-middle mb-[8px] items-center">
              <img src="~/assets/images/icons/Activity1.svg" class="mr-[18px] about-us-features-card-img">
              <div class="about-us-features-title">Доверие</div>
            </div>
            <div class="about-us-features-text">
              Мы строим наши отношения на доверии, предоставляя полную прозрачность и честность в каждом аспекте наших
              услуг
            </div>
          </div>
          <div class="about-us-features-card">
            <div class="flex align-middle mb-[8px] items-center">
              <img src="~/assets/images/icons/fi-rr-lock1.svg" class="mr-[18px] about-us-features-card-img">
              <div class="about-us-features-title">Безопасность и Уверенность</div>
            </div>
            <div class="about-us-features-text">
              Мы придаем большое значение безопасности как для матери, так и для ребенка, обеспечивая клиентов чувством
              уверенности в своем выборе
            </div>
          </div>
          <div class="about-us-features-card">
            <div class="flex align-middle mb-[8px] items-center">
              <img src="~/assets/images/icons/3_User1.svg" class="mr-[18px] about-us-features-card-img">
              <div class="about-us-features-title">Семейные Значения</div>
            </div>
            <div class="about-us-features-text">
              Мы разделяем и поддерживаем семейные ценности наших клиентов, делая всё возможное, чтобы ваше семейное
              приключение началось еще до рождения малыша, и закончилось счастливым возвращением домой с маленьким
              гражданином
              США
            </div>
          </div>
        </div>
      </section>
      <section class="specialist" ref="specialists">
        <h2 class="specialist-title">Кто вас встречает в США?</h2>
        <div class="specialist-content">
          <img src="~/assets/images/specialist.png" class="rounded-[20px] mt-[20px] remove-20px-mt">
          <div class="specialist-content-text">
            <p class="specialist-fio mt-[20px] remove-20px-mt">Индира Карибаева</p>
            <p class="specialist-titles mt-[12px]">MD, MPH, PhD Georgia Southern University, жена, мама и просто женщина
            </p>
            <p class="specialist-bio mt-[20px]">
              Я – ЛОР-врач по образованию и пошла по пути «общественного здравоохранения»,
              занимаясь
              исследованиями в области
              ментального здоровья женщин с различными заболеваниями. Сейчас продолжаю заниматься наукой в GSU. Я сама
              приезжала
              на роды в США в 2021г., живя в Казахстане, когда в мире бушевала эпидемия COVID-19. Так в нашей семье
              появился
              маленький гражданин Америки. А теперь мы уже всей семьей переехали в Джорджию.<br><br>Я знаю, как важен
              выбор
              врача
              и
              клиники, где вы будете рожать. Я знаю, как вам важно быть в спокойствии, имея миллион причин для
              переживаний.
              Я
              знаю, какие трудности и не заметные на первый взгляд мелочи могут влиять на будущую маму и малыша. Именно
              поэтому
              мы
              решили открыть компанию по организации родов в США, чтобы сделать ваше американское семейное приключение
              максимально
              комфортным и безопасным.</p>

          </div>
        </div>
      </section>
      <section class="about-city-content" ref="about-city-content">
        <h2 class="about-city-title">Место рождения счастья</h2>
        <div class="about-city-chips flex flex-wrap items-start gap-3 mt-[20px] remove-20px-mt">
          <div class="about-city-chips-item" @click="changeActiveCityTab('city')"
            v-bind:class="{ active: activeCityTab === 'city' }">
            Город
          </div>
          <div class="about-city-chips-item" @click="changeActiveCityTab('med')"
            v-bind:class="{ active: activeCityTab === 'med' }">
            Медицинское учреждение
          </div>
          <div class="about-city-chips-item mr-auto" @click="changeActiveCityTab('doctors')"
            v-bind:class="{ active: activeCityTab === 'doctors' }">
            Врачи
          </div>
        </div>
        <div class="about-city-tab-content" v-show="activeCityTab === 'city'">
          <h3 class="about-city-tab-content-title mt-[20px] remove-20px-mt">Город</h3>
          <div class="about-city-tab-content-all">
            <div class="about-city-tab-content-text">
              <p class="specialist-bio mt-[20px]">
                Саванна - старейший город в Джорджии, расположенный на побережье Атлантического океана. Его история
                отражает
                многие важные события американского прошлого, включая индейские войны, золотую лихорадку, религиозную
                свободу
                и
                гражданскую войну. Город славится красивой природой, архитектурой и спокойствием. Саванна привлекает
                миллионы
                туристов ежегодно, особенно своим историческим центром с архитектурными достопримечательностями.
                <br>
                <br>
                В Саванне круглый год прекрасный климат: летом тут около 30 градусов тепла, а весной-осенью и зимой
                температура
                воздуха попрохладнее, всего +10-16 °С. И хотя осадков в Саванне выпадает в течение года довольно много, в
                целом,
                погода в этом городе очень комфортная.
              </p>
              <div class="about-city-city-extra-content mt-[16px]">
                <div class="about-city-city-extra-content-title flex items-start gap-[10px]">
                  <img src="~/assets/images/icons/Vector.svg" />
                  <div>
                    <p class="specialist-bio dark bold">Ответ на главный вопрос:</p>
                    <p class="specialist-bio dark">Почему мы предлагаем приезжать на роды именно в Саванну? </p>
                  </div>
                </div>
                <p class="specialist-bio dark mt-[12px]">
                  Это та Америка, где нет бегущей толпы и бешенной суматохи больших городов. Саванна приютилась среди
                  дремучих
                  лесов, которые насыщают кислородом вас и «чудо», которое вы вынашиваете в себе. Саванна – это уют, в
                  котором
                  вы и малыш будете окружены заботой во время и после родов. Что является важным в ваш прекрасный период
                  ожидания встречи с малышом, <br> и в первые недели знакомства? Комфортная обстановка, мягкий климат, и
                  возможность
                  провести это время на берегу океана, встречая умопомрачительные рассветы за чашечкой вкуснейшего кофе и
                  свежей
                  выпечки, или гуляя в тени испанского мха.
                </p>
              </div>
            </div>
            <img src="~/assets/images/city-image.png" class="mt-[20px]" />
          </div>
        </div>
        <div class="about-city-tab-content" v-show="activeCityTab === 'med'">
          <h3 class=" about-city-tab-content-title mt-[20px] remove-20px-mt">Медицинское учреждение</h3>
          <div class="about-city-tab-content-all">
            <div class="about-city-tab-content-text">
              <h4 class="about-us-features-title mt-[20px]">Memorial Health University Medical Center</h4>
              <p class="specialist-bio mt-[20px] remove-20px-mt">предоставляет высококачественную медицинскую и
                хирургическую помощь
                пациентам
                в Саванне и прилегающих округах.
                Врачи медицинского центра готовы позаботиться о всей семье: от ведения беременности и акушерской помощи в
                родильном центре до специализированной педиатрической помощи в детской больнице, входящей в состав
                медицинского
                центра. <br><br> Наша программа по уходу за женщинами обеспечивает профессиональную помощь женщинам всех
                возрастов на
                всех этапах жизни. В центре имеется возможность проведения интенсивной терапии для новорожденных III
                уровня.
              </p>
              <button class="button mt-[20px]">
                <div class="flex gap-[12px] justify-center">
                  <img src="~/assets/images/icons/Youtube.svg" />
                  <a href="https://www.virtually-anywhere.net/tours/mhumc/womens/vtour/index.html"
                    class="about-city-tab-content-title white">Видео тур</a>
                </div>
              </button>
            </div>
            <img src="~/assets/images/med-care.png" class="mt-[20px]" />
          </div>
        </div>
        <div class="about-city-tab-content" v-show="activeCityTab === 'doctors'">
          <h3 class=" about-city-tab-content-title mt-[20px] remove-20px-mt">Врачи</h3>
          <p class="specialist-bio mt-[20px]">Мы предлагаем 10 высококвалифицированных врачей</p>

          <div class="cards flex flex-wrap gap-[20px] mt-[20px]">
            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Amelia Bostwick</p>
            </div>
            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-1.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Kristen Snipes</p>
            </div>
            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-2.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Todd A Robinson</p>
            </div>
            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-3.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Karen T Baker</p>
            </div>

            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-4.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Susan C Greene</p>
            </div>

            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-5.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">William E Osborne</p>
            </div>

            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-6.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Amethyst Wilder</p>
            </div>

            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-7.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Billy D Preuninger</p>
            </div>

            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-8.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Brittany Merritt</p>
            </div>

            <div class="doctor-card flex flex-col items-start gap-[20px]">
              <img src="~/assets/images/doctors/image_3-9.png" class="section-1-icons" />
              <p class="about-us-features-title dark-grey">Ryann E Cowart</p>
            </div>
          </div>
        </div>
      </section>
      <section class="apartments" ref="apartments">
        <h2 class="about-city-title">Квартиры в аренду</h2>

        <div class="aparments-content">
          <img src="~/assets/images/bed.png" class="rounded-[14px] mt-[20px] remove-20px-mt" />

          <div class="aparments-content-text">
            <p class="specialist-bio mt-[20px] remove-20px-mt">
              На сайте представлены лишь иллюстративные примеры апартаментов, которые будут доступны для аренды через
              сторонние
              платформы, такие как Zillow Apartments, Airbnb и другие подобные сервисы.
            </p>
            <div class="apartments-informer-card flex items-start gap-[12px] mt-[20px]">
              <img src="~/assets/images/icons/info_circle.svg" />
              <div>
                <p class="specialist-bio dark bold">Важно:</p>
                <p class="specialist-bio dark">Квартиры сдаются без мебели</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="prices" ref="prices">
        <h2 class="about-city-title">Примерная стоимость услуг</h2>

        <div class="flex flex-col gap-[16px] mt-[20px] remove-20px-mt prices-cards">
          <div class="prices-card blue">
            <div class="prices-card-title flex items-center">
              <img src="~/assets/images/icons/wallet.svg" class="mr-[12px]" />
              <p class="specialist-fio">Основные расходы</p>
            </div>
            <ul class="list-disc">
              <li class="ml-[25px]">
                <p class="specialist-bio dark bold">$8,500 - $15,000</p>
                <p class="specialist-bio"> Медицинские услуги: ведение беременности,
                  роды, услуги госпиталя, <br><br> педиатрия,
                  анестезиология
                </p>
              </li>
              <br>
              <li class="ml-[25px]">
                <p class="specialist-bio dark bold">$3,700</p>
                <p class="specialist-bio">Услуги компании BabyWay
                </p>
              </li>
            </ul>
          </div>
          <div class="prices-card pink">
            <div class="prices-card-title flex items-center">
              <img src="~/assets/images/icons/groceries.svg" class="mr-[12px]" />
              <p class="specialist-fio">Ежемесячные расходы</p>
            </div>
            <ul class="list-disc">
              <li class="ml-[25px]">
                <p class="specialist-bio dark bold">$1,000 - $2,500</p>
                <p class="specialist-bio"> Аренда жилья
                </p>
              </li>
              <br>
              <li class="ml-[25px]">
                <p class="specialist-bio dark bold">$25 - $75</p>
                <p class="specialist-bio">Сотовая связь
                </p>
              </li>
              <br>
              <li class="ml-[25px]">
                <p class="specialist-bio dark bold">$800</p>
                <p class="specialist-bio">Продукты питания
                </p>
              </li>
            </ul>
          </div>
          <div class="prices-card grey">
            <div class="prices-card-title flex items-center">
              <img src="~/assets/images/icons/bags.svg" class="mr-[12px]" />
              <p class="specialist-fio">Другие расходы</p>
            </div>
            <ul class="list-disc">
              <li class="ml-[25px]">
                <p class="section-1-button-text black">Аренда машины</p>
              </li>
              <br>
              <li class="ml-[25px]">
                <p class="section-1-button-text black">Путешествия</p>
              </li>
              <br>

              <li class="ml-[25px]">
                <p class="section-1-button-text black">Шоппинг</p>
              </li>
              <br>

              <li class="ml-[25px]">
                <p class="section-1-button-text black">Развлечения</p>
              </li>
              <br>

              <li class="ml-[25px]">
                <p class="section-1-button-text black">Непредвиденные расходы</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="services" ref="services">
        <h2 class="about-city-title">Наши услуги</h2>
        <div class="about-city-chips flex flex-wrap items-start gap-3 mt-[20px]">
          <div class="about-city-chips-item" @click="activeServicesTab = 'KZ'"
            v-bind:class="{ active: activeServicesTab === 'KZ' }">
            В Казахстане
          </div>
          <div class="about-city-chips-item" @click="activeServicesTab = 'USA'"
            v-bind:class="{ active: activeServicesTab === 'USA' }">
            В США
          </div>
        </div>
        <div class="services-cards-list mt-[20px] remove-20px-mt" v-show="activeServicesTab === 'KZ'">
          <div class="services-card">
            <div class="services-card-title">Консультация и Информация</div>
            <p class="services-card-description mt-[4px]">Первоначальная консультация <br> и предоставление информации о
              процессе <br>
              организации родов в США, а также <br> о преимуществах и рисках</p>
          </div>
          <div class="services-card">
            <div class="services-card-title">Подбор Медицинского Учреждения</div>
            <p class="services-card-description mt-[4px]">Помощь в выборе подходящей клиники или госпиталя в США, учитывая
              потребности клиента и предпочтения</p>
          </div>
          <div class="services-card">
            <div class="services-card-title">Визовое Сопровождение</div>
            <p class="services-card-description mt-[4px]">Помощь в оформлении всех необходимых документов для подачи на
              визу
              в США (2 чел)</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Подбор рейсов</div>
            <p class="services-card-description mt-[4px]">Бронирование наиболее оптимальных рейсов в США и обратно по
              согласованию с клиентом</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Медицинская страховка</div>
            <p class="services-card-description mt-[4px]">Консультация по выбору медицинской страховки</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Трансфер Финансовых Средств</div>
            <p class="services-card-description mt-[4px]">Поддержка при переводе денежных средств для оплаты медицинских
              услуг и других расходов</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Поддержка по Возвращению</div>
            <p class="services-card-description mt-[4px]">Консультация по оформлению свидетельства о рождении в
              Казахстане,
              получение долгосрочной визы для пребывания в Казахстане</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Проверка документов</div>
            <p class="services-card-description mt-[4px]">За 2 недели до вылета проверка всех необходимых документов</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Консультации и Поддержка в Казахстане</div>
            <p class="services-card-description mt-[4px]">Постоянная связь и консультации с клиентами до, во время и после
              родов</p>
          </div>
        </div>
        <div class="services-cards-list mt-[20px] remove-20px-mt" v-show="activeServicesTab === 'USA'">
          <div class="services-card">
            <div class="services-card-title">Медицинское сопровождение</div>
            <p class="services-card-description mt-[4px]">Обеспечение клиентов квалифицированными врачами и медицинским
              персоналом в выбранном медицинском учреждении для родов</p>
          </div>
          <div class="services-card">
            <div class="services-card-title">Поддержка в госпитале</div>
            <p class="services-card-description mt-[4px]">Помощь и поддержка клиентов во время родов, включая переводчика,
              если это необходимо</p>
          </div>
          <div class="services-card">
            <div class="services-card-title">Бронирование Госпиталя</div>
            <p class="services-card-description mt-[4px]">Предоставление доступа к современным и безопасным медицинским
              учреждениям с опытом в оказания услуг иностранным клиентам</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Оформление документов</div>
            <p class="services-card-description mt-[4px]">Поддержка при переводе денежных средств для оплаты медицинских
              услуг и других расходов</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Размещение</div>
            <p class="services-card-description mt-[4px]">Помощь в организации размещения для клиентов и их сопровождающих
              вблизи медицинского учреждения</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Психологическая поддержка</div>
            <p class="services-card-description mt-[4px]">Предоставление информации по услугам психолога в Казахстане для
              клиентов, которым может понадобиться поддержка во время этого важного периода (онлайн консультация)</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Ознакомительный тур</div>
            <p class="services-card-description mt-[4px]">Ознакомительный тур по Саванне и Тайби Бич (в зависимости от
              сезона)</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Переводчик</div>
            <p class="services-card-description mt-[4px]">Услуги переводчика во время медицинских визитов и оформления
              документов</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Трансфер из аэропорта и в аэропорт</div>
            <p class="services-card-description mt-[4px]">Организация трансфера клиентов и их семей из аэропорта в место
              размещения</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Домашний персонал</div>
            <p class="services-card-description mt-[4px]">Предоставление информации по услугам домашнего персонала</p>
          </div>
          <div class="services-card" v-show="showAllServices">
            <div class="services-card-title">Для вашего малыша</div>
            <p class="services-card-description mt-[4px]">Мы предоставляем на время вашего пребывания в США: автокресло,
              манеж, коляску, пеленальную поверхность</p>
          </div>
        </div>
        <button class="show-all-button" v-show="!showAllServices" @click="showAllServices = true">
          Показать все
        </button>
        <button class="show-all-button" v-show="showAllServices" @click="showAllServices = false">
          Скрыть
        </button>
        <div class="services-cards-list-lg" v-show="activeServicesTab === 'KZ'">
          <div class="services-cards-list-lg-row">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Консультация и Информация</div>
              <p class="services-card-description mt-[4px]">Первоначальная консультация <br> и предоставление информации о
                процессе <br>
                организации родов в США, а также <br> о преимуществах и рисках</p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Подбор Медицинского Учреждения</div>
              <p class="services-card-description mt-[4px]">Помощь в выборе подходящей клиники или госпиталя в США,
                учитывая
                потребности клиента и предпочтения</p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Визовое Сопровождение</div>
              <p class="services-card-description mt-[4px]">Помощь в оформлении всех необходимых документов для подачи на
                визу
                в США (2 чел)</p>
              <div class="side-arrow-right"></div>

            </div>
          </div>
          <div class="services-cards-list-lg-row h-[156px]">
            <div class="services-cards-list-lg-item">
              <div class="side-arrow-left"></div>
              <div class="services-card-title">Трансфер Финансовых Средств</div>
              <p class="services-card-description mt-[4px]">Поддержка при переводе денежных средств для оплаты медицинских
                услуг и других расходов</p>
            </div>
            <img src="~/assets/images/icons/arrow_left.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Медицинская страховка</div>
              <p class="services-card-description mt-[4px]">Консультация по выбору медицинской страховки</p>
            </div>
            <img src="~/assets/images/icons/arrow_left.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Подбор рейсов</div>
              <p class="services-card-description mt-[4px]">Бронирование наиболее оптимальных рейсов в США и обратно по
                согласованию с клиентом</p>
            </div>
          </div>
          <div class="services-cards-list-lg-row mt-[20px]">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Поддержка по Возвращению</div>
              <p class="services-card-description mt-[4px]">Консультация по оформлению свидетельства о рождении в
                Казахстане,
                получение долгосрочной визы для пребывания в Казахстане</p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Проверка документов</div>
              <p class="services-card-description mt-[4px]">За 2 недели до вылета проверка всех необходимых документов</p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Консультации и Поддержка в Казахстане</div>
              <p class="services-card-description mt-[4px]">Постоянная связь и консультации с клиентами до, во время и
                после
                родов</p>
            </div>
          </div>
        </div>
        <div class="services-cards-list-lg" v-show="activeServicesTab === 'USA'">
          <div class="services-cards-list-lg-row">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Медицинское сопровождение</div>
              <p class="services-card-description mt-[4px]">Обеспечение клиентов квалифицированными врачами и медицинским
                персоналом в выбранном медицинском учреждении для родов
              </p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Поддержка в госпитале</div>
              <p class="services-card-description mt-[4px]">Помощь и поддержка клиентов во время родов, включая
                переводчика, если это необходимо</p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Бронирование Госпиталя</div>
              <p class="services-card-description mt-[4px]">Предоставление доступа к современным и безопасным медицинским
                учреждениям с опытом в оказания услуг иностранным клиентам</p>
              <div class="side-arrow-right"></div>

            </div>
          </div>
          <div class="services-cards-list-lg-row">
            <div class="services-cards-list-lg-item usa">
              <div class="side-arrow-left"></div>
              <div class="services-card-title">Психологическая поддержка</div>
              <p class="services-card-description mt-[4px]">Предоставление информации по услугам психолога в Казахстане
                для клиентов, которым может понадобиться поддержка во время этого важного периода
              </p>
            </div>
            <img src="~/assets/images/icons/arrow_left.svg">
            <div class="services-cards-list-lg-item usa">
              <div class="services-card-title">Размещение</div>
              <p class="services-card-description mt-[4px]">Помощь в организации размещения для клиентов и их
                сопровождающих вблизи медицинского учреждения</p>
            </div>
            <img src="~/assets/images/icons/arrow_left.svg">
            <div class="services-cards-list-lg-item usa">
              <div class="services-card-title">Оформление документов</div>
              <p class="services-card-description mt-[4px]">Поддержка при переводе денежных средств для оплаты медицинских
                услуг и других расходов</p>
            </div>
          </div>
          <div class="services-cards-list-lg-row">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Ознакомительный тур</div>
              <p class="services-card-description mt-[4px]">Ознакомительный тур по Саванне и Тайби Бич (в зависимости от
                сезона)</p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Переводчик</div>
              <p class="services-card-description mt-[4px]">Помощь в организации размещения для клиентов и их
                сопровождающих вблизи медицинского учреждения</p>
            </div>
            <img src="~/assets/images/icons/arrow_right.svg">
            <div class="services-cards-list-lg-item">
              <div class="services-card-title">Трансфер из аэропорта и в аэропорт</div>
              <p class="services-card-description mt-[4px]">Организация трансфера клиентов и их семей из аэропорта в место
                размещения</p>
              <div class="side-arrow-right"></div>
            </div>
          </div>
          <div class="services-cards-list-lg-row last">
            <div class="services-cards-list-lg-item last">
              <div class="services-card-title">Для вашего малыша</div>
              <p class="services-card-description mt-[4px]">Мы предоставляем на время вашего пребывания в США: автокресло,
                манеж, коляску, пеленальную поверхность</p>
            </div>
            <img src="~/assets/images/icons/arrow_left.svg">
            <div class="services-cards-list-lg-item last">
              <div class="services-card-title">Домашний персонал</div>
              <p class="services-card-description mt-[4px]">Предоставление информации по услугам домашнего персонала</p>
            </div>
          </div>
        </div>
      </section>
      <section class="support-and-care" ref="support-and-care">
        <h2 class="about-city-title">Поддержка и забота</h2>
        <p class="support-and-care-description mt-[20px] remove-20px-mt">Мы оказываем поддержку во время беременности и
          родов:</p>
        <img src="~/assets/images/services-and-care-bg.png" class="mt-[20px] support-and-care-image-mobile">
        <ul class="list-disc ul-no-style mt-[27px] remove-20px-mt">
          <li class="list-item-custom">
            <p class="support-and-care-description remove-40px-mt">Консультация где можно пройти классы <br> по подготовке
              к
              родам</p>
          </li>
          <br>
          <li class="list-item-custom">
            <p class="support-and-care-description remove-40px-mt">Консультация для выбора Доулы <br> (при необходимости)
            </p>
          </li>
          <br>

          <li class="list-item-custom">
            <p class="support-and-care-description remove-40px-mt">Консультация для выбора специалиста <br> по грудному
              вскармливанию</p>
          </li>
          <br>

          <li class="list-item-custom">
            <p class="support-and-care-description remove-40px-mt">Консультация при оплате медицинских услуг</p>
          </li>
          <br>
        </ul>
        <button @click="goTo('contact-form', true)"
          class="mb-[12px] w-[100%] pt-[16px] pb-[16px] pl-[24px] pr-[24px] bg-[#0B63E5] rounded-xl section-1-button-text btn">Связаться
          с
          нами</button>
        <img src="~/assets/images/services-and-care-lg.png" class="services-and-care-image-lg">
      </section>

      <section class="benefits" ref="benefits">
        <h2 class="about-city-title">Наши уникальные преимущества</h2>
        <div class="benefits-card-list mt-[20px]">
          <div class="benefits-card purple">
            <div class="benefits-card-title">
              <img src="~/assets/images/icons/people1.svg" class="benefits-card-image">
              <h3 class="services-card-title">Поддержка</h3>
            </div>
            <p class="services-card-description mt-[16px]">Вас встречает семейная пара, которая сама прошла через этот
              путь,
              и в итоге
              переехала в США</p>
          </div>
          <div class="benefits-card green">
            <div class="benefits-card-title">
              <img src="~/assets/images/icons/like1.svg" class="benefits-card-image">
              <h3 class="services-card-title">Прозрачность</h3>
            </div>
            <p class="services-card-description mt-[16px]">Мы честны с вами, и не советуем ехать на роды в США, если у вас
              есть медицинские проблемы. </p>
          </div>
          <div class="benefits-card red">
            <div class="benefits-card-title">
              <img src="~/assets/images/icons/stethoscope1.svg" class="benefits-card-image">
              <h3 class="services-card-title">Поддержка</h3>
            </div>
            <p class="services-card-description mt-[16px]"> Рядом с вами будет находится человек с медицинским
              образованием,
              а не просто переводчик</p>
          </div>
        </div>
      </section>
      <section class="qa" ref="qa">
        <h2 class="about-city-title">Часто задаваемые вопросы</h2>
        <div class="about-city-chips flex flex-wrap items-start gap-3 mt-[20px]">
          <div class="about-city-chips-item" @click="activeQaTab = 'ffu'"
            v-bind:class="{ active: activeQaTab === 'ffu' }">
            Для будущих клиентов
          </div>
          <div class="about-city-chips-item" @click="activeQaTab = 'beforeTrip'"
            v-bind:class="{ active: activeQaTab === 'beforeTrip' }">
            Перед поездкой
          </div>
        </div>

        <div class="qa-cards-list mt-[20px]" v-show="activeQaTab === 'ffu'">
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu1 }">В какой срок беременности можно
                лететь на роды в США?  </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu1" @click="qaFfu1 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu1" @click="qaFfu1 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu1">В США нет жестких правил, запрещающих
              беременным женщинам лететь для родов.
              Однако многие авиакомпании и врачи рекомендуют избегать длительных перелетов ближе
              к концу беременности. После 36-37 недель беременности, риск осложнений и неотложных
              ситуаций будет выше. Пример ограничений к перелету Qatar Airways: «Qatar Airways не
              может принимать к перевозке беременных женщин на 36-й неделе беременности или
              позже. Qatar Airways не может принять к перевозке беременных женщин с многоплодной
              или осложненной беременностью на 33-й неделе беременности или позже». Поэтому, мы
              рекомендуем прилететь до 35 недели беременности (в случае одноплодной неосложненной
              беременности), и дополнительно проверить у авиакомпании, которой вы планируете
              полететь, ограничения по сроку беременности.</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu2 }">Почему вы предлагаете роды в Саванне? </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu2" @click="qaFfu2 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu2" @click="qaFfu2 = false">
            </div>
            <p class="services-card-description mt-[20px]" v-show="qaFfu2">Это та Америка, где нет бегущей толпы, и
              бешенной
              суматохи
              больших
              городов. Саванна приютилась среди дремучих лесов, которые насыщают кислородом вас и «чудо», которое вы
              вынашиваете в себе. Саванна – это уют, в котором вы и малыш будете окружены заботой во время и после родов.
              Что является важным в ваш прекрасный период ожидания встречи с малышом, и в первые недели знакомства?
              Комфортная обстановка, мягкий климат, и возможность провести это время на берегу океана, встречая
              умопомрачительные рассветы за чашечкой вкуснейшего кофе и свежей выпечки, или гуляя в тени испанского моха.
              Финансовая сторона вопроса: стоимость медицинских услуг, аренды жилья, продуктов питания ниже, чем в других
              штатах.
              Культура: возможность погрузиться в культуру юга Америки, с традиционными барбекю и куриными крылышками,
              любовью к спорту и музыке, и дружелюбными жителями.</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu3 }">Сколько стоит рождение ребенка в
                США? Какие процедуры входят? Какие
                возможные непредусмотренные расходы?  </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu3" @click="qaFfu3 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu3" @click="qaFfu3 = false">
            </div>
            <p class="qa-question-text mt-[20px]" v-show="qaFfu3">Мы пишем коридор стоимости услуг $8,500 -
              $15,000, так как стоимость медицинских
              услуг определяется непосредственным видом и объемом услуг:
              Стоимость ведения беременности и родов будет зависеть от:
              - врача, которого вы выберете
              - срока беременности, с которого вас будет вести врач
              - наличия / отсутствия осложнений беременности/родов
              - способа родоразрешения: естественные роды или оперативное вмешательство

              Стоимость медицинских услуг в больнице будет зависеть от:
              - количества дней в больнице
              - способа родоразрешения: естественные роды или оперативное вмешательство
              - наличия / отсутствия осложнений родов / послеродового периода, и соответственно
              объема и вида оказанных услуг (эпидуральная анестезия, консультация анестезиолога)
              Стоимость услуг педиатра будет зависеть от:
              - количества визитов к педиатру
              - объема услуг (обрезание, корректировка недобора веса, подрезание уздечки)</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu4 }">Могут ли сопровождать родственники (муж,
                мать,
                сестра)  и какая
                стоимость в таком случае?</h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu4" @click="qaFfu4 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu4" @click="qaFfu4 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu4">Да, партнерские роды возможны по вашему
              желанию, это не влияет на стоимость.</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu5 }">Какая будет квартира?</h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu5" @click="qaFfu5 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu5" @click="qaFfu5 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu5">Мы предлагаем квартиры в историческом центре
              города, с удобным расположением к
              магазинам, аптекам, скверам и общественному транспорту.</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu6 }"> Есть ли общественный транспорт?</h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu6" @click="qaFfu6 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu6" @click="qaFfu6 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu6">Да. В Саванне функционирует CHATHAM AREA
              TRANSIT (CAT). CAT предлагает 16
              фиксированных автобусных маршрутов в Саванне и округе Чатем. Стоимость проезда по
              местному маршруту в одну сторону составляет 1,50 доллара США. Доступны
              еженедельные и ежемесячные проездные со скидкой.</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu7 }">Как далеко/близко находится Аэропорт от
                исторического центра?  </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu7" @click="qaFfu7 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu7" @click="qaFfu7 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu7">Примерно 12 миль. Поездка из аэропорта в
              исторический район обычно занимает от 20 до
              30 минут, в зависимости от дорожных условий.</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu8 }"> Ожидается ли помощь/ поддержка по грудному
                вскармливанию после
                рождения ребенка?  </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu8" @click="qaFfu8 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu8" @click="qaFfu8 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu8">Госпиталь предоставляет услуги консультанта
              по
              грудному вскармливанию.</p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu9 }">Как долго оформляются документы ребенка?  
              </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu9" @click="qaFfu9 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu9" @click="qaFfu9 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu9">До 10 - 12 недель.</p>
          </div>
        </div>
        <div class="qa-cards-list mt-[20px]" v-show="activeQaTab === 'beforeTrip'">
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu1 }">Какие документы необходимы, чтобы полететь на
                роды в Штаты?  </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu1" @click="qaFfu1 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu1" @click="qaFfu1 = false">
            </div>
            <p class="support-and-care-description mt-[20px]" v-show="qaFfu1">Список необходимых документов, мы
              рекомендуем
              держать все документы в ручной
              клади:<br>
              1. Паспорт: Ваш паспорт должен быть действительным на момент въезда в США и на
              весь срок вашего пребывания.<br>
              2. Виза: Гражданам Казахстана обычно требуется туристическая виза (B1/B2) для
              въезда в США. Вам нужно будет подать заявление на визу и пройти интервью в
              консульстве США.<br>
              3. Свидетельство о браке с нотариальной копией<br>
              4. Медицинская страховка: Медицинская страховка от несчастных случаев и
              болезней, не связанных с беременностью. Лучше взять такую страховку из дома,
              чтобы не тратить время на это по месту. ВАЖНО – компания должна иметь
              партнеров в США и в штате Джорджия, чтобы страховка реально работала, либо в
              условиях должно быть прописано, что компания покрывает ваши расходы при
              наличии чеков. В противном случае покупается по прилету в США – дороже, но
              зато она работает.<br>
              5. Письмо от врача: Письмо от вашего врача (Справка от гинеколога для самолета с
              простым переводом), подтверждающее вашу беременность и разрешающее вам
              лететь. После 28 недель беременности, многие авиа компании требуют такое
              письмо на английском языке (на бланке авиакомпании) при длительных перелетах.<br>
              6. Финансовые средства: Важно продемонстрировать, что у вас есть достаточные
              финансовые средства для покрытия расходов на ваше пребывание и медицинские
              услуги.<br>
              7. Бронирование медицинской услуги: Так как вы летите с целью родов, мы для вас
              заранее забронируем медицинские услуги в США и предоставим документы,
              подтверждающие вашу бронь.<br>
              8. Все медицинские документы беременной и список анализов и необходимых
              обследований (в отдельном списке)<br>
              9. Водительское удостоверение международного образца (необязательно)<br>
              10. Договор аренды жилья (скан). Делаем мы.<br>
              11. Данные о докторе и госпитале, где планируются роды, дата визита, письмо
              доктора. Делаем мы.<br>
              12. Документы, подтверждающие смену фамилии мамой (или папой). Если были
              разводы – то все документы, обосновывающие имеющуюся на данный момент
              фамилию.<br></p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu2 }">Что нужно взять с собой? </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu2" @click="qaFfu2 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu2" @click="qaFfu2 = false">
            </div>
            <p class="services-card-description mt-[20px]" v-show="qaFfu2">
              Документы из списка выше.<br><br>
              Лекарственные препараты:<br>
              - антибиотики, которые могут понадобиться вам, а скорее вашим сопровождающим, т.к. во
              время беременности антибиотики – табу, только по согласованию с врачом и в крайнем
              случае<br><br>
              - валерьянка<br><br>
              - травы для купания малыша, если нужно – череда, ромашка и т.д. Нужно, чтобы были в
              заводской упаковке во избежание недоразумений на таможне<br>
              - термометр с градусами по Цельсию для вас и ребенка, а также для измерения
              комнатной температуры и воды<br>
              - все, что беременная точно знает, как употреблять и когда употреблять без согласования с
              доктором. Если есть какие-то сомнения, то лучше не рисковать и консультироваться с
              доктором и покупать по листу по назначению врача.<br>
              - все лекарства для сопровождающих, которые, по их мнению, могут им понадобиться.
              В целом, следуйте правилу – лучше взять больше, чем меньше, т.к. в США лекарства
              почти все отпускаются по рецепту, кроме того, многие названия не совпадают. Поэтому
              лучше возьмите все с запасом, если что, привезете обратно.
              Это не касается всех средств по уходу за малышом – в США они натуральнее, поэтому их
              лучше наоборот, взять с собой на Родину из США.<br>
              <br>
              Деньги:<br>
              <br>
              Наличка + на карте (или дорожными чеками). Для границы - свежая выписка из банка или
              чек из банкомата о средствах на счету (если есть, если нет – показываем кэш).
              Рекомендуем иметь две долларовые карты с возможностью перевода денег с одной карты
              на другую, либо чтобы была возможность перечислять деньги с основного счета на карту
              и назад, то есть чтобы счет был отделен от карты. Делаем это для того, чтобы не было
              возможности похитить данные вашей карты и украсть оттуда деньги. Основные деньги
              храним на счету либо на карте, которой нигде не рассчитываемся, а на карте, которой
              рассчитываемся, храним столько денег, сколько планируем в ближайшее время потратить.
              <br>
              <br>
              Мобильная связь:<br><br>
              Смартфон или планшет для навигации и постоянного Интернета с собой – если нужно.<br>

              Телефон для местной мобильной связи, работающий в стандартах США (GSM 850\1900).
              В США не работают китайские модели телефонов: Xiaomi, Huawei и другие, они даже не
              подключаются к Wi-Fi.<br>
              Мы рекомендуем покупать тарифные планы от Visible ($25) либо Mint ($15), дешевле чем
              большие провайдеры (T-Mobile, Verizon, AT&T)<br>
              Другое:<br>
              Переходники с европейской розетки на американскую
              Утягивающие (компрессионные) чулки для перелета – в первую очередь для роженицы,
              очень нужная вещь от затекания ног.
              Приветствуются документы либо иные подтверждения материальной обеспеченности и
              связи с Родиной – проспекты компании-работодателя, данные о детях и имуществе на
              Родине и т.д. (в ручную кладь обязательно)
              Требуется крайне редко, но в случае детального собеседования при пересечении границы
              такие обстоятельства помогут быстрее убедить пограничника в отсутствии у вас
              иммиграционных намерений.
              <br><br>
              Одежда и обувь<br><br>
              В США вещи и обувь дешевле и качественнее, чем у нас, поэтому если планируете что-то
              купить, то это хорошая возможность. В то же время, количество допустимого
              регистрируемого багажа ограничено как правило 23 кг., остальное за немалую доплату,
              поэтому возможно есть смысл НЕ брать с собой те вещи, которые вы планируете купить в
              США.<br>
              Не брать с собой:<br><br>
              - все запрещенные предметы вроде оружия, наркотиков и т.д.
              - все, что хоть каким-то образом может быть истолковано как имеющее отношение к
              терроризму
              - пиратские записи на дисках или компьютере, нарушающие авторские права.
              <br>
              Дополнительно:<br><br>
              Если везете больше 10.000 долларов на семью и, соответственно, декларируете их на
              въезде (обязательно), то возьмите у таможенника копию декларации о ввозе валюты.
              Пригодится при открытии счета в банке.
              Заранее подумайте, какое имя вы планируете дать вашему малышу или малышке, будет ли
              у малыша отчество (может записываться или не записываться в графе «middle name»).
              <br>
              Обязательно заранее поинтересуйтесь транслитерацией выбранного имени в вашей стране
              – ведь в национальных документах вашей страны имя будет записано согласно правилам
              транслитерации с американского свидетельства о рождении. К примеру, если вы на
              английский манер назовете вашу дочку Elizabeth, то в наших документах она будет иметь
              имя тоже Элизабет, а не Елизавета.
              <br>
              В самолете вам выдадут таможенную декларацию, которую нужно заполнить и отдать на
              таможне. Заполняется на английском, вот форма на русском:
              <a class="text-blue-500" href="https://www.cbp.gov/sites/default/files/documents/CBP%20Form%206059B_Russian%20(Fillab
            le).pdf">ссылка.</a>
            </p>
          </div>
          <div class="qa-card-list-item">
            <div class="qa-card-list-item-title">
              <h3 class="qa-question-text" v-bind:class="{ active: qaFfu3 }">Список необходимых медицинских документов и
                анализов  </h3>
              <img src="~/assets/images/icons/regular-plus.svg" v-show="!qaFfu3" @click="qaFfu3 = true">
              <img src="~/assets/images/icons/closeButtonBlack.svg" v-show="qaFfu3" @click="qaFfu3 = false">
            </div>
            <p class="qa-question-text mt-[20px]" v-show="qaFfu3">Обратите внимание, что это не список того, что нужно
              сейчас сдать, это список того,
              что в принципе должно у вас быть и скорее всего, есть.<br>
              К примеру, некоторые анализы сдаются до беременности, результаты скрининга
              и анализов у вас и так есть и т.д. Сейчас есть смысл сдавать только то, что положено
              сдавать на текущем сроке беременности.<br>
              Список анализов в целом у нас и в США совпадает на 95%
              Обменную карту переводить НЕ нужно, желательно только чтобы вся информация была в
              напечатанном виде, а не от руки, поэтому лучше ближе к вылету попросить Вашего врача
              распечатать все анализы и исследования, т.к. в обменной карте обычно всё записано от
              руки и разобрать это часто проблематично.<br>
              Список анализов и обследований, которые желательно иметь с собой.<br>
              1.Обменная карта с указанием в ней всех Ваших анализов.<br>
              2.Выписки из стационара.<br>
              3.Копии или оригиналы анализов, мазков (см.ниже)<br>
              4.Ультразвуковые исследования плода, которые у Вас есть на руках.<br>
              Обычно это УЗИ в 12 недель, в 20 недель и в 30-32 недели.
              Последнее УЗИ лучше сделайте с доплерометрией (с оценкой кровотока). Его лучше
              делать, за недельку до вылета, не позже, чтобы была возможность обсудить с врачом
              результаты.
              5. КТГ плода, которые делали.<br>
              Доктор в США, который будет вести Вашу беременность, при первом осмотре
              проведет УЗИ плода, также вы, скорее всего, будете сдавать анализы мочи

              каждое посещение и все назначенные им исследования /обследования, по мере
              необходимости.
              Теперь подробнее об анализах. Весь список, что должно быть в обменной карте,
              чтобы свериться:<br><br>
              Мазки:<br>
              1.Мазок на флору (обычно берут при постановке на учет и в 30 недель).<br>
              2.Бак.посев отделяемого из влагалища на микрофлору (в российские
              обязательные стандарты не входит)<br>
              3.Мазок ПЦР на инфекции передающиеся половым путем хламидия (trachomatis),
              уреалазма (species и urealiticum), микоплазма (hominis), ВПЧ онкогенного типа,
              гарднерелла.<br>
              4.Мазок с шейки матки на цитологию сдают у нас на ранних сроках беременности
              или один раз в год, а на поздних сроках, ввиду высокого риска осложнений при его
              заборе\ манипуляции, только при наличии показаний. Поэтому если не сдавали-не надо
              сейчас повторять.<br><br>
              Кровь:<br>
              1.Общий анализ крови (последний) <br>
              2.Биохимический анализ крови (последний) <br>
              3.Гемостазиограмма (последний) <br>
              4.TORCH-комплекс (этот анализ крови на вирусные инфекции токсоплазма, краснуха,
              герпес) <br>
              5.Группа крови и резус-фактор
              Если у Вас резус фактор отрицательный, а у мужа резус-фактор положительный,
              то еще +последний анализ крови на антитела к резус-фактору+ анализ на группу
              крови и резус-фактор от мужа. <br>
              Если у Вас первая группа крови, а у мужа любая другая группа крови, кроме
              первой- I (O), то + последний анализ на антитела к группе крови+анализ на группу
              крови и резус-фактор от мужа.
              6.ВИЧ, Сифилис, Гепатиты В и С (последние)
              <br>
              7.Гликемированный гемоглобин, даже если вы делали глюкозотолерантный тест-его лучше
              все-таки сдать.<br><br>
              Моча:<br>
              1.Общий анализ мочи.
              Обследования специалистов: (обычно указывают в обменной карте)
              <br><br>

              1.Консультации терапевта, ЛОР, стоматолога, окулиста. Не обязательно если
              все в порядке.
              <br>
              2.ЭКГ -возьмите на руки и само описание (заключение), разумеется.
              Генетические скриниги:
              <br><br>
              1.Первый с 11 по 14 неделю входит в стандарты обследования, включает в себя анализ
              крови+УЗИ. (Обычно его сочетают с плановым УЗИ в конце первого
              триместра, 12 недель) <br>
              2.Второй скрининг выполняют в сроке 17-19 недель (по показаниям, не требуют,
              если первый скрининг без патологий).
              <br><br>
              А также попросите справку от врача о возможности перелета (некоторые авиакомпании
              требуют справку о возможности перелета на фирменном бланке авиакомпании).
              Справка может быть с такой формулировкой: Беременность ... недель. Головное
              предлежание. На момент осмотра данных за преждевременные роды нет.
              Противопоказаний к авиаперелету нет. Число, время подпись.
              Приведен абсолютно стандартный список обследований и анализов.
              Если есть какая-либо серьезная сопутствующая патология, то необходимы обследования
              узких специалистов (ну, например, при сахарном диабете - консультация эндокринолога,
              при бронхиальной астме – консультация пульмонолога, при травмах в анамнезе костей
              таза – консультация хирурга/травматолога, при повышенных лейкоцитах в моче-уролога,
              при значительном варикозном расширении вен-сосудистого хирурга и т.п. и т.д.)
              На перелет не забудьте одеть компрессионные чулки и взять какой-либо валик или мягкую
              подушечку под поясницу, чтобы было удобно.
              <br><br>
              P.S. Если у родителей разные резус-факторы и у мамы отрицательная группа крови, то
              американские доктора рекомендуют в любом случае сделать укол иммуноглобулина
              приблизительно на 28-30-й неделе беременности. Повторно укол делается после родов.
              Если вы не сделаете укол дома, то его скорее всего вам настоятельно будут рекомендовать
              сделать в США до родов, после прилета.
            </p>
          </div>
        </div>
      </section>
      <section class="contact-form" ref="contact-form">
        <h2 class="about-city-title">Контакты и связь</h2>
        <div class="contacts-content">
          <div>
            <div class="contacts">
              <div class="contact-field">
                <img src="~/assets/images/icons/mail.svg">
                <div class="contact-field-info">
                  <p class="contact-field-info-title">Email</p>
                  <p class="contact-field-info-description"><a
                      href="mailto:indira.karibayeva@gmail.com">indira.karibayeva@gmail.com</a></p>
                </div>
              </div>
              <div class="contact-field">
                <img src="~/assets/images/icons/calling.svg">
                <div class="contact-field-info">
                  <p class="contact-field-info-title">Мобильный номер</p>
                  <p class="contact-field-info-description">+1 912 4057997</p>
                </div>
              </div>
              <div class="contact-field">
                <img src="~/assets/images/icons/line.svg">
                <div class="contact-field-info">
                  <p class="contact-field-info-description">Свяжитесь с нами:</p>
                </div>
              </div>
            </div>
            <div class="socials">
              <a href="https://t.me/k_indira" class="socials-button">
                <img src="~/assets/images/icons/telegram.svg">
              </a>
              <a href="https://wa.me/1912405799" class="socials-button">
                <img src="~/assets/images/icons/whatsapp.svg">
              </a>
              <a href="https://www.instagram.com/usa_babyway" class="socials-button">
                <img src="~/assets/images/icons/instagram.svg">
              </a>
            </div>
          </div>
          <div class="form">
            <input v-model="fullName" type="text" required class="form-field" placeholder="Ваше имя">
            <input v-model="city" type="text" class="form-field" placeholder="Город">
            <input v-model="phoneNumber" type="text" class="form-field" placeholder="Номер телефона">
            <input v-model="email" type="text" class="form-field" placeholder="Email">
            <textarea v-model="comment" class="form-field long-textarea" placeholder="Сообщение" />
            <div v-if="error">
              Заполните все обязательные поля
            </div>
            <div v-if="success"
              class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert">
              <span class="font-medium">Отправлено!</span>
            </div>
            <button v-if="!loading && !success" @click="sendForm"
              class="mb-[12px] w-[100%] pt-[16px] pb-[16px] pl-[24px] pr-[24px] bg-[#0B63E5] rounded-xl section-1-button-text">Отправить</button>
            <div v-if="loading">
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer" ref="footer">
        <div class="footer-content">
          <div class="brand">
            <img src="~/assets/images/footer-logo.png">
            <div class=brand-description>
              <h1 class="brand-description-title">USA Baby way</h1>
              <h2 class="brand-description-content">Место рождения счастья</h2>
            </div>
          </div>
          <menu class="footer-menu">
            <li class="footer-menu-list-item" @click="goTo('about-us', true)">Кто мы</li>
            <li class="footer-menu-list-item" @click="goTo('about-city-content', true)">Место рождения счастья</li>
            <li class="footer-menu-list-item" @click="goTo('services', true)">Наши услуги</li>
            <li class="footer-menu-list-item" @click="goTo('support-and-care', true)">Поддержка и забота</li>
            <li class="footer-menu-list-item" @click="goTo('benefits', true)">Преимущества</li>
            <li class="footer-menu-list-item" @click="goTo('footer', true)">Контакты</li>
          </menu>

          <div class="footer-text">
            <h3 class="url-text">usababyway.com</h3>
            <h4 class="email-text"><a href="mailto:indira.karibayeva@gmail.com">indira.karibayeva@gmail.com</a></h4>
          </div>
        </div>
        <div class="footer-bottom-content">
          <div class="footer-bottom">
            <div class="socials-footer">
              <a href="https://t.me/k_indira" class="socials-footer-button">
                <img src="~/assets/images/icons/telegram-white.svg">
              </a>
              <a href="https://wa.me/1912405799" class="socials-footer-button">
                <img src="~/assets/images/icons/whatsapp-white.svg">
              </a>
              <a href="https://www.instagram.com/usa_babyway" class="socials-footer-button">
                <img src="~/assets/images/icons/instagram-white.svg">
              </a>
            </div>
          </div>

          <h4 class="copyright-text">© 2023 - USA BabyWay</h4>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      activeCityTab: 'city',
      showAllServices: false,
      activeServicesTab: 'KZ',
      activeQaTab: 'ffu',
      qaFfu1: false,
      qaFfu2: false,
      qaFfu3: false,
      qaFfu4: false,
      qaFfu5: false,
      qaFfu6: false,
      qaFfu7: false,
      qaFfu8: false,
      qaFfu9: false,
      loading: false,
      fullName: "",
      city: "",
      phoneNumber: "",
      email: "",
      comment: "",
      error: false,
      success: false
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    goTo(sectionRef, shouldNotToggle = false) {
      if (!shouldNotToggle)
        this.toggleMenu()

      const sectionElement = this.$refs[sectionRef];
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    changeActiveCityTab(tabName) {
      this.activeCityTab = tabName
    },
    generateLink(fullName, city, phoneNumber, email, comment = 'empty comment') {
      return `https://docs.google.com/forms/d/e/1FAIpQLScZGxwjfFFgCxBYzSls63RbLvRcQsH-aISLwsqcX6kq6pItlA/formResponse?&submit=Submit?usp=pp_url&entry.1999900339=${fullName}&entry.804883216=${city}&entry.356953516=${phoneNumber}&entry.1842695602=${email}&entry.480443205=${comment}`
    },
    async sendForm() {
      console.log("OTPRAVLENYE")
      this.loading = true;
      this.error = false;
      if (this.fullName == "" || this.city == "" || this.phoneNumber == "" || this.email == "") {
        this.loading = false;
        this.error = true;
        return;
      }
      try {
        const resp = $fetch(this.generateLink(this.fullName, this.city, this.phoneNumber, this.email, this.comment), { retry: false });
      } catch (error) {
        return;
      }
      this.loading = false;
      this.success = true;
    }
  },

  mounted() {
    console.log(`Если вы это видите, то у вас сегодня будет отличный день!😀`)
  }
}
</script>

<style>
.services-cards-list-lg {
  display: none;
}

.services-and-care-image-lg {
  display: none;
}

.copyright-text {
  color: var(--text-inverse, #FFF);
  text-align: center;
  /* body text r | mobile */
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  /* 120% */
}

.socials-footer-button {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.10);
  padding: 12px;
}

.socials-footer {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.footer-bottom {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.email-text {
  color: var(--neutral, #B5BDC9);
  text-align: center;
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 12px;
}

.url-text {
  color: var(--text-inverse, #FFF);
  text-align: center;
  font-family: 'RobotoFlex';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-top: 40px;
}

.footer-menu-list-item {
  color: var(--neutral, #B5BDC9);
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  cursor: pointer;
}

.footer-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
}

.brand-description-content {
  color: var(--neutral, #B5BDC9);
  /* body text r | mobile */
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  /* 120% */
}

.brand-description-title {
  color: var(--text-inverse, #FFF);
  /* h3 */
  font-family: 'RobotoFlex';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  /* 116.667% */
}

.brand {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}

.footer {
  padding: 0px 16px;
  background: var(--gray-900, #061C3D);
}

.form-field {
  padding: 12px 16px;
  border-radius: 16px;
  background: var(--action-tertiary, #F0F5FF);
  color: var(--neutral, #B5BDC9);
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.form-field.long-textarea {
  min-height: 300px;
  resize: none;
}

.form-field:focus {
  outline: none;
}

.form {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.socials-button {
  border-radius: 5px;
  background: var(--action-tertiary, #F0F5FF);
  padding: 12px;
}

.socials {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.contact-field-info-description {
  color: var(--main-text, #061C3D);
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.contact-field-info-title {
  color: var(--main-text, #061C3D);
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.5;
}

.contact-field {
  display: flex;
  gap: 12px;
  align-items: center;
}

.contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 20px;
}

.contact-form {
  background: var(--background, #FFF);
  padding: 40px 16px;

}


.qa-question-text {
  color: var(--main-text, #061C3D);
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.qa-question-text.active {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.qa-card-list-item {
  padding: 12px 0px;
  border-radius: 12px;
  border-bottom: 1px solid #F0F5FF;
}

.qa-card-list-item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.qa-card-list-item:last-child {
  border-bottom: none;
}

.qa-cards-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--background, #FFF);
  box-shadow: 0px 12px 56px 0px rgba(6, 28, 61, 0.08);

}

.qa {
  padding: 40px 16px;
  background: var(--backdround-2, #F9FAFC);
}

.benefits {
  background: var(--background, #FFF);
  padding: 0px 16px 60px 16px;
}

.benefits-card-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.benefits-card {
  border-radius: 16px;
  padding: 12px 16px;
}

.benefits-card-title {
  display: flex;
  gap: 16px;
  align-items: center;
}

.benefits-card.purple {
  background: #F1EBFF;
}

.benefits-card.green {
  background: #E7F5E8;
}

.benefits-card.red {
  background: #FCECEC;
}

.support-and-care {
  padding: 40px 16px;
  background: var(--background, #FFF);
}

.support-and-care-description {
  color: var(--main-text, #061C3D);
  /* body text r | mobile */
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  /* 120% */
}

.list-item-custom {
  position: relative;
  padding-left: 25px;
}

.list-item-custom::before {
  filter: drop-shadow(0px 1px 8px rgba(80, 165, 241, 0.70));
  width: 8px;
  height: 8px;
  content: '';
  border-radius: 50%;
  background-color: #0B63E5;
  position: absolute;
  top: 6px;
  left: 0;
}

.ul-no-style {
  list-style: none;
}

.show-all-button {
  display: block;
  border-radius: 12px;
  padding: 16px 0px;
  color: var(--action, #0B63E5);
  font-family: 'RobotoFlex';
  font-size: 15px;
  margin: 16px auto 0;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
}

.services {
  padding: 40px 16px;
  background: var(--backdround-2, #F9FAFC);
}

.services-cards-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #F9FAFC;
}

.services-card {
  padding: 16px;
  border-radius: 16px;
  background: var(--background, #FFF);
  box-shadow: 0px 2px 20px 0px rgba(214, 217, 224, 0.50);
  position: relative
}

.services-card:not(:last-child)::after {
  position: absolute;
  z-index: 9999;
  content: '';
  width: 16px;
  height: 33px;
  bottom: -23px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url('~/assets/images/icons/arrow_down.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.services-card-title {
  color: var(--main-text, #061C3D);
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
}

.services-card-description {
  color: var(--secondary-text, #42526B);
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  align-self: stretch;
}

.prices {
  padding: 40px 16px;
  background: #FFF;
}

.prices-card {
  border-radius: 16px;
  padding: 16px;
}

.prices-card.blue {
  background: var(--action-tertiary, #F0F5FF);
}

.prices-card.pink {
  background: #FEEDFA;
}

.prices-card.grey {
  background: #F5F6F7;
}

.button {
  padding: 16px 24px;
  border-radius: 12px;
  background: var(--action, #0B63E5);
  width: 100%;
}

.cards>div {
  flex: 0 0 calc(50% - 10px);
}

.doctor-card {
  border-radius: 16px;
  background: var(--background, #FFF);
  padding: 16px;
}

.doctor-card-image {
  border-radius: 12px;
  padding: 16px;
}

.apartments {
  padding: 40px 16px;
  background: var(--backdround-2, #F9FAFC);
}

.apartments-informer-card {
  border-radius: 20px;
  background: var(--action-tertiary, #F0F5FF);
  padding: 16px;
}

.section-1-h1-text {
  font-family: 'FuturaPT';
  font-weight: 500;
  font-size: 40px;
  line-height: 51.28px;
}

.section-1-h1-desc {
  font-family: 'RobotoFlex';
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}

.header-padding {
  padding: 18px 16px 18px 16px;
}

.section-1 {
  background: url("~/assets/images/screen2.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  padding: 20px 16px 60px 16px;
  z-index: 1;
}

.section-1-button-text {
  font-family: "RobotoFlex";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: white;
  line-height: 24px;
}

.section-1-button-text.black {
  color: var(--main-text, #061C3D);
}

.section-1-advantages-list {
  padding: 16px 30px;
  background-color: white;
  border-radius: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 20px 0px rgba(214, 217, 224, 0.50);
}

.section-1-advantages-list *:not(:last-child) {
  margin-bottom: 12px;
}

.section-1-icons {
  margin-right: 8px;
}

.navbar {
  padding: 20px 16px 20px 16px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  background-color: white;
  position: fixed;
  top: 73px;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  z-index: 9999;
  transition: all 0.1s ease-in-out 0.6s;
  -webkit-transition: all 0.2s ease-in-out 0s;
}

.slide-menu-leave-active {
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
}

.navbar-list-item {
  font-family: 'RobotoFlex';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
}

.about-us {
  background: var(--background, #FFF);
  margin-top: -24px;
  padding: 0px 16px 40px 16px;
}

.about-us-title {
  font-family: 'RobotoFlex';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}

.abouts-us-description {
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  align-self: stretch;
  color: var(--secondary-text, #42526B);

}

.about-us-features-card {
  border-radius: 16px;
  background: var(--background, #FFF);
  padding: 16px;
  /* card */
  box-shadow: 0px 2px 20px 0px rgba(214, 217, 224, 0.50);
}

.about-us-features-title {
  color: var(--main-text, #061C3D);

  /* body text b | mobile */
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  /* 120% */
}

.about-us-features-title.dark-grey {
  color: var(--dark-grey, #242464);
}

.about-us-features-text {
  color: var(--secondary-text, #42526B);

  /* caption | mobile */
  font-family: 'RobotoFlex';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  /* 115.385% */
}

.specialist {
  padding: 40px 16px;
  background: var(--backdround-2, #F9FAFC);
}

.specialist-title {
  color: var(--main-text, #061C3D);

  /* h3 */
  font-family: 'RobotoFlex';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  /* 116.667% */
}

.specialist-fio {
  color: var(--main-text, #061C3D);

  /* body bold */
  font-family: 'RobotoFlex';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  /* 133.333% */
}

.specialist-titles {
  color: var(--main-text, #061C3D);

  /* body text m | mobile */
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  /* 120% */
}

.specialist-bio {
  color: var(--secondary-text, #42526B);
  align-self: stretch;
  /* body text r | mobile */
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  /* 120% */
}

.specialist-bio.dark {
  color: var(--main-text, #061C3D);
}

.specialist-bio.bold {
  font-weight: 700;
}

.about-city-content {
  padding: 40px 16px;
  background: var(--background, #FFF);
}

.about-city-title {
  color: var(--main-text, #061C3D);

  /* h3 */
  font-family: 'RobotoFlex';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  /* 116.667% */
}

.about-city-chips-item.active {
  color: var(--text-inverse, #FFF);
  background: var(--action, #0B63E5);
}

.about-city-chips-item {
  border-radius: 12px;
  background: var(--action-tertiary, #F0F5FF);
  color: var(--action, #0B63E5);
  padding: 8px 20px;
  font-family: 'RobotoFlex';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
}

.about-city-tab-content-title {
  color: var(--main-text, #061C3D);

  /* body bold */
  font-family: 'RobotoFlex';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  /* 133.333% */
}

.about-city-tab-content-title.white {
  color: var(--text-inverse, #FFF);
}

.about-city-city-extra-content {
  padding: 16px;
  gap: 12px;
  border-radius: 20px;
  background: #FEFCED;
}

.pc-logo {
  display: none;
}

@media only screen and (min-width: 600px) {
  .header-button {
    display: none;
  }

  .navbar {
    flex-direction: row;
    gap: 32px;
    position: static;
    display: flex !important;
    width: auto;
  }

  .header {
    width: 100%;
    padding: 18px 120px
  }

  .pc-logo {
    display: block;
  }

  .mobile-logo {
    display: none;
  }

  .section-1 {
    background: url("~/assets/images/large-background.png");
    background-repeat: no-repeat;
    background-size: contain;
    padding: 120px 120px 0px 120px;
  }

  .section-1-content {
    align-items: start;
    margin-top: 0px;
    gap: 0px;
  }

  .section-1-h1-desc {
    margin-bottom: 40px;
    color: var(--main-text, #061C3D);
    font-family: 'RobotoFlex';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .navbar-list-item {
    color: var(--main-text, #061C3D);
    /* Body text */
    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .section-1-h1-text {
    color: var(--main-text, #061C3D);
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 8px;
  }

  .section-1-advantages-list {
    margin-top: 125px;
    display: flex;
    gap: 80px;
    padding: 40px 80px;
    border-radius: 20px;
    background: var(--background, #FFF);
    box-shadow: 0px 2px 20px 0px rgba(214, 217, 224, 0.50);
    width: 100%;
    justify-content: space-between;
    align-items: center;

  }

  .section-1-advantages-list-item {
    margin-bottom: 0px !important;
  }

  .section-1-button-text {
    margin-bottom: 0px;
  }

  .about-us {
    padding: 100px 120px 60px 120px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .about-us-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    align-items: flex-start;
    width: 400px;
  }

  .about-us-title {
    margin-bottom: 0px;
    color: var(--main-text, #061C3D);
    font-family: 'FuturaPT';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .abouts-us-description {
    color: var(--secondary-text, #42526B);
    /* Body text */
    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .about-us-features {
    display: flex;
    width: 640px;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0px;
    gap: 16px;

  }

  .about-us-features-card {
    flex: 1 0 calc(50% - 8px);
    box-sizing: border-box;
    padding: 12px 16px;
    border-radius: 16px;
    background: var(--background, #FFF);
    /* card */
    box-shadow: 0px 2px 20px 0px rgba(214, 217, 224, 0.50);
  }

  .about-us-features-card:last-child {
    flex: 1 0 100%;
  }

  .about-us-features-title {
    color: var(--main-text, #061C3D);
    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }

  .about-us-features-text {
    color: var(--secondary-text, #42526B);
    font-family: 'RobotoFlex';
    align-self: stretch;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 8px 0px;
  }

  .specialist {
    padding: 60px 120px;
  }

  .remove-20px-mt {
    margin-top: 0px;
  }

  .specialist-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    margin-top: 40px;
  }

  .specialist-title {
    color: var(--main-text, #061C3D);
    font-family: 'FuturaPT';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .specialist-fio {
    color: var(--main-text, #061C3D);
    font-family: 'RobotoFlex';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    width: 440px;
  }

  .specialist-titles {
    color: var(--main-text, #061C3D);
    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    width: 440px;
    line-height: 24px;
  }

  .specialist-bio {
    color: var(--secondary-text, #42526B);
    /* Body text */

    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 133.333% */
  }

  .about-city-content {
    padding: 60px 120px;
  }

  .about-city-title {
    color: var(--main-text, #061C3D);
    font-family: 'FuturaPT';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .about-city-chips {
    margin-top: 40px;
  }

  .about-city-chips-item {
    /* Body text */
    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    line-height: 24px;
  }

  .about-city-tab-content {
    margin-top: 40px;
  }

  .about-city-tab-content-title {
    color: var(--main-text, #061C3D);
    /* h3 */
    font-family: 'RobotoFlex';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
  }

  .about-city-tab-content-all {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .about-city-tab-content-text {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    width: 560px;
  }

  .cards>div {
    flex: 0 0 calc(18% - 4px);
  }

  .doctor-card {
    padding: 16px;
    border-radius: 16px;
    background: var(--background, #FFF);
  }

  .apartments {
    padding: 60px 120px;
  }

  .aparments-content {
    display: flex;
    gap: 100px;
    align-items: flex-start;
    margin-top: 40px;
  }

  .prices {
    padding: 60px 120px;
  }

  .prices-cards {
    margin-top: 40px;
    flex-direction: row;
    gap: 32px;
  }

  .prices-card {
    width: 380px;
  }

  .services {
    padding: 60px 120px;
  }

  .services-cards-list {
    display: none;
  }

  .services-cards-list-lg {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 40px;
  }

  .services-cards-list-lg-row {
    display: inline-flex;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .services-cards-list-lg-item {
    border-radius: 16px;
    position: relative;
    width: 333px;
    background: var(--background, #FFF);
    box-shadow: 0px 2px 20px 0px rgba(214, 217, 224, 0.50);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  }

  .services-cards-list-lg-item.usa {
    height: 204px
  }

  .services-cards-list-lg-item.last {
    width: 534px;
  }

  .services-cards-list-lg-row.last {
    display: inline-flex;
    margin-top: 20px;
  }

  .services-card-title {
    color: var(--main-text, #061C3D);
    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }

  .services-card-description {
    color: var(--secondary-text, #42526B);
    font-family: 'RobotoFlex';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .side-arrow-right {
    position: absolute;
    background-image: url('~/assets/images/icons/arrow_down_left.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 25px;
    right: -22px;
    top: 85px;
    height: 211px;
  }

  .side-arrow-left {
    position: absolute;
    background-image: url('~/assets/images/icons/arrow_down_right.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 25px;
    left: -22px;
    top: 85px;
    height: 211px;
  }

  .support-and-care {
    padding: 60px 120px;
    position: relative;
  }

  .support-and-care-description {
    margin-top: 40px;
    font-size: 18px;
    line-height: 24px;
    /* 133.333% */
  }

  .support-and-care-image-mobile {
    display: none;
  }

  .btn {
    width: 205px;
  }

  .list-disc {
    margin-top: 40px;
  }

  .remove-40px-mt {
    margin-top: 0;
  }

  .services-and-care-image-lg {
    display: block;
    position: absolute;
    right: 100px;
    top: 84px;
  }

  .show-all-button {
    display: none;
  }

  .benefits {
    padding: 0px 120px 60px 120px;
  }

  .benefits-card-list {
    flex-direction: row;
    align-items: flex-start;
  }

  .benefits-card {
    margin-top: 40px;
    height: 168px;
    gap: 12px;
    border-radius: 16px;
  }

  .qa {
    padding: 60px 120px;
  }

  .contacts {
    gap: 30px;
  }

  .contact-form {
    padding: 60px 120px;
  }

  .contacts-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .contact-field-info-title {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    /* 133.333% */
  }

  .contact-field-info-description {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    /* 133.333% */
  }

  .form {
    width: 616px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 20px;
  }

  .form-field {
    flex: 1 0 calc(48% - 8px);

    /* Body text */
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    /* 133.333% */
  }

  .form-field.form-field.long-textarea {
    min-height: 145px;
  }

  .footer {
    padding: 0px 120px;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 124px 0px 60px 0px;
    align-items: flex-start;
  }

  .footer-bottom-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
    background: var(--gray-900, #061C3D);
    box-shadow: 0px -1px 0px 0px #243752;
  }

  .footer-menu-list-item {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    /* 133.333% */
  }

  .copyright-text {
    font-size: 18px;
    line-height: 24px;
    /* 133.333% */
  }
}

@media only screen and (max-width: 599px) {
  .section-1-icons {
    height: 36px;
    width: 36px;
  }

  .about-us-features-card-img {
    height: 32px;
    width: 32px;
  }

  .benefits-card-image {
    height: 32px;
    width: 32px;
  }
}

@media only screen and (min-width: 1600px) {
  .container {
    max-width: 1440px;
    margin: 0 auto
  }
}
</style>