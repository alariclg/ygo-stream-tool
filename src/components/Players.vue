<template>
  <div class="card">
    <div class="row">
      <div class="col-sm-12 mb-4">
        <h2>Players</h2>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-3">Player 1 Name</div>
        <div class="col-sm-9">
          <input
            @input="(e) => setValue(e, 'p1-name')"
            class="form-control"
            type="text"
            placeholder="Ex. Player 1"
          />
        </div>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-3">Player 1 LP</div>
        <div class="col-sm-9">
          <input
            @input="(e) => setValue(e, 'p1-lp')"
            class="form-control"
            type="text"
            placeholder="Ex. 8000"
          />
        </div>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-3">Player 2 Name</div>
        <div class="col-sm-9">
          <input
            @input="(e) => setValue(e, 'p2-name')"
            class="form-control"
            type="text"
            placeholder="Ex. Player 2"
          />
        </div>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-3">Player 2 LP</div>
        <div class="col-sm-9">
          <input
            @input="(e) => setValue(e, 'p2-lp')"
            class="form-control"
            type="text"
            placeholder="Ex. 8000"
          />
        </div>
      </div>
      <div class="col-sm-12 mb-4 mt-4">
        <h2>Game Infos</h2>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-3">Score</div>
        <div class="col-sm-9">
          <input
            @input="(e) => setValue(e, 'score')"
            class="form-control"
            type="text"
            placeholder="Ex. 0-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = require('electron')

export default {
  methods: {
    setValue(event, fileName) {
      ipcRenderer.send('save-txt', { name: fileName, txt: event.target.value })
    }
  }
}
</script>
