function main(){

    
    const menu = () =>{
        const btn = document.querySelector(".nav__button")
        const menuHamburger = document.querySelector("#nav__menu-controls")
        
        btn.addEventListener("click",(event) => {
            const activatedOrNot = menuHamburger.classList.toggle("activated")
            btn.setAttribute("aria-expanded",activatedOrNot)
            
            chanceIcone(activatedOrNot)
        })
    }

    const chanceIcone = (boolean) =>{
        const btn = document.querySelector(".nav__button")
        const icone = btn.querySelector("i")

        const activatedIcon = boolean ? icone.className = "fa-solid fa-xmark" : icone.className = "fa-solid fa-bars"
    }
    
    menu()
}

main()