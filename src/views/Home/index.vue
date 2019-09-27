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
                            <h3 class="name">Ghost</h3>
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
                                Saepe autem ipsam </p>
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
                <a href="#" class="view-more-btn">View More</a>
			</section>
			<section class="planets">
                <h2 class="title">Popular Planets</h2>
				<hr class="title-hr">
                <Carousel :per-page="1" autoplay="true" :autoplayTimeout="4000" loop="true">
                    <Slide>
                        <div class="cards">
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div class="cards">
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                        </div>
                    </Slide>
                    <Slide>
                        <div class="cards">
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                            <div class="planet">
                                <h3 class="name">Corellia</h3>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
			</section>
			<section class="characters">
                <h2 class="title">Popular Characers</h2>
				<hr class="title-hr">
                <div class="cards">
                    <div class="character">
                        <div class="image">
                            <img src="@/assets/img/character-1.jpg" alt="character">
                        </div>
                        <div class="info">
                            <h3 class="name">Luke Skywalker</h3>
                            <small><i>Son of Anakin</i></small>
                            <read-more
                                more-str="Read More"
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vero expedita suscipit eum nobis impedit consequuntur
                                tempora nisi quam blanditiis accusantium modi,
                                temporibus rerum aliquam natus iste facilis debitis libero eaque."
                                link="#"
                                :max-char="20"
                            />
                        </div>
                    </div>
                    <div class="character">
                        <div class="image">
                            <img src="@/assets/img/character-2.jpg" alt="character">
                        </div>
                        <div class="info">
                            <h3 class="name">Luke Skywalker</h3>
                            <small><i>Son of Anakin</i></small>
                            <p class="about">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vero expedita suscipit eum nobis impedit consequuntur
                                tempora nisi quam blanditiis accusantium modi,
                                temporibus rerum aliquam natus iste facilis debitis libero eaque.
                            </p>
                        </div>
                    </div>
                    <div class="character">
                        <div class="image">
                            <img src="@/assets/img/character-3.jpg" alt="character">
                        </div>
                        <div class="info">
                            <h3 class="name">Luke Skywalker</h3>
                            <small><i>Son of Anakin</i></small>
                            <p class="about">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vero expedita suscipit eum nobis impedit consequuntur
                                tempora nisi quam blanditiis accusantium modi,
                                temporibus rerum aliquam natus iste facilis debitis libero eaque.
                            </p>
                        </div>
                    </div>
                    <div class="character">
                        <div class="image">
                            <img src="@/assets/img/character-4.jpg" alt="character">
                        </div>
                        <div class="info">
                            <h3 class="name">Luke Skywalker</h3>
                            <small><i>Son of Anakin</i></small>
                            <p class="about">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vero expedita suscipit eum nobis impedit consequuntur
                                tempora nisi quam blanditiis accusantium modi,
                                temporibus rerum aliquam natus iste facilis debitis libero eaque.
                            </p>
                        </div>
                    </div>
                </div>
                <a href="#" class="view-more-btn">View More</a>
			</section>
		</main>
	</div>
</template>

<script>
import Header from '../../components/Header';
import { Carousel, Slide } from 'vue-carousel';
import './home.scss';

export default {
	components: {
        Header,
        Carousel,
        Slide
	}
}
</script>