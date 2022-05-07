---
title: Vue源码之init
date: 2022.04.10 18:48
updated: 2022.04.10 18:48
categories: 
  - vue
tags:
  - vue源码
---
#### 1.Vue

```javascript
// src/core/instance/index.js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```
<!-- more -->
首先定义一个构造函数`Vue`，执行`initMixin`、`stateMixin`等初始化方法；之后用户调用`new Vue()`就会实例化Vue且执行`_init`方法，下面看\_init方法做了什么

#### 2.initMixin

```javascript
// src/core/instance/init.js
// 在initMixin时会给Vue的原型上添加_init方法
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++

   	...
    
    // 合并参数
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
    
    // expose real self
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    ...
    
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```

可以看到，在`callHook`触发`beforeCreate`时候并没有`initState`，只是初始化了基础参数，所以在`beforeCreate`时候无法访问到data/method/computed/watch等方法