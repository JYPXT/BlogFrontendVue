<template>
  <div class="page">
    <el-pagination @current-change="currentChange" :page-size="innerPageSize" :current-page="currentPage" :total="innerTotal" layout="prev, pager, next"></el-pagination>
  </div>
</template>
<script>
// 小弟技术不行，只能用别人的分页
import ElPagination from 'element-pagination'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/pagination.css'

export default {
  name: 'Page',
  components: {
    ElPagination
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 9
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    innerTotal () {
      return this.total
    },
    innerPageSize () {
      return this.pageSize
    },
    innerCurrentPage () {
      return this.currentPage
    }
  },
  methods: {
    currentChange (value) {
      this.$emit('current-change', value)
    }
  }
}
</script>
<style lang="scss">
.page {
  text-align: center;
  .el-pagination {
    color: $default * 2;
    .btn-prev, .btn-next {
      background: none;
      &:hover {
        color: $active;
      }
    }
    .el-pager {
      li {
        background: none;
        font-weight: 100;
        font-size: 14px;
        padding: 0 20px;
        &:hover {
          color: $active;
        }
      }
      .active {
        color: $active;
      }
    }
  }
}
</style>
