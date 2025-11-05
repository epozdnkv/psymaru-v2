const App = {
  data() {
    return {
      numRnd: 0,
      isModalOpen: false,
      isImageModalOpen: false,
      isMobileMenuOpen: false,
      currentImage: '',
      /*Тултипы*/
            isTooltipVisible: false,
      tooltipText: '',
      tooltipStyle: {
        left: '100px',
        top: '100px'
      },
      targetElement: null,
      isTouchDevice: false,
      activeTooltipId: null, // ID активного тултипа
      /*Тултипы*/
      documents: [
        {
          image: "src/img/docs/1.webp",
          title: "Диплом о высшем образовании"
        },
        {
          image: "src/img/docs/2.webp", 
          title: "Диплом магистра"
        },
        {
          image: "src/img/docs/3.webp",
          title: "Сертификат специалиста"
        }
      ],
      faqItems: [
        {
          question: 'Как понять, что мне нужна помощь психолога?',
          answer: `<p>О том, что вам стоит обратиться к психологу могут сообщать следующие признаки:</p>
                  <ul>
                    <li class="faq_description_item">Вы постоянно чувствуете тревогу, апатию или грусть, и это состояние не проходит.</li>
                    <li class="faq_description_item">Вы пережили стрессовую ситуацию (потеря работы, расставание, травма) и не можете справиться с чувствами.</li>
                    <li class="faq_description_item">У вас проблемы со сном, аппетитом, или вы чувствуете постоянное физическое напряжение.</li>
                    <li class="faq_description_item">Вы не можете найти общий язык с близкими, чувствуете себя одиноким.</li>
                  </ul>`,
          isOpen: false
        },
        {
          question: 'С чего начать работу с психологом?', 
          answer: `<p>Начать терапию — это как начать новое путешествие. Главное — сделать первый шаг. И он не требует от вас быть «готовым» или знать все ответы.</p>
                  <br><p>Вам не нужно заранее продумывать, что сказать. Не нужно готовиться. Психолог поможет вам сориентироваться.</p>`,
          isOpen: false
        },
        {
          question: 'Сколько длится курс терапии и как часто проходят встречи?',
          answer: `Минимальный курс терапии у психолога длится от десяти сессий по одной встрече в неделю. Есть запросы, которые не требуют долгосрочной работы с психологом, их можно решить за несколько консультаций.`,
          isOpen: false
        },
        {
          question: 'Как быстро можно увидеть результаты терапии?',
          answer: `Иногда облегчение приходит уже после первой сессии с психологом. В остальном скорость появления результатов зависит от глубины и сложности состояния в котором пришел клиент.`,
          isOpen: false
        },
        {
          question: 'Могу ли я остаться анонимным и насколько конфиденциальна консультация?',
          answer: `Психолог гарантирует анонимность и конфиденциальность во время и после консультаций.`,
          isOpen: false
        }
      ],
      card: [
        {
          id: 0,
          path: "src/img/cards/0.webp",
          description: `<ul class="card_description_list">
                    <li class="card_description_item">Выберите карту</li>
                    <li class="card_description_item">На время представьте, что ваше сознание — это большой и таинственный лес</li>
                    <li class="card_description_item">Какую пользу вам может принести выбранное существо?</li>
                    <li class="card_description_item">Назовите причину, по которой этому существу не место в вашем лесу? Кто он? В чем его опасность? Что в нем отталкивающего?</li>
                    <li class="card_description_item">Чем оно отличается от жителей вашего леса?</li>
                    <li class="card_description_item">Как оградить свой лес от его присутствия?</li>
                    <li class="card_description_item">При каких условиях нежеланный гость сможет стать обитателем?</li>
                </ul>`,
        },
        {
          id: 1,
          path: "src/img/cards/1.webp",
          name: "Собака",
          description: `
                <p>Собака сохраняет свои инстинкты и особые звериные способности несмотря на то, что уже давно является компаньоном человека. </p>
                <br><p>Она не пытается изменить людей и обстоятельства в угоду своему ЭГО, а потому ей не свойственно так сильно страдать, когда что-то идет не по ее, как волку. </p>
                <br>
                <p>Ваш выбор относится к ситуации со страданием или с принятием.</p>`,
        },
        {
          id: 2,
          path: "src/img/cards/2.webp",
          name: "Морская свинка",
          description: `
                <p>Шаманы Южной Америки утверждают, что морская свинка перетягивает на себя болезни хозяина и отводили от своего владельца неудачи. морские свинки являются символом мягкости и кротости.</p>
                <br><p>Это социальные животные, которые не проявляют агрессии друг к другу и известны своей покладистостью и миролюбием. Эти черты заслужили им репутацию воплощения спокойствия и безмятежности. </p>
                <br><p>Чувствуете ли вы себя сейчас безмятежным? Что сейчас может помочь вам ощутить покой?</p>`,
        },
        {
          id: 3,
          path: "src/img/cards/3.webp",
          name: "Змея",
          description: `
                <p>Змея призывает вас остановится и внимательно оглядеться.</p>
                <br><p>Возможно, что-то внутри вас или в вашем поведении может нанести вам вред. Что ядовитого вы делаете для себя? Что в ваших действиях может отравить вас?</p>
                <br><p>Возможно, у вас получится сделать змею вашим проводником на пути личной трансформации и внутреннего исцеления.</p>`,
        },
        {
          id: 4,
          path: "src/img/cards/4.webp",
          name: "Бабочка",
          description:`
                <p>Бабочка взмахнула своими крыльями. Что-то в вашей жизни готово к трансформации. Все трудности и преграды становятся опытом, в котором вы растете и меняетесь к лучшему.</p>`,
        },
        {
          id: 5,
          path: "src/img/cards/5.webp",
          name: "Носорог",
          description: `
                <p>Время удовлетворить потребность быть верным тому, кто вы есть на самом деле. Все может быть не так, как кажется, и из-за этого вы можете представлять себя в ложном свете. </p>
                <br><p>Копайте глубже в свое внутреннее существо. Это поможет вам понять свои истинные мотивы. Таким образом, вы можете знать, как лучше всего взаимодействовать с окружающим миром.</p>`,
        },
        {
          id: 6,
          path: "src/img/cards/6.webp",
          name: "Цапля",
          description: `
                <p>Цапля просит вас быть бдительным и хранить спокойствие. </p>
                <br><p>Сделайте вдох и выдох, возвысьтесь на мгновение над жизненными ненастьями подобно этой птице, преодолевающей дождевые облака.</p>`,
        },
        {
          id: 7,
          path: "src/img/cards/7.webp",
          name: "Лисица",
          description: `
                <p>Настал момент включить любопытство и изобретательность. При этом вы можете оставаться достаточно недоверчивыми и осторожными в своем поведении. </p>
                <br><p>Доверяйте собственным органам чувств и интуиции, слушайте свой внутренний голос.</p>`,
        },
        {
          id: 8,
          path: "src/img/cards/8.webp",
          name: "Орёл",
          description: `
                <p>Если ты устал и выгорел обратись к мудрости своей души чтоб почувствовать обновление. Орел учит, что важно познать жизнь со всеми ее светлыми и темными сторонами. </p>
                <br><p>Как негативные, так и позитивные события служат высшей цели и помогают развивать собственное Я. </p>
                <br><p>В сложных ситуациях, необходимо помнить, что только опираясь на свою духовность (крылья) можно подняться над ситуацией (взлететь) и расширить Ваш смысл существования (горизонт) до гораздо больших пределов, чем он был до этого (духовный рост).</p>`,
        },
        {
          id: 9,
          path: "src/img/cards/9.webp",
          name: "Крокодил",
          description: `
                <p>Обладая способностью жить и на земле, и в воде, крокодил символизирует двойственную природу человека. </p>
                <br><p>Дух крокодила дает нам сигнал о том, что нам нужно проявлять силу и агрессию в нашей повседневной деятельности. </p>
                <br><p>Кроме того, он служит нам напоминанием о том, что в работе нужно иметь мужество, терпение и честь.</p>`,
        },
        {
          id: 10,
          path: "src/img/cards/10.webp",
          name: "Олень",
          description: `
                <p>Верьте в свою цель, интуицию и способность сделать решающий шаг. </p>
                <br><p>Подобно оленю не принимайте поспешных решений; олень замирает, оценивая новую обстановку всеми своими чувствами и затем ступает вперед грациозно и и уверенно – чтобы не ждало его дальше.</p>`,
        },
        {
          id: 11,
          path: "src/img/cards/11.webp",
          name: "Слон",
          description: `
                <p>Слон втягивает запахи хоботом и таким образом оценивает ситуацию. Уделите внимание тому, что пахнет хорошо, а что имеет неприятный «душок».</p>
                <br><p>Достаточно ли вы разборчивы? Замечаете ли вы, что некоторые вещи пахнут не так, как должны пахнуть?</p>`,
        },
        {
          id: 12,
          path: "src/img/cards/13.webp",
          name: "Паук",
          description:`
                <p>Паук, предлагает остановиться и взвесить: вы действительно готовы встретиться с тем, что находиться дальше? С вашим страхом, стыдом или может быть болью? Готовы ли вы сами плести свою судьбы?</p>`,
        },
        {
          id: 13,
          path: "src/img/cards/14.webp",
          name: "Медведь",
          description:`
                <p>Необходимо периодически погружаться в глубины своего «Я» и пробуждать внутреннюю силу, однако вкус к жизни вы сможете почувствовать лишь после того, как выведете эту силу на свет и найдете ей практическое применение. </p>`,
        },
        {
          id: 14,
          path: "src/img/cards/15.webp",
          name: "Тигр",
          description:`
                <p>Тигр расскажет вам как быть в уединении с собой, научит медитации, покажет вам внутри вас ваше сокровенное место, где вы всегда на связи с самим собой и можете увидеть ответы на все ваши жизненные вопросы. </p><br><p>Тигр советует вам никогда не идти на компромисс, не предавать себя и не идти ни у кого на поводу</p>`,
        },
        {
          id: 15,
          path: "src/img/cards/16.webp",
          name: "Конь",
          description:`
                <p>Солнце совершает круг, погружая мир в темноту и вновь освещая все вокруг в дневное время суток.</p>
                <br><p>Конь – солнце несет своего всадника сквозь смерть к новому рождению. Что-то в вашей жизни требует трансформации или возможно перемены уже проникли в вашу жизнь.</p>
                <br><p>Проверьте – может быть в вашей жизни накопились факторы, которые не позволяют вашей силе течь легко и свободно. Осознайте их, освободитесь от тех, которые уже не работают на вас. Не ограничивайте себя убеждениями и ожиданиями других людей</p>`,
        },
        {
          id: 16,
          path: "src/img/cards/17.webp",
          name: "Леопард",
          description:`
                <p>Леопард, напоминает, сколько ресурсов у вас есть.</p>
                <br><p>Вы, как и леопард, можете выбирать из множества ресурсов, потому что у вас есть на это полномочия.</p>
                <br><p>Леопард хочет, чтобы вы поняли силу, которая скрывается в тени вашей жизни. Обладая этим знанием, вы сможете использовать благость этой силы</p>`,
        },
        {
          id: 17,
          path: "src/img/cards/18.webp",
          name: "Волк",
          description: `
                <p>У вас есть идеальный союзник, преданный партнёру, любящий, заботливый по отношению к своим.</p>
                <br><p>Однако, его природа двойственна – он агрессивный, кровожадный, жестокий, хитрый, сильный и подчас непобедимый зверь. Какая сторона волчьей сущности актуальна сейчас в вашей жизни?</p>`,
        },
        {
          id: 18,
          path: "src/img/cards/19.webp",
          name: "Спящий кот",
          description: `
                <p>Большую часть жизни кошки проводят во сне. При этом в период бодрствования они сосредоточены и активны.</p>
                <br><p>У кошек есть понимание свободы, так как кошка не желает быть ни пойманной, ни заключенной. Вы никогда не заставите кошку делать то, что она не хочет и что ей не выгодно.</p>
                <br><p>Кот предлагает вам быть гибким, но не прогибаться.</p>`,
        },
      ],
    };
  },
  created() {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="));
    const myCookie = cookies.find((cookie) => cookie[0].trim() === "dayCard");
    if (myCookie != undefined) {
      // Если кука найдена, получаем значение
      this.numRnd = myCookie[1];
      console.log("Значение myCookie:", this.numRnd);
    } else {
      console.log("Кука myCookie не найдена.");
    }
  },
  methods: {

    // Рандомайзер для карт
    getRandomInt(min, max) {
      let expirationDate = new Date();
      if (this.numRnd == 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.numRnd = Math.floor(Math.random() * (max - min + 1)) + min;
        expirationDate.setDate(
          expirationDate.getDate(expirationDate.setUTCHours(23, 59, 59, 999))
        );
        document.cookie =
          "dayCard=" +
          this.numRnd +
          "; expires=" +
          expirationDate.toUTCString() +
          "; path=/";
        return this.numRnd;
      } else return this.numRnd;
    },

    //FAQ
    toggleFaqItem(index) {
      // Закрываем все остальные элементы при открытии нового
      if (!this.faqItems[index].isOpen) {
        this.faqItems.forEach((item, i) => {
          if (i !== index) {
            item.isOpen = false;
          }
        });
      }
      
      this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
    },
    //FAQ

    //Модальное окно
    openModal() {
      this.isModalOpen = true;
      this.disableBodyScroll();
    },
    
    closeModal() {
      this.isModalOpen = false;
      this.enableBodyScroll();
    },
    
    openImage(imageSrc) {
      this.currentImage = imageSrc;
      this.isImageModalOpen = true;
      this.disableBodyScroll();
    },
    
    closeImageModal() {
      this.isImageModalOpen = false;
      this.currentImage = '';
      // Включаем скролл только если основное модальное окно закрыто
      if (!this.isModalOpen) {
        this.enableBodyScroll();
      }
    },
    
    disableBodyScroll() {
      document.body.classList.add('modal-open');
      document.documentElement.style.overflow = 'hidden';
    },
    
    enableBodyScroll() {
      document.body.classList.remove('modal-open');
      document.documentElement.style.overflow = '';
    },
    //Модальное окно

    //Бургер меню
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        document.body.classList.add('mobile-menu-open');
        document.body.style.overflow = 'hidden';
      } else {
        document.body.classList.remove('mobile-menu-open');
        document.body.style.overflow = '';
      }
    },
    
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
    },
    //Бургер меню

    /*Тултипы - переписанные методы*/
    showTooltip(text, event) {
      // На десктопе показываем при hover, на мобильных игнорируем hover
      if (event && event.type === 'mouseenter' && this.isTouchDevice) {
        return;
      }
      
      this.tooltipText = text;
      this.isTooltipVisible = true;
      this.targetElement = event && event.currentTarget ? event.currentTarget : null;
      
      // Генерируем уникальный ID для тултипа
      const tooltipId = this.targetElement ? 
        this.targetElement.getAttribute('data-tooltip-id') || 
        'tooltip-' + Date.now() : null;
      this.activeTooltipId = tooltipId;
      
      this.$nextTick(() => {
        if (this.targetElement) {
          const rect = this.targetElement.getBoundingClientRect();
          const isDesktop = window.innerWidth >= 768;
          
          if (isDesktop) {
            // Справа на десктопе
            this.tooltipStyle = {
              left: (rect.right + 10) + 'px',
              top: (rect.top + (rect.height / 2)) + 'px',
              transform: 'translateY(-50%)'
            };
          } else {
            // Снизу на мобильных
            this.tooltipStyle = {
              left: (rect.left + (rect.width / 2)) + 'px',
              top: (rect.bottom + 10) + 'px',
              transform: 'translateX(-50%)'
            };
          }
        }
      });
    },

    toggleTooltip(text, event) {
      if (!event) return;
      
      const currentTarget = event.currentTarget;
      const tooltipId = currentTarget.getAttribute('data-tooltip-id');
      
      // Если кликаем по той же иконке, скрываем тултип
      if (this.isTooltipVisible && this.activeTooltipId === tooltipId) {
        this.hideTooltip();
      } else {
        // Иначе показываем новый тултип
        this.showTooltip(text, event);
      }
    },

    onTooltipTouch(text, event) {
      // На мобильных: одинарное нажатие показывает/скрывает тултип
      event.preventDefault();
      event.stopPropagation();
      
      const currentTarget = event.currentTarget;
      const tooltipId = currentTarget.getAttribute('data-tooltip-id');
      
      if (this.isTooltipVisible && this.activeTooltipId === tooltipId) {
        this.hideTooltip();
      } else {
        this.showTooltip(text, event);
      }
    },
    
    hideTooltip() {
      this.isTooltipVisible = false;
      this.targetElement = null;
      this.activeTooltipId = null;
    },

    updateTooltipPosition() {
      if (this.targetElement && this.isTooltipVisible) {
        const rect = this.targetElement.getBoundingClientRect();
        const isDesktop = window.innerWidth >= 768;
        
        if (isDesktop) {
          this.tooltipStyle = {
            left: (rect.right + 10) + 'px',
            top: (rect.top + (rect.height / 2)) + 'px',
            transform: 'translateY(-50%)'
          };
        } else {
          this.tooltipStyle = {
            left: (rect.left + (rect.width / 2)) + 'px',
            top: (rect.bottom + 10) + 'px',
            transform: 'translateX(-50%)'
          };
        }
      }
    },
    
    handleScroll() {
      // При скролле всегда скрываем тултип на всех устройствах
      if (this.isTooltipVisible) {
        this.hideTooltip();
      }
    },
    
    handleResize() {
      if (this.isTooltipVisible) {
        this.hideTooltip();
      }
    },
    
    handleClickOutside(event) {
      // Закрываем тултип при клике вне его области
      if (this.isTooltipVisible && 
          !event.target.closest('.tooltip') && 
          !event.target.closest('.tooltip-icon')) {
        this.hideTooltip();
      }
    }
  },
  mounted() {
    // Закрытие модальных окон и меню по ESC
    this._onKeydown = (e) => {
      if (e.key === 'Escape') {
        if (this.isImageModalOpen) {
          this.closeImageModal();
        } else if (this.isModalOpen) {
          this.closeModal();
        } else if (this.isMobileMenuOpen) {
          this.closeMobileMenu();
        }
      }
    };
    document.addEventListener('keydown', this._onKeydown);
    // Определяем тач-устройство
    this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
      if (this.isMobileMenuOpen && 
          !e.target.closest('.mobile-menu__content') && 
          !e.target.closest('.burger-btn')) {
        this.closeMobileMenu();
      }
    });
    //Тултип
    // Определяем тач-устройство
    this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    // Добавляем обработчики для тултипов
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('click', this.handleClickOutside);
    
    // Генерируем уникальные ID для всех тултипов
    this.$nextTick(() => {
      const tooltipIcons = document.querySelectorAll('.tooltip-icon');
      tooltipIcons.forEach((icon, index) => {
        icon.setAttribute('data-tooltip-id', `tooltip-${index}`);
      });
    });
  },
   beforeUnmount() {
    // Убедимся, что скролл включен при размонтировании компонента
    this.enableBodyScroll();
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('click', this.handleClickOutside);
  }
};
Vue.createApp(App).mount("#app");
