<template>
    <div class="w-full bg-gray-primary flex justify-end mb-20 h-[900px] relative">
        <nuxt-img
            src="https://www.italinea.com.br/antigo/wp-content/uploads/2018/09/Cena-177_Home-Theater-Tradicional_Field-Branco-Pet-e-Rossp-Brilho_Variac%C2%A6%C2%BAa%C2%A6%C3%A2o-de-cena-02.jpg"
            layout="fill"
            fit="cover"
            class="h-full"
        />
        <div class="w-full h-full bg-black/80 absolute inset-0">
            <Container class="flex justify-end">
                <form class="flex flex-col w-[500px] h-[950px] bg-red-primary px-4 -mt-[25px] shadow rounded justify-center items-center text-white gap-4 py-10" @submit.prevent="submit">
                    <h3 class="text-2xl font-bold mb-4">Deseja que nossa equipe entre em contato ?</h3>
                    <q-input v-model="form.name" filled type="text" label="Nome" class="w-full" bg-color="white"/>
                    <q-input v-model="form.whatsapp" filled type="tel" label="Whatsapp" class="w-full" bg-color="white"/>
                    <q-input v-model="form.email" filled type="email" label="Email" class="w-full" bg-color="white"/>
                    <q-input
                        v-model="form.message"
                        filled
                        bg-color="white"
                        label="Digite sua mensagem"
                        class="w-full"
                    />
                    <div class="flex-1 flex flex-col w-full bg-white px-3 py-3 text-xs group rounded-t">
                        <span class="transition-all ease-linear leading-relaxed font-regular" :class="messageFocus ? 'text-blue-400' : 'text-base text-black opacity-60'">Mensagem</span>
                        <textarea name="" id="" class="flex-1 focus:outline-none text-gray-900 text-sm leading-relaxed resize-none" @focus="messageFocus = true" @blur="messageFocus = false"></textarea>
                    </div>

                    <div class="w-full flex flex-col items-start gap-4 py-4">
                        <InputCheck label="Autorizo o envio de email com promoções e eventos" :check="form.autorizeEmail" @updateCheck="updateCheck('email')"/>
                        <InputCheck label="Autorizo o envio de mensagens com promoções e eventos" :check="form.autorizeWhatsapp" @updateCheck="updateCheck('whats')"/>
                    </div>
                    <q-btn class="text-red-primary bg-white w-full py-2" label="Enviar" type="submit" />
                </form>
            </Container>
        </div>
    </div>
</template>

<script setup lang="ts">
import { z } from "zod";

const messageFocus = ref(false)

const formSchema = z.object({
    name : z.string().min(3),
    email : z.string().email(),
    whatsapp : z.string().min(9),
    message : z.string().min(10),
    autorizeEmail : z.boolean(),
    autorizeWhatsapp : z.boolean()
})

const form = reactive({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
    autorizeEmail : false,
    autorizeWhatsapp : false
})

const errors = reactive({
    name : null as string | null,
    email: null as string | null,
    whatsapp: null as string | null,
    message: null as string | null,
    autorizeEmail : null as string | null,
    autorizeWhatsapp : null as string | null
})


function updateCheck(label: 'whats' | 'email'){
    console.log(label)
    if(label === 'whats'){
        form.autorizeWhatsapp = !form.autorizeWhatsapp
    } else if (label === 'email'){
        form.autorizeEmail = !form.autorizeEmail
    }
}

function submit(){

    const validationResult = formSchema.safeParse(form)

    if (!validationResult.success) {
        errors.name = validationResult.error?.issues.find((issue) => issue.path[0] === 'name')?.message || null;
        errors.email = validationResult.error?.issues.find((issue) => issue.path[0] === 'email')?.message || null;
        errors.whatsapp = validationResult.error?.issues.find((issue) => issue.path[0] === 'whatsapp')?.message || null;
        errors.message = validationResult.error?.issues.find((issue) => issue.path[0] === 'message')?.message || null;
        errors.autorizeEmail = validationResult.error?.issues.find((issue) => issue.path[0] === 'autorizeEmail')?.message || null;
        errors.autorizeWhatsapp = validationResult.error?.issues.find((issue) => issue.path[0] === 'autorizeWhatsapp')?.message || null;
    } else {
        console.log(formSchema)
        // resetForm()
    }
}

function resetForm(){
    form.name = ''
    form.email = ''
    form.whatsapp = ''
    form.message = ''
    form.autorizeEmail = false
    form.autorizeWhatsapp = false

    errors.name = null
    errors.email = null
    errors.whatsapp = null
    errors.message = null
    errors.autorizeEmail = null
    errors.autorizeWhatsapp = null
}

</script>