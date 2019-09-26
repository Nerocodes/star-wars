<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/img/logo.png" alt="Logo">
        </div>
        <div class="centered-text">
            <div class="heading">
                <div class="logo">
                  <img src="@/assets/img/logo.png" alt="Logo">  
                </div>
                <p>Directory</p>
            </div>
            <p class="description">
                Find your favorite Characters, Films, Species, Starships and Planets
            </p>
            <div class="search">
                <div class="icon">
                    <i class="fas fa-search"></i>
                </div>
                <input type="text" class="search-field" placeholder="Enter a search term">
            </div>
        </div>
    </header>
</template>

<script>
import './header.scss';

export default {
  name: 'Header'
}
</script>