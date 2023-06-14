<script setup>
import ButtonItem from "../components/style/ButtonItem.vue";
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-10/12 lg:w-6/12 flex flex-col gap-8 justify-center items-center">
      <h1 class="text-4xl font-bold font-montserrat text-center">
        <span class="under text-5xl bg-main-gradient">linehub.tech</span>
        <br/>
        está em desenvolvimento!
      </h1>

      <h2 class="text-xl font-semibold">
        Estamos trabalhando para desenvolver a melhor solução em SVA.
      </h2>

      <p>
        Somos uma startup que impulsiona um hub de distribuição
        de Serviços de Valor Agregado (SVA), conectando produtos,
        empresas e pessoas de forma inovadora.
      </p>

      <div>
        <ButtonItem class="w-64">Fale com a gente</ButtonItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.under {
  position: relative;
  display: inline-grid;
  -webkit-text-fill-color:transparent;
  background-clip: text;
}

.under::after {
  content: '';
  width: 100%;
  height: 2px;
  @apply bg-main-gradient;
}
</style>