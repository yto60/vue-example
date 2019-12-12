<template>
  <div>
    <!-- この中にHTMLを記述 -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'

@Component({
  components: {
    // この中に子コンポーネント一覧を記述
  }
})
export default class extends Vue {
  // 上の行は export default class <コンポーネント名> extends Vue に書き換えてください
  // この中に変数、関数などを記述
}
</script>

<style lang="scss" scoped></style>
