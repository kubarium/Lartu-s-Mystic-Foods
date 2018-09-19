<template>
    <div class="circle">
        <svg class="circleFill filled">
            <circle cx="43" cy="43" r="39" stroke="#888888" stroke-width="6" fill="none" />
        </svg>
        <svg class="circleTrack">
            <circle cx="43" cy="43" r="39" stroke="#cccccc" stroke-width="6" fill="none" />
        </svg>
    </div>
</template>

<script>
export default {
  name: "spoil-progress"
};
</script>

<style lang="sass" scoped>
$full: 77    
    
.circle
  position: relative
  width: 85px
  height: 85px
  margin: 20px auto
  svg
    position: absolute
    width: 100%
    height: 100%
    &.circleFill
      z-index: 1
      stroke-dasharray:  322
      stroke-dashoffset: 322
      transition: all 3s
      transform: rotate(-90deg)
      &.filled
        stroke-dashoffset: $full/2
    &.circleTrack
      z-index: 0
 
</style>
