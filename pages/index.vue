<template>
    <div class="main-content h-full">
        <div class="header d-flex flex-column justify-space-between">
            <div class="d-flex justify-space-between w-full">
                <nav class="nav header__navigation">
                    <nuxt-link
                        class="nav__links font-20"
                        :to="item.url"
                        v-for="item in navigationItems"
                        :key="item.title"
                    >
                        {{ item.title }}
                    </nuxt-link>
                </nav>
                <div class="burger">
                    <svg
                        @click="openMenu = true"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="8"
                            y="11"
                            width="18"
                            height="2"
                            fill="#F3F2F0"
                        />
                        <rect
                            x="8"
                            y="16"
                            width="12"
                            height="2"
                            fill="#F3F2F0"
                        />
                        <rect
                            x="8"
                            y="21"
                            width="8"
                            height="2"
                            fill="#F3F2F0"
                        />
                    </svg>
                    <div
                        v-show="openMenu"
                        class="burger__content slide-in-left"
                        :class="{ closed_burger: !openMenu }"
                    >
                        <div class="d-flex align-center burger__back">
                            <svg
                                @click="openMenu = false"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 14.1147L22.6 7.51468L24.4853 9.40001L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.39998 24.4853L7.51465 22.6L14.1146 16L7.51465 9.40001L9.39998 7.51468L16 14.1147Z"
                                    fill="#FFF7F1"
                                />
                            </svg>
                            <a @click="openMenu = false">Закрыть</a>
                        </div>
                        <div class="burger__links d-flex flex-column">
                            <nuxt-link
                                class="nav__links font-20"
                                :to="item.url"
                                v-for="item in navigationItems"
                                :key="item.title"
                            >
                                {{ item.title }}
                            </nuxt-link>
                        </div>
                        <button class="burger__button">Записаться</button>
                    </div>
                </div>
                <div class="header__number d-flex align-center">
                    <svg
                        class="header__icon"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.4001 6.54667C24.1777 5.31191 22.7216 4.3329 21.1169 3.66674C19.5122 3.00059 17.7909 2.66062 16.0534 2.66667C8.7734 2.66667 2.84007 8.60001 2.84007 15.88C2.84007 18.2133 3.4534 20.48 4.60007 22.48L2.7334 29.3333L9.7334 27.4933C11.6667 28.5467 13.8401 29.1067 16.0534 29.1067C23.3334 29.1067 29.2667 23.1733 29.2667 15.8933C29.2667 12.36 27.8934 9.04001 25.4001 6.54667ZM16.0534 26.8667C14.0801 26.8667 12.1467 26.3333 10.4534 25.3333L10.0534 25.0933L5.8934 26.1867L7.00006 22.1333L6.7334 21.72C5.63706 19.9693 5.05492 17.9457 5.0534 15.88C5.0534 9.82667 9.98673 4.89334 16.0401 4.89334C18.9734 4.89334 21.7334 6.04001 23.8001 8.12001C24.8234 9.13863 25.6343 10.3502 26.1859 11.6846C26.7375 13.0189 27.0188 14.4495 27.0134 15.8933C27.0401 21.9467 22.1067 26.8667 16.0534 26.8667ZM22.0801 18.6533C21.7467 18.4933 20.1201 17.6933 19.8267 17.5733C19.5201 17.4667 19.3067 17.4133 19.0801 17.7333C18.8534 18.0667 18.2267 18.8133 18.0401 19.0267C17.8534 19.2533 17.6534 19.28 17.3201 19.1067C16.9867 18.9467 15.9201 18.5867 14.6667 17.4667C13.6801 16.5867 13.0267 15.5067 12.8267 15.1733C12.6401 14.84 12.8001 14.6667 12.9734 14.4933C13.1201 14.3467 13.3067 14.1067 13.4667 13.92C13.6267 13.7333 13.6934 13.5867 13.8001 13.3733C13.9067 13.1467 13.8534 12.96 13.7734 12.8C13.6934 12.64 13.0267 11.0133 12.7601 10.3467C12.4934 9.70668 12.2134 9.78667 12.0134 9.77334H11.3734C11.1467 9.77334 10.8001 9.85334 10.4934 10.1867C10.2001 10.52 9.34673 11.32 9.34673 12.9467C9.34673 14.5733 10.5334 16.1467 10.6934 16.36C10.8534 16.5867 13.0267 19.92 16.3334 21.3467C17.1201 21.6933 17.7334 21.8933 18.2134 22.04C19.0001 22.2933 19.7201 22.2533 20.2934 22.1733C20.9334 22.08 22.2534 21.3733 22.5201 20.6C22.8001 19.8267 22.8001 19.1733 22.7067 19.0267C22.6134 18.88 22.4134 18.8133 22.0801 18.6533Z"
                            fill="#F3F2F0"
                        />
                    </svg>
                    <a
                        class="font-20 text-underline"
                        href="phone:+7 776 502 3636"
                        >+7 776 502 3636</a
                    >
                </div>
            </div>
            <div class="header__content">
                <h1 class="title-main">Записи Аеки</h1>
                <div class="title-mobile">
                    <h1>Записи</h1>
                    <h1>Аеки</h1>
                </div>
                <div class="d-flex align-center about">
                    <div class="d-flex flex-column mr-37">
                        <h3 class="headings">7 дней</h3>
                        <span class="subtitles"
                            >душевного разговора с Аекой</span
                        >
                    </div>
                    <div class="d-flex flex-column w-92">
                        <h3 class="headings">24.04</h3>
                        <span class="subtitles">начало программы</span>
                    </div>
                </div>
                <div class="d-flex flex-column bordered">
                    <h3 class="headings">5 000 тенге</h3>
                    <span class="subtitles">стоимость</span>
                </div>
                <button
                    class="content-button d-flex align-center justify-center bg-white"
                    @click="$router.push({ path: '/login' })"
                >
                    Записаться
                </button>
            </div>
        </div>
        <div class="content bg-primary">
            <div class="description">
                <div class="description__items">
                    <h1>У вас будет доступ в закрытый аккаунт</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                </div>
                <img src="@/assets/images/Phone.png" class="phone" />
            </div>
            <div class="description wheel">
                <div class="btn-block">
                    <p>Крути колесо и получай крутые подарки!</p>
                    <button
                        class="d-flex align-center justify-center bg-brown wheel__mobile"
                        @click="$router.push({ path: '/login' })"
                    >
                        Выиграть приз
                    </button>
                </div>
                <img src="@/assets/images/wheel.png" />
                <div class="description__items wheel-block">
                    <h1>
                        За приобретение моих записок я приготовила для вас
                        подарки
                    </h1>
                    <p class="wheel__title">
                        Крути колесо и получай крутые подарки!
                    </p>
                    <button
                        class="d-flex align-center justify-center bg-brown wheel__button"
                        @click="$router.push({ path: '/login' })"
                    >
                        Выиграть приз
                    </button>
                </div>
            </div>
            <div class="description d-flex last-item">
                <h1 class="program-title">Программа курса</h1>
                <div class="description__items">
                    <div
                        v-for="paragraph in programParagraphs"
                        :key="paragraph.title"
                        class="d-flex paragraphs"
                        :class="{
                            align_center: !paragraph.subParagraphs.length,
                        }"
                    >
                        <svg
                            class="mr-12"
                            width="23"
                            height="24"
                            viewBox="0 0 23 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            :class="{
                                margin_top: paragraph.subParagraphs.length,
                            }"
                        >
                            <rect
                                y="12"
                                width="16"
                                height="16"
                                transform="rotate(-45 0 12)"
                                fill="#72695F"
                            />
                        </svg>
                        <div class="d-flex flex-column">
                            <h3>
                                {{ paragraph.title }}
                            </h3>
                            <div
                                v-if="paragraph.subParagraphs.length"
                                class="subparagraphs"
                            >
                                <div
                                    v-for="(
                                        item, idx
                                    ) in paragraph.subParagraphs"
                                    :key="item.title + idx"
                                    class="d-flex align-center subparagraph"
                                >
                                    <svg
                                        class="mr-12"
                                        width="19"
                                        height="20"
                                        viewBox="0 0 19 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="1"
                                            y="10"
                                            width="12"
                                            height="12"
                                            transform="rotate(-45 1 10)"
                                            stroke="#72695F"
                                        />
                                    </svg>

                                    <span>{{ item.title }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer d-flex justify-space-between">
            <div class="d-flex justify-space-between flex-column footer__left">
                <div class="opportunity">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M44.5 8.5C39.25 8.5 34.685 10.8675 32 14.835C29.315 10.8675 24.75 8.5 19.5 8.5C15.5232 8.50463 11.7106 10.0865 8.89851 12.8985C6.08647 15.7106 4.50463 19.5232 4.5 23.5C4.5 30.8 9.05 38.3975 18.025 46.0775C22.1376 49.5819 26.58 52.6797 31.29 55.3275C31.5083 55.4448 31.7522 55.5062 32 55.5062C32.2478 55.5062 32.4917 55.4448 32.71 55.3275C37.42 52.6797 41.8624 49.5819 45.975 46.0775C54.95 38.3975 59.5 30.8 59.5 23.5C59.4954 19.5232 57.9135 15.7106 55.1015 12.8985C52.2894 10.0865 48.4768 8.50463 44.5 8.5ZM32 52.2775C27.8975 49.91 7.5 37.43 7.5 23.5C7.50331 20.3184 8.76865 17.2681 11.0184 15.0184C13.2681 12.7687 16.3184 11.5033 19.5 11.5C24.57 11.5 28.8275 14.2075 30.6125 18.5675C30.7255 18.8426 30.9178 19.0779 31.1648 19.2435C31.4119 19.4091 31.7026 19.4975 32 19.4975C32.2974 19.4975 32.5881 19.4091 32.8352 19.2435C33.0822 19.0779 33.2745 18.8426 33.3875 18.5675C35.1725 14.2075 39.43 11.5 44.5 11.5C47.6816 11.5033 50.7319 12.7687 52.9816 15.0184C55.2313 17.2681 56.4967 20.3184 56.5 23.5C56.5 37.43 36.1025 49.91 32 52.2775Z"
                            fill="white"
                        />
                    </svg>
                    <h3 class="footer__title">Не упускай свой шанс</h3>
                </div>
                <div class="socials">
                    <div class="d-flex align-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                                stroke="white"
                                stroke-width="1.5"
                            />
                            <path
                                d="M17.5 6.51002L17.51 6.49902"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <a href="www.instagram.com">Instagram</a>
                    </div>
                    <div class="d-flex align-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M25.4001 6.54667C24.1777 5.31191 22.7216 4.3329 21.1169 3.66674C19.5122 3.00059 17.7909 2.66062 16.0534 2.66667C8.7734 2.66667 2.84007 8.60001 2.84007 15.88C2.84007 18.2133 3.4534 20.48 4.60007 22.48L2.7334 29.3333L9.7334 27.4933C11.6667 28.5467 13.8401 29.1067 16.0534 29.1067C23.3334 29.1067 29.2667 23.1733 29.2667 15.8933C29.2667 12.36 27.8934 9.04001 25.4001 6.54667ZM16.0534 26.8667C14.0801 26.8667 12.1467 26.3333 10.4534 25.3333L10.0534 25.0933L5.8934 26.1867L7.00006 22.1333L6.7334 21.72C5.63706 19.9693 5.05492 17.9457 5.0534 15.88C5.0534 9.82667 9.98673 4.89334 16.0401 4.89334C18.9734 4.89334 21.7334 6.04001 23.8001 8.12001C24.8234 9.13863 25.6343 10.3502 26.1859 11.6846C26.7375 13.0189 27.0188 14.4495 27.0134 15.8933C27.0401 21.9467 22.1067 26.8667 16.0534 26.8667ZM22.0801 18.6533C21.7467 18.4933 20.1201 17.6933 19.8267 17.5733C19.5201 17.4667 19.3067 17.4133 19.0801 17.7333C18.8534 18.0667 18.2267 18.8133 18.0401 19.0267C17.8534 19.2533 17.6534 19.28 17.3201 19.1067C16.9867 18.9467 15.9201 18.5867 14.6667 17.4667C13.6801 16.5867 13.0267 15.5067 12.8267 15.1733C12.6401 14.84 12.8001 14.6667 12.9734 14.4933C13.1201 14.3467 13.3067 14.1067 13.4667 13.92C13.6267 13.7333 13.6934 13.5867 13.8001 13.3733C13.9067 13.1467 13.8534 12.96 13.7734 12.8C13.6934 12.64 13.0267 11.0133 12.7601 10.3467C12.4934 9.70668 12.2134 9.78667 12.0134 9.77334H11.3734C11.1467 9.77334 10.8001 9.85334 10.4934 10.1867C10.2001 10.52 9.34673 11.32 9.34673 12.9467C9.34673 14.5733 10.5334 16.1467 10.6934 16.36C10.8534 16.5867 13.0267 19.92 16.3334 21.3467C17.1201 21.6933 17.7334 21.8933 18.2134 22.04C19.0001 22.2933 19.7201 22.2533 20.2934 22.1733C20.9334 22.08 22.2534 21.3733 22.5201 20.6C22.8001 19.8267 22.8001 19.1733 22.7067 19.0267C22.6134 18.88 22.4134 18.8133 22.0801 18.6533Z"
                                fill="#F3F2F0"
                            />
                        </svg>
                        <a href="tel: +7 776 502 3636">Whatsapp</a>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column justify-space-between footer__right">
                <div class="course d-flex flex-column">
                    <h4>5 000 тенге</h4>
                    <span>стоимость</span>
                    <button @click="$router.push({ path: '/login' })">
                        Записаться
                    </button>
                </div>
                <div class="socials-mobile">
                    <div class="d-flex align-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                                stroke="white"
                                stroke-width="1.5"
                            />
                            <path
                                d="M17.5 6.51002L17.51 6.49902"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <a href="www.instagram.com">Instagram</a>
                    </div>
                    <div class="d-flex align-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M25.4001 6.54667C24.1777 5.31191 22.7216 4.3329 21.1169 3.66674C19.5122 3.00059 17.7909 2.66062 16.0534 2.66667C8.7734 2.66667 2.84007 8.60001 2.84007 15.88C2.84007 18.2133 3.4534 20.48 4.60007 22.48L2.7334 29.3333L9.7334 27.4933C11.6667 28.5467 13.8401 29.1067 16.0534 29.1067C23.3334 29.1067 29.2667 23.1733 29.2667 15.8933C29.2667 12.36 27.8934 9.04001 25.4001 6.54667ZM16.0534 26.8667C14.0801 26.8667 12.1467 26.3333 10.4534 25.3333L10.0534 25.0933L5.8934 26.1867L7.00006 22.1333L6.7334 21.72C5.63706 19.9693 5.05492 17.9457 5.0534 15.88C5.0534 9.82667 9.98673 4.89334 16.0401 4.89334C18.9734 4.89334 21.7334 6.04001 23.8001 8.12001C24.8234 9.13863 25.6343 10.3502 26.1859 11.6846C26.7375 13.0189 27.0188 14.4495 27.0134 15.8933C27.0401 21.9467 22.1067 26.8667 16.0534 26.8667ZM22.0801 18.6533C21.7467 18.4933 20.1201 17.6933 19.8267 17.5733C19.5201 17.4667 19.3067 17.4133 19.0801 17.7333C18.8534 18.0667 18.2267 18.8133 18.0401 19.0267C17.8534 19.2533 17.6534 19.28 17.3201 19.1067C16.9867 18.9467 15.9201 18.5867 14.6667 17.4667C13.6801 16.5867 13.0267 15.5067 12.8267 15.1733C12.6401 14.84 12.8001 14.6667 12.9734 14.4933C13.1201 14.3467 13.3067 14.1067 13.4667 13.92C13.6267 13.7333 13.6934 13.5867 13.8001 13.3733C13.9067 13.1467 13.8534 12.96 13.7734 12.8C13.6934 12.64 13.0267 11.0133 12.7601 10.3467C12.4934 9.70668 12.2134 9.78667 12.0134 9.77334H11.3734C11.1467 9.77334 10.8001 9.85334 10.4934 10.1867C10.2001 10.52 9.34673 11.32 9.34673 12.9467C9.34673 14.5733 10.5334 16.1467 10.6934 16.36C10.8534 16.5867 13.0267 19.92 16.3334 21.3467C17.1201 21.6933 17.7334 21.8933 18.2134 22.04C19.0001 22.2933 19.7201 22.2533 20.2934 22.1733C20.9334 22.08 22.2534 21.3733 22.5201 20.6C22.8001 19.8267 22.8001 19.1733 22.7067 19.0267C22.6134 18.88 22.4134 18.8133 22.0801 18.6533Z"
                                fill="#F3F2F0"
                            />
                        </svg>
                        <a href="tel: +7 776 502 3636">Whatsapp</a>
                    </div>
                </div>
                <div class="rights d-flex flex-column">
                    <a href="https://womenscommunity.kz/offer">
                        Договор оферты
                    </a>
                    <a href="https://womenscommunity.kz/confidential">
                        Согласие на сбор персональных данных
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openMenu: false,
            navigationItems: [
                {
                    title: "Главная",
                    url: "/",
                },
                {
                    title: "Выиграть приз",
                    url: "/",
                },
                {
                    title: "Программа",
                    url: "/",
                },
            ],
            programParagraphs: [
                {
                    title: "Пункт 1",
                    subParagraphs: [],
                },
                {
                    title: "Пункт 2",
                    subParagraphs: [],
                },
                {
                    title: "Пункт 3",
                    subParagraphs: [
                        {
                            title: "Подпункт",
                        },
                        {
                            title: "Подпункт",
                        },
                        {
                            title: "Подпункт",
                        },
                    ],
                },
                {
                    title: "Пункт 4",
                    subParagraphs: [],
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    background: url("@/assets/images/BG.png");
    max-height: 890px;
    height: 100%;
    padding: 43px 80px 140px;
    background-size: cover;
    background-repeat: no-repeat;

    &__number {
        height: fit-content;

        a {
            color: white;
            margin-left: 10px;
            line-height: 28px;
        }
    }
}

.burger {
    display: none;
}
.closed_burger {
    -webkit-animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        both;
    animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
@-webkit-keyframes slide-out-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }
}
@keyframes slide-out-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
    }
}

