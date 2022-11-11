<template>
  <header class="header" id="header">
    <router-link class="logo" :to="{ name: 'Home' }">
      <img src="../assets/images/logo.png" alt="logo" />
    </router-link>
    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>
    <nav class="navbar">
      <li>
        <a href="#">
          <img src="../assets/images/profilePic.png" alt=""  class="avatar-small"/>
          <span>
            Mohamed MOUROUH
              <img src="../assets/svg/profile-arrow.svg" alt=""  class="icon-profile"/>
          </span>
        </a>
        <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
                <li class="dropdown-menu-item"><a href="#">View Profile</a></li>
                <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
        </div>
      </li>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
