<template>
  <div class="flex gap-2">
    <div>
      <button>
        <span class="text-red-primary font-bold">Quarto</span>
      </button>
    </div>

    <div>
      <button>
        <span class="text-red-primary font-bold">Sala de Estar</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

const filters = [
  {
    name: 'Sala de estar',
    filters : [
        'Sofás',
        'Poltronas',
        'Racks',
        'Estantes',
        'Mesas de Centro',
        'Painéis',
        'Mesas de Canto',
        'Aparadores',
        'Puffs',
    ]
  },
  {
    name : 'Sala de Jantar',
    filters : [
        'Mesas de Jantar',
        'Cadeiras',
        'Bancos',
        'Buffets',
        'Bares',
        'Adegas',
        'Cristaleiras',
        'Estantes',
        'Mesas de Apoio',
        'Mesas de Canto',
    ]
  },
  {
    name : 'Quarto',
    filters : [
        'Camas',
        'Cabeceiras',
        'Guarda-Roupas',
        'Cômodas',
        'Penteadeiras',
        'Criados-Mudos',
        'Colchões',
        'Beliches',
        'Treliches',
        'Bicamas',
    ]
  },
  {
    name : 'Cozinha',
    filters : [
        'Mesas',
        'Cadeiras',
        'Bancos',
        'Bares',
        'Adegas',
        'Cristaleiras',
        'Estantes',
        'Mesas de Apoio',
        'Mesas de Canto',
    ]
  },
  {
    name : 'Escritório',
    filters : [
        'Mesas',
        'Cadeiras',
        'Bancos',
        'Bares',
        'Adegas',
        'Cristaleiras',
        'Estantes',
        'Mesas de Apoio',
        'Mesas de Canto',
    ]
  }
]
</script>