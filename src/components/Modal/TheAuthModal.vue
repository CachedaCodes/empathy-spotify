<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <h1>Login to Spotify</h1>

                    <div class="modal-body">
                        <slot name="body">
                            Spotify authentication is required to search. Would you like to be redirected to Spotify's login page?
                        </slot>
                    </div>
                    
                    <div class="button-wrapper">
                        <button v-focus class="redirect-button" @click="redirectToSpotify">
                        Yes
                        </button>

                        <button class="back-button" @click="$emit('close')">
                        Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'auth-modal',
  methods: {
      redirectToSpotify: function() {
          this.$store.dispatch('SPOTIFY_LOGIN');
      }
  }
}
</script>

<style scope>
    .modal-mask {
        display: table;

        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, .5);

        transition: opacity .3s ease;

        z-index: 9998;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;

        background-color: var(--clear-color);

        margin: 0px auto;
        padding: 20px 30px;

        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);

        transition: all .3s ease;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .button-wrapper {
        height: 30px;
    }

    .button-wrapper button {
        float: right;

        font-size: 1.25em;
        font-weight: bold;
        color: #fff;

        background-color: var(--main-color);

        border: none;
        margin-left: 10px;
        padding: .5em 1em;

        cursor: pointer;

        border-radius: .25em;
        box-shadow: 0 0 0 2px var(--main-color) inset;
        
        transition: background .4s ease, color .4s ease;
    }
    .button-wrapper button:hover {
        color: var(--main-color);

        box-shadow: 0 0 0 2px var(--main-color) inset;

        background-color: transparent;
    }
    .button-wrapper button:focus {
        color: var(--main-color);

        outline: 0;

        box-shadow: 0px 0px 6px 2px var(--scent-color);

        background-color: transparent;
    }

    .button-wrapper .back-button {
        color: var(--main-color);

        box-shadow: 0 0 0 2px var(--main-color) inset;
        
        background-color: transparent;
    }
</style>