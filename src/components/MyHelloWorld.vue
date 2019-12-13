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

  // Computed
  get activeUsers() {
    // isActive が true のユーザーのみのリストを返す
    return this.users.filter(user => user.isActive)
  }
}
</script>

<style lang="scss" scoped></style>
