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
        class="ml-4"
        >Obter Usuários</b-button
      >
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome: </strong> {{ usuario.nome }} <br />
        <strong>Email: </strong>{{ usuario.email }} <br />
        <strong>ID: </strong>{{ id }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
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
        //inserir dados no firebase.
        this.usuario.nome = "";
        this.usuario.email = "";
        //limpa o formulário após post.
      });
      //this.$http - acessar o axios globalmente.
    },
    obterUsuarios() {
      this.$http.get("usuarios.json").then((res) => {
        //get para obter usuarios do firebase.
        this.usuarios = res.data;
      });
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
