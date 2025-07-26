(() => {
  self.init = () => {
    self.buildHTML();
    self.buildCSS();
    self.setEvents();
  };

  self.buildHTML = () => {
    const html = `
      <main id="hasan-arpat-container">
      <div class="header"><h2 class="header-title">Beğenebileceğinizi Düşündüklerimiz</h2></div>
        <div class="banner-wrapper">
        <div class="track" id="track"></div>
        </div>
        <button class="wrapper-arrow prev"><img src="https://cdn06.e-bebek.com/assets/svg/prev.svg" alt="prev"/></button>
        <button class="wrapper-arrow next"><img src="https://cdn06.e-bebek.com/assets/svg/next.svg" alt="next"/></button>
      </main>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
  };

  self.buildCSS = () => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Quicksand&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // CSS
    const css = `
    a{
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    
    }
  #hasan-arpat-container {
    font-family: 'Quicksand', sans-serif;
    width: 100%;
    max-width: 1580px;
    margin: auto;
    margin-top: 100px;
    padding-inline: 15px;
    position: relative;
  }

  .header {
      padding-left: 15px;
      padding-right: 15px;
      background-color: white;
  }

  .header-title {
      font-size: 21.2px;
      line-height: 1.5;
    font-weight: 700;
      
    color: #f28e00;
    text-break: keep-all;
  }

  .banner-wrapper{
    box-shadow: 15px 15px 30px 0 #ebebeb80;
    background-color: #fff;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
  overflow: hidden;
  position: relative;
  }
    .track {
    display: flex;
  scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  align-items:strech;
    }


    .track::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.track::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
}
.track::-webkit-scrollbar-track {
  background: transparent;
  width: 0px;
  height: 0px;
}

    .wrapper-item{
    position: relative;
    margin-right:20px;
    margin-top:20px;
    margin-bottom:20px;

  flex-shrink: 0;
  width: calc(50% - (20px/2));

  z-index: 1;
    font-size: 12px;
    padding: 5px;
    color: #7d7d7d;
    border: 1px solid #ededed;
    border-radius: 10px;
    text-decoration: none;
    background-color: #fff;
    }

.fav-button{
position: absolute;
top: 10px;
right: 10px;
z-index: 10;
background:white;
border:1px solid #e6e6e6ff;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
padding:12px;
background-color: #fff;
border-radius: 50%;
box-shadow: 0 2px 4px 0 #00000024;
width: 50px;
height: 50px;

}

.fav-button .fav-icon{
width: 30px;
height: 30px;
}

.fav-button:hover {
    border-color: #f28e00;}

.product-details{
padding: 0 17px 17px;
}

    .wrapper-item .product-img {
    width: 100%;
    height: auto;
    max-height: 230px;
    object-fit: contain;
    margin-bottom:15px;
    }

    .product-title h2 h3{
    font-size: 11.52px;
    margin-bottom: 20px;
    font-weight:600;
    }

    .product-title {
    display:flex;}
    
    .wrapper-item .discount {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    margin-top: 80px;
    }

    .wrapper-item .discount .discounted-price {
    text-decoration: line-through;
    color: #7d7d7d;
    font-size:14px;
    font-weight: 600;
    }
    .wrapper-item .discount .discount-amount {
    color: #8ad877ff;
    font-size:18px;
    font-weight: 800;
    }

    .wrapper-item .original-price{
    display: block;
    width:100%;
    font-size: 22px;
    font-weight:600;
    color:#00a365;
    margin-top: 16px;}

    .wrapper-item .add-cart-button {
    box-sizing: border-box;
    width: 90%;
    padding: 15px 20px;
    border-radius: 37.5px;
    background-color: #fff7ec;
    color: #f28e00;
    font-size: 14px;
    font-weight: 800;
    margin-top:65px;
    margin-left:5%;
    border: none;
    cursor: pointer;

    }

    .price{
    margin-top:64px;
    font-size: 22px;
    font-weight:600;
    color:#7d7d7d;
    }

    .wrapper-item .add-cart-button:hover {
    background-color: #d77a00;
    color: #fff;
    transition: background-color 0.3s ease-in-out;
    }

    .wrapper-arrow {
    background-color: #fef6eb;
    border: none;
    cursor: pointer;
    z-index: 10;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    bottom: 50%;
    top: auto;
    }

.prev{
    left: -65px;}
.next{
    right: -65px;}


  @media (min-width: 480px) {
    .header {      
    padding: 25px 67px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    background-color: #fef6eb;
    display: flex;
    align-items: center;
    }
    .header-title {
      
    font-size: 28.8px;
    line-height: 1.11;
    margin: 0;
    }
  }

  @media (min-width: 576px) {
    #hasan-arpat-container {
      max-width: 540px;
    }
  }

  
  @media (min-width: 768px) {
    #hasan-arpat-container {
      max-width: 720px;
    }
  }

  
  @media (min-width: 992px) {
    #hasan-arpat-container {
      max-width: 960px;
    }

    .wrapper-item{
  width: calc(33% - (40px/3));
    }
  }


  @media (min-width: 1280px) {
    #hasan-arpat-container {
      max-width: 1180px;
    }
      
    .wrapper-item{
  width: calc(25% - (60px/4));
    }
  }

  @media (min-width: 1480px) {
    #hasan-arpat-container {
      max-width: 1296px;
    }
      
    .wrapper-item{
  width: calc(20% - (80px/5));
    }
  }

  
  @media (min-width: 1580px) {
    #hasan-arpat-container {
      max-width: 1320px;
    }
  }




  @media (min-width: 1920px) {
    #hasan-arpat-container {
      max-width: 1580px;
    }
  }



