 // všechny plány
 
 const selectPlan= (planNumber) => {
   
  let plan1 = document.getElementById ('plan1')
  let plan2 = document.getElementById ('plan2')
  let plan3 = document.getElementById ('plan3')


    // Projde to všechny plány
    for (let i = 0; i < plans.length; i++) {
    // Odebrání třídy od všech plánů
        plans[i].classList.remove('plan--selected')
    }

    // Přidání třídy k  plánu
    let selectedPlan = document.querySelector('.plan-' + planNumber)
    if (selectedPlan) {
        selectedPlan.classList.add('plan--selected')
    }
}