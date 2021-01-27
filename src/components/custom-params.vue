<template>
  <div class="custom-params">
      <div class="mb-sm" v-for="(item,index) in paramsList" :key="index">
          <input @input="handLeInput" type="text" maxlength="50" v-model="item.name">
          <span class="equal">=</span>
          <input @input="handLeInput" type="text" maxlength="100" v-model="item.value">     
          <button v-if="paramsList.length>1" class="ui basic button mr-none ml-md" @click="handleDelParams(index)">-</button>
          <button v-if="index===(paramsList.length-1)&&paramsList.length<20" class="ui basic button mr-none ml-md" @click="handleAddParams">+</button>
      </div>         
  </div>
</template>

<script>
export default {
  data () {
    return {
        paramsList: [{
            name: "",
            value: "",
        }]
    }
  },
  props: {
      value: {
          type: Object,
          default: null
      }
  },
  methods: {
        init() {
            if (this.value && JSON.stringify(this.value)!=="{}") {
                this.paramsList = []
                for (let key in this.value){
                    this.paramsList.push({
                        name: key,
                        value: this.value[key],       
                    })
                }  
            } else {
                this.paramsList =  [{
                    name: "",
                    value: "",
                }]
            }
        },
       
        valueTransform() {
            let result = {}
            this.paramsList.map(val => {
                result[val.name] = val.value
            })
            return result
        },
        handleDelParams(index) {
            this.paramsList.splice(index, 1);
        },
        handleAddParams() {
            this.paramsList.push({
                name: "",
                value: "",
            })
        },
        handLeInput(){
            this.$emit('input', this.valueTransform());
        }
    },
    watch: {
       value: {
        handler() {
            this.init()
        },
        deep: true,
        immediate:true,
      }
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mb-sm {
        margin-bottom: 4px;
    }

    .custom-params>div {
        display: flex;
        align-items: center;       
    }
    span {
        background: #f6f6f7 !important;
    }

    button {
        margin-left: 15px;
        padding: 0 !important;
        border-radius: 50% !important;
        width: 30px;
        height: 30px;
        font-family: monospace !important;
    }

    .ui.input {
        width: 260px !important;
    }

    input {
        width: 321px !important;

        
    }
    .equal {
        margin: 0 15px;
    }



</style>
