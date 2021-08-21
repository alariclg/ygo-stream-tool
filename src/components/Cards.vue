<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <h2>
          Cards
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="row mt-2 mb-2">
        <div class="col-sm-3">Name</div>
        <div class="col-sm-6">
          <input
            class="form-control"
            v-model="cardName"
            type="text"
            @input="onSearch"
          />
        </div>
        <div class="col-sm-3">
          <button type="button" @click="lang = 'fr'" class="btn btn-dark">
            FR
          </button>
          <button type="button" @click="lang = null" class="btn btn-dark">
            EN
          </button>
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <div class="col-sm-3">
          Previews
        </div>
        <div class="col-sm-9">
          <ul v-if="previews" class="list-group card-list">
            <li
              :key="`prev-${index}`"
              v-for="(card, index) in previews"
              class="list-group-item mh-50"
              :class="currentCard.id === card.id ? 'active' : ''"
              @click="selectCard(card)"
            >
              <div class="row">
                <div class="col-sm-3">
                  <img :src="getImage(card)" class="img-fluid" />
                </div>
                <div class="col-sm-9">
                  <span>{{ card.name }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-sm-9 offset-3">
          <button type="button" class="btn btn-dark">Load image</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../config'

export default {
  data() {
    return { cardName: '', currentCard: {}, previews: [], lang: null }
  },

  created() {},

  methods: {
    async onSearch() {
      if (this.cardName.length > 3) {
        try {
          const { data } = await axios.get(`${config.apiUrl}`, {
            params: {
              fname: this.cardName,
              desc: this.cardName,
              offset: 0,
              num: 30,
              language: this.lang,
              misc: 'yes'
            }
          })

          this.previews = data.data
        } catch (e) {
          console.log(e)
        }
      }
    },

    selectCard(card) {
      this.currentCard = card
    },

    saveSelected() {},

    getImage(card) {
      if (card.card_images) {
        return card.card_images[0].image_url
      }

      return ''
    }
  }
}
</script>

<style>
.card-list {
  max-height: 400px;
  overflow: auto;
}
</style>
