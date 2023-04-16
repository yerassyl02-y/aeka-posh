<template>
    <div
        class="success-page d-flex justify-center bg-primary h-full w-full"
        :class="{ wheel_open: !showEmail }"
    >
        <form
            v-if="showEmail"
            @submit.prevent="onSubmit"
            ref="form"
            class="form d-flex flex-column align-center"
        >
            <h1 class="form__title">Введите пожалуйста ваш email</h1>
            <label for="email" class="form__label">
                Введите эл.почту
                <input
                    type="email"
                    class="form__input"
                    v-model="email"
                    id="email"
                />
            </label>
            <button
                class="form__btn d-flex align-center justify-center bg-brown"
                type="submit"
            >
                Перейти к крутке барабана
            </button>
        </form>
        <div
            v-if="showWheel"
            class="wheel-content d-flex flex-column align-center justify-center"
        >
            <div class="d-flex flex-column align-center">
                <h1 class="wheel-content__title">Поздравляем!</h1>
                <p class="wheel-content__subtitle">
                    Крути барабан и выигрывай прямо сейчас
                </p>
            </div>
            <div class="wheel">
                <img
                    src="@/assets/images/arrrow.svg"
                    alt=""
                    class="wheel__arrow"
                />
                <FortuneWheel
                    class="wheel__main"
                    type="image"
                    :useWeight="true"
                    :prizes="prizes"
                    :angleBase="30"
                    @rotateStart="onImageRotateStart"
                    @rotateEnd="onRotateEnd"
                    :prizeId="prizeId"
                    :verify="false"
                    :duration="14000"
                >
                    <img
                        slot="wheel"
                        src="@/assets/images/wheel2.svg"
                        class="wheel__image"
                    />
                    <img
                        slot="button"
                        src="@/assets/images/wheel-button.svg"
                        class="wheel__btn"
                    />
                </FortuneWheel>
            </div>
        </div>
        <div
            v-if="showPrize"
            class="prize d-flex flex-column align-center justify-center"
        >
            <h2 class="prize__title">Получи свой приз!</h2>
            <div class="prize__image d-flex align-center justify-center">
                <img :src="prize.image" />
            </div>
            <p class="prize__subtitle">Вы выиграли</p>
            <h3 class="prize__item">{{ prize.name }}</h3>
            <span class="prize__instructions"
                >Приз и доступ к курсу придет <b>{{ email }}!</b></span
            >
            <button
                class="prize__button d-flex align-center justify-center bg-brown"
                @click="openLink"
            >
                Хорошо
            </button>
            <span class="prize__faq"
                >В случае вопросов и доступа к курсу пишите на номер
                <i>whatsapp</i>
            </span>
            <a
                href="https://wa.me/+7 776 502 3636"
                class="prize__link d-flex align-center"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.02621 1.33332C4.38621 1.33332 1.41954 4.29999 1.41954 7.93999C1.41954 9.10665 1.72621 10.24 2.29954 11.24L1.36621 14.6667L4.86621 13.7467C5.83288 14.2733 6.91954 14.5533 8.02621 14.5533C11.6662 14.5533 14.6329 11.5867 14.6329 7.94665C14.6329 6.17999 13.9462 4.51999 12.6995 3.27332C12.0883 2.65594 11.3603 2.16643 10.558 1.83336C9.75561 1.50028 8.89496 1.3303 8.02621 1.33332ZM8.03288 2.44666C9.49954 2.44666 10.8729 3.01999 11.9129 4.05999C12.4233 4.57022 12.8279 5.1762 13.1037 5.84316C13.3794 6.51013 13.5207 7.22495 13.5195 7.94665C13.5195 10.9733 11.0529 13.4333 8.02621 13.4333C7.03954 13.4333 6.07288 13.1733 5.23288 12.6667L5.03288 12.5533L2.95288 13.1L3.50621 11.0733L3.37288 10.86C2.82217 9.98577 2.53089 8.9732 2.53288 7.93999C2.53954 4.91332 4.99954 2.44666 8.03288 2.44666ZM5.68621 4.88666C5.57954 4.88666 5.39954 4.92666 5.24621 5.09332C5.09954 5.25999 4.66621 5.66666 4.66621 6.47332C4.66621 7.28666 5.25954 8.06666 5.33288 8.17999C5.42621 8.29332 6.50621 9.95999 8.16621 10.6667C8.55954 10.8467 8.86621 10.9467 9.10621 11.02C9.49954 11.1467 9.85954 11.1267 10.1462 11.0867C10.4662 11.04 11.1195 10.6867 11.2595 10.3C11.3995 9.91332 11.3995 9.58665 11.3595 9.51332C11.3129 9.44666 11.2062 9.40665 11.0395 9.33332C10.8729 9.23999 10.0595 8.83999 9.91288 8.78665C9.75954 8.73332 9.66621 8.70666 9.53955 8.86665C9.43288 9.03332 9.11288 9.40666 9.01954 9.51332C8.91954 9.62665 8.82621 9.63999 8.66621 9.55999C8.49288 9.47332 7.95954 9.29999 7.33288 8.73999C6.83954 8.29999 6.51288 7.75999 6.41288 7.59332C6.33288 7.43332 6.40621 7.33332 6.48621 7.25999C6.55954 7.18666 6.66621 7.06665 6.73288 6.96665C6.81954 6.87332 6.84621 6.79999 6.89954 6.69332C6.95288 6.57999 6.92621 6.48666 6.88621 6.40665C6.84621 6.33332 6.51288 5.50666 6.37288 5.17999C6.23954 4.85999 6.10621 4.89999 5.99954 4.89332C5.90621 4.89332 5.79954 4.88666 5.68621 4.88666Z"
                        fill="#72695F"
                    />
                </svg>

                +7 776 502 3636</a
            >
        </div>
    </div>
