<template>
  <div>
    <button @click="emitClickedEvent">{{ label }}</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'

@Component({
  components: {
    // この中に子コンポーネント一覧を記述
  }
})
export default class MyButton extends Vue {
  @Prop({
    type: Number,
    required: true
  })
  readonly counterId!: number

  // computed
  get label() {
    return `カウンター${this.counterId}を増やす`
  }

  // methods
  @Emit('button-clicked')
  emitClickedEvent() {
    return this.counterId
  }
}
</script>

<style lang="scss" scoped>
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  align-items: center;
  font-size: 15px;
  line-height: 20px;

  margin: 5px;
  padding: 8px 13px;

  background-color: whitesmoke;
  border: 2px solid navy;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
}
</style>
