Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// animation 
const animationItems = document.querySelectorAll('.animation-item');
if (animationItems.length > 0) {
    function onEntry(e) {
        e.forEach(e => {
            e.isIntersecting && e.target.classList.add("animation-active")
        }
        )
    }
    let options = {
        threshold: [.5]
    }, observer = new IntersectionObserver(onEntry, options)
    for (let e of animationItems)
        observer.observe(e);
}
// end animation

/* hide header */
let scrollWidthFunc = () => {
    let scrollWidth = window.innerWidth - document.body.clientWidth;
    document.querySelector('html').style.paddingRight = scrollWidth + 'px';
    document.querySelector('header').style.paddingRight = scrollWidth + 'px';
}
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop)
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });



['load', 'resize'].forEach((event) => {
    window.addEventListener(event, function () {

        const header = document.querySelector('header');
        if (!header)
            return;

        let headerHeight = header.clientHeight;
        const headerTop = header.querySelector('.header__top');
        if (headerTop) {
            var originalHeightHeaderTop = headerTop.offsetHeight;
            window.onscroll = function (e) {
                if (window.scrollY > headerHeight) {
                    if (window.innerWidth > 1260) {
                        headerTop.classList.add('hide');
                        headerTop.style.height = '0px';
                    }
                }
                else {
                    headerTop.style.height = originalHeightHeaderTop + 'px';
                    headerTop.classList.remove('hide');
                }
            };
        }
    })
})

/* hide header */


