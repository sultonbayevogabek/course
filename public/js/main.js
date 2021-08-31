document.addEventListener('DOMContentLoaded', () => {
    const bonusElements = document.querySelectorAll('.bonus__element')

    bonusElements.forEach(el => {
        el.addEventListener('click', e => {
            const target = e.currentTarget
            if (target.classList.contains('active')) {
                return target.classList.remove('active')
            }
            bonusElements.forEach(el => el.classList.remove('active'))
            target.classList.add('active')
        })
    })
})