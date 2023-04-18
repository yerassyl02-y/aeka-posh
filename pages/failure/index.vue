<template>
    <div
        class="failure d-flex flex-column align-center justify-center w-full h-full bg-primary"
    >
        <h1 class="failure__title">Похоже, вы не провели оплату</h1>
        <p class="failure__subtitle">Вернуться на главную</p>
        <button
            class="failure__btn d-flex align-center justify-center bg-brown"
            @click="$router.push({ path: '/' })"
        >
            Все понятно
        </button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.failure {
    &__title {
        font-family: "AnonymousPro-Bold";
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 72px;
        color: #72695f;
        max-width: 800px;
        text-align: center;
    }
    &__subtitle {
        font-family: "AnonymousPro-Bold";
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 40px;
        color: #72695f;
        max-width: 800px;
        text-align: center;
        margin: 40px 0 30px;
    }

    &__btn {
        width: 190px;
        height: 64px;
        font-family: "AnonymousPro-Bold";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        cursor: pointer;
        line-height: 24px;
        color: #ffffff;
        border: unset;
    }
}

@media screen and (max-width: 500px) {
    .failure {
        padding: 0 16px;
        &__title {
            font-size: 40px;
            line-height: 40px;
        }
        &__subtitle {
            font-size: 28px;
            line-height: 29px;
        }
    }
}
</style>