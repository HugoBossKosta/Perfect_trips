// изменение цвета скрола

document.addEventListener('resize', () => {
    if (window.scrollY > 450 && heder.style.color != 'red') {
      header.style.color = 'red'
    } else if (header.style.color == 'red') header.style.color = 'auto'
  })