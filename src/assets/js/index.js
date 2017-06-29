import '../style/index.scss'
import $ from 'jquery'
import '../js/bootstrap.js'

//由于性能的原因，工具提示和弹出框的 data 编程接口（data api）是必须要手动初始化的。
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
})