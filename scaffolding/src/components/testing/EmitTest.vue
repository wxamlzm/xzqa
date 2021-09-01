<template>
  <div class="eimttest">
    <button v-on:click = "$emit('enlarge-text', 0.1)">
      Enlarge test
    </button>
  </div>
</template>

<script>
export default {
  name: 'EmitTest'
}
</script>