
### 第一个实例和数据绑定
  1. 实例和数据
  2. 组件生命周期
  3. 插值和表达式
  4. 过滤器

### 指令和事件
  1. 指令
    * v-bind
    * v-if
    * v-html
    * v-pre
  2. 事件
    * v-on
  3. 语法糖
    * v-bind 直接写 :
    * v-on 直接写 @

### 计算属性
  1. 计算属性用法 computed


### v-bind及 class 与 style绑定
  1. 了解 v-bind指令
  2. 绑定 class 的几种方式
    * 对象语法
    * 数组语法
  3. 绑定内联样式
    * v-bind:style

### 常用内置指令
  1. 条件渲染指令
    * v-if
    * v-else-if
    * v-else
    * v-show 
  2. 列表渲染指令
    * v-for
  3. 数组更新：vue会检测数据变化，v-for也会更新，vue包含数组方法
    * push()
    * pop()
    * shift()
    * unshift()
    * splice()
    * sort()
    * reverse()
  4. 过滤与排序
    * 不改变元数组的情况下,想通过数组的副本过滤和排序，可以使用计算属性处理数组
  5. 方法和事件
    * v-on
    * $event 用于访问原生DOM事件
    * 修饰符
      1. .stop
      2. .prevent
      3. .capture
      4. .self
      5. .once
  6. 实战: 利用计算属性、指令等开发购物车

### 表单与v-model
  1. 单选按钮
    * 单独使用 不需要v-model,直接使用v-bind绑定一个布尔值.为真时,选中;为假时,不选中
    * 组合使用 需要v-model相同且value不同
  2. 复选框
    * 单独使用 使用v-model绑定一个布尔值
    * 组合使用 v-model和value一起,多个绑定到同一个数组类型的数据
    
### 组件
  1. 组件与复用
  2. 使用 props 传递数据
    * 父组件向子组件 传递 数据，使用 v-bind 绑定
  3. 单向数据流
  4. 数据验证
  5. 生命周期方法
    beforecreated：el 和 data 并未初始化 
    created:完成了 data 数据的初始化，el没有
    beforeMount：完成了 el 和 data 初始化 
    mounted ：完成挂载

### 组件通信
  1. 父子组件通信
    * 方法1: 子组件用 $emit() 触发事件，父组件用 $on 来监听子组件的事件
    * 方法2: 父组件 直接在 子组件 的自定义标签上,使用 v-on 来监听 子组件触发的自定义事件
    * 方法3: 使用 v-model
  2. 兄弟组件通信
    * 使用中央总线 bus
  3. 跨级组件通信
    * 使用中央总线 bus
  4. slot插槽
    * 单个slot
      子组件中使用<slot>元素开启一个插槽,在父组件中,插入子组件标签的所有内容将替代子组件的<slot>标签和内容
    * 具名slot
      给<slot>元素指定一个name后可以分发多个内容,分发的内容根据名字区别
    * 作用域插槽
      使用一个可以复用的模板替换已渲染元素
  5. 组件API三部分
    * props 允许外部环境传递数据给组件；
    * 事件  允许从组件内触发外部环境的副作用
    * 插槽  允许外部环境将额外的内容组合在组件中   

### 组件高级用法
  1. 递归组件
  2. 内联模板
  3. 动态组件
  4. 异步组件

### 组件其他
  1. $nextTick

### 组件实战
  1. tab组件


### 自定义指令
  1. 用于对DOM层，进行底层操作等
  2. 注册方式： 全局注册和局部注册
  3. 相关钩子函数:
    * bind 只调用一次，指令第一次绑定到元素时调用
    * inserted 被绑定元素插入父节点时调用(父节点存在即可调用，不必存在于document中)、
    * update 被绑定元素所在模板完成一次更新周期时调用
    * componentUpdated 被绑定元素所在模板完成一次更新周期时调用
    * unbind 只调用一次，指令与元素解绑时调用 

### 动画
  1. 官网动画
  2. 第三方库
    * anime.js  可以操作array,obj和DOM等
# vue-study

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
