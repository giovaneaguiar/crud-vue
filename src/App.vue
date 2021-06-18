<template>
  <div id="app">
    <h1>Formulário</h1>
    <b-card>
      <b-form-group label="Nome: ">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o Nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail: ">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o E-mail"
        ></b-form-input>
      </b-form-group>
      <hr>
      <b-button @click.prevent="salvar" size="lg" variant="primary">Salvar</b-button>
    </b-card>
  </div>
</template>

<script>


export default {

  data(){
    return {
      usuario: {
        nome: '',
        email: '',
      }
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
