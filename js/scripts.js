let listDist = document.querySelectorAll('.list-tabs__tab-dist');
let listTabs = document.querySelectorAll('.list-tabs__tab');
let activeTab = document.querySelector('.list-tabs__tab_active');
let activeDist = document.querySelector('.list-tabs__tab-dist_active');

listTabs = Array.from(listTabs);
listDist = Array.from(listDist);

function openTab(e, item, index) {
    if(activeDist) activeDist.classList.remove('list-tabs__tab-dist_active');
    item.classList.add('list-tabs__tab-dist_active');
    activeDist = document.querySelector('.list-tabs__tab-dist_active');

    if(activeTab) activeTab.classList.remove('list-tabs__tab_active');
    listTabs[index].classList.add('list-tabs__tab_active');
    activeTab = document.querySelector('.list-tabs__tab_active');
}

listDist.forEach((item, index) => {
    item.addEventListener('click', e => {
        openTab(e, item, index);
    });
    item.addEventListener('touch', e => {
        openTab(e, item, index);
    });
});


const burgerCross = document.querySelector('.burger__cross');
const burgerContainer = document.querySelector('.burger__container');

function showBurgerContainer() {
    burgerContainer.classList.toggle('show');
    burgerCross.classList.toggle('burger__cross_open');
}

burgerCross.addEventListener('touch', showBurgerContainer);
burgerCross.addEventListener('click', showBurgerContainer);
