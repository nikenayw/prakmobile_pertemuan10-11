<template>
    <ion-modal :is-open="isOpen" @did-dismiss="cancel">
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ editingId ? 'Edit' : 'Add' }} Todo</ion-title>
                <ion-buttons slot="start">
                    <ion-button @click="cancel">
                        <ion-icon :icon="close"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <!-- Title Input -->
            <ion-item>
                <ion-input 
                    v-model="localTodo.title" 
                    label="Title" 
                    label-placement="floating"
                    placeholder="Enter Title"
                    :clear-input="true"
                    required
                />
            </ion-item>
            
            <!-- Description Textarea -->
            <ion-item>
                <ion-textarea 
                    v-model="localTodo.description" 
                    label="Description" 
                    label-placement="floating"
                    placeholder="Enter Description"
                    :autogrow="true" 
                    :rows="3"
                />
            </ion-item>

            <!-- Submit Button -->
            <ion-row>
                <ion-col>
                    <ion-button 
                        type="button" 
                        @click="input" 
                        shape="round" 
                        color="primary" 
                        expand="block">
                        {{ editingId ? 'Edit' : 'Add' }} Todo
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-modal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonInput, IonRow, IonCol, IonItem, IonContent, IonTextarea } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { Todo } from '@/utils/firestore';

const props = defineProps<{
    isOpen: boolean,
    editingId: string | null,
    todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'status'>
}>();

const emit = defineEmits<{
    'update:isOpen': [value: boolean],
    'update:editingId': [value: string | null],
    'submit': [item: Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'status'>]
}>();

// Membuat salinan lokal dari props.todo
const localTodo = ref<Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'status'>>({
    title: props.todo.title,
    description: props.todo.description,
});

// Menyinkronkan perubahan pada props.todo dengan localTodo
watch(() => props.todo, (newTodo) => {
    localTodo.value = { title: newTodo.title, description: newTodo.description };
}, { immediate: true });

// Fungsi cancel untuk menutup modal dan mengatur kembali nilai
const cancel = () => {
    emit('update:isOpen', false); // Tutup modal
    emit('update:editingId', null); // Reset editingId ke null
    localTodo.value = { title: '', description: '' }; // Reset form
};

// Fungsi input untuk mengirimkan data dan menutup modal
const input = () => {
    emit('submit', localTodo.value); // Kirim data ke parent
    cancel(); // Tutup modal setelah submit
};
</script>

<style scoped>
/* Sesuaikan gaya di sini */
.ion-input,
.ion-textarea {
  width: 100%;
}
</style>
