import '../../assets/img/6th-section-img-1.png';
import '../../assets/img/6th-section-img-2.png';
import '../../assets/img/6th-section-img-3.png';

export const sixthSectionFunction = () => {
    const viewAllBtn = document.querySelector('.view-all');
    const cardWrapper = (document.querySelector('.card-wrapper')) as HTMLDivElement;

    viewAllBtn?.addEventListener('click', () => {
        cardWrapper.style.height = 'fit-content';
    });
    // ============================== Steppers ========================================
    // ================= Custom Selects ================
    const selectedBookingType = (document.querySelector('.select-wrapper-booking-type .selected')) as HTMLElement;
    const optionsContainerBookingType = document.querySelector('.select-wrapper-booking-type .options-container');

    const optionsListBookingType = document.querySelectorAll('.select-wrapper-booking-type .option');

    selectedBookingType?.addEventListener('click', () => {
        optionsContainerBookingType?.classList.toggle('active');
    });

    optionsListBookingType.forEach((o) => {
        o.addEventListener('click', () => {
            const data = o?.querySelector('label')?.innerHTML;
            selectedBookingType.innerHTML = `${data}`;
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
            selectedCode.innerHTML = `${data}`;
            optionsContainerCode?.classList.remove('active');
        });
    });
    // ===================== Adult Visitors Select =====================
    const selectedAdults = (document.querySelector('.select-wrapper-adult-visitors .selected')) as HTMLElement;
    const optionsContainerAdults = document.querySelector('.select-wrapper-adult-visitors .options-container');

    const optionsListAdults = document.querySelectorAll('.select-wrapper-adult-visitors .option');

    selectedAdults?.addEventListener('click', () => {
        optionsContainerAdults?.classList.toggle('active');
    });

    optionsListAdults.forEach((o) => {
        o.addEventListener('click', () => {
            const data = o?.querySelector('label')?.innerHTML;
            selectedAdults.innerHTML = `${data}`;
            optionsContainerAdults?.classList.remove('active');
        });
    });
    // ===================== Child Visitors Select =====================
    const selectedChilds = (document.querySelector('.select-wrapper-child-visitors .selected')) as HTMLElement;
    const optionsContainerChilds = document.querySelector('.select-wrapper-child-visitors .options-container');

    const optionsListChilds = document.querySelectorAll('.select-wrapper-child-visitors .option');

    selectedChilds?.addEventListener('click', () => {
        optionsContainerChilds?.classList.toggle('active');
    });

    optionsListChilds.forEach((o) => {
        o.addEventListener('click', () => {
            const data = o?.querySelector('label')?.innerHTML;
            selectedChilds.innerHTML = `${data}`;
            optionsContainerChilds?.classList.remove('active');
        });
    });

    // ===================== Country Select =====================
    const selectedCountry = (document.querySelector('.select-wrapper-country .selected')) as HTMLElement;
    const optionsContainerCountry = document.querySelector('.select-wrapper-country .options-container');

    const optionsListCountry = document.querySelectorAll('.select-wrapper-country .option');

    selectedCountry?.addEventListener('click', () => {
        optionsContainerCountry?.classList.toggle('active');
    });

    optionsListCountry.forEach((o) => {
        o.addEventListener('click', () => {
            const data = o?.querySelector('label')?.innerHTML;
            selectedCountry.innerHTML = `${data}`;
            optionsContainerCountry?.classList.remove('active');
        });
    });

    // ====================== STEP 2 ============================
    // ===================== Center Select =====================
    const selectedCenter = (document.querySelector('.select-wrapper-center .selected')) as HTMLElement;
    const optionsContainerCenter = document.querySelector('.select-wrapper-center .options-container');

    const optionsListCenter = document.querySelectorAll('.select-wrapper-center .option');

    selectedCenter?.addEventListener('click', () => {
        optionsContainerCenter?.classList.toggle('active');
    });

    optionsListCenter.forEach((o) => {
        o.addEventListener('click', () => {
            const data = o?.querySelector('label')?.innerHTML;
            selectedCenter.innerHTML = `${data}`;
            optionsContainerCenter?.classList.remove('active');
        });
    });
    // ===================== Time Select =====================
    const selectedTime = (document.querySelector('.select-wrapper-time .selected')) as HTMLElement;
    const optionsContainerTime = document.querySelector('.select-wrapper-time .options-container');

    const optionsListTime = document.querySelectorAll('.select-wrapper-time .option');

    selectedTime?.addEventListener('click', () => {
        optionsContainerTime?.classList.toggle('active');
    });

    optionsListTime.forEach((o) => {
        o.addEventListener('click', () => {
            const data = o?.querySelector('label')?.innerHTML;
            selectedTime.innerHTML = `${data}`;
            optionsContainerTime?.classList.remove('active');
        });
    });

    // ======================= Button Navigation ========================
    const stepsContainer = (document.querySelector('.steps-container')) as HTMLElement;
    const nextBtns = document.querySelectorAll('.btn.next-step');
    const prevBtns = document.querySelectorAll('.btn.prev-step');
    const step = (document.querySelector('.step')) as HTMLElement;
    const width = step.clientWidth + 24;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let index = 0;
    nextBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            index += 1;
            stepsContainer.style.transform = `translateX(-${index * width}px)`;
        });
    });
    console.log(prevBtns);

    prevBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            index -= 1;
            stepsContainer.style.transform = `translateX(-${index * width}px)`;
        });
    });
};

sixthSectionFunction();