document.addEventListener("DOMContentLoaded", function () {
    /* burger menu */
    const burgerMenu = document.querySelector('.burger__menu');
    if (burgerMenu) {
        const headerMobile = document.querySelector('.header__menu');
        const header = document.querySelector('.header');
        const plashka = document.querySelector('.header__plashka');
        burgerMenu.addEventListener("click", () => {
            if (burgerMenu.classList.contains('burger__menu--active')) {
                if (plashka) {
                    plashka.style.display = 'block';
                }
                document.body.classList.remove('burger-lock');
            }
            else {
                if (plashka) {
                    plashka.style.display = 'none';
                }
                document.body.classList.add('burger-lock');
            }
            headerMobile.classList.toggle("header__menu--active");
            burgerMenu.classList.toggle("burger__menu--active");
            header.classList.toggle("header--active");

            document.querySelector('html').classList.toggle('burger-lock');
        });
    }
    /* end burger menu */

    // Popups
    function popupClose(popupActive) {
        popupActive.classList.remove('open');
        setTimeout(() => {
            if (!popupActive.classList.contains('open')) {
                popupActive.classList.remove('active');
            }
        }, 400);
        document.body.classList.remove('lock');
        document.querySelector('html').style.paddingRight = 0;
        document.querySelector('html').classList.remove('lock');
        document.querySelector('header').removeAttribute('style');


    }
    const popupOpenBtns = document.querySelectorAll('.popup-btn');
    const popups = document.querySelectorAll('.popup');
    const originalTitlePopup2 = document.querySelector('.original-title').innerHTML;
    const closePopupBtns = document.querySelectorAll('.close-popup-btn');
    closePopupBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
            popupClose(e.target.closest('.popup'));
        });
    });
    popupOpenBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const path = e.currentTarget.dataset.path;
            const currentPopup = document.querySelector(`[data-target="${path}"]`);
            if (currentPopup) {
                popups.forEach(function (popup) {
                    popupClose(popup);
                    popup.addEventListener('click', function (e) {
                        if (!e.target.closest('.popup__content')) {
                            popupClose(e.target.closest('.popup'));
                        }
                    });
                });
                currentPopup.classList.add('active');
                setTimeout(() => {
                    currentPopup.classList.add('open');
                }, 10);
                if (currentPopup.getAttribute('data-target') == 'popup-change') {

                    let originaTitle = currentPopup.querySelector('.original-title');
                    if (el.classList.contains('change-item__btn')) {

                        if (el.classList.contains('doctor__btn-js')) {
                            let currentItem = el.closest('.change-item');
                            let currentTitile = currentItem.querySelector('.change-item__title');
                            originaTitle.innerHTML = 'Записаться на приём к врачу: ' + currentTitile.innerHTML
                        }
                        else {
                            if (el.classList.contains('change-item__btn_current')) {
                                originaTitle.textContent = el.textContent;
                            }
                            else {
                                let currentItem = el.closest('.change-item');
                                let currentTitile = currentItem.querySelector('.change-item__title');
                                originaTitle.innerHTML = currentTitile.innerHTML
                            }
                        }
                    }
                    else {
                        originaTitle.innerHTML = originalTitlePopup2;
                    }
                }

                if (currentPopup.getAttribute('data-target') == 'popup-jobs') {
                    let currentItems = el.closest('.jobs__items')
                    let originalText = currentPopup.querySelector('.jobs__inner_original');
                    if (originalText && currentItems.querySelector('.jobs__inner')) {
                        originalText.innerHTML = currentItems.querySelector('.jobs__inner').innerHTML;
                    }
                }
                e.stopPropagation();
                scrollWidthFunc();
                document.querySelector('html').classList.add('lock');
            }
        });
    });
    // end popups



    /* yandex map */
    const mapPlaceholder = document.getElementById('map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('mouseenter', loadMap, { once: true });
        mapPlaceholder.addEventListener('click', loadMap, { once: true });
    }
    else {
        loadMap();
    }

    function loadMap() {
        if (!document.querySelector('[src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }

    function initMap() {
        const mapPlaceholder = document.getElementById('map-placeholder');
        if (mapPlaceholder) {
            mapPlaceholder.remove();
        }

        ymaps.ready(function () {
            const myMap = new ymaps.Map('map', {
                center: [47.231129, 39.728721],
                zoom: 13,
                controls: []
            });

            const myPlacemark = new ymaps.Placemark(
                [47.231129, 39.728721],
                {
                    hintContent: 'Ростов-на-Дону, ул. Красноармейская, д. 227',
                    balloonContent: 'Ростов-на-Дону, ул. Красноармейская, д. 227'
                },
                {
                    iconLayout: 'default#image',
                    //iconImageHref: 'assets/img/icons/map-pin.png',  //заменить на свою иконку
                    //iconImageSize: [21, 26],
                    //iconImageOffset: [-15, -31],
                }
            );

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable(['scrollZoom']);
        });
    }
    /* end yandex map */


    /*  search */
    const inputSearch = document.querySelectorAll('input[type=search]')
    if (inputSearch.length > 0) {
        inputSearch.forEach(elem => {
            const wrapper = elem.closest('.search-wrapper')
            if (wrapper) {
                const searchResultBlock = wrapper.querySelector('.popup__search-result')
                const popularCitiesBlock = wrapper.querySelector('.popup__search')
                const noResultsMessage = searchResultBlock.querySelector('.no-results-message')
                const noResultsMessageMob = searchResultBlock.querySelector('.no-results-message-mob')
                const resultsMessage = searchResultBlock.querySelector('.results-message')

                function search() {
                    let filter = elem.value.toUpperCase()
                    let ul = wrapper.querySelectorAll('.search-list')
                    let totalResults = 0

                    ul.forEach(item => {
                        let li = item.getElementsByTagName('li')
                        for (let i = 0; i < li.length; i++) {
                            let a = li[i].querySelector('.search-name')
                            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                                li[i].classList.remove('none')
                                totalResults++
                            } else {
                                li[i].classList.add('none')
                            }
                        }
                    })
                    if (noResultsMessage) {
                        noResultsMessage.classList.toggle('none', totalResults > 0);
                    }
                    if (noResultsMessageMob) {
                        noResultsMessageMob.classList.toggle('none', totalResults > 0);
                    }
                    if (resultsMessage) {
                        resultsMessage.classList.toggle('none', totalResults == 0);
                    }

                    if (elem.value.trim() === '') {
                        searchResultBlock.classList.add('none')
                        popularCitiesBlock.classList.remove('none')
                    } else {
                        searchResultBlock.classList.remove('none')
                        popularCitiesBlock.classList.add('none')
                    }
                }
                elem.addEventListener('input', search)

                document.addEventListener('click', (event) => {
                    if (!wrapper.contains(event.target)) {
                        searchResultBlock.classList.add('none')
                    }
                })
            }
        })
    }
    /*  end search  */

    /*  accordion  */
    const acc = document.getElementsByClassName('accordion')
    for (let i = 0; i < acc.length; i++) {
        if (acc[i]) {
            acc[i].addEventListener('click', function () {
                const accContent = this.querySelector('.accordion__content') || this.parentElement.querySelector('.accordion__content')
                if (accContent.classList.contains('accordion__content--active')) {
                    accContent.classList.remove('accordion__content--active');
                    this.classList.remove('accordion--active');
                    accContent.style.maxHeight = '0';
                } else {
                    accContent.classList.add('accordion__content--active');
                    this.classList.add('accordion--active');

                    const contentHeight = accContent.scrollHeight;
                    accContent.style.maxHeight = `${contentHeight}px`;
                }
            })
        }
    }
    /*  end accordion   */


    /*  tab  */
    const showTab = elTabBtn => {
        const elTab = elTabBtn.closest('.tab');
        if (!elTab) {
            return;
        }
        if (elTabBtn.classList.contains('active')) {
            return;
        }
        const targetId = elTabBtn.dataset.id;
        const elTabPanes = elTab.querySelectorAll(`.tab-content[data-id="${targetId}"]`);

        const elTabBtnActive = elTab.querySelector('.active');
        if (elTabBtnActive) {
            elTabBtnActive.classList.remove('active');
        }

        const elTabPaneShow = elTab.querySelectorAll('.active');
        elTabPaneShow.forEach(pane => pane.classList.remove('active'));

        elTabBtn.classList.add('active');
        elTabPanes.forEach(pane => pane.classList.add('active'));
    };

    const tabButtons = document.querySelectorAll('.tab-btn')
    tabButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function (e) {
                showTab(this);
            });
        }
    });
    /*  end tab */

    /* new tabs */
    const tabs = document.querySelectorAll('.tabs');
    for (let i = 0; i < tabs.length; i++) {
        const tabBtns = tabs[i].querySelectorAll('.tab-btn');
        const tabContents = tabs[i].querySelectorAll('.tab-content');
        for (let i = 0; i < tabBtns.length; i++) {
            tabBtns[i].style.order = 2 * i + 1;
        }
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.order = 2 * i + 2;
        }
        if (tabBtns.length > 0) {
            for (let i = 0; i < tabBtns.length; i++) {
                tabBtns[i].addEventListener('click', () => {
                    if (!tabBtns[i].classList.contains('active')) {
                        tabContents.forEach(elem => {
                            elem.classList.remove('active');
                        })
                        tabBtns.forEach(elem => {
                            elem.classList.remove('active');
                        })
                        tabBtns[i].classList.add('active');
                        tabContents[i].classList.add('active');
                    }
                    quantityElem();
                })
            }
        }
        if (tabBtns.length > 0) {
            tabBtns[0].click();
        }
    }
    /* end new tabs */


    /*   scrollTop  */
    const buttonsUp = document.querySelectorAll('.scroll-up')
    buttonsUp.forEach(buttonUp => {
        if (buttonUp) {
            buttonUp.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            })
        }
    });
    /*   end scrollTop  */

    /*   scrollTop-2  */

    const scrollToTopBtn = document.querySelector('.is-scroll-up');
    function toggleScrollButton() {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        if (scrollPosition > viewportHeight) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    window.addEventListener('scroll', toggleScrollButton);
    window.addEventListener('load', toggleScrollButton);

    /*   end scrollTop-2  */


    /*  btn more  */
    const moreBtns = document.querySelectorAll('.btn-more');
    moreBtns.forEach(moreBtn => {
        if (moreBtn) {
            const moreContent = moreBtn.previousElementSibling;

            if (moreContent.scrollHeight <= moreContent.clientHeight) {
                moreBtn.style.display = 'none';
            } else {
                const textBtn = moreBtn.innerHTML;
                moreBtn.addEventListener('click', function () {
                    const heightMoreContent = moreContent.style.maxHeight;
                    this.classList.toggle('active');

                    if (moreContent.style.maxHeight) {
                        moreContent.style.maxHeight = null;
                        this.textContent = textBtn;
                    } else {
                        moreContent.style.maxHeight = moreContent.scrollHeight + "px";
                        this.textContent = 'Свернуть';
                    }
                });
            }
        }
    });
    /*  end btn more  */

    /* jqure slider 768px */
    $(document).ready(function () {
        // Инициализируем слайдер только на мобильных
        function initSlider() {
            if ($(window).width() <= 768) {
                $('.main-sec__mobile-slider').slick({
                    infinite: true,
                    slidesToShow: 1,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1.1,
                                centerMode: false,
                                arrows: false
                            }
                        }
                    ]
                });
            }
        }

        // При загрузке страницы
        initSlider();

        // При изменении размера окна
        $(window).on('resize', function () {
            if ($(window).width() > 768 && $('.main-sec__mobile-slider').hasClass('slick-initialized')) {
                $('.main-sec__mobile-slider').slick('unslick');
            } else if ($(window).width() <= 768 && !$('.main-sec__mobile-slider').hasClass('slick-initialized')) {
                initSlider();
            }
        });
    });
    /* end jqure slider 768px */

    /*  btn more cards */
    document.addEventListener('DOMContentLoaded', function () {
        const btnMore = document.querySelector('.btn-more');
        if (!btnMore) return;

        const hiddenReviews = document.querySelectorAll('.hidden-review');
        let isExpanded = false;


        btnMore.addEventListener('click', function () {
            hiddenReviews.forEach(review => {

                review.style.display = isExpanded ? 'none' : 'block';
            });

            isExpanded = !isExpanded;
            this.textContent = isExpanded ? 'Свернуть' : 'Показать ещё отзывы';
        });
    });
    /*  end btn more cards */

    /* navigation */
    const articleNavigation = document.querySelector(".navigation");
    if (articleNavigation) {
        const jsScrollBlockList = document.querySelectorAll(
            ".text-block h1, .text-block h2, .text-block h3, .text-block h4, .text-block h5"
        );

        if (jsScrollBlockList.length > 0) {
            for (let i = 0; i < jsScrollBlockList.length; i += 1) {
                const jsScrollBlock = jsScrollBlockList[i];
                const titleBlock = jsScrollBlock.textContent;
                const articleNavigationList =
                    document.querySelector(".navigation__list");
                const articleNavigationItem = document.createElement("li");
                const articleNavigationLink = document.createElement("a");

                articleNavigationLink.classList.add("navigation__link");
                jsScrollBlock.setAttribute("id", `${i}`);
                articleNavigationLink.setAttribute("href", `$${i}`);
                articleNavigationLink.textContent = " " + titleBlock;
                articleNavigationItem.append(articleNavigationLink);
                articleNavigationList.append(articleNavigationItem);
            }
            document.querySelectorAll('a[href^="$"').forEach((link) => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    let href = this.getAttribute("href").substring(1);
                    const scrollTarget = document.getElementById(href);
                    const topOffset = 150;
                    const elementPosition = scrollTarget.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - topOffset;
                    window.scrollBy({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                });
            });
        } else {
            if (articleNavigation.querySelector(".navigation")) {
                articleNavigation.querySelector(".navigation").remove();
            }
        }
    }
    /* end navigation */


})

