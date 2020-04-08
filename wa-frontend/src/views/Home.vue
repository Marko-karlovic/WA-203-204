<template>
  <div id="app">
    <div :key="student.id" v-for="student in studenti">
      <Student :info="student"/>
    </div>


    <router-view/>
  </div>
</template>

<script>
import Student from '@/components/Student.vue'
import store from '@/store.js'

export default {
  data () {
    return store;
  },
  components: {
    Student
  },
    mounted() {
      let studenti = [];
      let duzina = [];
      fetch (`http://localhost:3000/studenti`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log("Podaci s backenda", data)
        this.studenti = data.map(doc => {
          return {ime: doc.ime, prezime: doc.prezime, oib: doc.oib}
        })
        this.duzina = data.map(doc => {
          let element = doc.ime
          let fija = (tekuca_suma, element) => tekuca_suma + element.length
          let init = 0
          let brSlova = duzina.reduce(fija, init)
          return {brojSlova: this.brSlova}
        })
      })
    }
}
</script>


