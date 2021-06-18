<template>
  <div id="app">
    <h1>Formulário</h1>
    <b-card bg-variant="dark" text-variant="white" class="m-5">
      <b-form-group label="Nome: " label-size="lg" label-align="left">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o Nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail: " label-size="lg" label-align="left">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o E-mail"
        ></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click.prevent="salvar" size="lg" variant="primary"
        >Salvar</b-button
      >
      <b-button
        @click.prevent="obterUsuarios"
        size="lg"
        variant="success"
        class="ml-2"
        >Obter Usuários</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    salvar() {
      //"submeter" o formulário.
      this.$http.post("usuarios.json", this.usuario).then(() => {
        this.usuario.nome = "";
        this.usuario.email = "";
        //limpa o formulário após post.
      });
      //this.$http - acessar o axios globalmente.
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
