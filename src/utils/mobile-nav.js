const mobileNav = () => {
    const bars = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const links = document.querySelectorAll('.mobile-nav__link');
    let isopen = false;
    bars.addEventListener('click',()=>{
        isopen=!isopen;
        if(isopen) {
            mobileNav.style.display='flex';
            document.body.style.overflowY='hidden';
        }
        else {
            mobileNav.style.display='none';
            document.body.style.overflowY='auto';
        }
    });

    links.forEach(link=>{   
        link.addEventListener('click',()=>{
            isopen = false;
            mobileNav.style.display='none';
            document.body.style.overflowY='auto';
        })
    })
}

export default mobileNav;