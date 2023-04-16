<template>
    <Nuxt />
</template>

<script>
export default {
    middleware({ store, redirect }) {
        if (store.state.loggedIn) return redirect("/");
    },
};
</script>

<style>
</style>