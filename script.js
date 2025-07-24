function createEl(title) {
    const el = document.createElement('div');
    el.classList.add(title);
    return el;
}

const userInfo = {
    data: {
        username: null,
    },

    load: function() {
        const loaded = JSON.parse(localStorage.getItem('dr_info'));
        this.data.username =  loaded?.username;
    },

    getName: function() {
        return this.data.username;
    },

    setName: function(name) {
        this.data.username = name;
        this.save();
    },

    save: function() {
        localStorage.setItem('dr_info', JSON.stringify(this.data));
    },

    clear: function() {
        localStorage.removeItem('dr_info');
    }
};

const xPosition = [0, 186, 179, 173, 170, 165, 162, 158, 155, 152, 149, 145, 142, 141, 138, 136, 133, 130, 128, 126, 124, 121, 120, 117, 116, 113, 112, 110, 108, 107, 104, 103, 101, 100, 97, 96, 94, 94, 92, 90, 89, 88, 86, 85, 84, 83, 82, 81, 81, 80, 80, 198, 189, 183, 179, 175, 172, 170, 166, 164, 161, 160, 157, 155, 152, 151, 149, 146, 145, 143, 142, 139, 138, 136, 135, 133, 132, 130, 129, 127, 126, 124, 123, 121, 121, 119, 117, 117, 115, 115, 113, 112, 111, 110, 109, 109, 108, 107, 107, 106, 106, 191, 187, 183, 181, 178, 176, 174, 172, 170, 168, 166, 164, 163, 161, 160, 158, 156, 155, 154, 153, 151, 150, 148, 147, 146, 145, 144, 142, 142, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 131, 130, 129, 128, 127, 127, 126, 126, 125, 125, 125, 193, 190, 186, 185, 182, 181, 179, 177, 176, 174, 173, 171, 170, 169, 168, 166, 165, 164, 163, 162, 161, 160, 158, 158, 156, 156, 155, 154, 153, 152, 151, 150, 150, 149, 148, 147, 147, 146, 145, 145, 144, 143, 143, 142, 141, 141, 141, 140, 140, 140, 194, 191, 189, 188, 186, 184, 183, 182, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 166, 165, 164, 163, 162, 162, 161, 160, 160, 159, 158, 158, 157, 157, 156, 155, 155, 154, 154, 153, 153, 152, 152, 152, 151, 151, 151, 195, 193, 191, 190, 189, 187, 186, 185, 184, 183, 182, 181, 181, 180, 179, 178, 177, 177, 176, 175, 174, 174, 173, 173, 172, 171, 171, 170, 170, 169, 169, 168, 167, 167, 166, 166, 165, 165, 164, 164, 164, 163, 163, 162, 162, 162, 161, 161, 161, 161, 196, 194, 193, 192, 191, 190, 189, 188, 187, 187, 186, 185, 185, 184, 183, 183, 182, 181, 181, 180, 180, 179, 178, 178, 177, 177, 177, 176, 176, 175, 175, 174, 174, 173, 173, 173, 172, 172, 172, 171, 171, 171, 170, 170, 170, 170, 169, 169, 169, 169, 197, 196, 194, 194, 193, 192, 191, 191, 190, 189, 189, 188, 188, 187, 187, 186, 186, 185, 185, 184, 184, 183, 183, 183, 182, 182, 181, 181, 181, 180, 180, 179, 179, 179, 178, 178, 178, 177, 177, 177, 177, 176, 176, 176, 176, 175, 175, 175, 175, 175, 197, 196, 195, 195, 194, 194, 193, 193, 192, 192, 191, 191, 190, 190, 190, 189, 189, 189, 188, 188, 187, 187, 187, 187, 186, 186, 186, 185, 185, 185, 185, 184, 184, 184, 184, 183, 183, 183, 183, 182, 182, 182, 182, 182, 181, 181, 181, 181, 181, 181, 198, 197, 197, 196, 196, 195, 195, 195, 194, 194, 193, 193, 193, 193, 192, 192, 192, 192, 191, 191, 191, 191, 190, 190, 190, 190, 189, 189, 189, 189, 189, 188, 188, 188, 188, 188, 188, 187, 187, 187, 187, 187, 187, 186, 186, 186, 186, 186, 186, 186, 199, 198, 198, 197, 197, 197, 196, 196, 196, 196, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 193, 193, 193, 193, 193, 193, 193, 192, 192, 192, 192, 192, 192, 191, 191, 191, 191, 191, 191, 191, 191, 191, 190, 190, 190, 190, 190, 190, 190, 190, 199, 198, 198, 198, 198, 198, 197, 197, 197, 197, 197, 196, 196, 196, 196, 196, 196, 196, 196, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 199, 199, 199, 199, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 196, 199, 199, 199, 199, 199, 199, 199, 199, 199, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198, 198];


const learningCurve = (() => {
    const hours = 60 * 60 * 1000;
    const days = 24 * hours;
    const phases = [
        [0, 6 * hours],
        [12 * hours, 12 * hours],
        [1 * days, 12 * hours],
        [1 * days, 12 * hours],
        [2 * days, 12 * hours],
        [3 * days, 12 * hours],
        [5 * days, 1 * days],
        [8 * days, 1 * days],
        [13 * days, 2 * days],
        [21 * days, 2 * days],
        [34 * days, 2 * days],
        [55 * days, 3 * days],
        [89 * days, 3 * days],
        [144 * days, 7 * days],
        [233 * days, 30 * days],
    ];

    const texts = [
        ['Первичное усвоение', 'Выполнение заданий для фиксации'],
        ['Закрепление', 'Проверка активного удержания'],
        ['Уточнение', 'Углубление понимания и устранение ошибок'],
        ['Структуризация', 'Способность применять знание, начинает строиться логика'],
        ['Связи', 'Способность соединять знание с другим контекстом, расширение нейронных связей'],
        ['Углубление', 'Повтор на грани забывания, усиление извлечения и укрепление памяти'],
        ['Оперирование', 'Применение знания из памяти, без опоры на материалы'],
        ['Автоматизация I', 'Выполнение задания быстрее, проверка интуитивного извлечения'],
        ['Автоматизация II', 'Работа почти без осознанного усилия'],
        ['Консолидация', 'Использование знания в практических задачах'],
        ['Перенос', 'Применение знания в новых/смешанных контекстах'],
        ['Интеграция', 'Знание стало частью системы мышления'],
        ['Лёгкий вызов', 'Мгновенное извлечение с уверенным результатом'],
        ['Рефлексия', 'Возможность объяснить, применить и обобщить знание'],
        ['Устойчивость', 'Знание стало неотъемлемой частью основного набора навыков'],
        ['Архив', 'Минимальная поддержка для пожизненного хранения'],
    ]

    return {
        phases,
        texts,
        getDates: phIndex => {
            const now = new Date();
            const [start, expiry]  = phases[phIndex];
            // console.log([new Date(now.getTime() + start), new Date(now.getTime() + start + expiry)]);
            return [new Date(now.getTime() + start), new Date(now.getTime() + start + expiry)];
        },
    }
})();

