<template>
    <header class="header">
        <div class="header-navbar">
            <nav class="navbar navbar-inverse getFixed-1" role="navigation">
                <div class="container">
                    <div class="ed-toggle-mobile getFixed-1">
                        <ul class="">
                            <li><a href="index.php" class="logo"><img src="/images/logo/logo.png"></a></li>
                            <li>
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" id="btn-toggle">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar top-bar"></span>
                                        <span class="icon-bar middle-bar"></span>
                                        <span class="icon-bar bottom-bar"></span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-collapse1" id="menu">
                        <ul class="nav navbar-nav ed-ul">
                            <li class="hidden-sm hidden-xs">
                                <nuxt-link to="/"><img src="/images/logo/logo.png"></nuxt-link>
                            </li>
                            <li class="active">
                                <nuxt-link to="/">Trang chủ</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about">Giới thiệu</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/post">Tin tức</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/contact">Liên hệ</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>