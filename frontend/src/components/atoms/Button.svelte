<script lang="ts">
  export let display_text: string = ''
  export let background_color: string = '#000000'
  export let font_color: string = 'white'
  export let disabled: boolean = false
  export let clickFunc = () => {}
</script>


<button
  on:click={clickFunc}
  disabled="{disabled}"
  style:background-color="{background_color}"
  style:color="{font_color}"
>{
  display_text
}</button>


<style lang="scss">
button {
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>