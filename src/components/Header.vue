<template>
    <header class="wrapper">
        <div class="search-container">
            <span class="search-icon">
                <svg name="search" width="19px" height="19px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><path fill="#3e64ff" d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z"></path></svg>
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