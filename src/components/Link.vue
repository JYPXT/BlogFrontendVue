<template>
  <div class="container">
    <div class="limit-width">

      <div class="copyright">
        <h2>Artilce&nbsp;Life</h2>
        <p>
          <!-- I work with Html and Css<br/> -->
          Theme is Pinghsu by Chakhsu<br/>
          <!-- Powered by PXT<br/> -->
          ©&nbsp;2018&nbsp;Article&nbsp;Life
        </p>
      </div>

      <div class="posts">
        <h2>RECENT&nbsp;POSTS</h2>
        <ul>
          <li 
          v-for="item of postList" 
          :key="item.id"
          @click="DetailsEventHandler(item.id)"
          >{{item.title}}</li>
        </ul>
      </div>

      <div class="comments">
        <h2>RECENT&nbsp;COMMENTS</h2>
        <ul>
          <li v-for="item of commentList" :key="item.name">
            {{item.comment}}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
const commentList = [
  {
    author: '',
    comment: 'Temporarily no comment module'
  },
]
export default {
  name: 'Link',
  data () {
    return {
      postList: [],
      commentList: commentList
    }
  },
  methods: {
    getList () {
      this.axios.get('/apis/article/list', {
        params: {
          pageSize: 5,
          pageIndex: 1
        }
      })
      .then((response) => {
        const { data : { rows, count } } = response;
        this.postList = rows;
      })
    },
    DetailsEventHandler (id) {
      this.$router.push(`/article/details/${id}`)
    }
  },
  created () {
    this.getList();
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: $white;
  display: flex;
  justify-content: center;
  .limit-width {
    width: 1000px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    h2 {
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      margin-bottom: 15px;
      color: $default * 2;
    }
    .copyright {
      padding: 0 20px;
      p {
        font-size: 13px;
        color: $default * 2.5;
        line-height: 1.7;
      }
    }
    .posts, .comments {
      padding: 0 20px;
      width: 300px;
      overflow: hidden;
      ul {
        list-style-type: none;
        li {
          line-height: 1;
          padding: 6px 0;
          font-size: 13px;
          color: $default * 2.5;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            cursor: pointer;
            color: $active;;
          }
        }
      }
    }
  }
}
</style>