const lessons = {
    studyingLessons: [],
    dates: [],
    percentage: [],

    readyIndexes: [],

    checkLesson: function(lesson) {
        const foundLesson = this.studyingLessons.find(les => les.texts[0] == lesson.texts[0]);
        if (foundLesson) {
            const output = {
                dates: null,
                phase: null,
            }
            const lessonIndex = this.studyingLessons.indexOf(foundLesson);
            output.phase = this.percentage[lessonIndex][this.percentage[lessonIndex].length - 1].phase;
            
            if (!this.readyIndexes.includes(lessonIndex)) {
                const dates = [];
                dates.push(new Date(new Date(this.dates[lessonIndex][0]) - learningCurve.phases[output.phase][0]));
                dates.push(new Date(this.dates[lessonIndex][0]));
                output.dates = dates;
            }

            return output;
        } else {
            return null;
        }
    },

    load: function() {
        this.studyingLessons = JSON.parse(localStorage.getItem('dr_lessons')) ? JSON.parse(localStorage.getItem('dr_lessons')) : [];
        this.dates = JSON.parse(localStorage.getItem('dr_dates')) ? JSON.parse(localStorage.getItem('dr_dates')) : [];
        this.percentage = JSON.parse(localStorage.getItem('dr_percentage')) ? JSON.parse(localStorage.getItem('dr_percentage')) : [];
    },
    save: function() {
        localStorage.setItem('dr_lessons', JSON.stringify(this.studyingLessons));
        localStorage.setItem('dr_dates', JSON.stringify(this.dates));
        localStorage.setItem('dr_percentage', JSON.stringify(this.percentage));
    },
    updateReadyList: function() {
        const now = new Date();
        // console.log(now);
        // debugger;
        if (this.dates) {
            this.dates.forEach((dateStamp, index) => {
                // console.log(`now: ${now}, start: ${new Date(dateStamp[0])}, expiry: ${new Date(dateStamp[1])}`);
                if (now > new Date(dateStamp[0]) && now < new Date(dateStamp[1])) {
                    if (!this.readyIndexes.includes(index)) {
                        this.readyIndexes.push(index);
                    }
                } else if (now >= new Date(dateStamp[1])) {
                    this.removeLesson(this.studyingLessons[index]);
                }
            })
            this.save();
        }
    },
    addLesson: function(lesson) {
        this.studyingLessons.push(lesson);
        this.dates.push(learningCurve.getDates(0));
        const percObj = [];
        // const fundPart = lesson.texts[0] < 414 ? 0 : 1; // 414 - id of 1t verse @ 2nd pt
        lesson.texts.forEach(id => {
            percObj.push({
                book: 0,
                chapter: 0,
                verse: 0,
                text: 0,
                expl: 0,
            })
        });
        percObj.push({phase: 0});
        this.percentage.push(percObj);
        this.save();
    },
    removeLesson: function(lesson) {
        const lessonWithinObj = this.studyingLessons.find(el => el.texts[0] == lesson.texts[0]);
        const index = this.studyingLessons.indexOf(lessonWithinObj);
        this.studyingLessons.splice(index, 1);
        this.dates.splice(index, 1);
        this.percentage.splice(index, 1);
        this.save();
    },
    lessonExist: function(lesson) {
        const foundLesson = this.studyingLessons.find(sl => sl.texts[0] == lesson.texts[0]);
        if (foundLesson) {
            return true;
        } else {
            return false;
        }            
    },
    getPercentage: function(lesson) {
        const foundLesson = this.studyingLessons.find(sl => sl.texts[0] == lesson.texts[0]);
        if (!foundLesson) {
            return 0;
        }
        const index = this.studyingLessons.indexOf(foundLesson);
        const percentageObj = this.percentage[index];
        let current = percentageObj[percentageObj.length - 1].phase;
        percentageObj.forEach((verseObj, i) => {
            if (i != percentageObj.length - 1) {
                current += (verseObj.book + verseObj.chapter + verseObj.verse + verseObj.text + verseObj.expl) / 10;
            }
        })
        return current / 15;
    },
    clear: function() {
        localStorage.removeItem('dr_lessons');
        localStorage.removeItem('dr_dates');
        localStorage.removeItem('dr_percentage');
    },
    ifReadyExist: function(iconInfo) {
        if (this.readyIndexes.length > 0) {
            let count = 0;
            switch (iconInfo.title) {
                case 'Книга':
                    this.readyIndexes.forEach(index => {
                        this.percentage[index].forEach((verse, i) => {
                            if (i < this.studyingLessons[index].texts.length) {
                                count += verse.book;
                            }
                        })
                    })
                break;
                case 'Глава':
                    this.readyIndexes.forEach(index => {
                        this.percentage[index].forEach((verse, i) => {
                            if (i < this.studyingLessons[index].texts.length) {
                                count += verse.chapter;
                            }
                        })
                    })
                break;
                case 'Стих':
                    this.readyIndexes.forEach(index => {
                        this.percentage[index].forEach((verse, i) => {
                            if (i < this.studyingLessons[index].texts.length) {
                                count += verse.verse;
                            }
                        })
                    })
                break;
                case 'Текст':
                    this.readyIndexes.forEach(index => {
                        this.percentage[index].forEach((verse, i) => {
                            if (i < this.studyingLessons[index].texts.length) {
                                count += verse.text;
                            }
                        })
                    })
                break;
                case 'Значение':
                    this.readyIndexes.forEach(index => {
                        this.percentage[index].forEach((verse, i) => {
                            if (i < this.studyingLessons[index].texts.length) {
                                count += verse.expl;
                            }
                        })
                    })
                break;
            }

            let versesCount = 0;
            this.readyIndexes.forEach(index => {
                versesCount += this.studyingLessons[index].texts.length;
            });

            if (count == versesCount * 2) {
                return false;
            } else {
                return true;
            }
            
        } else {
            return false;
        }
    }
}

lessons.load();

userInfo.load();

const animationStatus = {
    animationDone: true,
    queuedFunc: null,
    currentlyFiredEl: [],
    eraseAppFlag: false,
    // elsAndAnimationsInProgress: [],

    addElToFired: function(el) {
        // console.log(this.currentlyFiredEl);
        this.currentlyFiredEl.push(el);
        if (this.animationDone) {
            this.animationDone = false;
        }
    },

    removeElFromFired: function(el) {
        // console.log(this.currentlyFiredEl);
        const index = this.currentlyFiredEl.indexOf(el);
        this.currentlyFiredEl.splice(index, 1);
        if (this.currentlyFiredEl.length == 0) {
            this.animationDone = true;
            if (this.queuedFunc) {
                this.queuedFunc();
                this.queuedFunc = null;
            }
        }
    },

    addQueuedEventListener: function(container, func) {
        const self = this;
        container.addEventListener('click', () => {
            if (self.queuedFunc) {
                return;
            }
            if (self.animationDone) {
                func();
            } else {
                self.queuedFunc = func;
            }
        }, {once: true}); //
    },
};

const transitionStatus = {
    transition: false,
    queuedAction: null,
    initializedElements: new WeakSet(),

    addQueuedEventListener: function(button, container, func) {
        if (this.queuedAction) {
            this.queuedAction = null;
        }
        const self = this;

        if (!this.initializedElements.has(container)) {
            container.addEventListener('transitionstart', (e) => {
                self.transition = true;
                // console.log(`Trastion of ${container.classList} element has started`)
            }, {once: true});
    
            container.addEventListener('transitionend', (e) => {
                self.transition = false;
                // console.log(`Trastion of ${container.classList} element has finished`)
                if (self.queuedAction) {
                    // console.log(`Function of ${container.classList} element has finished`)
                    self.queuedAction();
                    self.queuedAction = null;
                }
            }, {once: true});

            this.initializedElements.add(container);
        }
        button.addEventListener('click', (e) => {
            if (self.transition == false) {
                func();
            } else {
                self.queuedAction = func;
            }
        })
    }
}

