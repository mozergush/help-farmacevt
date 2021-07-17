import {createStore} from "vuex";

export default createStore({
    state: () => ({
        prep1: {
            name: 'Препарат 1',
            value: 0
        },
        prep2: {
            name: 'Препарат 2',
            value: 0
        },
        prep3: {
            name: 'Препарат 3',
            value: 0
        },
        currentCard: 1,
        cards: [
            {
                id: 1,
                img: 'pacient-item1',
                title: 'Марія, 19 років',
                text: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.'
            },
            {
                id: 2,
                img: 'pacient-item2',
                title: 'Степан, 61 рік',
                text: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?'
            },
            {
                id: 3,
                img: 'pacient-item3',
                title: 'Любов, 58 років',
                text: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.'
            },
            {
                id: 4,
                img: 'pacient-item4',
                title: 'Олександр, 20 років',
                text: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
            },
            {
                id: 5,
                img: 'pacient-item5',
                title: 'Ірина, 55 років',
                text: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.'
            },
            {
                id: 6,
                img: 'pacient-item6',
                title: 'Валентина, 75 років',
                text: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!'
            }
        ]
    }),
    mutations: {
        iteratePrep(state, prep){
            state[prep].value++;
        },
        iterateCurrentCard(state){
            state.currentCard++;
        },
        resetGame(state){
            state.prep1.value = 0;
            state.prep2.value = 0;
            state.prep3.value = 0;
            state.currentCard = 1;
        },
    },
})