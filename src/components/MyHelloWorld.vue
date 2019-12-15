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

    <div class="wrapper">
      <div v-bind:id="dynamicId">idを指定</div>
      <div :id="dynamicId">idを指定</div>
      <div :class="dynamicClass">クラス名を指定</div>
      <div :class="dynamicClass2">条件分岐もできる</div>
      <div :class="`has-color-${dynamicColor}`">文字列の中に変数を入れる</div>
    </div>

    <div class="wrapper">
      <!-- メソッドを渡す場合 -->
      <button @click="incrementCounter(0)">Add 1</button>
      <p>カウンター0: {{ counters[0] }}</p>
      <!-- 処理をそのまま記述する場合 -->
      <button @click="say('hi')">Say hi</button>
      <button @click="say('po')">Say po</button>
    </div>

    <div class="wrapper">
      <label for="name">名前: </label>
      <input v-model="name" id="name" />

      <div>こんにちは、 {{ name }} さん</div>
    </div>

    <div class="wrapper">
      <div>今は {{ selectedTime.label }} です。</div>

      <span v-for="time in times" :key="time.id">
        <input
          type="radio"
          :id="time.id"
          :value="time"
          v-model="selectedTime"
        />
        <!-- type, id, value はHTMLの属性 v-modelのみがvueに由来 -->
        <label :for="time.id">{{ time.label }}</label>
        <!-- <input> のid属性と <label> のfor属性を一致させることで、 <input> と <label> を対応づけられる -->
      </span>
    </div>

    <div class="wrapper">
      <MyMessage :messageId="1" :timeId="selectedTime.id" :name="name" />
    </div>

    <div class="wrapper">
      <div>カウンター1: {{ counters[1] }}</div>
      <MyButton :counterId="0" @button-clicked="incrementCounter" />
      <MyButton :counterId="1" @button-clicked="incrementCounter" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import MyMessage from '@/components/MyMessage.vue'
import MyButton from '@/components/MyButton.vue'

@Component({
  components: {
    MyMessage,
    MyButton
  }
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
  counters: number[] = [0, 100]
  name: string = 'guest'
  times = [
    { id: 'morning', label: '朝' },
    { id: 'midday', label: '昼' },
    { id: 'night', label: '夜' }
  ]
  selectedTime = this.times[0]

  // Computed
  get activeUsers() {
    // isActive が true のユーザーのみのリストを返す
    return this.users.filter(user => user.isActive)
  }

  // Methods
  incrementCounter(i: number) {
    const currentCounter = this.counters[i]
    this.$set(this.counters, i, currentCounter + 1)
    // this.counters[i] += 1 と同じ (Vueに変更を検出してもらうために this.$set を使う)
  }
  decrementCounter(i: number) {
    const currentCounter = this.counters[i]
    this.$set(this.counters, i, currentCounter - 1) // 同上
  }
  say(message: string) {
    alert(message)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 3rem 0;
}
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