`;

    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  };

  self.setEvents = async () => {
    // if (
    //   window.location.pathname !== '/' &&
    //   window.location.pathname !== '/index.html'
    // ) {
    //   console.log('wrong page');
    // } else {
    let items = localStorage.getItem('items');
    console.log(items, 'items from localStorage');
    const wrapper = document.querySelector('.banner-wrapper');
    const track = document.getElementById('track');

    const leftArrow = document.querySelector('.prev');
    const rightArrow = document.querySelector('.next');

    let slideAmount;

    if (window.innerWidth >= 1480) {
      slideAmount = track.offsetWidth / 5 + 16; // 5 item görünüyorsa
    } else if (window.innerWidth >= 1280) {
      slideAmount = track.offsetWidth / 4 + 15;
    } else if (window.innerWidth >= 992) {
      slideAmount = track.offsetWidth / 3 + 13;
    } else {
      slideAmount = track.offsetWidth / 2 + 10;
    }
    let currentIndex = 0;
    leftArrow.addEventListener('click', () => {
      console.log('left arrow clicked');
      currentIndex = Math.max(0, currentIndex - 1);
      track.style.transform = `translateX(-${currentIndex * slideAmount}px)`;
    });
    rightArrow.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= 7) return;
      track.style.transform = `translateX(-${currentIndex * slideAmount}px)`;
    });

    wrapper.addEventListener('click', (event) => {
      if (
        event.target.classList.contains('fav-button') ||
        event.target.classList.contains('fav-icon')
      ) {
        const id = event.target.dataset.id;
        console.log(id, 'clicked id');
        items.map((item) => {
          if (item.id == id) {
            console.log(item, 'clicked item');
            item.isFavorite = !item.isFavorite;

            const favIcon = document.getElementById(`fav-${id}`);
            favIcon.src = item.isFavorite
              ? 'https://www.e-bebek.com/assets/svg/favorite.svg'
              : 'https://www.e-bebek.com/assets/svg/default-hover-favorite.svg';
          }
        });
        localStorage.setItem('items', JSON.stringify(items));
      }
    });

    if (!items) {
      console.log('items are empty or null, fetching from API');

      fetch(
        'https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json'
      )
        .then((response) => response.json())
        .then((data) => {
          const updatedData = data.map((item) => ({
            ...item,
            isFavorite: false,
          }));
          localStorage.setItem('items', JSON.stringify(updatedData));
          items = data;
        })
        .catch((error) => console.error('Error:', error));
    } else {
      items = JSON.parse(items);
      console.log(items, 'parsed items from localStorage');
    }

    if (items && items.length > 0) {
      items.forEach((item) => {
        const wrapperItem = document.createElement('div');
        wrapperItem.className = 'wrapper-item';

        wrapperItem.innerHTML = `
          <button class="fav-button" id="fav-${item.id}" data-id="${item.id}">
            <img  id="fav-${item.id}" data-id="${
          item.id
        }" src="https://www.e-bebek.com/assets/svg/default-favorite.svg" class="fav-icon"/>
          </button>
          <img class="product-img" src="${item.img}" alt="banner 1"/>
          <div class="product-details">
            <a href="/${item.id}" class="product-title"><h2>${
          item.brand
        }<span style="font-size:12px;font-weight:600;line-height:1.222222;"> - ${
          item.name
        }</span></h2></a>
            <div class="vote" style="display: flex; align-items: center; justify-content: start; gap: 5px;font-size:12px
        ">
        <svg stroke="yellow" fill="yellow" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Star"><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
        <svg stroke="yellow" fill="yellow" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Star"><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
        <svg stroke="yellow" fill="yellow" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Star"><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
        <svg stroke="yellow" fill="yellow" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Star"><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
        <svg stroke="currentColor" fill="yellow" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="Star"><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>
        <span>(17)</span>
        </div>
            ${
              item.original_price != item.price
                ? `<div class="discount">
              <span class="discounted-price">${item.original_price} TL</span>
              <span class="discount-amount">%${Math.round(
                (item.price * 100) / item.original_price
              )}</span>
            </div>`
                : ``
            }
            ${
              item.price == item.original_price
                ? `<p class="price">${item.price} TL</p>`
                : ``
            }
            <p style="margin-bottom:auto;margin-top:20px;border-radius:12px; font-size:11px;background-color:#8ad877ff;color:green;border:none;padding:4px 8px;">
              ${item.promotion || 'Farklı Ürünlerde 3 Al 2 Öde'}
            </p>
          </div>
          <button class="add-cart-button">Sepete Ekle</button>
        `;

        track.appendChild(wrapperItem);
      });
    }

    // }
  };

  self.init();
})();
