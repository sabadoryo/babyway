<template>
  <header class="flex justify-between header-padding">
    <img src="~/assets/images/babyway.png" />
    <img src="~/assets/images/burgerButton.svg" @click="toggleMenu" />
  </header>
  <Transition name="slide-menu">
    <menu class="navbar" v-show="isMenuOpen">
      <li class="navbar-list-item">О нас</li>
      <li class="navbar-list-item">Место рождения счастья</li>
      <li class="navbar-list-item">Наши услуги</li>
      <li class="navbar-list-item">Поддержка и забота</li>
      <li class="navbar-list-item">Преимущества</li>
      <li class="navbar-list-item">Контакты</li>
    </menu>
  </Transition>
  <div class="allsections" :style="{
    height: isMenuOpen ? '90vh' : '100%',
    'overflow-y': isMenuOpen ? 'hidden' : ''
  }">
    <section class="section-1">
      <div class="flex flex-col items-center gap-[8px] mt-[20px]">
        <h1 class="section-1-h1-text">USA BabyWay</h1>
        <div class="section-1-h1-desc mb-[311px]">Место рождения счастья</div>
        <button
          class="mb-[12px] pt-[16px] pb-[16px] pl-[24px] pr-[24px] bg-[#0B63E5] rounded-xl section-1-button-text">Связаться
          с
          нами</button>
        <div class="section-1-advantages-list">
          <div class="flex items-center">
            <img src="~/assets/images/icons/vedushaya.svg" class="section-1-icons" />
            <span>Ведущая в мире медицина</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/icons/vvedenie.svg" class="section-1-icons" />
            <span>Ведение родов любой сложности</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/icons/america.svg" class="section-1-icons" />
            <span>Американское гражданство</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/icons/shapka.svg" class="section-1-icons" />
            <span>Бесплатное образование</span>
          </div>
        </div>
      </div>
    </section>
    <section class="about-us">
      <h2 class="about-us-title mb-[20px]">О нас</h2>
      <div class="abouts-us-description">
        Мы стремимся сделать мечты о рождении ребенка в США для наших клиентов из Казахстана реальностью.
        <br>
        <br>
        Наша миссия
        заключается в обеспечении безопасных, комфортных и незабываемых родов <br> в Америке, предоставляя
        высококачественные
        услуги и поддержку на каждом этапе этого удивительного семейного путешествия.
      </div>

      <div class="mt-[24px] flex flex-col gap-4">
        <div class="about-us-features-card">
          <div class="flex align-middle mb-[8px]">
            <img src="~/assets/images/icons/fi-rr-thumbs-up.svg" class="mr-[18px]">
            <div class="about-us-features-title">Профессионализм</div>
          </div>
          <div class="about-us-features-text">
            Мы гордимся высоким стандартом профессионализма нашей команды, всегда готовой предоставить клиентам лучшие
            услуги
          </div>
        </div>
        <div class="about-us-features-card">
          <div class="flex align-middle mb-[8px]">
            <img src="~/assets/images/icons/Heart.svg" class="mr-[18px]">
            <div class="about-us-features-title">Забота и Сочувствие</div>
          </div>
          <div class="about-us-features-text">
            Мы вложили в сердце нашей компании заботу и сочувствие к нашим клиентам, поддерживая вас на каждом этапе этого
            удивительного приключения
          </div>
        </div>
        <div class="about-us-features-card">
          <div class="flex align-middle mb-[8px]">
            <img src="~/assets/images/icons/Activity.svg" class="mr-[18px]">
            <div class="about-us-features-title">Доверие</div>
          </div>
          <div class="about-us-features-text">
            Мы строим наши отношения на доверии, предоставляя полную прозрачность и честность в каждом аспекте наших услуг
          </div>
        </div>
        <div class="about-us-features-card">
          <div class="flex align-middle mb-[8px]">
            <img src="~/assets/images/icons/fi-rr-lock.svg" class="mr-[18px]">
            <div class="about-us-features-title">Безопасность и Уверенность</div>
          </div>
          <div class="about-us-features-text">
            Мы придаем большое значение безопасности как для матери, так и для ребенка, обеспечивая клиентов чувством
            уверенности в своем выборе
          </div>
        </div>
        <div class="about-us-features-card">
          <div class="flex align-middle mb-[8px]">
            <img src="~/assets/images/icons/3 User.svg" class="mr-[18px]">
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
    <section class="specialist">
      <h2 class="specialist-title">Кто вас встречает в США?</h2>
      <img src="~/assets/images/specialist.png" class="rounded-[20px] mt-[20px]">
      <p class="specialist-fio mt-[20px]">Индира Карибаева</p>
      <p class="specialist-titles mt-[12px]">MD, MPH, PhD Georgia Southern University, жена, мама и просто женщина</p>
      <p class="specialist-bio mt-[20px]">
        Я – ЛОР-врач по образованию и пошла по пути «общественного здравоохранения»,
        занимаясь
        исследованиями в области
        ментального здоровья женщин с различными заболеваниями. Сейчас продолжаю заниматься наукой в GSU. Я сама приезжала
        на роды в США в 2021г., живя в Казахстане, когда в мире бушевала эпидемия COVID-19. Так в нашей семье появился
        маленький гражданин Америки. А теперь мы уже всей семьей переехали в Джорджию.<br><br>Я знаю, как важен выбор
        врача
        и
        клиники, где вы будете рожать. Я знаю, как вам важно быть в спокойствии, имея миллион причин для переживаний. Я
        знаю, какие трудности и не заметные на первый взгляд мелочи могут влиять на будущую маму и малыша. Именно поэтому
        мы
        решили открыть компанию по организации родов в США, чтобы сделать <br> ваше американское семейное приключение
        максимально
        комфортным и безопасным.</p>
    </section>
    <section class="about-city">
      <h2 class="about-city-title">Место рождения счастья</h2>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isMenuOpen: false
    }
  },

  methods: {
    increment() {
      this.count++
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      console.log(this.isMenuOpen)
    }
  },

  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<style>
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
  background: url("~/assets/images/screen1bg.png");
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
  transition: all 0.1s ease-in-out 0s;
  -webkit-transition: all 0.1s ease-in-out 0s;
}

.slide-menu-enter-active {
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
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

.about-city {
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
</style>