// Выпадающий список
document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.header__bottom-item');

    dropdownItems.forEach(item => {
        const link = item.querySelector('.header__bottom-link');
        const dropdown = item.querySelector('.header__bottom-list-dropdown');
        
        // Инициализация - устанавливаем начальную высоту
        dropdown.style.maxHeight = '0';
        dropdown.style.overflow = 'hidden';
        dropdown.style.transition = 'max-height 0.3s ease, opacity 0.2s ease';
        dropdown.style.opacity = '0';

        // Открытие/закрытие по клику
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Закрытие других открытых dropdown
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherDropdown = otherItem.querySelector('.header__bottom-list-dropdown');
                    otherDropdown.style.maxHeight = '0';
                    otherDropdown.style.opacity = '0';
                }
            });

            // Переключение текущего
            if (item.classList.contains('active')) {
                // Закрытие
                dropdown.style.maxHeight = '0';
                dropdown.style.opacity = '0';
                setTimeout(() => {
                    item.classList.remove('active');
                }, 200); // Ждем завершения анимации
            } else {
                // Открытие
                item.classList.add('active');
                dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                dropdown.style.opacity = '1';
            }
        });

        // Закрытие при клике вне меню
        document.addEventListener('click', (e) => {
            if (!item.contains(e.target)) {
                item.classList.remove('active');
                dropdown.style.maxHeight = '0';
                dropdown.style.opacity = '0';
            }
        });
    });
});

