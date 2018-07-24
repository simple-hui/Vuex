// 如果你在mutations里进行异步操作，你会发现没用，并不会起任何效果，那怎么办，
// 只有通过action->mutations->states,这个流程进行操作
export default {
  getParamSync (context, Object) {
    setTimeout(() => {
      context.commit('getParam', Object)
    }, 1000)
  }
}
