import Vue from 'vue'
import Pagination from 'src/components/Pagination'

describe('Pagination.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><pagination :total-item="100"></pagination></div>',
      components: { Pagination }
    }).$mount()
    expect(vm.$el.querySelector('.pagination-info').textContent).to.contain('数据')
  })
})