.nav {
    &__links {
        font-family: "AnonymousPro-Regular";
        color: white;
        line-height: 28px;
        margin-right: 32px;

        &:last-of-type {
            margin-right: 0;
        }
    }
}
.title-main {
    font-family: "AnonymousPro-Regular" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;
    color: white;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding: 32px 0 88px;

    max-width: 433px;
    margin-bottom: 24px;
}
.title-mobile {
    display: none;
}
.headings {
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #f3f2f0;
    font-family: "AnonymousPro-Italic";
}

.subtitles {
    font-size: 16px;
    line-height: 19px;
    color: #f3f2f0;
    margin-top: 4px;
}
.mr-37 {
    margin-right: 37px;
    max-width: 179px;
}

.w-92 {
    max-width: 92px;
}
.bordered {
    border-top: 2px solid white;
    max-width: 193px;

    margin-top: 56px;

    padding-top: 24px;
}

.content-button {
    width: 180px;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    font-family: "AnonymousPro-Regular";
    color: #9d9696;
    height: 64px;
    border: unset;
    margin-top: 72px;
    cursor: pointer;
}

.content {
    padding: 144px 80px 96px;
}

.description {
    display: flex;
    justify-content: space-between;

    .btn-block {
        display: none;
    }

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;

        color: #72695f;
    }
    p {
        font-family: "AnonymousPro-Regular";
        margin-top: 32px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #9d9696;
        text-align: center;
    }

    .hidden-item {
        display: none;
    }

    &__items {
        padding-top: 48px;
        border-top: 2px solid #72695f;
        &:first-of-type {
            max-width: 740px;
        }

        &:nth-child(2) {
            max-width: 631px;
        }

        button {
            width: 219px;
            height: 64px;
            font-size: 24px;
            line-height: 24px;
            color: #ffffff;
            border: unset;
            cursor: pointer;
            margin-top: 96px;
        }
    }
}