</template>

<script>
import FortuneWheel from "vue-fortune-wheel";
export default {
    components: {
        FortuneWheel,
    },
    data() {
        return {
            auth: {
                username: "B7PgJzPPX68SALYwngRNhmsLG5AFvV",
                password: "6UJwpayBPN5akAzTUwD7R5nsNG3Nys",
            },
            prizes: [
                {
                    id: 3,
                    name: "Подкаст от Аеки",
                    amount: 96355,
                    image: "https://womenscommunity.kz/images/podcast.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:56:07.675Z",
                },
                {
                    id: 2,
                    name: "Браслет Cartier или 500 000 тг",
                    amount: 0,
                    image: "https://womenscommunity.kz/images/cartier.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:55:32.474Z",
                },
                {
                    id: 4,
                    name: "10 000 тг",
                    amount: 0,
                    image: "https://womenscommunity.kz/images/10k.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:56:47.31Z",
                },
                {
                    id: 6,
                    name: "Сумка LV или 1 000 000 тенге",
                    amount: 0,
                    image: "https://womenscommunity.kz/images/lv.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:57:43.164Z",
                },
                {
                    id: 1,
                    name: "Урок по сервировке",
                    amount: 96331,
                    image: "https://womenscommunity.kz/images/serving.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:55:07.282Z",
                },
                {
                    id: 8,
                    name: "100 000 тг",
                    amount: 0,
                    image: "https://womenscommunity.kz/images/100k.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:56:07.675Z",
                },
                {
                    id: 5,
                    name: "Бьюти бокс",
                    amount: 0,
                    image: "https://womenscommunity.kz/images/beauty.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:57:24.292Z",
                },
                {
                    id: 7,
                    name: "50 000 тг",
                    amount: 0,
                    image: "https://womenscommunity.kz/images/50k.svg",
                    probability: 10,
                    start_date: "2022-05-22T09:58:04.925Z",
                },
            ],
            prizeId: 7,
            showEmail: true,
            showWheel: false,
            showPrize: false,
            loader: false,
            prize: {},
            user: {},
            link: "",
            email: "",
        };
    },
    methods: {
        async onSubmit() {
            await this.$axios
                .get(`/attempts/${this.email}`, {
                    auth: this.auth,
                })
                .then((res) => {
                    if (res.data.valid) {
                        this.user = {
                            email: res.data.email,
                            inst: res.data.instagram,
                            phone: res.data.phone_number,
                            name: res.data.name,
                        };
                        this.showWheel = true;
                        this.showEmail = false;
                    }
                })
                .catch((err) => console.error(err));
        },
        async getPrizesList() {
            this.prizes = (await this.$axios.get("/prizes")).data.prizes;
            for (let i = 0; i < this.prizes.length; i++) {
                this.prizes[i].index = i;
            }
        },
        async onImageRotateStart() {
            await this.$axios
                .post(
                    "prizes/random",
                    {
                        email: this.email,
                    },
                    {
                        auth: {
                            username: "B7PgJzPPX68SALYwngRNhmsLG5AFvV",
                            password: "6UJwpayBPN5akAzTUwD7R5nsNG3Nys",
                        },
                    }
                )
                .then((res) => {
                    this.prizeId = res.data.prize.id;
                    this.link = res.data.link;
                })
                .catch((e) => {
                    this.prizeId = 7;
                });
        },
        onRotateEnd(prize) {
            this.prize = {
                id: prize.id,
                name: prize.name,
                image: prize.image,
            };
            console.log(this.prize);
            this.showPrize = true;
            this.showWheel = false;
        },
        openLink() {
            window.open(this.link, "_blank");
        },
    },
};
</script>

