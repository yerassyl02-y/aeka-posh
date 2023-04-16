<template>
    <main
        class="login bg-primary w-full h-full d-flex align-center justify-center"
    >
        <form
            ref="form"
            @submit.prevent="handleSubmit"
            class="d-flex flex-column align-center justify-center"
        >
            <h1 class="form__title font-bold font-40 color-primary">
                Регистрация
            </h1>
            <p class="form__subtitle font-16 color-gray">
                Зарегистрируйся и выиграй классный приз!
            </p>
            <div
                class="form__inputs d-flex flex-column align-center w-full login-inputs"
            >
                <label for="fio">
                    Введите ФИО
                    <input type="text" id="fio" v-model="user.name" />
                </label>
                <label for="wpp">
                    Введите номер WhatsApp
                    <input type="text" id="wpp" v-model="user.phone_number" />
                </label>
                <label for="mail">
                    Введите эл. почту
                    <input type="email" id="mail" v-model="user.email" />
                </label>
                <label for="instagram">
                    Введите ваш инстаграм
                    <input
                        type="text"
                        id="instagram"
                        v-model="user.instagram"
                    />
                </label>
            </div>
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

    data() {
        return {
            user: {
                name: "",
                phone_number: "",
                email: "",
                instagram: "",
            },
        };
    },

    methods: {
        async handleSubmit() {
            await this.$axios
                .post("/attempts", this.user)
                .then((res) => (window.location = `${res.data.link}`));
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

.login-inputs {
    margin: 64px 0 103px;

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
}
</style>