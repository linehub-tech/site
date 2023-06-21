<script setup>
import ButtonItem from '../components/style/ButtonItem.vue'
</script>

<template>
  <div class="min-w-screen min-h-screen flex justify-center items-center">
    <div class="w-10/12 lg:w-6/12 flex flex-col gap-8 justify-center items-center">
      <div>
        <img src="../assets/images/logo.svg" alt="linehub.tech" width="114" height="142">
      </div>
      <h2 class="text-4xl font-bold font-montserrat text-center">está em desenvolvimento!</h2>

      <h3 class="text-xl font-semibold">
        Estamos trabalhando para desenvolver a melhor solução em SVA.
      </h3>

      <p class="text-justify px-2 bg-white/75 dark:bg-slate-700/75">
        Somos uma startup que impulsiona um hub de distribuição de Serviços de Valor Agregado (SVA),
        conectando produtos, empresas e pessoas de forma inovadora.
      </p>

      <div>
        <a href="mailto:parcerias@linehub.tech">
          <ButtonItem class="w-64 flex justify-center">
            Fale com a gente
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3YsQnDMBBA0Z8sEJO0tz+eII3JACkcu3DnYRIM2iCFdcd/oFbwOSSEQJIkSerUCDyBG8nNwBd4Z48JYG8xR9SdxKJqzMeYjifzILGyMYsxlSdzAda24ZlrBoZ/Qq7t4KUPOUtUOPRR4RoOIzpR4vEYFZ7zYUQnSkzisFX5fHgBU/YISZIkkcsPwUZ+ckKpJNQAAAAASUVORK5CYII=" width="25" height="25" alt="">
          </ButtonItem>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.under {
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  text-align: left;
  letter-spacing: -0.1em;
}
</style>
