export default {
	name: 'alumno',
	component: () => import(/* webpackChunkName: "AlumnoLayout" */ '../layouts/AlumnoLayout'),
	children: [
		{
			path: '',
			name: 'inicio-alumno',
			component: () => import(/* webpackChunkName: "inicio" */ '../views/InicioAlumno'),
		},
		{
			path: '/form',
			name: 'form-alumno',
			component: () => import(/* webpackChunkName: "form" */ '../views/FormAlumno'),
		},
	],
};