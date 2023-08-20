<template>
    <Container class="py-40">
        <div class="grid gap-10 grid-cols-2">
            <div class="px-10 shadow">
                <nuxt-img
                src="/images/poltrona.png"
                layout="fill"
                class="w-[80%] mx-auto"
                />
            </div>


            <div class="w-full h-full py-2 flex flex-col gap-10">
                <div>
                    <h4 class="font-bold text-2xl text-red-primary leading-relaxed">Poltrona do papai</h4>
                    <span>Marca</span>
                </div>

                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quaerat blanditiis, voluptas at rerum eos reprehenderit officiis fugiat saepe nobis nihil iste quisquam similique ipsam commodi quod. Hic, totam impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maiores eum animi at voluptatibus, aliquid necessitatibus ab. Rem doloribus quod molestiae odio vel! Culpa iure tenetur sapiente praesentium ea? Exercitationem!</p>
                </div>

                <span class="text-yellow-600 font-bold">
                    Produto fora de estoque
                </span>


                <div class="flex flex-col gap-4">
                    <span class="text-4xl font-bold text-red-primary">
                        R$699,90
                    </span>

                    <button class="w-40 bg-red-primary flex justify-center items-center gap-2 py-2 rounded text-white filter hover:brightness-90">
                        <WhatsappLogo :width="20"/>
                        Comprar
                    </button>
                </div>
            </div>

        </div>

        <ProductsCardSlider :products="products" title="Produtos Relacionados"/>

    </Container>


</template>

<script setup lang="ts">
import Product from 'models/Product';

const products: Product[] = [
  {
    brand : "",
    category : "",
    cover : "",
    description : "",
    id: 1,
    name : "",
    price : 0,
    quantity : 0,
    rating : 0,
    systemId : 1,
  }
]

</script>

<style scoped>

</style>