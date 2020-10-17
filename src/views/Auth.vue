<template lang="pug">
.auth
	h2.title LeadHit
	form.auth_form(@submit.prevent="submit()")
		input(type="text" v-model="siteId.value" placeholder="id сайта")
		.error(v-if="siteId.error") id сайта должен содержать 24 символа
		button.btn(type="submit") Войти
</template>

<script>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import useSiteId from "@/compositions/siteid";

export default {
  setup(props, context) {
    const router = useRouter();
    const siteId = reactive({
      value: "5f8475902b0be670555f1bb3",
      error: false,
    });

    const { fetchSiteId } = useSiteId();

    const submit = async () => {
      siteId.error = computed(() => siteId.value.length != 24);

      if (!siteId.error && (await fetchSiteId(siteId.value))) {
        router.push("/analytics");
      }
    };

    return {
      siteId,
      submit,
    };
  },
};
</script>

<style lang="sass">
.auth
	&_form
		display: flex
		flex-direction: column
		max-width: 250px
		margin: auto
		& > *
			text-align: center
			width: 100%
			margin-bottom: 10px
			box-sizing: border-box
</style>
