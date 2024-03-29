import { defineComponent, getCurrentInstance, ref, computed, h } from 'vue';
import { mapState } from 'vuex';

const styles = {
  fontSize: '14px',
  color: '#ff5658'
};
const box = defineComponent({
  data() {
    return {
      value: []
    };
  },
  created() {
    this.$store.dispatch('common/getUserInfo', '半导体');
  },
  computed: {
    ...mapState('common', ['userInfo'])
  },
  setup() {
    const { ctx }: any = getCurrentInstance();
    ctx.$store.dispatch('common/getUserInfo', '半导体');
    const industryList: any = computed(() => {
      return ctx.$store.state.common.userInfo;
    });
    console.log(industryList.value, 'ctx');
    const elements: any = [];
    const nodes = industryList.value.nodes;
    for (const i in nodes) {
      elements.push(<a-select-option>{nodes[i].name}</a-select-option>);
    }
    return () => (
      <div>
        <a-select
          v-model={ctx.value}
          mode="tags"
          style="width: 100%"
          placeholder="Tags Mode">
          {elements}
        </a-select>
      </div>
    );
  }
  // setup返回的dom结构优先级比render函数高
  // render() {
  //   return h(
  //     'a-select',
  //     this.userInfo.nodes.map(node => {
  //       return h('a-button', { type: 'primary' }, node.name);
  //     })
  //   );
  // }
});
export default box;
