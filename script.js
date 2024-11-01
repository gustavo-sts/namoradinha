const no_btn = document.querySelector("#no-btn");
const yes_btn = document.querySelector("#yes-btn");

no_btn.addEventListener('click', ()=>{
    no_btn.style.position = "absolute";
    no_btn.style.marginLeft = Math.random() * 200 + "px";
    no_btn.style.marginTop = Math.random() + Math.random() * 200 + "px"; 
})

yes_btn.addEventListener("click", ()=>{
    const aceitou = confirm("Certeza? :| (Ok = sim, Cancelar = não)");
    if(aceitou == true){
        alert("Quase lá. Só não quero te enganar, mas ao mesmo tempo não é justo te fazer esperar.");
    }
})
