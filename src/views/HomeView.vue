<script setup>
import ButtonItem from '../components/style/ButtonItem.vue'
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-10/12 lg:w-6/12 flex flex-col gap-8 justify-center items-center">
      <div class="under font-bold font-montserrat text-center text-5xl bg-main-gradient leading-10">
        line<br />hub.<br />tech
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
        <ButtonItem class="w-64">Fale com a gente</ButtonItem>
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
