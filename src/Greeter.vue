<template>
    <button class="greeter-button" @click="sayMessage">
        Say Hello
    </button>
</template>

<script setup>
const props = defineProps({
    message: {
        type: String,
        required: true,
    },
})

const sayMessage = () => {
    console.log(props.message)
    alert(props.message)
}
</script>

<style scoped>
.greeter-button {
    padding: 10px 20px;
    background-color: #f5f5f5;
    color: #333;
    font-size: 14px;
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
}

.greeter-button:hover {
    background-color: #e6e6e6;
    border-color: #aaa;
    transform: translateY(-1px);
}
</style>