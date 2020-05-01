const slide = document.querySelector('#comparador')

window.onmousemove = (e) => {

    let ejeX = e.clientX;

    // console.log('ejeX', ejeX);

    slide.style.left = ejeX + 'px'

}