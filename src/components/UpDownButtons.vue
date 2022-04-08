<template>
    <div class="buttons">
      <button @click='$store.dispatch("downCounter")'>-</button>
      <button @click='$store.dispatch("upCounter")'>+</button>
    </div>
</template>    

<script>

export default {
  name: 'UpDownButtons',
}
</script>

<style>
  .buttons button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>
