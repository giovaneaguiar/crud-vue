<template>
  <div id="app">
    <h1>CRUD Giovane Aguiar</h1>
    <b-alert
      show
      dismissible
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
    >{{ mensagem.texto }}</b-alert>
    <!-- mensagens necessárias -->
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
    <hr />
    <b-list-group>
      <b-list-group-item
        v-for="(usuario, id) in usuarios"
        :key="id"
        variant="dark"
        class="mr-5 ml-5"
      >
        <strong>Nome: </strong> {{ usuario.nome }} <br />
        <strong>Email: </strong>{{ usuario.email }} <br />
        <strong>ID: </strong>{{ id }} <br />
        <b-button variant="warning" size="lg" @click="carregar(id)"
          >Carregar</b-button
        >
        <b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)"
          >Excluir</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      mensagens: [],
      id: null,
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    excluir(id) {
      this.$http.delete(`/usuarios/${id}.json`).then(() => this.limpar())
      //deletar o dado com o id certo.
      .catch(() => {
        this.mensagens.push({
          texto: 'Problema para excluir!',
          tipo: 'danger'
        })
      });
      //catch = tratar erros
      
    },
    salvar() {
      const metodo = this.id ? "patch" : "post";
      /*caso o this.id esteja cetado, usar o patch,
      caso contrario, significa que vou inserir um novo
      registo, utilizando assim, um post.
      */
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then(() =>
        {
          this.limpar()
          this.mensagens.push({
            texto: 'Operação realizada com sucesso!',
            tipo: 'success'
          })
        }
      );
      /* agora o método salvar serve tanto para alterar um elemento, como
      também serve para incluir novos elementos, se tiver ou não o id cetado
      */
    },
    obterUsuarios() {
      this.$http.get("usuarios.json").then((res) => {
        //get para obter usuarios do firebase.
        this.usuarios = res.data;
        console.log(res.data);
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
