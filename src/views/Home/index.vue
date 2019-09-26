<template>
	<div>
		<Header />
		<main class="homepage">
			<section class="starships">
				<h2 class="title">Popular Starships</h2>
				<hr class="title-hr">
                <div class="cards">
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/img/starship-1.jpg" alt="starship">
                        </div>
                        <div class="info">
                            <p class="name">Ghost</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Saepe autem ipsam dolorem quis necessitatibus et
                                consequatur minima tempore voluptas iste natus</p>
                            <a href="#" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/img/starship-2.jpg" alt="starship">
                        </div>
                        <div class="info">
                            <p class="name">Ghost</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Saepe autem ipsam dolorem quis necessitatibus et
                                consequatur minima tempore voluptas iste natus</p>
                            <a href="#" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/img/starship-3.jpg" alt="starship">
                        </div>
                        <div class="info">
                            <p class="name">Ghost</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Saepe autem ipsam dolorem quis necessitatibus et
                                consequatur minima tempore voluptas iste natus</p>
                            <a href="#" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/img/starship-4.jpg" alt="starship">
                        </div>
                        <div class="info">
                            <p class="name">Ghost</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Saepe autem ipsam dolorem quis necessitatibus et
                                consequatur minima tempore voluptas iste natus</p>
                            <a href="#" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/img/starship-5.jpg" alt="starship">
                        </div>
                        <div class="info">
                            <p class="name">Ghost</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Saepe autem ipsam dolorem quis necessitatibus et
                                consequatur minima tempore voluptas iste natus</p>
                            <a href="#" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="@/assets/img/starship-6.jpg" alt="starship">
                        </div>
                        <div class="info">
                            <p class="name">Ghost</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Saepe autem ipsam dolorem quis necessitatibus et
                                consequatur minima tempore voluptas iste natus</p>
                            <a href="#" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
			</section>
			<section class="planets">

			</section>
			<section class="people">

			</section>
		</main>
	</div>
</template>

<script>
import Header from '../../components/Header';
import './home.scss';

export default {
	components: {
		Header
	}
}
</script>