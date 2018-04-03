<template>
  <div class="container">
    <div 
    class="category"
    v-for="(item, index) in items"
    :key="index"
    >
      <p class="title">
        <span>#</span>
        {{item.title}}
      </p>
      <ul class="list">
        <li 
        class="item"
        v-for="list in item.list"
        :key="list.id"
        >
          <div class="item-body" @click="DetailsEventHandler(list.id)">
            <p class="item-title">{{list.title}}</p>
            <p class="item-date">{{list.created_at | toDate}}</p>
          </div>
        </li>
      </ul>
      <ul class="list" v-if="empty">
        <li class="item">没有找到内容,请换别的关键字搜索</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [],
      empty: false
    }
  },
  methods: {
    // 弄完再做分页样式
    articleArchive () {
      this.axios.get('/apis/article/articleArchive', {
        params: {
          pageSize: 50,
          pageIndex: 1
        }
      })
      .then((response) => {
        const { data , date } = response;
        let count = 0, // parseInt(pageIndex-1, 10)*pageSize;
            items = [];
        date.forEach(o => {
          items.push({
            title: this.toDateString(o.month),
            list: data.slice(count, count+o.count)
          })
          count += o.count;
        });
        this.items = items;
      })
    },
    getArticleListByTag (title, id) {
      this.axios.get('/apis/article/getArticleListByTag', {
        params: { id }
      })
      .then((response) => {
        const { data } = response;
        this.items.push({
          title: `Tag : ${title}`,
          list: data
        })
        if (data.length === 0) {
          this.empty = true;
        }
      })
    },
    searchArticle (condition) {
      this.axios.get('/apis/article/searchArticle', {
        params: { condition: encodeURIComponent(condition) }
      })
      .then((response) => {
        const { data } = response;
        this.items.push({
          title: `Search : ${condition}`,
          list: data
        })
        if (data.length === 0) {
          this.empty = true;
        }
      })
    },
    toDateString (value) {
      let date = new Date(`${value}/01`).toDateString().split(' ');
      return `${date[1]} ${date[3]}`
    },
    DetailsEventHandler (id) {
      this.$router.push(`/article/details/${id}`)
    }
  },
  filters: {
    toDate (value) {
      const date = new Date(value);
      return date.toDateString();
    }
  },
  created () {
    const { type} = this.$route.params;
    if (type === 'tag') {
      const { condition, id } =  this.$route.params;
      this.getArticleListByTag(condition, id)
    } else if (type === 'search'){
      const { condition } =  this.$route.params;
      this.searchArticle(condition);
    } else {
      this.articleArchive();
    }
  }
}


</script>
<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 50px auto;
  .category {
    padding-top: 30px;
    .title {
      line-height: 1;
      color: $default * 2;
      padding-bottom: 10px;
      span {
        color: $active;
        padding-right: 10px;
      }
    }
    .list {
      list-style-type: none;
      &:after {
        @include clearfix;
      }
      .item {
        float: left;
        width: 33.33333%;
        padding: 20px;
        .item-body {
          background: $white;
          padding: 25px;
          text-align: left;
          box-shadow: 0 1px 4px rgba(0,0,0,.04);
          transition: transform .3s ease;
          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .item-title {
            margin-bottom: 15px;
          }
          .item-date {
            color: $default * 2.5;
          }
        }
      }
    }
  }
}
</style>