<style lang="scss" scoped>
.form {
    padding-top: 80px;
    &__title {
        font-family: "AnonymousPro-Bold";
        font-weight: 400;
        font-size: 48px;
        line-height: 45px;
        color: #72695f;
    }
    &__label {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #9d9696;
        margin: 10px 0 80px;
    }
    &__input {
        font-family: "AnonymousPro-Bold";
        border: unset;
        border-bottom: 2px solid #72695f;
        background: #fff1e3;

        font-weight: 700;
        font-size: 25px;
        line-height: 20px;
        color: #72695f;
    }
    &__btn {
        width: 411px;
        height: 60px;
        font-family: "AnonymousPro-Regular";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        color: #ffffff;
        border: unset;
        cursor: pointer;
    }
}
.wheel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 50px;

    &__image {
        user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    &__arrow {
        width: 30px;
        margin-bottom: 10px;
    }

    &__btn {
        cursor: pointer;
        margin-top: 64px;
    }
}
.wheel_open {
    align-items: center;
}

.wheel-content {
    &__title {
        font-family: "AnonymousPro-Bold";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        color: #72695f;
    }
    &__subtitle {
        margin-top: 12px;
        font-family: "AnonymousPro-Regular";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #9d9696;
    }
}

.prize {
    width: 100%;
    max-width: 372px;
    &__title {
        font-family: "AnonymousPro-Bold";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        color: #72695f;
    }

    &__image {
        border-radius: 50%;
        border: 2px solid #72695f;
        padding: 10px;
        max-width: 192px;
        width: 100%;
        height: 192px;
        margin: 74px 0 26px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            opacity: 0.9;
        }
    }

    &__subtitle {
        font-family: "AnonymousPro-Regular";
        font-size: 24px;
        line-height: 33px;
        color: #9d9696;
    }

    &__item {
        text-align: center;
        font-family: "AnonymousPro-Bold";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        color: #72695f;
        margin: 16px 0 40px;
    }
    &__instructions {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #72695f;
        text-align: center;
    }

    &__button {
        margin: 48px 0 32px;
        font-family: "AnonymousPro-Bold";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        color: #ffffff;

        width: 127px;
        height: 64px;
        border: unset;
        cursor: pointer;
    }
    &__faq {
        font-family: "AnonymousPro-Regular";
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        color: #72695f;
        text-align: center;
    }
    &__link {
        margin-top: 8px;
        font-family: "AnonymousPro-Regular";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #72695f;
        text-align: center;

        svg {
            margin-right: 8px;
        }
    }
}
</style>