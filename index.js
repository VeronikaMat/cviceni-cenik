
 
 const selectPlan = (planNumber) => {
 let vyber = document.getElementById(`plan${planNumber}`)

    let plan1 = document.getElementById('plan1')
    let plan2 = document.getElementById('plan2')
    let plan3 = document.getElementById('plan3')
}

    if (planNumber === 1) {
        plan1.classList.add('plan--selected')
        plan2.classList.remove('plan--selected')
        plan3.classList.remove('plan--selected')
    } else if (planNumber === 2) {
        plan1.classList.remove('plan--selected')
        plan2.classList.add('plan--selected')
        plan3.classList.remove('plan--selected')
    } else if (planNumber === 3) {
        plan1.classList.remove('plan--selected')
        plan2.classList.remove('plan--selected')
        plan3.classList.add('plan--selected')
    }
