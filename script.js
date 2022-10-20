// SideBar
const menuItems = document.querySelectorAll('.menu-item');
// Messages
const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector("#message-search");
// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

/* ============================
SideBar
===============================*/

// Remove active Class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector(".notifications-popup").style.display = 'none';
        }
        else{
            document.querySelector(".notifications-popup").style.display = 'block';
            document.querySelector("#notifications .notification-count").style.display = 'none'
        }
    });
});
/* ============================
Messages
===============================*/

// Searches Chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!= -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none';
        }
    })
}

// Search Chat
messageSearch.addEventListener('keyup', searchMessage);

// Shadow Box when click in message menu

messagesNotification.addEventListener('click', () =>{
    messages.style.transition ='1s'
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(()=> {
        messages.style.boxShadow = 'none';
    },3000);
});

/* ============================
Theme/Display Costomization
===============================*/

// Opens Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
theme.addEventListener('click',openThemeModal);

// Close Modal
const closeThmeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click',closeThmeModal);

// ============== Fonts ========== //
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
};

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let sizeFont;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            sizeFont = '10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            sizeFont = '13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            sizeFont = '16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            sizeFont = '19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            sizeFont = '22px';
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }
        
        // Change font size
        document.querySelector('html').style.fontSize = sizeFont;
    })
})

// ============== Primary Color ========== //

// Remove Active Class from colors
const changeActiveClorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        // Remove Active Class from colors
        changeActiveClorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// ============== Backgrounds ========== //

// theme backgrounds values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background color
const changeBg = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
};

bg1.addEventListener('click', () => {
    // add active class
    bg1.classList.add('active');
    // remove active class from the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
});
bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    bg2.classList.add('active');
    // remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
});

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%'; 
    lightColorLightness = '0%';

    // add active class
    bg3.classList.add('active');
    // remove active class from the others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
});