import '../../assets/img/5th-section-slide-1.png';
import '../../assets/img/5th-section-slide-2.png';
import '../../assets/img/5th-section-slide-3.png';

export const fifthSectionFunction = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const fifthSection = document.querySelector('.FifthSection');
        const btns = document.querySelectorAll('.FifthSection .buttons .button');
        const wrapper = (document.querySelector('.FifthSection .column-wrapper')) as HTMLElement;
        const column = (document.querySelector('.FifthSection .column-wrapper .column')) as HTMLElement;
        let width = column.offsetWidth;
        const rtl = !!fifthSection?.classList.contains('rtl');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let index = 0;

        const removeActiveBtn = () => {
            btns.forEach((btn, i) => {
                btn.classList.remove('active');
            });
        };

        btns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                index = i;
                removeActiveBtn();
                btn.classList.add('active');
                wrapper.style.transform = rtl ? `translateX(${i * (width + 24)}px)` : `translateX(-${i * (width + 24)}px)`;
            });
        });
        window.addEventListener('resize', () => {
            width = column.offsetWidth;
            wrapper.style.transform = rtl ? `translateX(${index * (width + 24)}px)` : `translateX(-${index * (width + 24)}px)`;
        });
    });
};

fifthSectionFunction();
