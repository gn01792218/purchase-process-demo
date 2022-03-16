<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item fw-bold me-5">
              <a class="nav-link active" aria-current="page" href="#"
                ><i class="bi bi-question-circle text-primary-700 fw-bolder me-2"></i
                >{{$t("nav.help")}}</a
              >
            </li>
            <li class="nav-item fw-bold me-5">
              <a class="nav-link text-primary-900" href="#"
                ><i class="bi bi-person-circle text-primary-700 fw-bolder me-3"></i
                >{{$t("nav.signIn")}}</a
              >
            </li>
            <li class="nav-item dropdown fw-bold">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-flag text-primary-700 fw-bolder me-3"></i>
                {{ $t("lang") }}
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" @click="switchLang('en')">EN</a>
                </li>
                <li>
                  <a class="dropdown-item" @click="switchLang('cn')">CN</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const locale = useI18n();
function switchLang(lang: string) {
  locale.locale.value = lang;
}
</script>
