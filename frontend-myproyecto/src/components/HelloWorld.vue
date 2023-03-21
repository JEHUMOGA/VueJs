<template>
  <div>
    
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3>
        <v-expansion-panels
          v-model="show"
          :readonly="readonly"
          multiple
        >
          <v-expansion-panel 
          xs12 sm6 md4 lg3
          class="text-xs-center ma-3"
          v-for="grupo in reportes" :key = grupo.id>
            <v-expansion-panel-title>{{grupo.proyecto}}</v-expansion-panel-title>
            <v-expansion-panel-text
            v-for="alumno in grupo.alumnos" :key="alumno.nombre">
              {{alumno.nombre}} {{ alumno.apePaterno }} {{ alumno.apeMaterno }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: () => ({
      show: false,
      reportes: [{
        id: 1,
        proyecto:"RESITEC",
        empresa:"INSTITUTO TECNOLOGICO NACIONAL DE MEXICO CAMPUS CULIACAN",
        alumnos:[{
          nombre: "ELVER",
          apePaterno:"GARDIOLA",
          apeMaterno: "LOPEZ",
        },{
          nombre: "ALMA",
          apePaterno:"MORENO",
          apeMaterno: "PEREZ",
        },]
      },{
        id: 2,
        proyecto:"CLI INSTITUCIONAL",
        empresa:"INSTITUTO TECNOLOGICO NACIONAL DE MEXICO CAMPUS CULIACAN",
        alumnos:[{
          nombre: "JUAN",
          apePaterno:"MATIAS",
          apeMaterno: "GONZALEZ",
        },{
          nombre: "MARCOS",
          apePaterno:"TREVIÑO",
          apeMaterno: "CASTAÑEDA",
        },]
      },]
    }),
}
</script>
