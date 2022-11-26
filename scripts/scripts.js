// изменение цвета скрола

// document.addEventListener('resize', () => {
//     if (window.scrollY > 450 && heder.style.color != 'red') {
//       header.style.color = 'red'
//     } else if (header.style.color == 'red') header.style.color = 'auto'
//   })


//появление Header при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    
    const onScrollHeader = () => {

        const header = document.querySelector('.header-block');
        let prevScroll = window.pageYOffset;
        let currentScroll;

        window.onload = () => {
            header.classList.add('header-block__hidden');
        }
        window.addEventListener('scroll', () => { 
            currentScroll = window.pageYOffset;


            if (window.scrollY > 450) {

                header.classList.remove('header-block__hidden');
                
                // если нужно сделать, чтобы скролл убирался динамически при измении колеса мыши

                // const headerHidden = () => header.classList.contains('header-block__hidden');

                // if (currentScroll > prevScroll && !headerHidden()) { 
                //     header.classList.add('header-block__hidden');
                // }
                // if (currentScroll < prevScroll && headerHidden()) { 
                //     header.classList.remove('header-block__hidden') ;
                // }

                // prevScroll = currentScroll;
            }
            else {
                header.classList.add('header-block__hidden');
            }

        });
    }
    onScrollHeader();

});

