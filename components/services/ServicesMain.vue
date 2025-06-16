<template>
    <div class="services-main-container flex flex-col gap-8">
        <UiService title="Our Advices" description="What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there." />

        <UiService title="Click and Collect" description="Adapted and contactless. Free from € 200 of purchases in stores offering the service." />

        <UiService title="Conception Service" description="Personalized service with an expert advisor for your interior and exterior decoration or layout projects. " />

        <UiService title="Installation Service" description="Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner." />
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.services-main-container {
    
    @include desktop {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
        row-gap: 1.5rem;
    }
}
</style>