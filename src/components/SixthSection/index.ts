import '../../assets/img/6th-section-img-1.png';
import '../../assets/img/6th-section-img-2.png';
import '../../assets/img/6th-section-img-3.png';

export const sixthSectionFunction = () => {
    window.addEventListener('DOMContentLoaded', () => {
        // ================================== Data ===============================
        const dataStore = {
            bookingType:              'Individual/Family',
            name:                     '',
            secondName:               '',
            code:                     '+1',
            number:                   '',
            sendReminders:            false,
            email:                    '',
            knowledgeWorldNewsLetter: false,
            adultVisitors:            0,
            childVisitors:            0,
            country:                  '',
            center:                   'Ecoman Center',
            date:                     '',
            timeSlot:                 '',
        };

        const viewAllBtn = document.querySelector('.view-all');
        const cardWrapper = (document.querySelector('.card-wrapper')) as HTMLDivElement;

        viewAllBtn?.addEventListener('click', () => {
            cardWrapper.style.height = 'fit-content';
        });
        // ============================== Steppers ========================================

        //================== Inputs ==========================

        const inputName = document.querySelector('.step1 .name');
        const inputSecondName = document.querySelector('.step1 .second-name');
        const inputEmail = document.querySelector('.step1 .email');
        const inputPhoneNumber = document.querySelector('.step1 .number');
        const Name = document.querySelector('.step3 .wrapper .name');
        const Phone = document.querySelector('.step3 .wrapper .phone');
        const Email = document.querySelector('.step3 .wrapper .email');

        inputName!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.name = target.value;
            Name!.innerHTML = dataStore.name + ' ' + dataStore.secondName;
        });
        inputSecondName!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.secondName = target.value;
            Name!.innerHTML = dataStore.name + ' ' + dataStore.secondName;
        });
        inputEmail!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.email = target.value;
            Email!.innerHTML = dataStore.email;
        });
        inputPhoneNumber!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.number = target.value;
            Phone!.innerHTML = dataStore.code + ' ' + dataStore.number;
        });


        // ================= Custom checkBoxes ==============
        const smsCheckBox = (document.querySelector('.checkbox-wrapper-sms label input')) as HTMLInputElement;
        const newsLetterCheckBox = (document.querySelector('.checkbox-wrapper-newsletter label input')) as HTMLInputElement;

        smsCheckBox.addEventListener('change', () => {
            smsCheckBox.checked ? dataStore.sendReminders = true : dataStore.sendReminders = false;
        });
        newsLetterCheckBox.addEventListener('change', () => {
            newsLetterCheckBox.checked
                ? dataStore.knowledgeWorldNewsLetter = true
                : dataStore.knowledgeWorldNewsLetter = false;
        });


        // ================= Custom Selects ================
        const selectedBookingType = (document.querySelector('.select-wrapper-booking-type .selected')) as HTMLElement;
        const optionsContainerBookingType = document.querySelector('.select-wrapper-booking-type .options-container');
        const BookingType = document.querySelector('.step3 .wrapper .bookingType');

        const optionsListBookingType = document.querySelectorAll('.select-wrapper-booking-type .option');

        selectedBookingType?.addEventListener('click', () => {
            optionsContainerBookingType?.classList.toggle('active');
        });

        optionsListBookingType.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.bookingType = `${data}`;
                selectedBookingType.innerHTML = `${data}`;
                BookingType!.innerHTML = `${data}`;
                optionsContainerBookingType?.classList.remove('active');
            });
        });
        // ===================== Code Select =====================
        const selectedCode = (document.querySelector('.select-wrapper-code .selected')) as HTMLElement;
        const optionsContainerCode = document.querySelector('.select-wrapper-code .options-container');

        const optionsListCode = document.querySelectorAll('.select-wrapper-code .option');

        selectedCode?.addEventListener('click', () => {
            optionsContainerCode?.classList.toggle('active');
        });

        optionsListCode.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.code = `${data}`;
                selectedCode.innerHTML = `<span>${data}</span>`;
                Phone!.innerHTML = dataStore.code + ' ' + dataStore.number;
                optionsContainerCode?.classList.remove('active');
            });
        });
        // ===================== Adult Visitors Select =====================
        const selectedAdults = (document.querySelector('.select-wrapper-adult-visitors .selected')) as HTMLElement;
        const optionsContainerAdults = document.querySelector('.select-wrapper-adult-visitors .options-container');
        const AdultsCount = document.querySelector('.step3 .wrapper .adultsCount');


        const optionsListAdults = document.querySelectorAll('.select-wrapper-adult-visitors .option');

        selectedAdults?.addEventListener('click', () => {
            optionsContainerAdults?.classList.toggle('active');
        });

        optionsListAdults.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.adultVisitors = Number(data);
                selectedAdults.innerHTML = `${data}`;
                AdultsCount!.innerHTML = `${data}`;
                optionsContainerAdults?.classList.remove('active');
            });
        });
        // ===================== Child Visitors Select =====================
        const selectedChilds = (document.querySelector('.select-wrapper-child-visitors .selected')) as HTMLElement;
        const optionsContainerChilds = document.querySelector('.select-wrapper-child-visitors .options-container');
        const ChildsCount = document.querySelector('.step3 .wrapper .childsCount');

        const optionsListChilds = document.querySelectorAll('.select-wrapper-child-visitors .option');

        selectedChilds?.addEventListener('click', () => {
            optionsContainerChilds?.classList.toggle('active');
        });

        optionsListChilds.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.childVisitors = Number(data);
                selectedChilds.innerHTML = `${data}`;
                ChildsCount!.innerHTML = `${data}`;
                optionsContainerChilds?.classList.remove('active');
            });
        });

        // ===================== Country Select =====================
        const selectedCountry = (document.querySelector('.select-wrapper-country .selected')) as HTMLElement;
        const optionsContainerCountry = document.querySelector('.select-wrapper-country .options-container');
        const Country = document.querySelector('.step3 .wrapper .country');

        const optionsListCountry = document.querySelectorAll('.select-wrapper-country .option');

        selectedCountry?.addEventListener('click', () => {
            optionsContainerCountry?.classList.toggle('active');
        });

        optionsListCountry.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.country = `${data}`;
                selectedCountry.innerHTML = `${data}`;
                Country!.innerHTML = `${data}`;
                optionsContainerCountry?.classList.remove('active');
            });
        });

        // ====================== STEP 2 ============================
        // ===================== Center Select =====================
        const selectedCenter = (document.querySelector('.select-wrapper-center .selected')) as HTMLElement;
        const optionsContainerCenter = document.querySelector('.select-wrapper-center .options-container');
        const centerTitle = (document.querySelector('.step3 .content .title')) as HTMLElement;

        const optionsListCenter = document.querySelectorAll('.select-wrapper-center .option');

        selectedCenter?.addEventListener('click', () => {
            optionsContainerCenter?.classList.toggle('active');
        });

        optionsListCenter.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                selectedCenter.innerHTML = `${data}`;
                dataStore.center = `${data}`;
                centerTitle.innerHTML = `${data}`;
                optionsContainerCenter?.classList.remove('active');
            });
        });
        // ===================== Time Select =====================
        const selectedTime = (document.querySelector('.select-wrapper-time .selected')) as HTMLElement;
        const optionsContainerTime = document.querySelector('.select-wrapper-time .options-container');
        const centerTime = (document.querySelector('.step3 .content .date-time .time span')) as HTMLElement;

        const optionsListTime = document.querySelectorAll('.select-wrapper-time .option');

        selectedTime?.addEventListener('click', () => {
            optionsContainerTime?.classList.toggle('active');
        });

        optionsListTime.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                selectedTime.innerHTML = `${data}`;
                centerTime.innerHTML = `${data}`;
                dataStore.timeSlot = `${data}`;
                optionsContainerTime?.classList.remove('active');
            });
        });
        // =============== Date Select =============
        const inputDate = document.querySelector('.step2 .date-wrapper .date');
        const centerDate = (document.querySelector('.step3 .content .date-time .date span')) as HTMLElement;
        inputDate?.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            const value = target.value.split('-').reverse()
                .join('-');
            dataStore.date = value;
            centerDate.innerHTML = `${value}`;
        });


        // ======================= Button Navigation ========================
        const ProgressBar = (document.querySelector('.progress')) as HTMLElement;
        const circleGreen = document.querySelectorAll('.progress .circle-green');
        const CurrentProgress = (document.querySelector('.progress .current-progress')) as HTMLElement;
        // const stepsContainer = (document.querySelector('.steps-container')) as HTMLElement;
        const nextBtns = document.querySelectorAll('.btn.next-step');
        const prevBtns = document.querySelectorAll('.btn.prev-step');
        // const step = (document.querySelector('.step')) as HTMLElement;
        const steps = document.querySelectorAll('.step');
        // let width = step.clientWidth + 24;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let index = 0;

        const removeCircleActiveClass = (idx?: number) => {
            circleGreen.forEach((circle, i) => {
                if (i === idx as number + 1) {
                    circle.classList.remove('active');
                }
                if (!idx) {
                    circle.classList.remove('active');
                }
            });
        };
        const removeActiveStep = () => {
            steps.forEach((step) => {
                step.classList.remove('active');
            });
        };
        nextBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                index += 1;
                if (index > 2) {
                    ProgressBar.style.display = 'none';
                }
                if (i < 2) {
                    circleGreen[ index ].classList.toggle('active');
                }
                removeActiveStep();
                steps[ index ].classList.add('active');
                CurrentProgress.style.width = `${index * 50}%`;
            });
        });

        prevBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                index -= 1;
                if (index <= 2) {
                    ProgressBar.style.display = 'flex';
                }
                removeActiveStep();
                steps[ index ].classList.add('active');
                removeCircleActiveClass(index);
                CurrentProgress.style.width = `${index * 50}%`;
            });
        });
        // ============================= Open Stepper =============================
        const sixthSection = document.querySelector('.SixthSection');
        const makeBookingBtn = document.querySelector('.top .make-booking');
        const makeBookingStepper = (document.querySelector('.makebooking-stepper')) as HTMLElement;
        const makeBookingStepperClose = (document.querySelector('.makebooking-stepper .close')) as HTMLElement;
        const rtl = !!sixthSection?.classList.contains('rtl');

        makeBookingBtn?.addEventListener('click', () => {
            ProgressBar.style.display = 'flex';
            rtl ? makeBookingStepper.style.left = '0px' : makeBookingStepper.style.right = '0px';
            index = 0;
            removeActiveStep();
            steps[ index ].classList.add('active');
        });

        makeBookingStepperClose.addEventListener('click', () => {
            rtl ? makeBookingStepper.style.left = '-200%' : makeBookingStepper.style.right = '-200%';
            index = 0;
            removeActiveStep();
            steps[ index ].classList.add('active');
            removeCircleActiveClass();
            circleGreen[ index ].classList.toggle('active');
            CurrentProgress.style.width = `${index * 50}%`;
        });

        // ===================== Find booking ==========================
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let findBookingIndex = 0;
        const findBookingStepper = (document.querySelector('.findbooking-stepper')) as HTMLElement;
        const findBookingSteps = document.querySelectorAll('.findbooking-stepper .step');
        const viewBookingBtn = document.querySelector('.SixthSection .view-booking');
        const closeFindBookingBtn = document.querySelector('.findbooking-stepper .close');
        const findBtn = document.querySelector('.findbooking-stepper .step1 .find');

        const fbRemoveActiveStep = (idx: number) => {
            findBookingSteps.forEach((step, i) => {
                step.classList.remove('active');
                if (idx === i) {
                    step.classList.add('active');
                }
            });
        };
        viewBookingBtn?.addEventListener('click', () => {
            findBookingSteps[ findBookingIndex ].classList.add('active');
            rtl ? findBookingStepper.style.left = '0px' : findBookingStepper.style.right = '0px';
        });

        closeFindBookingBtn?.addEventListener('click', () => {
            findBookingIndex = 0;
            fbRemoveActiveStep(findBookingIndex);
            rtl ? findBookingStepper.style.left = '-200%' : findBookingStepper.style.right = '-200%';
        });
        findBtn?.addEventListener('click', () => {
            findBookingIndex += 1;

            fbRemoveActiveStep(findBookingIndex);
        });
    });
};

sixthSectionFunction();
