// изменение цвета скрола

// document.addEventListener('resize', () => {
//     if (window.scrollY > 450 && heder.style.color != 'red') {
//       header.style.color = 'red'
//     } else if (header.style.color == 'red') header.style.color = 'auto'
//   })


//появление Header при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    
    const onScrollHeader = () => {

        const header = document.querySelector('.header-blockActive');
        let prevScroll = window.pageYOffset;
        let currentScroll;

        window.onload = () => {
            header.classList.add('header-blockActive__hidden');
        }
        window.addEventListener('scroll', () => { 
            currentScroll = window.pageYOffset;


            if (window.scrollY < 450) {

                header.classList.remove('header-blockActive__hidden');
                
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
                header.classList.add('header-blockActive__hidden');
            }
        });
    }
    onScrollHeader();
});



// Выделение кнопки при наведении на карточку

hoverOnCard = () => {
    document.getElementById("hoverTour").classList.add("activeTour");
}
hoverOnCard2 = () => {
    document.getElementById("hoverTour2").classList.add("activeTour");
}
hoverOnCard3 = () => {
    document.getElementById("hoverTour3").classList.add("activeTour");
}
hoverOnCard4 = () => {
    document.getElementById("hoverTour4").classList.add("activeTour");
}
hoverOnCard5 = () => {
    document.getElementById("hoverTour5").classList.add("activeTour");
}
hoverOnCard6 = () => {
    document.getElementById("hoverTour6").classList.add("activeTour");
}
//блокистория путешествий
hoverOnCard7 = () => {
    document.getElementById("hoverTour7").classList.add("activeTour");
}
hoverOnCard8 = () => {
    document.getElementById("hoverTour8").classList.add("activeTour");
}
hoverOnCard9 = () => {
    document.getElementById("hoverTour9").classList.add("activeTour");
}



hoverOffCard = () => {
    document.getElementById("hoverTour").classList.remove("activeTour");
}
hoverOffCard2 = () => {
    document.getElementById("hoverTour2").classList.remove("activeTour");
}
hoverOffCard3 = () => {
    document.getElementById("hoverTour3").classList.remove("activeTour");
}
hoverOffCard4 = () => {
    document.getElementById("hoverTour4").classList.remove("activeTour");
}
hoverOffCard5 = () => {
    document.getElementById("hoverTour5").classList.remove("activeTour");
}
hoverOffCard6 = () => {
    document.getElementById("hoverTour6").classList.remove("activeTour");
}
//блок история путешествий
hoverOffCard7 = () => {
    document.getElementById("hoverTour7").classList.remove("activeTour");
}
hoverOffCard8 = () => {
    document.getElementById("hoverTour8").classList.remove("activeTour");
}
hoverOffCard9 = () => {
    document.getElementById("hoverTour9").classList.remove("activeTour");
}




// Делаем маску для подстановки номера телефона в инпуте(нашел в интернете)

document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});


