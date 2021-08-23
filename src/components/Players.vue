<template>
  <div class="card">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h2>Players</h2>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-6">Player 1 Name</div>
        <div class="col-sm-6">
          <input
            @input="(e) => setValue(e, 'p1-name')"
            class="form-control"
            type="text"
          />
        </div>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-6">Player 1 LP</div>
        <div class="col-sm-6">
          <input
            @input="(e) => setValue(e, 'p1-lp')"
            class="form-control"
            type="text"
          />
        </div>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-6">Player 2 Name</div>
        <div class="col-sm-6">
          <input
            @input="(e) => setValue(e, 'p2-name')"
            class="form-control"
            type="text"
          />
        </div>
      </div>
      <div class="row mb-2 mt-2">
        <div class="col-sm-6">Player 2 LP</div>
        <div class="col-sm-6">
          <input
            @input="(e) => setValue(e, 'p2-lp')"
            class="form-control"
            type="text"
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

<style></style>
