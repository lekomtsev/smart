<template>
  <div class="news-create p-3 col-md-9 col-sm-9 px-md-4">
    <h2 class="mb-4">Добавить новость</h2>
    <b-form @submit.prevent="adNews">
      <b-form-group
        id="input-group-1"
        label="Название новости"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2"
                    label="Описание новости:"
                    label-for="input-2">
        <b-form-textarea
          id="textarea-state"
          v-model="form.text"
          :state="form.text.length >= 10"
          placeholder="Enter at least 10 characters"
          rows="3"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group>
        <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>

        <div class="images mt-4"
             v-if="form.images.length"
        >
          <img v-for="(imageSrc, i) in form.images" :key="i"
               class="w-25"
               :src="form.images"
               alt="Alt">
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">Отправить</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        text: '',
        images: ['https://picsum.photos/600/300/?image=25'],
      },
    };
  },
  methods: {
    adNews() {
      const news = {
        title: this.form.title,
        text: this.form.text,
        images: this.form.images,
      };

      console.log(news, 'data - news');
    },
    formatNames(files) {
      console.log(files, 'files');
      // this.images.push(files.name);
      return files.length === 1 ? files[0].name : `${files.length} files selected`;
    },
  },
};
</script>
