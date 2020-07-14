<template>

    <mavon-editor v-model="context" :toolbars="toolbars" @save="saveMavon"/>


</template>

<script>
    // import mavonEditor from 'mavon-editor'
    export default {
        name: "DDDTheory",
        components: {
            // mavonEditor
        },
        data() {
            return {
                context: '你好',//输入的数据
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    help: true, // 帮助
                    code: true, // code
                    subfield: true, // 是否需要分栏
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    /* 1.3.5 */
                    undo: true, // 上一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true // 导航目录
                },

            }
        },
        methods: {
            //监听markdown变化
            //上传图片接口pos 表示第几个图片
            handleEditorImgAdd(pos, $file) {
                var formdata = new FormData();
                formdata.append('file', $file);
                this.$axios
                    .post("http://localhost:8000/blogs/image/upload/", formdata)
                    .then(res => {
                        var url = res.data.data;
                        this.$refs.md.$img2Url(pos, url);  //这里就是引用ref = md 然后调用$img2Url方法即可替换地址
                    });
            },
            handleEditorImgDel() {
                console.log('handleEditorImgDel');    //我这里没做什么操作，后续我要写上接口，从七牛云CDN删除相应的图片
            },
            saveMavon(){
                alert("save")
            }
        }
    }
</script>

<style scoped>

</style>