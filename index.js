const vyberPlan = (cisloPlanu) => {
    const vybranyPlan = document.querySelector(`.plán${cisloPlanu}`)
    if (vybranyPlan === null) {
        return // Pokud není vybraný plán nalezen, ukončit
    }

    const plány = document.querySelector('.plan');
    plany.forEach(plan => {
        plan.classList.remove('plán--vybrán');
    });

    vybranyPlan.classList.add('plán--vybrán');
};