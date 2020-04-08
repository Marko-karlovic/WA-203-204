<template>

      <div>
        <p>{{info.ime}} {{info.prezime}}  ({{info.oib}})</p>
      </div>

</template>

<script>
import store from '@/store.js'
export default {
  props: [ "info" ],
  data () {
    return store
  }
}
</script>