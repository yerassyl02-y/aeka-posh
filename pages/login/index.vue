<template>
    <main
        class="login bg-primary w-full h-full d-flex align-center justify-center"
    >
        <form
            ref="form"
            @submit.prevent="handleSubmit"
            class="d-flex flex-column align-center justify-center form"
        >
            <h1 class="form__title font-bold font-40 color-primary">
                Регистрация
            </h1>
            <p class="form__subtitle font-16 color-gray">
                Зарегистрируйся и выиграй классный приз!
            </p>
            <div
                class="form__inputs d-flex flex-column align-center w-full login-inputs"
                :class="{ margin_bottom: !validationMessage }"
            >
                <label for="fio">
                    Введите имя
                    <input
                        type="text"
                        id="fio"
                        v-model="user.name"
                        @input="validateName({ name: 'name', length: 2 })"
                        :class="{
                            invalid_input: this.validation['name'] === false,
                        }"
                    />
                </label>
                <label for="wpp">
                    Введите номер WhatsApp
                    <input
                        type="tel"
                        id="wpp"
                        v-model="user.phone_number"
                        @input="
                            validateName({ name: 'phone_number', length: 7 })
                        "
                        :class="{
                            invalid_input:
                                this.validation['phone_number'] === false,
                        }"
                    />
                </label>
                <label for="mail">
                    Введите эл. почту
                    <input
                        type="email"
                        id="mail"
                        v-model="user.email"
                        @input="validateEmail"
                        :class="{
                            invalid_input: this.validation['email'] === false,
                        }"
                    />
                </label>
                <label for="instagram">
                    Введите ваш инстаграм
                    <input
                        @input="validateName({ name: 'instagram', length: 3 })"
                        type="text"
                        id="instagram"
                        v-model="user.instagram"
                        :class="{
                            invalid_input:
                                this.validation['instagram'] === false,
                        }"
                    />
                </label>
            </div>
            <span v-if="validationMessage" class="validate-message">
                Заполните все поля
            </span>
            <label for="checkbox" class="checkbox d-flex flex-row">
                <input
                    type="checkbox"
                    id="checkbox"
                    class="checkbox__input"
                    v-model="validation.checkbox"
                />
                <span
                    >Я соглашаюсь с тем, что НЕТ ВОЗВРАТА и с
                    <a href="https://womenscommunity.kz/offer"
                        >договором оферты</a
                    >
                </span>
            </label>
            <button
                type="submit"
                class="form__button d-flex align-center justify-center font-24 font-bold bg-brown"
            >
                Перейти к оплате
            </button>
        </form>
    </main>
</template>

<script>
export default {
    layout: "login",

    data: () => ({
        user: {
            name: "",
            phone_number: "",
            email: "",
            instagram: "",
            checkbox: false,
        },
        validation: {
            checkbox: true,
        },
        valid: false,
        validationMessage: false,
    }),

    watch: {
        user: {
            handler: function () {
                if (
                    Object.values(this.validation).every(
                        (item) => item === true
                    )
                )
                    this.validationMessage = false;
                else this.validationMessage = true;
            },
            deep: true,
        },
    },

    methods: {
        async handleSubmit() {
            if (Object.values(this.validation).every((item) => item === true)) {
                await this.$axios
                    .post("/attempts", this.user)
                    .then((res) => (window.location = `${res.data.link}`))
                    .catch((e) => {
                      window.location = `https://womenscommunity.kz/failure`
                    });;
            } else this.validationMessage = true;
        },
        validateEmail() {
            if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    this.user.email
                )
            ) {
                this.validation["email"] = true;
            } else this.validation["email"] = false;
        },
        validateName({ name, length }) {
            if (this.user[name].length > length) {
                this.validation[name] = true;
            } else {
                this.validation[name] = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.form {
    &__title {
        line-height: 40px;
        text-align: center;
    }
    &__subtitle {
        line-height: 22px;
        max-width: 349px;
        text-align: center;
        margin-top: 12px;
    }
    &__button {
        width: 343px;
        height: 64px;

        line-height: 24px;
        color: #ffffff;
        cursor: pointer;
        border: unset;
        font-family: "AnonymousPro-Regular";
    }
}

.validate-message {
    font-size: 14px;
    line-height: 19px;
    color: #ff575f;
    font-family: "AnonymousPro-Regular";
    margin: 16px 0 103px;
}

.login-inputs {
    margin: 64px 0 0;

    label {
        margin-bottom: 24px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
    input {
        border: unset;
        border-bottom: 1px solid #9d9696;
        border-radius: 2px;
        background: #fff1e3;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .invalid_input {
        border-bottom: 2px solid #ff575f !important;
    }
}
.margin_bottom {
    margin-bottom: 103px;
}

.checkbox {
    flex-direction: row !important;
    cursor: pointer;

    a {
        text-decoration: underline;
        cursor: pointer;
        color: #9d9696;
    }

    &__input {
        height: fit-content;
        margin-top: 3px;
        margin-right: 8px;

        margin-bottom: 30px;
    }
}

@media screen and (max-width: 500px) {
    .login {
        padding: 0 24px;
    }

    .form {
        max-width: 343px;
        width: 100%;

        &__button {
            max-width: 343px;
            width: 100% !important;
        }
    }
}
</style>
