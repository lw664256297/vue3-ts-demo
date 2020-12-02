import { defineComponent, ref, onMounted, onUpdated, onUnmounted } from "vue";

export default defineComponent({
  name: "hello world",
  props: {},
  setup(props: any) {
    const count = ref(0);
    const increase = (): void => {
      count.value++;
    };
    function test(x: number): string {
      return props.toString();
    }
    test(1);
    // test('number');
    // 生命周期
    onMounted(() => {
      console.log("mounted vue3 typescript");
    });
    onUpdated(() => {
      console.log("updated vue3 typescript");
    });
    onUnmounted(() => {
      console.log("onUnmounted vue3 typescript");
    });
    // 暴露给模板
    return {
      count,
      increase,
    };
  },
});
