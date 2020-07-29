import FonlineConsultation from './fonlineconsultation';
const components = [
   FonlineConsultation
];
// 注册install方法
const install = function (Vue) {
   if (install.installted) return;
   components.map(component => Vue.component(component.name, component));
}
if (typeof window !== 'undefined' && window.Vue) {
   install(window.Vue);
}
export default {
   install,
   ...components
}