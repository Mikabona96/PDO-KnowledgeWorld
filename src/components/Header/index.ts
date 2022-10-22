import '../../assets/img/logo.png';
import '../../assets/img/logo-text.png';
import '../../assets/img/search.png';
import '../../assets/img/combinelogo.png';
import '../../assets/img/facebook.png';
import '../../assets/img/instagram.png';
import '../../assets/img/twitter.png';
import '../../assets/img/linkedin.png';

export const headerFunction = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const open = document.querySelector('.open-menu');
        const close = document.querySelector('.close-menu');
        const headerContent = document.querySelector('.header-content');
        const body = (document.querySelector('body')) as HTMLBodyElement;

        open?.addEventListener('click', () => {
            headerContent?.classList.add('active');
            body.style.overflow = 'hidden';
        });

        close?.addEventListener('click', () => {
            headerContent?.classList.remove('active');
            body.style.overflow = '';
        });
    });
};
headerFunction();
