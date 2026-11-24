const WHATSAPP_NUMBER = "77077767679"; // Международный формат без плюса и пробелов
const PRODUCTS = [
  {id:1,category:"everyday",price:89000,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",ru:{name:"SOFT TAUPE",desc:"Мягкая форма · оттенок taupe"},kk:{name:"SOFT TAUPE",desc:"Жұмсақ пішін · taupe түсі"}},
  {id:2,category:"classic",price:115000,image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",ru:{name:"CLASSIC NOIR",desc:"Строгая форма · чёрный"},kk:{name:"CLASSIC NOIR",desc:"Классикалық пішін · қара"}},
  {id:3,category:"everyday",price:95000,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",ru:{name:"CITY CHOCOLATE",desc:"Городская модель · шоколадный"},kk:{name:"CITY CHOCOLATE",desc:"Қалалық үлгі · шоколад түсті"}},
  {id:4,category:"evening",price:65000,image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",ru:{name:"ÉCLAT MINI",desc:"Компактная модель · кремовый"},kk:{name:"ÉCLAT MINI",desc:"Шағын үлгі · крем түсті"}},
  {id:5,category:"classic",price:125000,image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=85",ru:{name:"STRUCTURE",desc:"Архитектурный силуэт · карамель"},kk:{name:"STRUCTURE",desc:"Айқын пішін · карамель түсті"}},
  {id:6,category:"evening",price:75000,image:"https://images.unsplash.com/photo-1564422170194-896b89110ef8?auto=format&fit=crop&w=900&q=85",ru:{name:"PETITE NOIR",desc:"Лаконичная вечерняя модель"},kk:{name:"PETITE NOIR",desc:"Ықшам кешкі үлгі"}}
];
const TEXT = {
 ru:{
  announcement:"Доставка по всему Казахстану · Заказы через WhatsApp",navCatalog:"Коллекция",navAbout:"О бренде",navDelivery:"Доставка",navContacts:"Контакты",cart:"Корзина",
  heroEyebrow:"THE NEW COLLECTION · 2026",heroTitle:"Элегантность<br>в каждой детали.",heroCopy:"Сумки в современном премиальном стиле — для вашего ритма и индивидуальности.",heroButton:"Смотреть коллекцию",
  introEyebrow:"LESS, BUT BETTER",introTitle:"Выразительный стиль.<br>Ничего лишнего.",introCopy:"Мы отбираем модели с продуманным силуэтом, спокойной палитрой и вниманием к деталям.",
  catalogEyebrow:"BAGÉ SELECTION",catalogTitle:"Коллекция",catalogSub:"Избранные модели сезона",filterAll:"Все",filterClassic:"Классические",filterEveryday:"На каждый день",filterEvening:"Вечерние",
  storyEyebrow:"ABOUT BAGÉ",storyTitle:"Красота —<br>в простоте.",storyCopy:"BAGÉ — независимый магазин сумок в премиальном дизайнерском стиле. Мы выбираем модели без чужих логотипов, уделяя внимание форме, материалам и деталям.",storyLink:"Связаться с нами ↗",
  value1Title:"Продуманный выбор",value1Copy:"Модели, которые легко вписываются в гардероб.",value2Title:"Честное описание",value2Copy:"Указываем реальные материалы и характеристики.",value3Title:"Доставка по Казахстану",value3Copy:"Отправляем заказы в города Казахстана.",
  deliveryEyebrow:"MADE SIMPLE",deliveryTitle:"Ваша BAGÉ —<br>в вашем городе.",deliveryCopy:"Оформите заказ через WhatsApp. Мы подтвердим наличие, согласуем доставку и сообщим итоговую стоимость.",deliveryButton:"Написать в WhatsApp",
  footerNote:"Цены указаны в тенге · Казахстан",cartTitle:"Ваш заказ",total:"Итого",nameLabel:"Ваше имя",cityLabel:"Город",phoneLabel:"Телефон",orderButton:"Оформить через WhatsApp",formNote:"Нажимая кнопку, вы перейдёте в WhatsApp с подготовленным сообщением. Заказ считается подтверждённым после ответа менеджера.",
  add:"Добавить в корзину",added:"Добавлено",empty:"Корзина пока пуста.",remove:"Удалить",item:"шт.",message:"Здравствуйте! Хочу оформить заказ BAGÉ.",orderName:"Имя",orderCity:"Город",orderPhone:"Телефон",orderTotal:"Итого"
 },
 kk:{
  announcement:"Қазақстан бойынша жеткізу · WhatsApp арқылы тапсырыс",navCatalog:"Коллекция",navAbout:"Бренд туралы",navDelivery:"Жеткізу",navContacts:"Байланыс",cart:"Себет",
  heroEyebrow:"ЖАҢА КОЛЛЕКЦИЯ · 2026",heroTitle:"Әр бөлшектегі<br>талғампаздық.",heroCopy:"Күнделікті өміріңіз бен даралығыңызға арналған заманауи премиум стильдегі сөмкелер.",heroButton:"Коллекцияны көру",
  introEyebrow:"АЗ, БІРАҚ САПАЛЫ",introTitle:"Айқын стиль.<br>Артық ештеңе жоқ.",introCopy:"Біз пішіні үйлесімді, түсі байсалды және әр бөлшегі мұқият ойластырылған үлгілерді таңдаймыз.",
  catalogEyebrow:"BAGÉ ТАҢДАУЫ",catalogTitle:"Коллекция",catalogSub:"Маусымның таңдаулы үлгілері",filterAll:"Барлығы",filterClassic:"Классикалық",filterEveryday:"Күнделікті",filterEvening:"Кешкі",
  storyEyebrow:"BAGÉ ТУРАЛЫ",storyTitle:"Сұлулық —<br>қарапайымдылықта.",storyCopy:"BAGÉ — премиум дизайнерлік стильдегі сөмкелердің тәуелсіз дүкені. Біз басқа брендтердің логотиптерінсіз, пішініне, материалына және бөлшектеріне мән беретін үлгілерді таңдаймыз.",storyLink:"Бізбен байланысу ↗",
  value1Title:"Мұқият таңдау",value1Copy:"Кез келген киім үлгісіне үйлесетін модельдер.",value2Title:"Нақты сипаттама",value2Copy:"Материалдар мен сипаттамаларды шынайы көрсетеміз.",value3Title:"Қазақстан бойынша жеткізу",value3Copy:"Тапсырыстарды Қазақстан қалаларына жібереміз.",
  deliveryEyebrow:"ОҢАЙ ӘРІ ЫҢҒАЙЛЫ",deliveryTitle:"BAGÉ —<br>сіздің қалаңызда.",deliveryCopy:"WhatsApp арқылы тапсырыс беріңіз. Біз тауардың бар-жоғын растап, жеткізуді келісіп, жалпы құнын хабарлаймыз.",deliveryButton:"WhatsApp-қа жазу",
  footerNote:"Бағалар теңгемен көрсетілген · Қазақстан",cartTitle:"Сіздің тапсырысыңыз",total:"Барлығы",nameLabel:"Атыңыз",cityLabel:"Қала",phoneLabel:"Телефон",orderButton:"WhatsApp арқылы тапсырыс беру",formNote:"Батырманы басқанда дайын хабарламамен WhatsApp ашылады. Тапсырыс менеджер жауап бергеннен кейін расталады.",
  add:"Себетке қосу",added:"Қосылды",empty:"Себет әзірге бос.",remove:"Өшіру",item:"дана",message:"Сәлеметсіз бе! BAGÉ дүкенінен тапсырыс бергім келеді.",orderName:"Аты",orderCity:"Қала",orderPhone:"Телефон",orderTotal:"Барлығы"
 }
};
let lang="ru", cart={};
const $=s=>document.querySelector(s);
const money=n=>new Intl.NumberFormat("ru-RU").format(n)+" ₸";
function t(key){return TEXT[lang][key]||key}
function setLanguage(next){lang=next;document.documentElement.lang=lang;$("#langToggle").textContent=lang==="ru"?"ҚАЗ":"РУС";document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(TEXT[lang][k])el.innerHTML=TEXT[lang][k]});renderProducts();renderCart()}
function renderProducts(filter="all"){
 const list=PRODUCTS.filter(p=>filter==="all"||p.category===filter);
 $("#productGrid").innerHTML=list.map(p=>`<article class="product-card">
  <img class="product-photo" src="${p.image}" alt="${p[lang].name}" loading="lazy" onerror="this.style.opacity='.25'">
  <div class="product-info"><h3 class="product-name">${p[lang].name}</h3><p class="product-description">${p[lang].desc}</p><div class="product-price">${money(p.price)}</div>
  <button class="add-button" data-add="${p.id}">${t("add")}</button></div></article>`).join("");
}
function renderCart(){
 const entries=Object.entries(cart).filter(([,q])=>q>0);
 const count=entries.reduce((s,[,q])=>s+q,0),total=entries.reduce((s,[id,q])=>s+PRODUCTS.find(p=>p.id===+id).price*q,0);
 $("#cartCount").textContent=count;$("#cartTotal").textContent=money(total);
 $("#cartItems").innerHTML=entries.length?entries.map(([id,q])=>{const p=PRODUCTS.find(x=>x.id===+id);return `<div class="cart-row"><div><strong>${p[lang].name}</strong><small>${money(p.price)} · ${q} ${t("item")}</small></div><div class="qty-controls"><button data-minus="${id}">−</button><span>${q}</span><button data-plus="${id}">+</button></div><button class="remove-item" data-remove="${id}" aria-label="${t("remove")}">×</button></div>`}).join(""):`<p class="empty-cart">${t("empty")}</p>`;
}
function openCart(){ $("#cartDrawer").classList.add("open");$("#drawerBackdrop").classList.add("open")}
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#drawerBackdrop").classList.remove("open")}
$("#filters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter)});
$("#productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const id=b.dataset.add;cart[id]=(cart[id]||0)+1;renderCart();b.textContent=t("added");setTimeout(()=>{if(b.isConnected)b.textContent=t("add")},900)});
$("#cartItems").addEventListener("click",e=>{const el=e.target.closest("button");if(!el)return;const id=el.dataset.plus||el.dataset.minus||el.dataset.remove;if(!id)return;if(el.dataset.plus)cart[id]=(cart[id]||0)+1;else if(el.dataset.minus)cart[id]=Math.max(0,(cart[id]||0)-1);else delete cart[id];renderCart()});
$("#cartOpen").addEventListener("click",openCart);$("#cartClose").addEventListener("click",closeCart);$("#drawerBackdrop").addEventListener("click",closeCart);
$("#langToggle").addEventListener("click",()=>setLanguage(lang==="ru"?"kk":"ru"));
$("#menuToggle").addEventListener("click",()=>$("#nav").classList.toggle("open"));
$("#nav").addEventListener("click",e=>{if(e.target.closest("a"))$("#nav").classList.remove("open")});
$("#orderForm").addEventListener("submit",e=>{
 e.preventDefault();const entries=Object.entries(cart).filter(([,q])=>q>0);if(!entries.length){alert(t("empty"));return}
 const total=entries.reduce((s,[id,q])=>s+PRODUCTS.find(p=>p.id===+id).price*q,0);
 const lines=entries.map(([id,q])=>{const p=PRODUCTS.find(x=>x.id===+id);return `${p[lang].name} × ${q} — ${money(p.price*q)}`});
 const msg=[t("message"),"",...lines,"",`${t("orderTotal")}: ${money(total)}`,`${t("orderName")}: ${$("#customerName").value}`,`${t("orderCity")}: ${$("#customerCity").value}`,`${t("orderPhone")}: ${$("#customerPhone").value}`].join("\n");
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
});
$("#year").textContent=new Date().getFullYear();
setLanguage("ru");
