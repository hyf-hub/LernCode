U.Boom.I.ShowRecommended_Work = function () {
    $("#U_Boom_home_One")[0].style.display = "none";
    $("#U_Boom_home_Two")[0].style.display = "none";
    $("#U_Boom_home_Three")[0].style.display = "none";
    $("#U_Boom_home_Four")[0].style.display = "none";
    $("#U_Boom_home_Six")[0].style.display = "none";
    $("#U_Boom_home_Seven")[0].style.display = "none";
    //  $("#U_Boom_home")[0].style.display = "none";
    $(".U_Boom_home_Tuijian")[0].style.display = "block";
    var Father = $(".U_Boom_home_Tuijian")[0]
    $$('div', { className: "U_Boom_home_Tuijian_Text", innerText: "首页 > 办公建站 > 全部推荐" }, Father);
    var ccc = $$('div', { className: "U_Boom_home_Tuijian_data" }, Father);
    $$('div', { className: "U_Boom_home_Tuijian_data1" }, ccc);
    $$('div', { className: "U_Boom_home_Tuijian_data2 " }, ccc);
    $$('div', { className: "U_Boom_home_Tuijian_data3 " }, ccc);
    var count = 1;      //计算打印第c行内容
    var Site_data = [];     //存放文件指向
    U.A.Request('http://cd.1473.cn/php', (['db.1473.cn', 'UseStudio_DNS', 'GetDiskFile', 5, 12]), function (r) {
        var data = r.value;
        for (var i = 1; i <= data.length; i++) {/*获取数据并动态创建元素*/
            var parentBox = $('.U_Boom_home_Tuijian_data' + count + "")[0];
            var _TwoBox = $$('div', { className: 'U_Boom_home_Two_class' }, parentBox);
            $$('div', { className: "U_Boom_home_Two_class_Tittle", innerText: data[i-1].FileName }, _TwoBox);
            var _Main = $$('div', { className: 'U_Boom_home_Two_class_Main' }, _TwoBox);
            /*获取当前文件夹下的数据*/
            var _d = U.A.Request(US.CD, [US.DB, 'UseStudio_Disk', 'GetAllFilesRecursionByDirectoryId', data[i].FileId]).value;
            //判断_d[1]下有没有内容,无则跳过
            //_d[0]下存着当前数据文件夹的文件名和文件id,_d[1]下才存着文件夹下的数据
            if (_d[1]) {
                /*打印当前文件夹下的前七条数据,（测试使用）*/
                var pduan = 0;
                if (_d[1].length >= 7) { pduan = 7; }
                else if (_d[1]) {
                    pduan = _d[1].length
                }
                //确定文件内数据的条数后打印输出
                for (var j = 0; j < pduan; j++) {
                    var _Line = $$('div', { className: 'U_Boom_home_Two_class_Line' }, _Main);
                    var div = $$('div', { className: 'U_Boom_home_Two_class_image' }, _Line);
                    $$('div', { className: "U_Boom_home_Two_class_text", innerText: _d[1][j].UserFilesName }, _Line);
                }
                if (i % 4 == 0)
                    count = count + 1;
            }
        if (_d[0].length != 0)
            { Site_data[i] = _d[0][0].UserDirectoryID; }
            else {
                Site_data[i] = r.value[i].FileId;
            }
        }
            U.Boom.I.ToWebSite(Site_data);
    })
}