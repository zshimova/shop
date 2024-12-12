function randomGifts() {
    fetch('gifts.json')
        .then(response => response.json())
        .then(gifts => {
            let giftCard = '';

            // 4 рандомных подарка
            for (let i = 0; i < 4; i++) {
                // рандомный индекс подарка
                let randomIndex = Math.floor(Math.random() * gifts.length);
                let randomGift = gifts[randomIndex];

                let giftImage, textColor;

                switch (randomGift.category) {
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
 
                 // карточка подарка
                 giftCard += `
                     <div class="gifts__card">
                         <a href="" class="gifts__link">
                             <img class="gifts__card_img" src="${giftImage}" alt="${randomGift.name}">
                             <div class="gifts__text">
                                 <h4 class="work" style="color: ${textColor}">${randomGift.category}</h4>
                                 <h3>${randomGift.name}</h3>
                             </div>
                         </a>
                     </div>
                 `;
             }
            document.querySelector('.gifts__container').innerHTML = giftCard;

        })
        .catch(error => console.log('Error:', error));
};

randomGifts();