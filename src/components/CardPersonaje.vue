<template>

  <div class="card" style="width: 18rem;">
    <img class="card-img-top"  :src="personaje.image" :alt="personaje.name">
    <div class="card-body">
      <h5 class="card-title">{{ personaje.name }}</h5>
      <p class="card-text">
        {{personaje.status}} - {{personaje.species}}
        <br><strong>Origen:</strong> {{ personaje.origin.name }}
        <br><strong>Ubicación:</strong> {{ personaje.location.name }}
      </p>
      <a href="#" class="btn btn-primary">Ver Detalles</a>
    </div>
  </div>
</template>

<script>
export default {
    props: [ 'personaje' ]
}
</script>

<style>

</style>