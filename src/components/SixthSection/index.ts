import '../../assets/img/6th-section-img-1.png';
import '../../assets/img/6th-section-img-2.png';
import '../../assets/img/6th-section-img-3.png';

export const sixthSectionFunction = () => {
    const viewAllBtn = document.querySelector('.view-all');
    const cardWrapper = (document.querySelector('.card-wrapper')) as HTMLDivElement;

    viewAllBtn?.addEventListener('click', () => {
        cardWrapper.style.height = 'fit-content';
    });
};

sixthSectionFunction();
