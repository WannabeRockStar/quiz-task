<template>
    <header class="wrapper">
        <div class="search-container">
            <span class="search-icon">
                <search-icon />
            </span>
            <input type="text" class="search-input" placeholder="Start typing to search...">
        </div>
        <div class="button-container">
            <button class="btn btn-primary">Gamer</button>
            <button class="btn btn-white">Host</button>
        </div>

        <div class="profile-container">
            <span class="profile-icon">
                <!-- <font-awesome-icon icon="user-secret" /> -->
                <bell-icon />
            </span>
            <span class="profile-icon">
                <cog-icon />
                <i class="fas fa-cog"></i>
            </span>
            <div class="profile-image">
                <img src="@/assets/images/profile.jpg" alt="">
            </div>
        </div>
    </header>
</template>

<script>

import BellIcon from 'vue-material-design-icons/Bell';
import CogIcon from 'vue-material-design-icons/Cog';
// import SearchIcon from 'vue-material-design-icons/';

export default {
    components: { BellIcon, CogIcon },
    data() {
        return {

        }
    }
}
</script>