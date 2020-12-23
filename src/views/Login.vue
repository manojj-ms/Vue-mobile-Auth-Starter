<template>
<div class="container">
<md-field>
      <md-input-item placeholder="Email" class="float"></md-input-item>
      <br>
       <md-input-item placeholder="Password"  class="float"></md-input-item>
       <br>
       <md-button type="primary">Login</md-button>
     </md-field>
</div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.container {
    background-color: gray;
    flex: 1;
    overflow: auto;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    
}


.md-field{  
    height: 100vh;
    align-content: center;
    justify-content: space-between;
    text-align: center;
    padding-top: 360px;
}

.md-input-item{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 16vh;
    padding-top: 0px;
    padding-right: 190px;
    padding-bottom: 0px;
    padding-left: 5px;
}
.float{
    border: solid 1px #d4d4d4;
    padding-top: 0px;
    height: 100px;
    align-content: center;
}
</style>
