import '../../assets/img/8th-section-img.png';

export const eighthSectionFunction = () => {
    const data = {
        name:         '',
        phone:        '',
        email:        '',
        comment:      '',
        setToInitial: function () {
            this.name = '';
            this.email = '';
            this.phone = '';
            this.comment = '';
        },
    };

    const name = document.querySelector('.EighthSection .bottom .bottom-right .form .name');
    const tel = document.querySelector('.EighthSection .bottom .bottom-right .form .tel');
    const email = document.querySelector('.EighthSection .bottom .bottom-right .form .email');
    const comment = document.querySelector('.EighthSection .bottom .bottom-right .form .comment');
    const btn = document.querySelector('.EighthSection .bottom .bottom-right .form .btn');
    const form = (document.querySelector('.EighthSection .bottom .bottom-right .form')) as HTMLFormElement;
    name?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.name = target.value;
        target.value = data.name;
    });
    tel?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.phone = target.value;
        target.value = data.phone;
    });
    email?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.email = target.value;
        target.value = data.email;
    });
    comment?.addEventListener('input', (event) => {
        const target = (event.target) as HTMLInputElement;
        data.comment = target.value;
        target.value = data.comment;
    });

    btn?.addEventListener('click', (event) => {
        event.preventDefault();
        // fetch('https://fake.api.com', {
        //     method:  'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // });

        setTimeout(() => {
            form.reset();
        }, 1000);
    });
};

eighthSectionFunction();
