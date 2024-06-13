window.addEventListener('DOMContentLoaded', () => {
    /**
     * @type {[{
    *     element: HTMLElement, 
    *     onView: Function,
    *     onOut: Function,
    * }]}
    */
    const observeList = []
    module.exports.observeList = observeList

    const observer = new IntersectionObserver((entry) => {
        for (let i = 0; i < entry.length; i++) {
            for (let j = 0; j < observeList.length; j++) {
                if (observeList[j].element === entry[i].target) {
                    if (entry[i].isIntersecting) {
                        setTimeout(() => {
                            console.log(entry[i].target)
                            observeList[j].onView(entry[i].target)
                        }, 100);
                    }
                    else {
                        observeList[j].onOut(entry[i].target)
                    }
                }
            }

        }
    },
    {
        threshold: 0.3,
    }
    )

    require('./pages/main.js')
    require('./pages/shoes.js')

    for (let i = 0; i < observeList.length; i++) {
        observer.observe(observeList[i].element)
    }



    require('./lib/leftPage.js')
    require('./lib/checkMobile.js')
})