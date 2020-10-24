let vue = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: "红楼梦",
            score: "人民文化出版社",
            status: '已借出'
        },{
            id: 2,
            name: "三国演义",
            score: "人民文化出版社",
            status: '未借出'
        },{
            id: 3,
            name: "水浒传",
            score: "人民文化出版社",
            status: '已借出'
        },{
            id: 4,
            name: "西游记",
            score: "人民文化出版社",
            status: '未借出'
        }],
        book: {
            id: "",
            name: "",
            score: "",
            status:""
        }
    },
    methods: {
        del(index){
            if (this.$refs.returnValue[index].innerText ==='已借出'){
                alert('书本已借出，无法进行删除操作！');
            }else {
                this.books.splice(index, 1);
            }
        },
        add(){
            this.book.status = '未借出';
            this.books.push(this.book);
            this.book = {
                id: "",
                name: "",
                score: ""
            };
        },
    }
});