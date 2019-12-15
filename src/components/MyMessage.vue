<template>
  <div>
    <!-- この中にHTMLを記述 -->
    <div>
      こんにちは、{{ name }} さん
      <span v-show="messageId">(ID: {{ messageId }})</span>
    </div>
    <div>メッセージ: {{ message }}</div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'

@Component({
  components: {
    // この中に子コンポーネント一覧を記述
  }
})
export default class MyMessage extends Vue {
  @Prop({
    type: Number
  })
  readonly messageId: number | undefined

  // 必須で要求するProp
  @Prop({
    type: String,
    required: true
  }) // @Prop(String) でも良い
  readonly name!: string // 共用体型 (string or undefined)

  // デフォルト値つきのProp
  @Prop({
    type: String,
    default: 'morning'
  })
  readonly timeId!: 'morning' | 'midday' | 'night' // 文字列リテラル型, 共用体型

  messages = { morning: 'おはよう', midday: 'こんにちは', night: 'おやすみ' }

  // 算出プロパティ
  get message(): string {
    return this.messages[this.timeId]
  }
}
</script>

<style lang="scss" scoped></style>
