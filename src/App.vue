<template>
  <div id="app">
    <game v-on:finished="endGame" :class="start? '':'hide'" ref="game"/>
    <div :class="start? 'hide':''" >
      <h1>Color game</h1>

      <label for="number">Number of question</label>
      <input v-model="numberOfQuestions" type="number" name="number" >
      <br>
      
      <label for="shuffle">shuffle colors</label>
      <input type="checkbox" name="shuffle" v-model="withShuffle"><br>
      <button @click="startGame" class="btn">start</button>
      <div class="table-container">
        <table class="table">
          <tr>
            <th>#</th>
            <th>Score</th>
            <th>Total questions</th>
          </tr>
          <tr v-for="(record,index) in records" :key="index">
            <td>{{index}}</td>
            <td>
              {{record.score}}
            </td>
            <td>
              {{record.totalQuestion}}
            </td>
          </tr>
        </table>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      start:false,
      numberOfQuestions:20,
      withShuffle:false,
      records:[]
    }
  },
  methods:{
    startGame(){
      this.$refs.game.startTimer(this.withShuffle,this.numberOfQuestions);
      this.start = true;
    },endGame(){
      this.start = false;
      let obj = {
        score:this.$refs.game.getScore(),
        totalQuestion:this.$refs.game.getNumberOfQuestions(),
      }
      this.records.push(obj);
    }
  }
}
</script>
<style>
.btn{
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15pt;
}
.table-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.hide{
  display: none;
}
table {
  
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
