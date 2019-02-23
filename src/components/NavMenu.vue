<template>
  <div class="main-nav">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" @click="toggleCollapsed">
        <span class="navbar-toggler-icon"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/"></router-link>

      <transition name="slide">
        <div :class="'collapse navbar-collapse' + (!collapsed ? ' show':'')" v-show="!collapsed">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="(route, index) in routes" :key="index">
              <router-link :to="route.path" exact-active-class="active">
                <span>{{ route.display }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import { routes } from "../router/routes";

export default {
  data() {
    return {
      routes,
      collapsed: true
    };
  },
  methods: {
    toggleCollapsed: function(event) {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.35s;
}
.slide-enter,
.slide-leave-to {
  max-height: 0px;
}

.slide-enter-to,
.slide-leave {
  max-height: 20em;
}
/* This file should be reviewed. It's not optimal, but it works for now. */
.navbar {
  display: list-item;
}

/* Highlighting rules for nav menu items */
.nav-item a.active,
.nav-item a.active:hover,
.nav-item a.active:focus {
  background-color: #4189c7;
  color: white;
  text-decoration: underline;
}

.nav-item a,
.nav-item a:hover,
.nav-item a:focus {
  color: white;
}

/* Keep the nav menu independent of scrolling and on top of other items */
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

@media (max-width: 767px) {
  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */
  body {
    padding-top: 50px;
  }
}

@media (min-width: 768px) {
  /* On small screens, convert the nav menu to a vertical sidebar */
  .main-nav {
    height: 100%;
    width: calc(25% - 20px);
  }
  .main-nav .navbar {
    border-radius: 0px;
    border-width: 0px;
    height: 100%;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: column;
  }
  .navbar-header {
    float: none;
  }
  .navbar-collapse {
    border-top: 1px solid #444;
    padding: 0px;
  }
  .navbar-collapse ul {
    float: none;
  }
  .nav-item {
    float: none;
    font-size: 15px;
    margin: 6px;
  }
  .nav-item a {
    padding: 10px 16px;
    border-radius: 4px;
    color: white;
  }

  .navbar a {
    /* If a menu item's text is too long, truncate it */
    width: 95%; /* Bug to fix here. Width 100% overflow. */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>