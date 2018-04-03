<template>
  <div class="tag" :class="type" @click="$emit('click')">
      # {{tagName}}
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
      type: {
          type: String,
          default () {
              const random = ['primary', 'success', 'gray', 'wran', 'error']
              return random[Math.floor(Math.random()*random.length)];
          }
      },
      tagName: {
          type: String,
          default: 'null'
      }
  },
}
</script>

<style lang="scss" scoped>
    .tag {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 50px;
        cursor: pointer;
        transition: color 0.3s ease, background-color 0.3s ease;
    }

    .primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
        &:active {
            color: #fff;
            background: #3a8ee6;
            border-color: #3a8ee6;
        }
    }

    .success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
        &:active {
            background: #5daf34;
            border-color: #5daf34;
            color: #fff;
        }
    }

    .gray {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
        &:active {
            background: #82848a;
            border-color: #82848a;
            color: #fff;
        }
    }

    .wran {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }
        &:active {
            background: #cf9236;
            border-color: #cf9236;
            color: #fff;
        }
    }

    .error {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
        &:active {
            background: #dd6161;
            border-color: #dd6161;
            color: #fff;
        }
    }
</style>

