<template>
    <Container>
        <div class="w-full grid gap-8 grid-cols-4 -mt-[137.5px] bg-white px-2 py-2 shadow">
            <CategoryCardSearch v-for="category in categories" :key="category.text" :category="category"/>
        </div>
    </Container>
</template>

<script setup lang="ts">

interface category {
    text : string,
    cover : string
}

const categories: category[] = [
    {cover : "/images/poltrona.png", text: "Sala de estar"},
    {cover : "/images/poltrona.png", text: "Quarto"},
    {cover : "/images/poltrona.png", text: "Cozinha"},
    {cover : "/images/poltrona.png", text: "Colchões"},
]

</script>