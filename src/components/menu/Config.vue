<template>
  <div id="app">
    <form novalidate @submit.stop.prevent="showSnackbar = true">
      <div class="md-layout">
        <md-autocomplete
            class="search, md-layout-item"
            v-model="currentServer"
            :md-options="servers"
            md-layout="box">
          <label>server</label>
        </md-autocomplete>
        <md-button class="md-layout-item md-size-10 md-raised" v-on:click="onReset()">Reset</md-button>
        <md-button type="submit" class="md-layout-item md-size-10  md-raised md-primary"
                   v-on:click="onSave()">Save</md-button>
        <md-snackbar :md-position=snackbarPosition :md-active.sync="showSnackbar" :md-duration="snackbarDuration" md-persistent>
          <span>Saved!</span>
        </md-snackbar>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import config from "@/../api/config.helper";

@Component
export default class Config extends Vue
{
  currentServer = "";
  servers = []
  showSnackbar = false;
  snackbarPosition = 'center'
  snackbarDuration = 1500

  created()
  {
    this.servers = config.getServerList();
    this.currentServer = config.getConfiguredServer();
  }

  onSave()
  {
    config.setConfiguredServer(this.currentServer);
    this.showSnackBar = false;
  }

  onReset()
  {
    this.currentServer = "";
  }
};

</script>
