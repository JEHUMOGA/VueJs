<template>
	<v-container fluid>
		<v-row no-gutters>
			<v-col cols="3">
				<v-card class="profile bg-light-blue-darken-4">
					<v-card-item>
						<v-avatar class="mb-4" color="grey-darken-1" size="200">
							<v-img src="https://randomuser.me/api/portraits/men/78.jpg" />
						</v-avatar>
						<v-card-title>Jesús Valenzuela</v-card-title>
						<v-card-subtitle>17170436@itculiacan.edu.mx</v-card-subtitle>
					</v-card-item>
					<v-divider />
					<v-card-item
						v-for="[tag, dato] in datos"
						:key="tag"
						class="bg-light-blue-darken-4"
					>
						<v-card-title class="text-h9 text-md-h9 text-lg-h9">{{
							tag
						}}</v-card-title>
						<v-card-subtitle>
							{{ dato }}
						</v-card-subtitle>
						<v-divider />
					</v-card-item>
				</v-card>
			</v-col>
			<v-col> <h2>Seccion 2</h2></v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		datos: [
			["Teléfono", "6671564845"],
			["Dirección", "Calle asdad #1245"],
			["Carrera", "Ing. Sistemas"],
		],
	}),
};
</script>

<style scoped>
.profile {
	margin: 0px;
}
</style>