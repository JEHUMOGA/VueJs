<template>
	<navbar>
		<v-list nav density="compact" class="no-copy-text">
			<v-list-item
				:class="{ 'bg-grey-lighten-2': viewValue === 1 }"
				title="Inicio"
				prepend-icon="mdi-view-dashboard"
				@click="viewValue = 1"
			></v-list-item>
			<v-list-item
				:class="{ 'bg-grey-lighten-2': viewValue === 2 }"
				title="Nose"
				prepend-icon="mdi-equal-box"
				@click="viewValue = 2"
			></v-list-item>
		</v-list>
	</navbar>

	<router-view />
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../../shared/components/Navbar";
export default {
	components: { Navbar },
	setup() {
		const router = useRouter();
		const viewValue = ref(1);
		const goRoute = (value) => {
			switch (value) {
				case 1:
					router.push({ name: "inicio-alumno" });
					break;
				case 2:
					router.push({ name: "form-alumno" });
			}
		};
		watch(
			() => viewValue.value,
			() => goRoute(viewValue.value)
		)
		return {
			viewValue,
		};
	},
};
</script>