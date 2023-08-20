<template>
    <footer class="w-full bg-red-primary py-20">
        <Container>
            <div class="flex justify-between">
                <div class="flex flex-col gap-6 text-white">
                    <h3 class="font-bold text-lg">Institucional</h3>

                    <div class="flex flex-col gap-2">
                        <NuxtLink class="hover:text-gray-primary" to="/about">Sobre</NuxtLink>
                        <NuxtLink class="hover:text-gray-primary" to="/contact">Trabalhe Conosco</NuxtLink>
                    </div>
                </div>

                <div class="flex flex-col gap-6 text-white">
                    <h3 class="font-bold text-lg">Contatos</h3>

                    <div class="flex flex-col gap-2">
                        <a href="" class="flex gap-2 items-center hover:filter hover:brightness-90">
                            <Phone color="white" :size="15"/>
                            <span>67 9 0000-0000</span>
                        </a>

                        <a href="" class="flex gap-2 items-center hover:filter hover:brightness-90">
                            <WhatsappLogo :width="15"/>
                            <span>67 9 0000-0000</span>
                        </a>

                        <a href="" class="flex gap-2 items-center hover:filter hover:brightness-90">
                            <Instagram color="white" :size="15"/>
                            <span>67 9 0000-0000</span>
                        </a>

                        <a href="" class="flex gap-2 items-center hover:filter hover:brightness-90">
                            <Mail color="white" :size="15"/>
                            <span>contato@evidencemoveiscec.com.br</span>
                        </a>
                    </div>
                </div>



                <div class="flex flex-col gap-6 text-white">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.28228525056636!2d-55.68820376983462!3d-22.559775389253083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94626f56c4c470c1%3A0x62aeb80aad6eb22d!2sSupermercado%20Sol%20loja%2003!5e0!3m2!1sen!2sbr!4v1692550598479!5m2!1sen!2sbr" width="400" height="400" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div class="flex justify-center flex-col items-center py-32">
                <LogoWhite />
                <div class="py-6 flex flex-col items-center">
                    <p class="flex items-center gap-2 text-white">
                        <Copyright color="white" :size="15"/>
                        Todos os direitos reservados
                    </p>
                    <span class="text-white">2023 - {{ actualDate.getFullYear() }}</span>
                </div>
            </div>
        </Container>
    </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, Instagram, Copyright } from 'lucide-vue-next'

const actualDate = new Date()

</script>