// конец выпадающего списка

document.addEventListener('DOMContentLoaded', function() {
  // Находим кнопку и добавляем обработчик
  const resultButton = document.querySelector('#result_div button');
  if (resultButton) {
    resultButton.addEventListener('click', function() {
      // Получаем выбранные значения
      const relSelect = document.getElementById('rel_select');
      const ageSelect = document.getElementById('age_select');
      const servSelect = document.getElementById('serv_select');
      const lengthSelect = document.getElementById('length_select');
      
      const relValue = relSelect.options[relSelect.selectedIndex].value;
      const ageValue = ageSelect.options[ageSelect.selectedIndex].value;
      const servValue = servSelect.options[servSelect.selectedIndex].value;
      const lengthValue = lengthSelect.options[lengthSelect.selectedIndex].value;
      
      // Получаем коэффициенты
      const coeffRel = relSelect.options[relSelect.selectedIndex].getAttribute('coefficient');
      const coeffAge = ageSelect.options[ageSelect.selectedIndex].getAttribute('coefficient');
      const coeffServ = servSelect.options[servSelect.selectedIndex].getAttribute('coefficient');
      const coeffLength = lengthSelect.options[lengthSelect.selectedIndex].getAttribute('coefficient');
      
      let calcCost = 0;
      let calcDisclaimer = "";
      
      // Проверяем, что все поля заполнены
      if (relValue != 0 && ageValue != 0 && servValue != 0 && lengthValue != 0) {
        if (servValue == 4) {
          calcCost = coeffRel * coeffServ * coeffAge;
          calcDisclaimer = "Цена указана за 1 месяц. Минимальный курс 3 месяца.";
        } else {
          calcCost = coeffRel * coeffAge * coeffServ * coeffLength;
          if (servValue == 2 && lengthValue > 3) {
            calcDisclaimer = "Рекомендуется пройти курс лечения. Цена указана за 1 сутки пребывания.";
          }
        }
        
        // Выводим результат
        document.getElementById('calc_result').innerHTML = `<span>${calcCost}</span><span>₽</span>`;
        document.getElementById('calc_dislaimer').textContent = calcDisclaimer;
      } else {
        document.getElementById('calc_result').innerHTML = '<h5>Заполните все поля</h5>';
        document.getElementById('calc_dislaimer').textContent = '';
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.calculator__select').forEach(select => {
  // Находим родительский элемент .calculator__item, затем ищем внутри него иконку
  const parentItem = select.closest('.calculator__item');
  const icon = parentItem?.querySelector('.calculator__icon');
  
  select.addEventListener('change', () => {
    if (icon) {
      icon.style.transform = select.value !== '0' ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  });
});
})


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.header__burger-menu').addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    console.log('Клик! Статус:', !isExpanded);
});
})


