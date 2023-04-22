<template>
    <div
        class="success-page d-flex justify-center bg-primary h-full w-full"
        :class="{ wheel_open: !showEmail, height_auto: showPrize }"
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
                    :class="{ invalid_input: !this.valid }"
                    @input="validateEmail"
                />
            </label>
            <p v-if="message" class="error-message">Упс!{{ message }}</p>
            <button
                class="form__btn d-flex align-center justify-center bg-brown"
                type="submit"
            >
                перейти к прокрутке колеса
            </button>
        </form>
        <div
            v-if="showWheel"
            class="wheel-content d-flex flex-column align-center justify-center"
        >
            <div class="d-flex flex-column align-center">
                <!--                <h1 class="wheel-content__title">Поздравляем!</h1>-->
                <p class="wheel-content__subtitle">
                    Крути колесо и выигрывай прямо сейчас
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
                        src="@/assets/images/wheel3.svg"
                        class="wheel__image"
                    />
                    <img
                        slot="button"
                        src="@/assets/images/wheel-button1.svg"
                        class="wheel__btn"
                    />
                </FortuneWheel>
            </div>
        </div>
        <div
            v-if="showPrize"
            class="prize d-flex flex-column align-center justify-center"
        >
            <h2 class="prize__title">Поздравляем!</h2>
            <div class="prize__image d-flex align-center justify-center">
                <img :src="prize.image" />
            </div>
            <p class="prize__subtitle">ВАШ БОНУС</p>
            <h3 class="prize__item">{{ prize.name }}</h3>
            <span class="instruction-text"> </span>
            <span
                v-if="prize.id === 3 || prize.id === 1"
                class="instruction-text"
            >
                Для получения своего бонуса, переходи по ссылке ниже:
                <a :href="link">{{ link }}</a>
            </span>
            <span v-else class="instruction-text">
                Для получения своего бонуса, выложи скрин этой страницы! Не
                забудь отметить @aeka.posh и @aekas.notes
            </span>
            <span class="prize__instructions"
                >Приз и доступ к курсу придет <b>{{ email }}!</b></span
            >
            <button
                class="prize__button d-flex align-center justify-center bg-brown"
                @click="openLink"
            >
                Все понятно
            </button>
            <span class="prize__faq"
                >Если еще остались вопросы обращайтесь по номеру:
                <a
                    style="text-decoration: none"
                    href="https://wa.me/message/QGQGYLGDBLRVC1"
                    >+7 776 502 3636
                </a>
            </span>
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
            prizeId: 3,
            showEmail: true,
            showWheel: false,
            showPrize: false,
            loader: false,
            prize: { id: 2 },
            user: {},
            link: "",
            email: "",
            valid: false,
            message: "",
        };
    },
    async created() {
        const params = this.$route.query;
        Object.values(params).length
            ? await this.$axios
                  .get("/attempts/results", { params })
                  .then((res) => console.log(res))
                  .catch((err) => console.error(err))
            : console.log("query is empty");
    },
    methods: {
        validateEmail() {
            if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
            ) {
                this.valid = true;
            } else this.valid = false;
        },
        async onSubmit() {
            if (this.valid) {
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
                    .catch((err) => {
                        if (
                            err.response.data.dev_message ===
                            "этот эмейл уже крутило колесо"
                        )
                            this.message = err.response.data.dev_message;
                        else this.message = "Данный эмейл не зарегистрирован";
                    });
            }
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
                  window.location = `https://womenscommunity.kz/failure`
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
            this.$router.push({ path: "/" });
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
        margin: 10px 0 0;
    }
    &__input {
        font-family: "AnonymousPro-Regular";
        border: unset;
        border-bottom: 2px solid #72695f;
        background: #fff1e3;

        font-weight: 700;
        font-size: 25px;
        line-height: 20px;
        color: #72695f;
    }
    .invalid_input {
        border-bottom: 2px solid #ff575f !important;
    }
    .error-message {
        font-family: "AnonymousPro-Bold";
        margin-top: 16px;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #ff575f;
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
        margin-top: 80px;
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
    max-width: 450px;
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

    .instruction-text {
        font-family: "AnonymousPro-Regular";
        font-size: 18px;
        text-align: center;
        line-height: 33px;
        color: #72695f;
        margin-bottom: 16px;

        a {
            color: #72695f;
            text-decoration: underline;
        }
    }

    &__subtitle {
        font-family: "AnonymousPro-Regular";
        font-size: 24px;
        line-height: 33px;
        color: #9d9696;
    }

    &__openlink {
        font-size: 16px;
        line-height: 19px;

        font-family: "AnonymousPro-Regular";
        font-style: normal;
        font-weight: 400;
        text-decoration-line: underline;
        color: #72695f;
        text-align: center;
        margin-top: 10px;
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

        width: 190px;
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

@media screen and (max-width: 760px) {
    .height_auto {
        height: unset;
        padding: 24px 0 40px;
    }
    .form {
        padding: 80px 24px 0;

        max-width: 343px;
        width: 100%;

        &__title {
            font-size: 40px;
        }

        &__btn {
            max-width: 343px;
            width: 100%;
            font-size: 20px;
        }
    }
    .wheel {
        &__btn {
            max-width: 343px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .wheel-content {
        align-items: center;
    }

    .prize {
        &__title {
            text-align: center;
        }
    }
}
</style>
