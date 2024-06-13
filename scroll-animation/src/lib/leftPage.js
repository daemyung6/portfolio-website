/**
 * @type {HTMLElement}
 */
const leftPageOutter = document.querySelector('.root .left-page-outter')
/**
 * @type {HTMLElement}
 */
const inner = document.querySelector('.root .left-page-outter .page-inner')

window.addEventListener('scroll', () => {
    if (leftPageOutter.offsetTop > window.scrollY) {
        inner.style.position = 'absolute'
        inner.style.left = '0%'
    }
    else if (
        (leftPageOutter.offsetTop <= window.scrollY) &&
        (
            window.scrollY <=
            leftPageOutter.offsetTop +
            leftPageOutter.offsetHeight
        )
    ) {
        inner.style.position = 'fixed'
        inner.style.left = `${((leftPageOutter.offsetTop - window.scrollY) / leftPageOutter.offsetHeight) * 100 * 3
            }%`
    }
    else {
        inner.style.position = 'absolute'
        inner.style.left = `-300%`
    }
})