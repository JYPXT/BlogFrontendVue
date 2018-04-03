<template>
  <div class="container">
    <ul>
      <li 
      v-for="item of list"
      :key="item.id"
      @click="DetailsEventHandler(item.id)"
      >
        <div class="item">
          <div class="img" :style="{backgroundImage: `url(${item.picture})`}"></div>
          <div class="text">
            {{item.content | parseContent}}
          </div>
          <div class="balck-slant"></div>
          <div class="white-slant"></div>
          <p class="author">{{item.title}}</p>
          <div class="meta">
            <p>{{item.user.nick}}</p>
            <p >
              <img 
              :src="item.user.avatar"
              v-if="item.user.avatar"
              alt="">
            </p>
            
          </div>
        </div>
      </li>
    </ul>
    <p-page 
    :total="total" 
    :current-page="currentPage" 
    :page-size="pageSize" 
    @current-change="currentChange"
    ></p-page>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      total: 1,
      currentPage: 1,
      pageSize: 9,
      list: []
    }
  },
  methods: {
    currentChange (value) {
      this.getList(value);
    },
    getList ( currentPage ) {
      this.axios.get('/apis/article/list', {
        params: {
          pageSize: this.pageSize,
          pageIndex: currentPage
        }
      })
      .then((response) => {
        const { data : { rows, count } } = response;
        this.list = rows;
        this.total = count;
      })
    },
    DetailsEventHandler (id) {
      this.$router.push(`/article/details/${id}`)
    }
  },
  filters: {
    parseContent (value) {
      const content = JSON.parse(value);
      return content[0]['childern'][0]['content'];
    }
  },
  created () {
    this.getList(1);
  }
}
</script>
<style lang="scss" scoped>

@keyframes fade-in {
  0% {
    transform: translateY(20px);
    opacity:0;
  }
  100% {
    transform:translateY(0);
    opacity:1;
  }
}
.container {
  width: 1000px;
  margin: 30px auto;
  ul {
    list-style-type: none;
    padding-bottom: 30px;
    &:after {
      @include clearfix;
    }
    li {
      width: 33.3333%;
      float: left;
      padding: 20px;
      .item {
        position: relative;
        width: 100%;
        overflow: hidden;
        border: 1px solid $border-color;
        background-color: $white;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .04);
        &:hover {
          cursor: pointer;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, .1);
          .img {
            transform: scale(1.1) translateZ(0);
            filter: blur(3px) translateZ(0);
          }
          .text {
            visibility: visible;
            opacity: 1;
            animation: fade-in .5s;
          }
        }
        .text {
          position: absolute;
          width: 100%;
          padding: 40px;
          top: 0;
          left: 0;
          color: $white;
          line-height: 1.7;
          visibility: hidden;
          opacity: 0;
        }
        .balck-slant {
          position: absolute;
          width: 110%;
          height: 100px;
          left: 0;
          top: 250px;
          z-index: 0;
          background-color: rgba(0, 0, 0, .5);
          transform: rotate(-10deg) translate(0, -25px);
        }
        .white-slant {
          position: absolute;
          width: 110%;
          height: 100px;
          right: 0;
          top: 250px;
          z-index: 0;
          background-color: $white;
          transform: rotate(10deg) translate(0, -27px);
        }
        .img {
          height: 250px;
          // background-image: url('~@/assets/article-bg.jpg');
          background-size: cover;
          background-position: center;
          transition: transform .5s ease, filter .5s ease;
        }
        .author {
          position: relative;
          font-size: 18px;
          line-height: 1.5;
          color: $default;
          padding: 15px 20px 0;
          height: 80px;
          word-break: break-all;
          background-color: $white;
        }
        .meta {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 20px 20px;
          background-color: $white;
          p {
            &:first-child {
              color: $default * 2;
              padding-right: 10px;
            }
            &:last-child {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid $default * 4.5;
              background-image: url('~@/assets/logos.png');
              background-repeat: no-repeat;
              background-size: 70%;
              background-position: center;
              img {
                width: 100%;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
}
</style>