document.addEventListener('DOMContentLoaded', function() {
  // Инициализация кастомных селектов
  const customSelects = document.querySelectorAll('.calculator__custom-select');
   
  customSelects.forEach(select => {
    const header = select.querySelector('.calculator__select-header');
    const current = select.querySelector('.calculator__select-current');
    const options = select.querySelector('.calculator__select-options');
    const originalSelect = select.closest('.calculator__item').querySelector('.calculator__select');
    const icon = select.querySelector('.calculator__icon');
    
    // Клик по заголовку
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      select.classList.toggle('active');
    });
    
    // Выбор опции
    select.querySelectorAll('.calculator__option').forEach(option => {
      option.addEventListener('click', () => {
        current.textContent = option.textContent;
        originalSelect.value = option.dataset.value;
        
        // Обновляем коэффициент
        const originalOption = originalSelect.querySelector(`option[value="${option.dataset.value}"]`);
        if (originalOption) {
          originalOption.setAttribute('coefficient', option.dataset.coefficient);
        }
        
        select.classList.remove('active');
      });
    });
    
    // Инициализация текущего значения
    if (originalSelect.value) {
      const selectedOption = select.querySelector(`.calculator__option[data-value="${originalSelect.value}"]`);
      if (selectedOption) {
        current.textContent = selectedOption.textContent;
      }
    }
  });

  // Закрытие селектов при клике снаружи
  document.addEventListener('click', () => {
    customSelects.forEach(select => {
      select.classList.remove('active');
    });
  });

  // Расчет стоимости (ваш оригинальный код, адаптированный под новую структуру)
  document.getElementById('result_div').querySelector('button').addEventListener('click', function() {
    const relSelect = document.getElementById('rel_select');
    const ageSelect = document.querySelector('.calculator__item:nth-child(2) .calculator__select');
    const servSelect = document.querySelector('.calculator__item:nth-child(3) .calculator__select');
    const lengthSelect = document.querySelector('.calculator__item:nth-child(4) .calculator__select');
    
    const relValue = relSelect.value;
    const ageValue = ageSelect.value;
    const servValue = servSelect.value;
    const lengthValue = lengthSelect.value;
    
    const coeffRel = relSelect.options[relSelect.selectedIndex].getAttribute('coefficient');
    const coeffAge = ageSelect.options[ageSelect.selectedIndex].getAttribute('coefficient');
    const coeffServ = servSelect.options[servSelect.selectedIndex].getAttribute('coefficient');
    const coeffLength = lengthSelect.options[lengthSelect.selectedIndex].getAttribute('coefficient');
    
    let calcCost = 0;
    let calcDisclaimer = "";
    
    if (relValue != 0 && ageValue != 0 && servValue != 0 && lengthValue != 0) {
      if (servValue == 4) {
        calcCost = coeffRel * coeffServ * coeffAge;
        calcDisclaimer = "Цена указана за 1 месяц. Минимальный курс 3 месяца.";
      } else {
        calcCost = coeffRel * coeffAge * coeffServ * coeffLength;
        if (servValue == 2 && lengthValue > 3) {
          calcDisclaimer = "Рекомендуется пройти курс лечения. Цена указана за 1 сутки пребывания.";
        }
      }
      
      document.getElementById('calc_result').innerHTML = `<span>${calcCost}</span><span>₽</span>`;
      document.getElementById('calc_dislaimer').textContent = calcDisclaimer;
    } else {
      document.getElementById('calc_result').innerHTML = '<h5>Заполните все поля</h5>';
      document.getElementById('calc_dislaimer').textContent = '';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.burger-menu').addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    console.log('Клик! Статус:', !isExpanded);
});
})
