const app = require('../index')
const observeList = app.observeList

const mainDiv = document.querySelector('.page.main')

let titleEl = document.querySelector('.page.main .title')
let titleStr = 'Main Page 입니다!!'
let titleItemList = []
for (let i = 0; i < titleStr.length; i++) {
    let span = document.createElement('span')
    span.innerText = titleStr[i]
    titleEl.appendChild(span)
    titleItemList.push(span)
}

const maskDiv = document.querySelector('.page.main .mask')

let eventList = []

observeList.push({
    element: mainDiv,
    onView: (e) => {
        let time = 0;
        for (let i = 0; i < titleItemList.length; i++) {
            const id = i
            eventList.push(
                setTimeout(() => {
                    titleItemList[id].classList.add('active')
                },
                    time * 50
                ))
            time++
        }

        eventList.push(
            setTimeout(() => {
                maskDiv.classList.add('active')
            },
                time * 50
            ))
    },
    onOut: (e) => {
        for (let i = 0; i < eventList.length; i++) {
            clearTimeout(eventList[i])
        }
        eventList = []
        for (let i = 0; i < titleItemList.length; i++) {
            titleItemList[i].classList.remove('active')
        }
        maskDiv.classList.remove('active')
    },
})