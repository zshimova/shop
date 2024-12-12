const tabs = document.querySelectorAll('.tab');
const container = document.querySelector('.gifts__container');
let gifts = [];


function loadGifts() {
    fetch('gifts.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            gifts = data;
            console.log(data);
            data.forEach((jsonObject) => {
                // Доступ к свойствам каждого объекта JSON
                const name = jsonObject.name;
                const category = jsonObject.category;
                let giftImage, textColor;

                switch (category) {
                    case 'For Work':
                        giftImage = 'src/img/gift-for-work.png'; 
                        textColor = 'blue';
                        break;
                    case 'For Harmony':
                        giftImage = 'src/img/gift-for-harmony.png'; 
                        textColor = '#06A44F'; 
                        break;
                    case 'For Health':
                        giftImage = 'src/img/gift-for-health.png';
                        textColor = '#FF43F7'; 
                        break;
                }
                container.innerHTML += `
                    <div class="gifts__card">
                         <a href="" class="gifts__link">
                             <img class="gifts__card_img" src="${giftImage}" alt="${name}">
                             <div class="gifts__text">
                                 <h4 class="work" style="color: ${textColor}">${category}</h4>
                                 <h3>${name}</h3>
                             </div>
                         </a>
                     </div>
                `;
                // let modal = document.querySelector('.modal');
                // let card = document.querySelector('.gifts__link');
                // console.log(card);
                // console.log(modal);
                // card.addEventListener('click', () => {
                //     modal.style.display = 'block';
                // })
              });
        })
        .catch(error => {
            console.error('Error loading gifts:', error);
            container.innerHTML = '<p>Failed to load gifts. Please try again later.</p>';
        });
}

// Обработка кликов по кнопкам
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const cats = tab.getAttribute('data-category'); 
        // if (cats === 'For work') {
        //     console.log('ffffffff');
        // };
        // const work = gifts.filter(function(gift) {
        //     console.log(work);
        //     return gift.category === 'For work';
        //   });
        loadGifts();
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});


loadGifts();