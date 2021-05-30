<template>
  <div>
    <div class="about">
      <b-container>
        <b-row>
          <b-col>
            <h1>Прокачайся вместе с Rubicon</h1>
            <p>Мы создаем программные решения в финансовом секторе — начиная от внутренних
              банковских систем и заканчивая простыми и удобными пользовательскими интерфейсами.</p>
            <p>В разработке мы используем современные технологии: микросервисную архитектуру,
              проектную интеграцию, искусственный интеллект.</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="4">
            <b-card
              title="Аналитика"
              img-src="https://picsum.photos/600/300/?image=1"
              img-alt="Image"
              tag="article"
              style="max-width: 20rem;"
              class="text-center"
            >
              <b-card-text>Системная и бизнес аналитика</b-card-text>
            </b-card>
          </b-col>
          <b-col sm="4">
            <b-card
              title="Разработка"
              img-src="https://picsum.photos/600/300/?image=11"
              img-alt="Image"
              tag="article"
              style="max-width: 20rem;"
              class="text-center"
            >
              <b-card-text>Frontend (React, .Vue), PL/SQL, Android, iOS и др.</b-card-text>
            </b-card>
          </b-col>
          <b-col sm="4">
            <b-card
              title="Тестирование"
              img-src="https://picsum.photos/600/300/?image=31"
              img-alt="Image"
              tag="article"
              style="max-width: 20rem;"
              class="text-center"
            >
              <b-card-text>Функциональное, нагрузочное и автоматизированное</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="partners">
      <b-container>
        <table-about></table-about>
      </b-container>
    </div>
  </div>
</template>

<script>
import TableAbout from '@/components/About/TableAbout.vue';

export default {
  name: 'AboutPage',
  components: {
    TableAbout,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.about {
  padding: 50px 0;
}

.partners {
  background: #eee;
  height: 500px;
}
</style>