.wheel-block {
    margin-left: 70px;
}

.last-item {
    max-width: 900px;
    div {
        border: unset;
        padding: unset;
    }

    .program-title {
        border-top: 2px solid #72695f;
        padding-top: 48px;
    }
    .paragraphs {
        margin-bottom: 40px;

        .subparagraphs {
            margin-top: 16px;
        }

        .subparagraph {
            margin-bottom: 8px;

            &:last-of-type {
                margin-bottom: 0;
            }
        }

        h3 {
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 44px;
            color: #72695f;
        }

        span {
            font-size: 20px;
            line-height: 28px;
            color: #72695f;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
}

.phone {
    max-width: 430px;
    width: 100%;
    max-height: 430px;
    height: auto;
    object-fit: cover;
}

.wheel {
    margin: 130px 0;
}
.align_center {
    align-items: center;
}

.margin_top {
    margin-top: 10px;
}

.footer {
    padding: 100px 80px 32px;
    height: 512px;
    // background-image: url("@/assets/images/bg-footer.png");
    background: url("@/assets/images/footer-bg.png");
    background-size: cover;

    &__title {
        font-family: "AnonymousPro-Regular";
        font-weight: 400;
        font-size: 40px;
        line-height: 40px;
        color: #ffffff;
        margin-top: 32px;
    }
}

.socials,
.socials-mobile {
    div {
        a {
            font-family: "AnonymousPro-Regular";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: white;
            margin-left: 11px;
        }
        &:first-of-type {
            margin-bottom: 30px;
        }
    }
}

.socials-mobile {
    display: none;
    div {
        margin-bottom: 0 !important;
    }
}

.course {
    padding-right: 100px;

    max-width: 317px;
    border-top: 2px solid white;
    padding-top: 24px;

    h4 {
        font-family: "AnonymousPro-Italic" !important;
        font-style: italic;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        color: #f3f2f0;
    }
    span {
        margin-bottom: 56px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #f3f2f0;
    }
    button {
        width: 180px;
        height: 64px;

        cursor: pointer;
        background: white;

        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        color: #9d9696;
        border: unset;
    }
}
.rights {
    a {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        text-decoration-line: underline;
        text-align: right;
        color: white;

        margin-bottom: 34px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
}

@media screen and (max-width: 900px) {
    .header {
        max-height: 812px;
        height: 100%;
        padding: 17px 24px 40px;
        background-position: right;

        .nav {
            display: none;
        }

        &__number {
            a {
                font-size: 16px;
                line-height: 22px;
            }
        }

        .burger {
            display: flex;
            max-height: 812px;
            height: 100%;

            &__back {
                a {
                    font-family: "AnonymousPro-Regular";
                    cursor: pointer;
                    margin-left: 10px;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                    color: #fff7f1;
                }
            }

            &__links {
                a {
                    font-family: "AnonymousPro-Regular";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 32px;
                    line-height: 44px;
                    color: #fff7f1;
                    margin-bottom: 38px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }

            &__button {
                font-family: "AnonymousPro-Regular";
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 24px;
                color: #9d9696;
                width: 100%;
                background: white;
                height: 64px;
                border: unset;
            }

            .slide-in-left {
                -webkit-animation: slide-in-left 0.5s
                    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
                animation: slide-in-left 0.5s
                    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            }

            @-webkit-keyframes slide-in-left {
                0% {
                    -webkit-transform: translateX(-1000px);
                    transform: translateX(-1000px);
                    opacity: 0;
                }
                100% {
                    -webkit-transform: translateX(0);
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slide-in-left {
                0% {
                    -webkit-transform: translateX(-1000px);
                    transform: translateX(-1000px);
                    opacity: 0;
                }
                100% {
                    -webkit-transform: translateX(0);
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            &__content {
                width: 100%;
                padding: 24px 16px 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                top: 0;
                left: 0;
                height: 100vh;
                z-index: 99999;
                background: url("@/assets/images/bg-mobile.png");
                background-size: cover;
                background-repeat: no-repeat;
            }
        }
    }

    .wheel-block {
        margin-left: 0;
    }
    .description {
        flex-direction: column;

        h1 {
            margin-bottom: 30px;
            font-size: 28px;
            line-height: 32px;
        }

        p {
            font-size: 16px;
            line-height: 19px;
        }

        .btn-block {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-top: 20px;
        }
    }

    .wheel {
        img {
            max-width: 412px;
            max-height: 412px;
            width: 100%;
            height: auto;
            margin: auto;
        }
        flex-direction: column-reverse;

        &__title,
        &__button {
            display: none;
        }
        &__mobile {
            margin-top: 40px;
            max-width: 343px;
            width: 100%;
            height: 64px;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: #ffffff;
            font-family: "AnonymousPro-Regular";
            border: unset;
            cursor: pointer;
        }
    }

    .content {
        padding: 72px 24px 85px;
    }
    .phone {
        margin-top: 70px;
    }

    .last-item {
        .paragraphs {
            h3 {
                font-size: 20px;
                line-height: 28px;
            }

            span {
                font-size: 16px;
                line-height: 22px;
            }
        }
    }
    .footer {
        flex-direction: column;
        align-items: center;
        height: unset;
        padding: 60px 24px 40px;
        background: url("@/assets/images/footer-bg-mobile.png");
        background-position: right;

        .opportunity {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .socials {
            display: none;
        }

        &__left,
        &__right {
            align-items: center;
            width: 100%;
        }

        &__left {
            margin-bottom: 100px;
        }
    }

    .socials-mobile {
        margin: 40px 0 32px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
}
.rights {
    align-items: center;
}

.course {
    margin-right: auto;
    border-top: 0;
    padding-right: 0;
    max-width: unset;

    h4 {
        width: fit-content;
        border-top: 2px solid white;
        padding-top: 16px;
    }
    button {
        width: 100%;
    }
}

@media screen and (max-width: 500px) {
    .title-main {
        display: none;
        padding: 18px 0 238px;
    }
    .title-mobile {
        margin-top: 56px;
        display: flex;
        flex-direction: column;
        width: 100%;
        border-top: 2px solid white;
        padding: 18px 0 238px;
        border-bottom: 2px solid white;

        h1 {
            font-style: normal;
            font-weight: 400;
            font-size: 56px;
            line-height: 56px;
            color: #f3f2f0;

            &:last-of-type {
                text-align: right;
            }
        }
    }
    .about {
        padding-top: 16px;
    }
    .bordered {
        margin-top: 32px;
        padding-top: 16px;
    }
    .content-button {
        margin-top: 48px;
    }
    .header {
        background-position: 85%;
    }
}
</style>
