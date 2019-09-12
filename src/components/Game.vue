<template>
  <div >
    <div class="container">
      <div class="question" v-if="this.numberOfQuestions >=0">
        <h1>Pick the <b :style="'color:'+answers[correctAnsIndex].value">{{answers[correctAnsIndex].value}}</b> word from the choices below </h1>
        <div class="timer">00:0{{time}}</div>
        <div class="timer">Score :: {{score}}</div>
      </div>
      <div class="question" v-else>
        {{result}}
      </div>
      <div class="answers">
        <div  :class="'answer '+ answers[0].color + getDarKClass(answers[0].color)" >
          <h1>1</h1>
          {{answers[0].value}}
        </div>
        <div :class="'answer '+ answers[1].color + getDarKClass(answers[1].color)"  >
          <h1>2</h1>
          {{answers[1].value}}
        </div>
        <div :class="'answer '+ answers[2].color + getDarKClass(answers[2].color)"  >
          <h1>3</h1>
          {{answers[2].value}}
        </div>
        <div :class="'answer '+ answers[3].color + getDarKClass(answers[3].color)" >
          <h1>4</h1>
          {{answers[3].value}}
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval ,clearInterval} from 'timers';

export default {
  name: 'app',
  components: {
  },data(){
    return{
      QUESTION_TIME:3,
      shuffleColors:true,
      result:"",
      totalNumberOfQuestions:20,
      numberOfQuestions:20,
      score:0,
      time:0,
      timeInterval:null,
      darkColors:['red','black','green','blue'],
      colors:[
        {
          color:"red",
          value:"red",
        },
        {
          color:"green",
          value:"green",
        },
        {
          color:"yellow",
          value:"yellow",
        },
        {
          color:"pink",
          value:"pink",
        },
        {
          color:"black",
          value:"black",
        },
        ],
        answers:[
        {
          color:"red",
          value:"red",
        },
        {
          color:"green",
          value:"green",
        },
        {
          color:"yellow",
          value:"yellow",
        },
        {
          color:"pink",
          value:"pink",
        },
        ],
        correctAnsIndex:2,
        keys:1,
    }
  },methods:{
    getScore(){
        return this.score;
    },
    getNumberOfQuestions(){
        return this.totalNumberOfQuestions;
    },
    answer(index){
      if(index==this.correctAnsIndex){
        this.score++;
      }
      this.getQuestion();
      this.time = this.QUESTION_TIME;  
    },
    getDarKClass(color){
      if(this.darkColors.indexOf(color) ==-1){
        return '';
      }
      return " dark"
    },
    count:function(){
      if(this.numberOfQuestions<0){
        this.result = "You have answerd "+this.score+" out of "+this.totalNumberOfQuestions;
        clearInterval( this.timeInterval);
        this.time = 0;
        document.onkeypress = null;
        this.$emit("finished");
        return;
      }
      if(this.time<=0){
        this.time = this.QUESTION_TIME;
        this.getQuestion();
        return;
      }
      this.time--;

    }, shuffleArray:function(arr) {
          let array = arr
          for (let i = array.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
          return array;
      },
      getQuestion:function(){
        this.answers = this.shuffleArray(this.colors).slice(0,4);
        this.correctAnsIndex = Math.floor(Math.random() * (this.answers.length ));
        this.numberOfQuestions--
        if(!this.shuffleColors){
          return;
        }
        for (let i = 0; i < this.answers.length; i++) {
          if(i===0){
            let t = this.answers[i+1].value;
            this.answers[i+1].value = this.answers[0].value;
            this.answers[0].value = t;
            continue;
          }
          let t = this.answers[i-1].value;
          if(t===undefined){
            continue;
          }
          
          this.answers[i-1].value = this.answers[i].value;
          this.answers[i].value = t;
        }
        while(this.answers[this.correctAnsIndex].value===this.answers[this.correctAnsIndex].color){
          
          this.correctAnsIndex = Math.floor(Math.random() * (this.answers.length ));
        }
        
        
        
      },startTimer(shuffle=false,numberOfQuestions=20){
          this.setUpKeys();
          this.shuffleColors = shuffle;
          this.score = 0;
          this.numberOfQuestions = numberOfQuestions;
          this.totalNumberOfQuestions = numberOfQuestions;
          this.timeInterval = setInterval(this.count,1000);
          
      },setUpKeys(){
        document.onkeypress = (e)=>{
          
          if(  [1,2,3,4].includes(Number(e.key))){
            
            this.answer(Number(e.key)-1);
          }
        }
      }
  
  }

  ,mounted(){

  }
}
</script>

<style>
.timer{
  font-size: 15pt;
}
.green{
  background: green;
}
.yellow{
  background: yellow;
}
.red{
  background: red;
}
.black{
  background: #000;
}
.pink{
  background: pink;
}
.container{
  position: absolute;

  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.question{
  flex-basis: 50%;
}
.answers{
  flex-basis: 50%;
  display: flex;
  flex-flow: wrap;
}
.answer{
  flex-basis: 50%;
  align-content: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 20px;
}
.dark{
    color: white;
}
#app {

  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
