<template>
  <div>
    <!-- この中にHTMLを記述 -->
    <p>{{ val }}</p>
    <div>{{ val === 'foo' ? 'A' : 'B' }}</div>

    <ul>
      <li v-for="user in activeUsers" :key="user.name">
        {{ user.name }}
      </li>
    </ul>
    <div v-bind:id="dynamicId">idを指定</div>
    <div :id="dynamicId">idを指定</div>

    <div :class="dynamicClass">クラス名を指定</div>
    <div :class="dynamicClass2">条件分岐もできる</div>
    <div :class="`has-color-${dynamicColor}`">文字列の中に変数を入れる</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class MyHelloWorld extends Vue {
  val: string = 'foo'
  users = [
    {
      name: 'poyo',
      isActive: true
    },
    {
      name: 'aaa',
      isActive: false
    }
  ]
  dynamicId: string = 'my-id'
  dynamicClass: string = 'has-underline'
  dynamicClass2 = {
    'has-border': this.val === 'foo',
    'has-border-2': this.val === 'bar'
  }
  dynamicColor: string = 'red' // 'blue' に書き換えると青になる

  // Computed
  get activeUsers() {
    // isActive が true のユーザーのみのリストを返す
    return this.users.filter(user => user.isActive)
  }
}
</script>

<style lang="scss" scoped>
#my-id {
  background-color: yellow;
}
.has-underline {
  text-decoration: underline;
}
.has-color-red {
  color: red;
}
.has-color-blue {
  color: blue;
}
.has-border {
  border: dotted black;
}
.has-border-2 {
  border: thick green;
}
</style>