function greetingPage() {
    const mainEl = document.getElementById('main');
    mainEl.style.display = 'flex';
    mainEl.style.justifyContent = 'center';
    mainEl.style.paddingTop = '30vh';

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');
    form.style.fontFamily = '"Roboto", sans-serif';

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'name');
    input.setAttribute('placeholder', 'Моё имя');
    input.setAttribute('required', 'true');
    input.setAttribute('autocomplete', 'off');
    form.append(input);

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Представиться';
    button.classList.add('animate__animated', 'animate__flipInX');
    button.style.setProperty('--animate-duration', '1s');
    button.addEventListener('click', function(event) {
        event.preventDefault();

        const name = input.value.trim().replace(/\s+/g, ' ');
        if (name) {
            userInfo.setName(name);
            input.style.setProperty('--animate-duration', '1s');
            input.addEventListener('animationend', () => {
                input.remove();
            });
            input.classList.add('animate__animated', 'animate__fadeOutLeft');
            button.style.setProperty('--animate-duration', '1s');
            button.addEventListener('animationend', () => {
                button.remove();
            });
            button.classList.add('animate__animated', 'animate__fadeOutRight');
            logoCont.style.setProperty('--animate-duration', '1s');
            logoCont.classList.add('animate__animated', 'animate__fadeOutDown');
            setTimeout(() => {
                mainEl.setAttribute('style', '');
                mainEl.innerHTML = '';
                loadApp();
            }, 1000)
        } else {
            button.classList.add('animate__animated', 'animate__pulse');
            input.classList.add('animate__animated', 'animate__headShake');
            input.addEventListener('animationend', () => {
                input.classList.remove('animate__animated', 'animate__headShake');
            })
        }
    })
    form.append(button);
    button.addEventListener('animationend', () => {
        button.classList.remove('animate__animated', 'animate__flipInX', 'animate__pulse');
    });

    mainEl.append(form);

    const logoCont = createEl('logo-container');
    const img = document.createElement('img');
    img.setAttribute('src', 'https://cdn.glitch.global/c69c58fa-c944-4991-9024-718a4c5de33a/thumbnails%2Flogo.png')
    img.style.width = '60vw';
    logoCont.append(img);
    logoCont.classList.add('animate__animated', 'animate__rotateIn', 'animate__delay-0.5s');
    logoCont.style.setProperty('--animate-duration', '2s');
    logoCont.addEventListener('animationend', () => {
        if (logoCont.classList.contains('animate__fadeOutDown')) {
            logoCont.remove();
        } else {
            logoCont.classList.remove('animate__animated', 'animate__rotateIn', 'animate__delay-0.5s')
        }
    })

    document.getElementsByTagName('body')[0].append(logoCont);
  
}

function loadApp() {
    if (userInfo.getName()) {
        const mainEl = document.getElementById('main');

        const greetingEl = createEl('greeting');
        const hiEl = document.createElement('div');
        hiEl.innerHTML = 'ПРИВЕТ,'
        hiEl.style.setProperty('--animate-duration', '1s');
        animateCSS(hiEl, 'fadeIn');
        greetingEl.append(hiEl);
        const nameEl = document.createElement('div');
        animateCSS(nameEl, 'zoomIn');
        nameEl.addEventListener('click', () => {
            animateCSS(nameEl, 'bounceIn');
        })

        nameEl.innerHTML = userInfo.getName();
        greetingEl.append(nameEl);
        mainEl.append(greetingEl);
    
        const scoreEl = createEl('score');
        animateCSS(scoreEl, 'fadeIn');

        mainEl.append(scoreEl);
    
        const calenderEl = createEl('calender');
        animateCSS(calenderEl, 'bounceInLeft');

        const addCalender = function(containter) {
            const dateNow = new Date(Date.now());
            const dayOfWeek = dateNow.getDay();
            const date = dateNow.getDate();
            const qtyOfDaysPrev = new Date(dateNow.getFullYear(), dateNow.getMonth(), 0).getDate();
            const qtyOfDaysCur = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0).getDate();
        
            let i = 0;
            let text = 0;
            let monthType = '';
        
            if (date > dayOfWeek) {
                text = date - dayOfWeek - 1;
                monthType = 'Cur';
            } else {
                text = date - dayOfWeek + qtyOfDaysPrev - 1;
                monthType = 'Prev';
            }
        
            while (i < 28) {
                const dayInCalenter = createEl('day-in-calender');
                if (monthType == 'Prev' && +text + 1 > qtyOfDaysPrev) {
                    text = 1;
                    monthType = 'Cur';
                } else if (monthType == 'Cur' && +text + 1 > qtyOfDaysCur) {
                    text = 1;
                    monthType = 'Next';
                } else {
                    text += 1;
                }
                dayInCalenter.innerHTML = text;
                if (date == text) {
                    dayInCalenter.style.setProperty('background-color', 'var(--forth-color)');
                }
        
                containter.append(dayInCalenter)
                i++;
            }
        };
    
        addCalender(calenderEl);
        mainEl.append(calenderEl);

        const menuNavbar = document.createElement('nav');
        menuNavbar.classList.add('menu');
        animateCSS(menuNavbar, 'fadeIn')
        
        const iconsInfo = [
            {
                title: 'Викторины',
                viewBox: '0 0 448 512',
                d: 'M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z',
            },
            {
                title: 'Основы Истины',
                viewBox: '0 0 512 512',
                d: 'M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
            },
            {
                title: 'Цари',
                viewBox: '0 0 576 512',
                d: 'M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z',
            },
            {
                title: 'Ключевые тексты',
                viewBox: '0 0 512 512',
                d: 'M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z',
            },
            {
                title: 'Игры',
                viewBox: '0 0 640 512',
                d: 'M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z',
            },
        ];
    
        iconsInfo.forEach((obj, index) => {
            const menuItem = createEl('menu-item');
            if (index % 2 == 0) {
                menuItem.style.opacity = '0.8';
            }

            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.classList.add('icon');
            svg.setAttribute('viewBox', obj.viewBox);
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute('d', obj.d);
            svg.append(path);
    
            menuItem.append(svg);
            const title = document.createTextNode(obj.title);
            menuItem.append(title);
    
            menuNavbar.append(menuItem);
        })
    
        mainEl.append(menuNavbar);

        const buttonFund = document.getElementsByClassName('menu-item')[1];

        const unload = async function() {
            await Promise.all([
                animateCSS(greetingEl, 'fadeOut'),
                animateCSS(scoreEl, 'fadeOut'),
                animateCSS(calenderEl, 'bounceOutLeft'),
                animateCSS(menuNavbar, 'fadeOut'),
                animateCSS(buttonFund, 'bounceOut')
            ])

            mainEl.innerHTML = '';
            loadFundamentals();

            // eraseApp(loadFundamentals);
        };

        // const menuItemFunc = () => {
        //     animateCSS(buttonFund, 'bounceOut').then(() => {unload()});//.then(() => {e.target.style.opacity = 0}
            
        // };

        animationStatus.addQueuedEventListener(buttonFund, unload);
    } else {
        greetingPage();
    }
}

// function eraseApp(afterFunc) {
//     if (animationStatus.animationDone)
//     document.getElementById('main').innerHTML = '';
//     if (afterFunc) {
//         afterFunc();
//     }
// }

