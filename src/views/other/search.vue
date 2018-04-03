<template>
  <div class="container">
      <div class="search-box">
          <input type="text" placeholder="search" v-model="condition">
          <div class="button" @click="search">
              <span class="search"></span>
          </div>
      </div>
      <div class="tags">
        <p-tag
        class="label"
        @click="listEventHandler(tag)"
        v-for="tag in tags" :key="tag.id"
        :tagName="`${tag.tag} (${tag.count})`"
        ></p-tag>
      </div>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      condition: '',
      tags: []
    }
  },
  methods: {
    search () {
      this.$router.push(`/article/list/search/${this.condition}`)
    },
    getTags () {
      this.axios.get('/apis/tag/list')
      .then((response) => {
        this.tags = response.tag;
      })
    },
    listEventHandler ({ tag, id }) {
        this.$router.push(`/article/list/tag/${tag}/${id}`)
    }
  },
  created () {
      this.getTags();
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
  padding: 50px 30px;
  margin: 0px auto;
}

.search-box {
    position: relative;
    height: 50px;
    padding: 5px 60px 5px 20px;
    border-radius: 25px;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, .1);
    input {
        height: 100%;
        width: 100%;
        border:none;
        outline: none;
    }

    .button {
        position: absolute;
        height: 40px;
        width: 40px;
        top: 4px;
        right: 20px;
        cursor: pointer;
        
    }
}

.search {
    position: relative;
    top: 10px;
    left: 10px;

    &:active {
        color: #eb5055;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 15px;
        height: 15px;
        border: 2px solid currentColor;
        border-radius:  50%;
    }
    &::after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        display: block;
        transform: rotate(50deg);
        transform-origin: left top;
        width: 8px;
        height: 2px;
        background-color: currentColor;
    }
}

.tags {
    padding-top: 60px;
    .label {
        margin: 15px;
    }
}
</style>
