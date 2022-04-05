<script lang="ts">
  import type { DisplayType } from 'types/global' 
  export let currnetDisplayType: DisplayType
  
  import HeaderMenuButtons from '@components/molecules/HeaderMenuButtons.svelte'
</script>


<div class="header">
  <HeaderMenuButtons currnetDisplayType={currnetDisplayType} />
</div>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;

  background-color: mediumseagreen;
}
</style>