function loadFundamentals() {
    lessons.updateReadyList();
    const mainEl = document.getElementById('main');

    const titleCont = createEl('fund-title-cont');
    titleCont.innerHTML = 'Основы Истины';
    animateCSS(titleCont, 'flipInX');
    mainEl.append(titleCont);

    const navBar = document.createElement('nav');
    navBar.classList.add('fund-navbar');
    mainEl.append(navBar);

    const iconsInfo = [
        {
            title: 'Уроки',
            viewBox: '0 0 576 512',
            d: 'M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z',
        },
        {
            title: 'Карточки',
            viewBox: '0 0 576 512',
            d: 'M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z',
        },
        {
            title: 'Подбор',
            viewBox: '0 0 512 512',
            d: 'M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z',
        },
        {
            title: 'Книга',
            viewBox: '0 0 448 512',
            d: 'M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
        },
        {
            title: 'Глава',
            viewBox: '0 0 256 512',
            d: 'M64.9 96C67.1 84.4 73.7 76.2 86 70.6c13.8-6.2 34.8-8.9 61.2-4.5c8.8 1.4 36.1 7.1 44.1 9.3c17 4.8 34.7-5.1 39.5-22.2s-5.1-34.7-22.2-39.5c-11.1-3.1-41-9.2-50.9-10.8C123-2.7 88.3-.6 59.7 12.3C29.9 25.8 7.5 50.9 1.6 86.5c-.1 .5-.2 1.1-.2 1.6c-2.2 19.7 .3 37.9 8.1 54.1c7.7 16.1 19.4 28 32 36.9c.6 .5 1.3 .9 2 1.4C22.3 194.2 6.5 215.1 1.7 243c-.1 .6-.2 1.1-.2 1.7c-2.3 19.3 .4 37.1 8.4 53c7.9 15.6 19.8 27 32.3 35.5c22.4 15.2 51.9 24 75.4 31c0 0 0 0 0 0l3.7 1.1c27.2 8.2 46.9 14.6 59.4 23.8c5.5 4 8.2 7.6 9.5 10.9c1.3 3.2 2.6 8.6 .9 18.1c-1.7 10.1-7.7 18-20.7 23.5c-14 6-35.4 8.5-62 4.4c-12.8-2.1-35.1-9.7-54.1-16.2c0 0 0 0 0 0c-4.3-1.5-8.5-2.9-12.3-4.2C25.3 420 7.2 429.1 1.6 445.8s3.5 34.9 20.3 40.5c2.6 .8 5.7 1.9 9.2 3.1c18.6 6.3 48.5 16.6 67.3 19.6c0 0 0 0 0 0l.2 0c34.5 5.4 68.8 3.4 97.2-8.7c29.4-12.6 52.5-36.5 58.5-71.5c3.3-19.3 1.9-37.4-5-53.9c-6.3-15-16.4-26.4-27.6-35.2c16.5-13.9 28.5-33.2 32.6-58.2c3.2-19.8 1.9-38.3-4.8-55.1c-6.7-16.8-17.8-29.4-30.2-39c-22.8-17.6-53.6-27.4-77.7-35l-1.4-.5c-27.4-8.7-47.8-15.3-61.5-25c-6.1-4.4-9.5-8.5-11.4-12.4c-1.8-3.7-3.2-9.3-2.3-18.5zm76.7 208.5l-.6-.2-1.4-.4c-27.4-8.2-47.9-14.5-61.7-23.8c-6.2-4.2-9.3-7.9-11-11.3c-1.5-3-2.9-7.7-2.1-15.7c1.9-9.7 7.9-17.3 20.5-22.7c14-6 35.4-8.5 62.1-4.3l16.4 2.6c6.3 2.9 11.7 6 16.2 9.5c5.5 4.2 8.4 8.2 10 12.2c1.6 4 2.8 10.4 1.1 20.9c-2.4 14.7-12.8 26.4-37.1 31l-12.4 2.3z',
        },
        {
            title: 'Стих',
            viewBox: '0 0 448 512',
            d: 'M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64zM192 192c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 96l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zM0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32zM127.8 268.6L25.8 347.9C15.3 356.1 0 348.6 0 335.3L0 176.7c0-13.3 15.3-20.8 25.8-12.6l101.9 79.3c8.2 6.4 8.2 18.9 0 25.3z',
        },
        {
            title: 'Текст',
            viewBox: '0 0 448 512',
            d: 'M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z',
        },
        {
            title: 'Значение',
            viewBox: '0 0 512 512',
            d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z',
        },
    ];

    let opacity = 1.0;
    iconsInfo.forEach((obj, index) => {
        const button = createEl('fund-menu-item');
        const logoCont = createEl('fund-logo-cont');
        logoCont.style.opacity = opacity;
        opacity -= 0.1;

        const svg = generateSVG(obj.viewBox, obj.d, 'fund-icon');

        logoCont.append(svg);
        button.append(logoCont);
        const titleCont = createEl('title-cont');
        titleCont.innerHTML = obj.title;

        button.append(titleCont);

        if (obj.title == 'Книга' ||
            obj.title == 'Глава' ||
            obj.title == 'Стих' ||
            obj.title == 'Текст' ||
            obj.title == 'Значение') {
                if (lessons.ifReadyExist(obj)) {
                    const alarm = createEl('alarm');
                    const svgBookmark = generateSVG('0 0 384 512', 'M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z', 'bookmark');
                    // const svgBookmark = generateSVG('0 0 384 512', 'M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z', 'bookmark');
                    
                    alarm.append(svgBookmark);
                    button.append(alarm);
                }
        }
        

        const buttonFunction = function() {
            const otherButtons = [...document.getElementsByClassName('fund-menu-item')];
            otherButtons.splice(index, 1);
            (async () => {
                await Promise.all([
                    animateCSS(document.querySelector('.back-button'), 'fadeOut'),
                    animateCSS(document.querySelector('.fund-title-cont'), 'fadeOut'),
                    animateCSS(button, 'flipOutX').then(() => button.style.opacity = 0),
                    otherButtons.forEach(otherButton => {
                        animateCSS(otherButton, 'fadeOut');
                    })
                ])
                mainEl.innerHTML = '';

                const container = createEl('fund-category-cont');
                mainEl.append(container);

                const renderLessonsSelector = function(contArg) {
                    let mainCont = contArg ? contArg : container;

                    const lessonsSelectorCont = createEl('lessons-selector-cont');
                    animateCSS(lessonsSelectorCont, 'fadeIn');
                    mainCont.append(lessonsSelectorCont);
                    const studyingContainer = createEl('studying-cont');
                    studyingContainer.innerHTML = 'Изучаются';
                    lessonsSelectorCont.append(studyingContainer);
                    const studyingList = createEl('studying-list-cont');
                    let iterator = lessons.studyingLessons.length - 1;
                    while (iterator >= 0) {
                        const fundNum = lessons.studyingLessons[iterator].texts[0] < 414 ? 0 : 1; // 414 - id of 1t verse @ 2nd pt
                        const curLesson = lessons.studyingLessons[iterator];
                        const lesson = createEl('lesson');
                        const lessonTitle = createEl('lesson-title-select');
                        lessonTitle.innerHTML = getLessonTitle(curLesson, fundNum);
                        lesson.append(lessonTitle);
                        const checkboxCont = createEl('checkbox-cont');
                        lesson.append(checkboxCont)
                        // lesson.innerHTML = getLessonTitle(curLesson, fundNum);
                        studyingList.append(lesson);
                        if (lessons.readyIndexes.includes(iterator)) {
                            const checkbox = generateSVG('0 0 448 512', 'M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z', 'checkbox');
                            lesson.setAttribute('data-checked', true);
                            checkboxCont.append(checkbox);
                            const countdown = createEl('countdown');
                            countdown.setAttribute('readyIndex', iterator);
                            countdown.setAttribute('data-target', lessons.dates[iterator][1]);
                            lesson.append(countdown);
                        } else {
                            const checkbox = generateSVG('0 0 448 512', 'M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z', 'checkbox');
                            lesson.setAttribute('data-checked', false);
                            checkboxCont.append(checkbox);
                        }
                        iterator--;

                        
                        const lessonTitleFunc = async function() {
                            await Promise.all([
                                animateCSS(lessonTitle, 'bounceOut'),
                                animateCSS(lessonsSelectorCont, 'fadeOut'),
                                animateCSS(document.querySelector('.back-button'), 'fadeOut')        
                            ])

                            mainEl.innerHTML = '';
                            renderCurve(curLesson, fundNum, renderLessonsSelector)
                            // animateCSS(lessonTitle, 'bounceOut').then(() => {
                            //     renderCurve(curLesson, fundNum, renderLessonsSelector);
                            // });
                            // animateCSS(lessonsSelectorCont, 'fadeOut');
                            // animateCSS(document.querySelector('.back-button'), 'fadeOut');
                        }; 

                        animationStatus.addQueuedEventListener(lessonTitle, lessonTitleFunc)
                    }

                    lessonsSelectorCont.append(studyingList);
                    const recentCont = createEl('recent-cont');
                    recentCont.innerHTML = 'Последние';
                    lessonsSelectorCont.append(recentCont);
                    const recentList = createEl('recent-list-cont');
                    lessonsSelectorCont.append(recentList);
                    const selectCont = createEl('select-cont');
                    selectCont.innerHTML = 'Выбрать другие';
                    lessonsSelectorCont.append(selectCont);

                    [...document.querySelectorAll('.checkbox')].forEach(el => {
                        el.addEventListener('click', (e) => {
                            // console.log(e.target);
                            const parent = el.closest('.lesson');
                            const status = parent.dataset.checked;
                            // console.log(status);
                            if (status == 'true') {
                                el.firstElementChild.setAttribute('d', 'M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z');
                                parent.setAttribute('data-checked', 'false');
                            } else {
                                el.firstElementChild.setAttribute('d', 'M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z');
                                parent.setAttribute('data-checked', 'true');
                            }
                        })
                    })

                    const countdownElements = document.querySelectorAll('.countdown');
                    if (countdownElements) {
                        // debugger;
                        const timers = [...countdownElements].map(el => ({
                            element: el,
                            target: new Date(el.dataset.target).getTime(),
                        }));

                        function formatTime(ms) {
                            if (ms <= 0) return '00:00:00';
                            
                            const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
                            const seconds = Math.floor((ms % (1000 * 60)) / 1000);
                        
                            return [
                                String(hours).padStart(2, '0'),
                                String(minutes).padStart(2, '0'),
                                String(seconds).padStart(2, '0')
                            ].join(':');
                        }
                        
                        function updateAllCountdowns() {
                            const now = Date.now();
                            timers.forEach(timer => {
                                const remaining = timer.target - now;
                                timer.element.innerHTML = formatTime(remaining);
                            });
                        }
                        
                        setInterval(updateAllCountdowns, 1000);
                        updateAllCountdowns();
                    }

                }

                if (index == 0) {
                    const renderStudy = function(container) {
                        // const container = document.querySelector('.fund-category-cont');
                        const studyCont = createEl('study-cont');
                        container.append(studyCont);
                        ['Часть I', 'Часть II'].forEach((number, i) => {
                            const sectionCont = createEl(`section-cont`);
                            const viewBox = '0 0 512 512'
                            const d = 'M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8L32 192c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9l0-.9 4.4-1.6L240.1 4.2zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z';
                            const svg = generateSVG(viewBox, d, 'section-svg');
                            const svgCont = createEl('svg-cont');
                            svgCont.append(svg);
                            sectionCont.append(svgCont);

                            const title = createEl('section-title-cont');
                            title.innerHTML = number;
                            sectionCont.append(title);

                            const progressCont = createEl('section-progress-cont');
                            sectionCont.append(progressCont);

                            if (i % 2 == 0) {
                                sectionCont.style.backgroundColor = 'var(--first-color)';
                                svg.style.fill = 'var(--third-color)';
                                title.style.color = 'var(--third-color)';
                                progressCont.style.backgroundColor = 'var(--third-color)';
                                animateCSS(sectionCont, 'backInLeft');
                            } else {
                                sectionCont.style.backgroundColor = 'var(--third-color)';
                                svg.style.fill = 'var(--first-color)';
                                title.style.color = 'var(--first-color)';
                                progressCont.style.backgroundColor = 'var(--first-color)';
                                animateCSS(sectionCont, 'backInRight');
                            }

                            const sectionContFunc = function() {
                                const otherButtonIndex = [...document.querySelectorAll('.section-cont')].indexOf(sectionCont) == 1 ? 0 : 1;
                                const otherButton = document.querySelectorAll('.section-cont')[otherButtonIndex];

                                (async () => {
                                    await Promise.all([
                                        animateCSS(document.querySelector('.back-button'), 'fadeOut'),
                                        animateCSS(otherButton, 'fadeOut'),
                                        animateCSS(sectionCont, 'backOutRight').then(() => sectionCont.style.opacity = 0)
                                    ])
    
                                    mainEl.innerHTML = '';

                                    renderFundList(i);
                                })();
                            }

                            animationStatus.addQueuedEventListener(sectionCont, sectionContFunc);

                            studyCont.append(sectionCont);
                        })

                        const renderFundList = function (fundNum) {
                            const sectionListCont = createEl('section-list-cont');
                            mainEl.append(sectionListCont);
                            const fundLessons = [fund1Lessons, fund2Lessons];
                            fundLessons[fundNum].forEach((lesson, index) => {
                                const lessonTitleCont = createEl('lesson-title-cont');
                                lessonTitleCont.innerHTML = getLessonTitle(lesson, fundNum);
                                const lessonProgress = createEl('lesson-progress');
                                // const percent = Math.floor(Math.random() * 101);
                                const percent = Math.round(lessons.getPercentage(lesson) * 100);
                                lessonProgress.style.background = `linear-gradient(to right, var(--forth-color) ${percent}%, var(--second-color) ${percent}%)`;
                                lessonTitleCont.append(lessonProgress);
                                const percentCont =createEl('percent-cont');
                                percentCont.innerHTML = `${percent}%`;
                                lessonTitleCont.append(percentCont);
                                index % 2 == 0 ? animateCSS(lessonTitleCont, 'backInLeft') : animateCSS(lessonTitleCont, 'backInRight');
                                sectionListCont.append(lessonTitleCont);

                                const lessonTitleContFunc = function() {
                                    const allLessons = [...document.querySelectorAll('.lesson-title-cont')];
                                    allLessons.splice(index, 1);
                                    (async () => {
                                        await Promise.all([
                                            animateCSS(document.querySelector('.back-button'), 'fadeOut'),
                                            allLessons.forEach(lesson => animateCSS(lesson, 'fadeOut')),
                                            animateCSS(lessonTitleCont, 'backOutRight').then(() => lessonTitleCont.style.opacity = 0)
                                        ])
                                    
                                        mainEl.innerHTML = '';
                                    
                                        const renderLesson = function (lesson) {
                                            lessons.updateReadyList();
                                            const lessonCont = createEl('lesson-cont');
                                            const lessonTitle = createEl('lesson-title');
                                            lessonTitle.innerHTML = getLessonTitle(lesson, fundNum);
                                            lessonCont.append(lessonTitle);
                                            const fundTexts = [fund1Texts, fund2Texts];
                                            const textsChapter = fundTexts[fundNum][lesson.chapter];
                                            const lessonTextsCont = createEl('lesson-texts-cont');
                                            lessonCont.append(lessonTextsCont);
                                            lesson.texts.forEach(id => {
                                                const obj = textsChapter.find(obj => obj.id == id);
                                                const explCont = createEl('expl-cont');
                                                explCont.innerHTML = obj.reason[0];
                                                lessonTextsCont.append(explCont);
                                    
                                                const addressCont = createEl('address-cont');
                                                addressCont.innerHTML = `${obj.book}.${obj.chapter}:${obj.verse}:`;
                                                lessonTextsCont.append(addressCont);
                                    
                                                const textCont = createEl('text-cont');
                                                textCont.innerHTML = obj.text;
                                                lessonTextsCont.append(textCont);
                                                const quoteOpening = createEl('quote-opening')
                                                const svgOpening = generateSVG('0 0 448 512', 'M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z', 'quote');
                                                quoteOpening.append(svgOpening);
                                                textCont.append(quoteOpening);
                                                const quoteClosing = createEl('quote-closing');
                                                const svgClosing = generateSVG('0 0 448 512', 'M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z', 'quote');
                                                quoteClosing.append(svgClosing);
                                                textCont.append(quoteClosing);
                                            });
                                            const studyButton = createEl('study-button');
                                            const svgLoad = generateSVG('0 0 640 512', 'M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z', 'load');
                                            studyButton.append(svgLoad);
                                            mainEl.append(studyButton);
                                    
                                            if (!lessons.lessonExist(lesson)) {
                                                setTimeout(() => studyButton.classList.add('visible'), 500);
                                            }
                                    
                                            animateCSS(lessonCont, 'fadeIn');
                                            mainEl.append(lessonCont);

                                            const studyButtonFunc = function() {
                                                if (!studyButton.classList.contains('move-to-center')) {
                                                    studyButton.classList.toggle('move-to-center');
                                                    svgLoad.classList.toggle('move-to-center');
                                                    lessonCont.classList.toggle('blur');
                                                    const backButton = document.querySelector('.back-button')
                                                    backButton.classList.toggle('blur');
                                                    const onTransitionEnd = () => {
                                                        backButton.removeEventListener('transitionend', onTransitionEnd);
                                    
                                                        if (!document.querySelector('.study-question-cont')) {
                                                            const studyQuestionCont = createEl('study-question-cont');
                                                            const studyQuestion = createEl('study-question');
                                                            studyQuestion.innerHTML = 'Изучаем?'
                                                            studyQuestionCont.append(studyQuestion);
                                                            const svgYes = generateSVG('0 0 448 512', 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z', 'yes-no');
                                                            const svgNo = generateSVG('0 0 384 512', 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z', 'yes-no');
                                                            const yesNoCont = createEl('yes-no-cont');
                                                            yesNoCont.append(svgNo);
                                                            yesNoCont.append(svgYes);
                                                            studyQuestionCont.append(yesNoCont);
                                                            mainEl.append(studyQuestionCont);
                                    
                                                            void studyQuestionCont.offsetWidth;
                                                            studyQuestionCont.classList.add('visible');

                                                            const noAction = () => {
                                                                animateCSS(svgNo, 'rotateOut').then(() => studyQuestionCont.remove());
                                                                studyQuestionCont.classList.toggle('visible');
                                                                studyButton.classList.toggle('move-to-center');
                                                                svgLoad.classList.toggle('move-to-center');
                                                                lessonCont.classList.toggle('blur');
                                                                backButton.classList.toggle('blur');
                                                            }

                                                            const yesAction = () => {
                                                                lessons.addLesson(lesson);
                                                                animateCSS(svgYes, 'tada').then(() => {backButton.click()});
                                                                animateCSS(studyQuestionCont, 'fadeOut');
                                                            }

                                                            transitionStatus.addQueuedEventListener(svgNo, studyQuestionCont, noAction);
                                                            transitionStatus.addQueuedEventListener(svgYes, studyQuestionCont, yesAction);
                                                        }
                                                    }
                                    
                                                    backButton.addEventListener('transitionend', onTransitionEnd);
                                                }
                                            }

                                            transitionStatus.addQueuedEventListener(studyButton, studyButton, studyButtonFunc);
                                            addBackButton(renderFundList, fundNum);
                                        };
                                    
                                        renderLesson(lesson);
                                    })()
                                };
                                animationStatus.addQueuedEventListener(lessonTitleCont, lessonTitleContFunc);
                                // lessonTitleCont.addEventListener('click', () => {

                                // })
                            });

                            mainEl.append(sectionListCont);

                            addBackButton(renderStudy);
                        };
                    };
                    renderStudy(container);
                } else if (index == 1) {
                    renderLessonsSelector();
                }

                addBackButton();
            })();
        }

        animationStatus.addQueuedEventListener(button, buttonFunction);

        animateCSS(button, 'zoomIn');

        // animateCSS(button, 'zoomIn').then(() => {
        //     button.addEventListener('click', (e) => {

        //     })
        // })

        navBar.append(button);
    });

    // const addBackButton = function(renderFunc, funcSelector) {
    //     const backButton = createEl('back-button');
    //     const backLogoCont = createEl('back-logo-cont');
    //     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //     svg.classList.add('home-icon');
    //     svg.setAttribute('viewBox', '0 0 576 512');
    //     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    //     path.setAttribute('d', 'M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z');
    //     svg.append(path);
    //     backLogoCont.append(svg);
    //     backButton.append(backLogoCont);
    //     const backTextCont = createEl('back-text-cont');
    //     backTextCont.innerHTML = 'Вернуться';
    //     backButton.append(backTextCont);
    
    //     const unload = async function() {
    //         if (document.querySelector('.fund-navbar')) {
    //             await Promise.all([
    //                 animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
    //                 animateCSS(titleCont, 'flipOutX').then(() => titleCont.style.opacity = 0),
    //                 animateCSS(navBar, 'fadeOut')
    //             ])

    //             mainEl.innerHTML = '';
    //             loadApp();
    //         } else if (document.querySelector('.fund-category-cont')) {
    //             await Promise.all([
    //                 animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
    //                 animateCSS(document.querySelector('.fund-category-cont'), 'fadeOut')
    //             ])

    //             mainEl.innerHTML = '';
    //             loadFundamentals();
    //         } else if (document.querySelector('.section-list-cont')) {
    //             await Promise.all([
    //                 animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
    //                 animateCSS(document.querySelector('.section-list-cont'), 'fadeOut')
    //             ])

    //             mainEl.innerHTML = '';
    //             const container = createEl('fund-category-cont');
    //             mainEl.append(container); 
    //             renderFunc(container);
    //             addBackButton();
    //         } else if (document.querySelector('.lesson-cont')) {
    //             const studyCont = document.querySelector('.study-button');

    //             studyCont?.classList.remove('visible');

    //             await Promise.all([
    //                 animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
    //                 animateCSS(document.querySelector('.lesson-cont'), 'fadeOut')
    //             ]);

                

    //             mainEl.innerHTML = '';
    //             renderFunc(funcSelector);
    //         }
    //     };

    //     animateCSS(backButton, 'flipInX');

    //     animationStatus.addQueuedEventListener(backButton, unload);

    //     mainEl.append(backButton);
    // };

    addBackButton();
}

    const addBackButton = function(renderFunc, funcSelector) {
        const mainEl = document.getElementById('main');
        const backButton = createEl('back-button');
        const backLogoCont = createEl('back-logo-cont');
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add('home-icon');
        svg.setAttribute('viewBox', '0 0 576 512');
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', 'M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z');
        svg.append(path);
        backLogoCont.append(svg);
        backButton.append(backLogoCont);
        const backTextCont = createEl('back-text-cont');
        backTextCont.innerHTML = 'Вернуться';
        backButton.append(backTextCont);
    
        const unload = async function() {
            // console.log('I try');
            if (document.querySelector('.fund-navbar')) {
                const titleCont = document.querySelector('.fund-title-cont');
                const navBar = document.querySelector('.fund-navbar'); 
                await Promise.all([
                    animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
                    animateCSS(titleCont, 'flipOutX').then(() => titleCont.style.opacity = 0),
                    animateCSS(navBar, 'fadeOut')
                ])

                mainEl.innerHTML = '';
                loadApp();
            } else if (document.querySelector('.fund-category-cont')) {
                await Promise.all([
                    animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
                    animateCSS(document.querySelector('.fund-category-cont'), 'fadeOut')
                ])

                mainEl.innerHTML = '';
                loadFundamentals();
            } else if (document.querySelector('.section-list-cont')) {
                await Promise.all([
                    animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
                    animateCSS(document.querySelector('.section-list-cont'), 'fadeOut')
                ])

                mainEl.innerHTML = '';
                const container = createEl('fund-category-cont');
                mainEl.append(container); 
                renderFunc(container);
                addBackButton();
            } else if (document.querySelector('.lesson-cont')) {
                const studyCont = document.querySelector('.study-button');

                studyCont?.classList.remove('visible');

                await Promise.all([
                    animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
                    animateCSS(document.querySelector('.lesson-cont'), 'fadeOut')
                ]);

                mainEl.innerHTML = '';
                renderFunc(funcSelector);
            } else if (document.querySelector('.curve-page-cont')) {
                // console.log('Im here')
                await Promise.all([
                    animateCSS(backButton, 'flipOutX').then(() => backButton.style.opacity = 0),
                    animateCSS(document.querySelector('.curve-page-cont'), 'fadeOut')
                ]);

                mainEl.innerHTML = '';
                const container = createEl('fund-category-cont');
                mainEl.append(container);
                renderFunc(container);
                addBackButton();
            } else {
                console.log('No function :(');
            }
        };

        mainEl.append(backButton);

        animateCSS(backButton, 'flipInX');

        animationStatus.addQueuedEventListener(backButton, unload);
        // backButton.addEventListener('click', unload);

    };

const animateCSS = (node, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
        if (animationStatus.currentlyFiredEl.includes(node)) {
            console.warn('Already animating, skipping');
            return Promise.resolve();
        }

        const animationName = `${prefix}${animation}`;

        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd(event) {
            event.stopPropagation();

            if (animation.includes('Out')) {
                node.style.opacity = 0;
            }
            
            node.classList.remove(`${prefix}animated`, animationName);
            animationStatus.removeElFromFired(node);
            resolve('Animation ended');
        }

      function handleAnimationStart() {
        animationStatus.addElToFired(node);
      }

      node.addEventListener('animationstart', handleAnimationStart, {once: true});
  
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

const getLessonTitle = function(lesson, fundNum) {
    const fundLessons = [fund1Lessons, fund2Lessons];
    const lessonsWithinChapter = fundLessons[fundNum].filter(el => el.chapter == lesson.chapter);
    const index = lessonsWithinChapter.indexOf(lessonsWithinChapter.find(el => el.texts[0] == lesson.texts[0]));
    const fundTitles = [fund1Titles, fund2Titles];
    let text = fundTitles[fundNum][lesson.chapter];
    if (index != 0) {
        if (lessonsWithinChapter.length - 1 == index) {
            text += ' (ОКОНЧАНИЕ)';
        } else if (lessonsWithinChapter.length == 3) {
            text += ' (ПРОДОЛЖЕНИЕ)';
        } else if (lessonsWithinChapter.length > 3) {
            text += ` (ПРОДОЛЖЕНИЕ ${index}-Е)`;
        }
    }

    return text;
};

const renderCurve = function(curLesson, fundNum, renderLessonsSelector){
    const colorMain = 'var(--third-color)';
    const colorSecondary = 'lightcoral';

    const mainEl = document.getElementById('main');

    const curvePageCont = createEl('curve-page-cont');
    const curvePageUpperCont = createEl('curve-page-upper-cont');
    curvePageCont.append(curvePageUpperCont);
    const lessonTitle = createEl('lesson-title-curve');
    lessonTitle.innerHTML = getLessonTitle(curLesson, fundNum);
    lessonTitle.style.opacity = '0';
    curvePageUpperCont.append(lessonTitle);

    const percentInfoCont = createEl('percent-info-cont');
    const studied = createEl('studied-percent-cont');
    studied.innerHTML = `Изучено: `;
    const memory = createEl('memory-precent-cont');
    memory.innerHTML = `Сейчас в памяти: `;
    percentInfoCont.append(studied);
    percentInfoCont.append(memory);
    curvePageUpperCont.append(percentInfoCont);

    const scaleCont = createEl('scale-cont');
    const svgScale = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgScale.classList.add('scale');
    svgScale.setAttribute('viewBox', '0 0 203 8');
    svgScale.innerHTML = `
        <path d="M 1 7.5 H 203
                 M 1 4 V 8
                 M 40 4 V 8
                 M 80 4 V 8
                 M 120 4 V 8
                 M 160 4 V 8
                 M 199.5 4 V 8" stroke-width="1" stroke=${colorMain} fill="transparent"/>`;
    scaleCont.append(svgScale);
    curvePageUpperCont.append(scaleCont);

    const curveCont = createEl('curve-cont');
    curvePageCont.append(curveCont);

    const svgCurve = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgCurve.classList.add('svg-curve');
    svgCurve.setAttribute('viewBox', '0 0 203 700');

    // do not delete <path d="M 0 0 C 200 0, 200 800, 200 850" stroke="${colorMain}" fill="transparent"/>

        // <path d="M 199 750 C 199 740, 198 700, 199 700" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        // <path d="M 199 800 C 199 790, 198 750, 199 750" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        // <path d="M 199 750 L 200 750" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        // <path d="M 199 800 L 200 800" stroke-width="1" stroke=${colorMain} fill="transparent"/>

                // <path d="M 0 0 C 220 0, 200 1000, 200 700" stroke="${colorSecondary}" stroke-dasharray="3,2" fill="transparent"/>
    const curveCode = `
        <path d="M 80 50 C 80 40, 150 0, 199.5 0" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 106 100 C 106 90, 161 51, 199.5 51" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 125 150 C 125 140, 169 100, 199.5 100" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 140 200 C 140 190, 175 150, 199.5 150" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 151 250 C 151 240, 180 200, 199.5 200" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 161 300 C 161 290, 184 250, 199.5 250" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 169 350 C 169 340, 187 300, 199.5 300" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 175 400 C 175 390, 190 350, 199.5 350" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 181 450 C 181 440, 192 400, 199.5 400" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 186 500 C 186 490, 194 450, 199.5 450" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 190 550 C 190 540, 196 500, 199.5 500" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 193 600 C 193 590, 197 550, 199.5 550" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 196 650 C 196 640, 198 600, 199.5 600" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 198 700 C 198 690, 198 650, 199.5 650" stroke-width="1" stroke=${colorMain} fill="transparent"/>

        <path d="M 80 50 L 199.5 50" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 106 100 L 199.5 100" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 125 150 L 199.5 150" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 140 200 L 199.5 200" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 151 250 L 199.5 250" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 161 300 L 199.5 300" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 169 350 L 199.5 350" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 175 400 L 199.5 400" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 181 450 L 199.5 450" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 186 500 L 199.5 500" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 190 550 L 199.5 550" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 193 600 L 199.5 600" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 196 650 L 199.5 650" stroke-width="1" stroke=${colorMain} fill="transparent"/>
        <path d="M 198 700 L 199.5 700" stroke-width="1" stroke=${colorMain} fill="transparent"/>

        <path d="M 199.5 0 V 700
                 M 200 25 H 203
                 M 200 50 H 203
                 M 200 75 H 203
                 M 200 100 H 203
                 M 200 125 H 203
                 M 200 150 H 203
                 M 200 175 H 203
                 M 200 200 H 203
                 M 200 225 H 203
                 M 200 250 H 203
                 M 200 275 H 203
                 M 200 300 H 203
                 M 200 325 H 203
                 M 200 350 H 203
                 M 200 375 H 203
                 M 200 400 H 203
                 M 200 425 H 203
                 M 200 450 H 203
                 M 200 475 H 203
                 M 200 500 H 203
                 M 200 525 H 203
                 M 200 550 H 203
                 M 200 575 H 203
                 M 200 600 H 203
                 M 200 625 H 203
                 M 200 650 H 203
                 M 200 675 H 203
                 M 200 700 H 203" stroke-width="1" stroke=${colorMain} fill="transparent"/>
    `;

    // const getPositions = function(lesson) {
    //     const dateNow = new Date();
    //     const lessonData = lessons.checkLesson(lesson);
    //     if (lessonData && lessonData.phase > 0) {
    //         let yPosition = (lessonData.phase - 1) * 50;
    //         if (lessonData.dates) {
    //             const allDistance = lessonData.dates[1] - lessonData.dates[0];
    //             const asOfNowDistance = dateNow - lessonData.dates[0];
    //             yPosition += Math.round(asOfNowDistance / allDistance * 50);

    //         const curvePoints = parseCubicPath(svgCurve.children.item(lessonData.phase - 1).getAttribute('d'));
            
    //         const widthPosition = findXforY_Bezier(yPosition, curvePoints.p0, curvePoints.p1, curvePoints.p2, curvePoints.p3);

    //         return [widthPosition, yPosition];
    //         } else {
    //         return [parseCubicPath(svgCurve.children.item(lessonData.phase - 1).getAttribute('d')).p0.x, yPosition + 50];
    //         } 
    //     } else {
    //         return [0, 0];
    //     }
    // }

    const lessonData = lessons.checkLesson(curLesson);

    const getPositions = function() {
        const dateNow = new Date();
        
        if (lessonData && lessonData.phase > 0) {
            let yPosition = (lessonData.phase - 1) * 50;
            if (lessonData.dates) {
                const allDistance = lessonData.dates[1] - lessonData.dates[0];
                const asOfNowDistance = dateNow - lessonData.dates[0];
                yPosition += Math.ceil(asOfNowDistance / allDistance * 50);
                
                if(yPosition % 50 == 0) {
                   yPosition -= 1 
                }

            return [xPosition[yPosition], yPosition];
            } else {
            return [xPosition[yPosition + 50], yPosition + 50];
            } 
        } else {
            return [0, 0];
        }
    }

    const drowPercentage = function() {
        let positions = getPositions();

        const pathCode = `<path d="M ${positions[0]} ${positions[1]} H 200 M ${positions[0]} 0 V ${positions[1]}" stroke-width="1" stroke=${colorSecondary} stroke-dasharray="3,2" fill="transparent"/>`;

        svgCurve.innerHTML += pathCode;

        const triangleX = `<polygon points="${positions[0]},4 ${positions[0] + 3},4 ${positions[0]},8" fill=${colorSecondary} />`

        svgScale.innerHTML += triangleX;

        const triangleY = `<polygon points="200,${positions[1]} 203,${positions[1]} 203,${positions[1] + 3}" fill=${colorSecondary} />`

        svgCurve.innerHTML += triangleY;

        const percentageX = Math.round(positions[0] / 200 * 100);
        const percentageY = Math.round(positions[1] / 700 * 100);

        studied.innerHTML += `${percentageY}%`;
        memory.innerHTML += `${percentageX}%`;

        const percentXCont = createEl('percent-x-cont');
        percentXCont.innerHTML = `${percentageX}%`;
        const percentYCont = createEl('percent-y-cont');
        percentYCont.innerHTML = `${percentageY}%`;

        scaleCont.append(percentXCont);
        percentXCont.style.left = `${80 * positions[0] / 203 + 10}vw`;

        curveCont.append(percentYCont);
        percentYCont.style.top = `calc(${80 / 203 * positions[1]}vw - 0.4vh)`;
    }

    // function parseCubicPath(pathStr) {
    //     const cleaned = pathStr.replace(/,/g, '');
    //     const tokens = cleaned.split(/\s+/);

    //     const p0 = { x: parseFloat(tokens[1]), y: parseFloat(tokens[2]) };
    //     const p1 = { x: parseFloat(tokens[4]), y: parseFloat(tokens[5]) };
    //     const p2 = { x: parseFloat(tokens[6]), y: parseFloat(tokens[7]) };
    //     const p3 = { x: parseFloat(tokens[8]), y: parseFloat(tokens[9]) };

    //     return { p0, p1, p2, p3 };
    // }

    // function cubicBezier(t, p0, p1, p2, p3) {
    //     const mt = 1 - t;
    //     return mt**3 * p0 +
    //         3 * mt**2 * t * p1 +
    //         3 * mt * t**2 * p2 +
    //         t**3 * p3;
    // }

    // function findXforY_Bezier(targetY, p0, p1, p2, p3, epsilon = 0.01) {
    //     let bestT = null;
    //     let bestDiff = Infinity;

    //     for (let t = 0; t <= 1; t += epsilon) {
    //         const y = cubicBezier(t, p0.y, p1.y, p2.y, p3.y);
    //         const diff = Math.abs(y - targetY);
    //         if (diff < bestDiff) {
    //             bestDiff = diff;
    //             bestT = t;
    //         }
    //     }

    //     if (bestT !== null) {
    //         const x = cubicBezier(bestT, p0.x, p1.x, p2.x, p3.x);
    //         return Math.round(x);
    //     }

    //     return null;
    // }

    const svgDone = generateSVG('0 0 512 512', 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z', 'done-round');

    let qtyLeft = lessonData.phase - 1;

    while (qtyLeft > 0) {
        const clone = svgDone.cloneNode(true);
        curveCont.append(clone);
        clone.style.top = `calc(80vw / 203 * ${(15 - qtyLeft) * 50} - 3vw)`;
        qtyLeft--;
    }

    animateCSS(lessonTitle, 'zoomIn');
    animateCSS(percentInfoCont, 'bounceIn');
    animateCSS(memory, 'slideInRight');
    animateCSS(studied, 'slideInLeft');
    animateCSS(scaleCont, 'fadeIn');

    // drowPercentage(curLesson, new Date(2025, 4, 26, 20, 0));

    //     const getPositionsTemp = function(y) {
    //     // debugger;
    //         const pathIndex = Math.floor(y / 50);

    //         if (y == 0) {
    //             return [0, 0];
    //         }
    //         if (y % 50 != 0) {
    //         const curvePoints = parseCubicPath(svgCurve.children.item(pathIndex).getAttribute('d'));
            
    //         const widthPosition = findXforY_Bezier(y, curvePoints.p0, curvePoints.p1, curvePoints.p2, curvePoints.p3);

    //         return [widthPosition, y];
    //         } else {
    //         return [parseCubicPath(svgCurve.children.item(pathIndex).getAttribute('d')).p0.x, y + 50];
    //         } 
    // }

    // setTimeout(function() {
    // let y = 0;
    // while (y <= 800) {
    //     console.log(getPositionsTemp(y));
    //     y++;
    // }
    // }, 1000);

    svgCurve.innerHTML = curveCode;

    curveCont.append(svgCurve);
    curvePageCont.append(curveCont);

    drowPercentage();

    const positions = getPositions();

    const scrollToInPx = positions[1] / 700 * curveCont.scrollHeight - curveCont.offsetHeight / 2;

    requestAnimationFrame(() => {
        animateCSS(curveCont, 'fadeIn').then(() => {
            curveCont.scrollTo({
                top: scrollToInPx,
                left: 0,
                behavior: "smooth"
            });
        })
    })

    mainEl.append(curvePageCont);


    fitTextToContainer(lessonTitle, {minFontSize: 1, maxFontSize: 6, units: 'vh'});
    lessonTitle.style.opacity = '';
    
    addBackButton(renderLessonsSelector);
}

function fitTextToContainer(container, options = {}) {
    const {
        minFontSize = 1,
        maxFontSize = 3,
        units = 'vh',
        step = 0.1
    } = options;

    const originalText = container.textContent;
    const computedStyles = window.getComputedStyle(container);

    // Створення невидимого клонованого елемента
    const testEl = document.createElement('div');
    testEl.style.position = 'absolute';
    testEl.style.visibility = 'hidden';
    testEl.style.zIndex = -9999;
    testEl.style.whiteSpace = 'normal';
    testEl.style.width = container.clientWidth + 'px';
    testEl.style.padding = computedStyles.padding;
    testEl.style.fontFamily = computedStyles.fontFamily;
    testEl.style.fontWeight = computedStyles.fontWeight;
    testEl.style.lineHeight = computedStyles.lineHeight;
    testEl.style.letterSpacing = computedStyles.letterSpacing;
    testEl.style.wordBreak = computedStyles.wordBreak;
    testEl.style.boxSizing = computedStyles.boxSizing;
    testEl.innerText = originalText;
    document.body.appendChild(testEl);

    let fontSize = maxFontSize;

    // Поступово зменшуємо розмір шрифту
    while (fontSize >= minFontSize) {
        testEl.style.fontSize = fontSize + units;
        if (testEl.scrollHeight <= container.clientHeight) {
            break;
        }
        fontSize -= step;
    }

    // Застосовуємо знайдений розмір шрифту до контейнера
    container.style.fontSize = fontSize + units;

    // Прибираємо тимчасовий елемент
    document.body.removeChild(testEl);
}


const generateSVG = function(viewBox, d, className){
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add(className);
    svg.setAttribute('viewBox', viewBox);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', d);
    svg.append(path);

    return svg;
};

const loadFile = async function(link) {
    try {
        const response = await fetch(link);
        const text = await response.text();
        const data = JSON.parse(text);
        return data;
    } catch (error) {
        console.error('Ошибка загрузки или парсинга:', error);
    }
};

let fund1Texts, fund1Lessons, fund1Titles;

(async () => {
    const fund1 = await loadFile('fund1.json');
    fund1Texts = fund1[0];
    fund1Titles = fund1[1];
    fund1Lessons = fund1[2];
})();

let fund2Texts, fund2Lessons, fund2Titles;

(async () => {
    const fund2 = await loadFile('fund2.json');
    fund2Texts = fund2[0];
    fund2Titles = fund2[1];
    fund2Lessons = fund2[2];
})();

loadApp();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/app/service-worker.js')
    .then(reg => console.log('✅ Service Worker зареєстровано', reg))
    .catch(err => console.log('❌ Помилка SW', err));
}

window.onerror = function(msg, url, lineNo, columnNo, error) {
    alert(`${msg}, ${lineNo}`);
    return false;
}
