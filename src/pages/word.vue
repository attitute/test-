<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="exportWord">导出word</button>
  </div>
</template><script>
import JSZipUtils from 'jszip-utils'
// import JSZip from 'jszip'
import JSZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
export default {
  name: 'About',
  data() {
    return {
      baseInfo: {
        name: '测试试卷',
        timeLength: '120',
        unitName: '测试单位',
        departmentName: '测试部门',
        startDatetime: '2020-02-11 09:00',
        endDatetime: '2020-02-11 11:00',
      },
      types: {
        a: 1,
        b: 1,
        e: 2,
        f: 1,
        h: 6,
      },
      question: [
        {
          index: 1,
          type: '选择题',
          content: '内容',
          answerRight: 'A',
          questionOptions: [
            {
              questionId: 'A',
              content: 'A内容',
            },
            {
              questionId: 'B',
              content: 'B内容',
            },
          ],
        },
        {
          index: 2,
          type: '填空题',
          content: '内容',
          answerRight: '答案',
        },
      ],
    }
  },
  methods: {
    exportWord() {
      const _this = this
      JSZipUtils.getBinaryContent('test.docx', function(error, content) {
        // 抛出异常
        if (error) {
          throw error
        }
        // 创建一个JSZip实例，内容为模板的内容
        let zip = new JSZip(content)
        // 创建并加载docxtemplater实例对象
        let doc = new Docxtemplater().loadZip(zip)
        // 设置模板变量的值
        doc.setData({
          ..._this.baseInfo,
          ..._this.types,
          question: _this.question,
        })
        try {
          // 用模板变量的值替换所有模板变量
          doc.render()
        } catch (error) {
          // 抛出异常
          // let e = {
          //   message: error.message,
          //   name: error.name,
          //   stack: error.stack,
          //   properties: error.properties,
          // }
          this.$message.error('导出报表失败')
          throw error
        }

        // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
        let out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        })
        // 将目标文件对象保存为目标类型的文件，并命名
        saveAs(out, '试卷.docx')
      })
    },
  },
}
</script>