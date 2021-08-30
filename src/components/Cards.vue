<template>
  <div class="card">
    <div class="row">
      <div class="col-sm-12 mb-4">
        <h2>Cards</h2>
      </div>
    </div>
    <div class="row">
      <div class="row mt-2 mb-2">
        <div class="col-sm-12 mb-2 text-bold">Name</div>
        <div class="col-sm-8 mb-2">
          <input
            class="form-control"
            v-model="cardName"
            type="text"
            placeholder="Ex. Dark Magician"
            @input="onSearch"
          />
        </div>
        <div class="col-sm-4">
          <button
            type="button"
            :class="{ active: lang === 'fr' }"
            @click="lang = 'fr'"
            class="btn custom-btn"
          >
            FR
          </button>
          <button
            type="button"
            :class="{ active: !lang }"
            @click="lang = null"
            class="btn custom-btn"
          >
            EN
          </button>
        </div>
        <div class="col-sm-12 mb-2 mt-2 text-bold">Type</div>
        <div class="col-sm-12 mb-2">
          <button
            type="button"
            :class="{ active: monster }"
            @click="monster = !monster"
            class="btn custom-btn monster-btn"
          >
            Monster
          </button>
          <button
            type="button"
            :class="{ active: spell }"
            @click="spell = !spell"
            class="btn custom-btn spell-btn"
          >
            Spell
          </button>
          <button
            type="button"
            :class="{ active: trap }"
            @click="trap = !trap"
            class="btn custom-btn trap-btn"
          >
            Trap
          </button>
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <div class="col-sm-3">Previews</div>
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
        <div class="col-sm-12 text-center">
          <button
            type="button"
            :disabled="!currentCard"
            @click="saveSelected"
            class="btn custom-btn"
          >
            Load image
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../config'

import debounce from 'lodash.debounce'

const { ipcRenderer } = require('electron')

export default {
  data() {
    return {
      cardName: '',
      currentCard: {},
      previews: [],
      lang: null,
      monster: true,
      spell: false,
      trap: false
    }
  },

  computed: {
    type() {
      const monsters = [
        'Normal Monster',
        'Normal Tuner Monster',
        'Effect Monster',
        'Tuner Monster',
        'Flip Monster',
        'Flip Effect Monster',
        'Flip Tuner Effect Monster',
        'Spirit Monster',
        'Union Effect Monster',
        'Gemini Monster',
        'Pendulum Effect Monster',
        'Pendulum Normal Monster',
        'Pendulum Tuner Effect Monster',
        'Ritual Monster',
        'Ritual Effect Monster',
        'Toon Monster',
        'Fusion Monster',
        'Synchro Monster',
        'Synchro Tuner Monster',
        'Synchro Pendulum Effect Monster',
        'XYZ Monster',
        'XYZ Pendulum Effect Monster',
        'Link Monster',
        'Pendulum Flip Effect Monster',
        'Pendulum Effect Fusion Monster',
        'Token'
      ]

      let types = []

      if (this.monster) {
        types = monsters
      }

      if (this.trap) {
        types = [...types, 'Trap Card']
      }

      if (this.spell) {
        types = [...types, 'Spell Card']
      }

      return types.length > 0 && types.join(',')
    }
  },

  methods: {
    async onSearch() {
      if (this.cardName.length > 3) {
        await this.fetchCards(this)
      }
    },

    fetchCards: debounce(async (vm) => {
      try {
        const { data } = await axios.get(`${config.apiUrl}`, {
          params: {
            fname: vm.cardName,
            desc: vm.cardName,
            offset: 0,
            num: 30,
            language: vm.lang,
            misc: 'yes',
            type: vm.type
          }
        })

        vm.previews = data.data
      } catch (e) {
        console.log(e)
      }
    }, 300),

    selectCard(card) {
      this.currentCard = card
    },

    saveSelected() {
      if (this.currentCard.id) {
        ipcRenderer.send('save-card', this.getImage(this.currentCard))
      }
    },

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

.btn.monster-btn {
  background-color: #c09253;
}
.btn.spell-btn {
  background-color: #33878f;
}
.btn.trap-btn {
  background-color: #c43f82;
}
</style>
