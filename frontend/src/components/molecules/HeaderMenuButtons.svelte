<script lang="ts">
  import Button from '@components/atoms/Button.svelte'

  import { displayTypeNameArray, currentDisplayType } from 'store/display'
  const green = 'mediumseagreen'
</script>


<div class="header-menuButtons">
  {#each displayTypeNameArray as displayTypeName }
    <Button
      clickFunc={() => {console.log(displayTypeName); currentDisplayType.update(() => displayTypeName)}}
      display_text={displayTypeName}
      background_color={displayTypeName === $currentDisplayType? 'white': green}
      font_color={displayTypeName === $currentDisplayType? green: 'white'}
    />
  {/each}
</div>


<style>
.header-menuButtons {
  display: flex;
  padding: 7px;
  height: 45px;
}
</style>