<template>
  <v-container flex>
    <v-row>
      <v-col><LanguageSelector /></v-col>
      <v-col><ThemeSelector /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import LanguageSelector from "@/components/LanguageSelector.vue";
import ThemeSelector from "@/components/ThemeSelector.vue";

export default {
  components: {
    LanguageSelector,
    ThemeSelector,
  },
};
</script>
